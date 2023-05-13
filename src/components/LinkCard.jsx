import React, { useId } from 'react'

const LinkCard = ({ link, shortLink }) => {
  const copyBtnPrefix = "copy-btn";
  const copyBtnId = useId();
  const shortenedLinkPrefix = "shortened-link";
  const shortenedLinkId = useId();

  const copyButtonClicked = () => {
    // Copy shortLink to clipboard
    console.log
    navigator.clipboard.writeText(shortLink)
      .then(() => {
        const copyBtn = document.getElementById(`${copyBtnPrefix}${copyBtnId}`);
        copyBtn.innerText = "Copied!";
        console.log(copyBtn);
        // $clr-priamry-violet
        copyBtn.style.backgroundColor = `hsl(257, 27%, 26%)`;
      });
  }

  return (
    <div className="link-card container">
      <div className="original-link">{link}</div>
      <hr></hr>
      <div className="shortened-link" id={shortenedLinkPrefix + shortenedLinkId}>{shortLink}</div>
      <button className="copy-btn" id={copyBtnPrefix + copyBtnId} onClick={copyButtonClicked}>Copy</button>
    </div>
  )
}

export default LinkCard