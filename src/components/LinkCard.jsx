import React from 'react'

const LinkCard = ({ link, shortLink }) => {
  const copyButtonClicked = () => {
    // Copy shortLink to clipboard
    navigator.clipboard.writeText(shortLink)
      .then(() => {
        const copyBtn = document.querySelector('.copy-btn');
        copyBtn.innerText = "Copied!";
        // $clr-priamry-violet
        copyBtn.style.backgroundColor = `hsl(257, 27%, 26%)`;
      });
  }

  return (
    <div className="link-card container">
      <div className="original-link">{link}</div>
      <hr></hr>
      <div className="shortened-link">{shortLink}</div>
      <button className="copy-btn" onClick={copyButtonClicked}>Copy</button>
    </div>
  )
}

export default LinkCard