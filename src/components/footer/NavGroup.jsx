const NavGroup = ( {name, urls} ) => {
  return (
    <div className="navgroup">
      <h4 className="nav-group-name">{name}</h4>
        <ul>
          {urls.map((link, index) => {
            return (
              <li className="nav-link-name" key={index}><a href={link.href} target="_blank">{link.text}</a></li>
          )})}
        </ul>
    </div>
  );
}

export default NavGroup;
