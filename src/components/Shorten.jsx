import React, { useState, useRef, useEffect } from 'react';

const Shorten = ({ shortenedLinks, setShortenedLinks }) => {
  const [shortLink, setShortLink] = useState("");
  const [isInputInvalid, setIsInputInvald] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // Validate whether user has inputted a link into the input
  useEffect(() => {
    // Reference to our input element
    const inputElement = inputRef.current;

    // Run everytime input loses focus
    const handleBlur = () => {
      if (!inputValue) {
        setIsInputInvald(true);
      } else {
        setIsInputInvald(false);
      }
    }

    inputElement.addEventListener("blur", handleBlur);

    // Remove listener to prevent calling in future to save performance if we accidentally end up with a lot
    return () => {
      inputElement.removeEventListener("blur", handleBlur);
    }
  }, [inputValue])

  const submitForm = (e) => {
    e.preventDefault();

    // Keep reference to link provided by user
    const inputValue = inputRef.current.value;

    // Store returned short link data from API and set to state
    const tempShortLink = shortenURL(inputValue);
    setShortLink(tempShortLink);

    // Create new object and append to passed in prop to send back to parent so we can render out the link cards
    const newItem = {link: inputValue, shortLink: shortLink}
    setShortenedLinks([...shortenedLinks, newItem]);
  }

  // API call to shrt code using async await
  const shortenURL = async (url) => {
    const apiURL = `https://api.shrtco.de/v2/shorten?url=${url}`;
    
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      return data.result.short_link;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return(
    <div className="shorten container">
        <form className="shorten-form" onSubmit={submitForm}>
          <input 
            ref={inputRef} 
            className={"shorten-input " + (isInputInvalid ? "error" : "")} 
            type="text" 
            placeholder="Shorten a link here..." 
            onChange={(e) => {setInputValue(e.target.value)}}/>
          {isInputInvalid && <div class="error-msg">Please add a link</div>}
          <button className="shorten-btn">Shorten it!</button>
        </form>
        {shortLink && <p>{shortLink}</p>}
    </div>
  );
}

export default Shorten;
