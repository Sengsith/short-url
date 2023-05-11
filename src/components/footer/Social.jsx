const Social = ( {name, url} ) => {
  return (
    <li className="social-item">
      <a href={url.link} target="_blank"><img src={url.icon} alt={name}></img></a>
    </li>
  )
}

export default Social;