import React, { useState, useRef, useEffect } from 'react';

const Shorten = ({ shortenedLinks, setShortenedLinks }) => {
  const [isInputInvalid, setIsInputInvalid] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // Run everytime input loses focus
  const handleBlur = () => {
    if (!inputValue) {
      setIsInputInvalid(true);
    } else if (!inputValue.endsWith('.com')) {
      setIsInputInvalid(true);
    } else {
      setIsInputInvalid(false);
    }
  }

  // Validate whether user has inputted a link into the input
  useEffect(() => {
    // Reference to our input element
    const inputElement = inputRef.current;

    inputElement.addEventListener("blur", handleBlur);

    // Remove listener to prevent calling in future to save performance if we accidentally end up with a lot
    return () => {
      inputElement.removeEventListener("blur", handleBlur);
    }
  }, [inputValue])

  const submitForm = (e) => {
    e.preventDefault();
    if (!inputRef.current.value.trim()) {
      handleBlur();
      return;
    };
    // Keep reference to link provided by user
    const inputValue = inputRef.current.value;

    // Use API to shorten a given link
    shortenURL(inputValue);

    // Empty out inputRef and inputValue
    inputRef.current.value = "";
    setInputValue(inputRef.current.value);
  }

  // API call to shrt code using async await
  const shortenURL = async (url) => {
    // Check if the url is empty
    if (!url || !url.trim()) return;
    // Check if url doesn't end with .com
    if (!url.endsWith('.com')) return;

    const apiURL = `https://api.shrtco.de/v2/shorten?url=${url}`;
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      const shortUrlResult = data.result.full_short_link;

      // Check if shortUrlResult is undefined
      if (shortUrlResult === "undefined") return;
      // Create new object and append to passed in prop to send back to parent so we can render out the link cards
      const newItem = {link: inputValue, shortLink: shortUrlResult};
      setShortenedLinks([...shortenedLinks, newItem]);  

      return shortUrlResult;
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
        {isInputInvalid && <div className="error-msg">Please add a link</div>}
        <button className="shorten-btn">Shorten it!</button>
      </form>
    </div>
  );
}

export default Shorten;
