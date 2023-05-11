import logo from '../../images/logo_white.svg';

import NavGroup from './NavGroup';
import Social from './Social';

const NAVGROUP = [
  {
    name: "Features",
    urls: [
      { text: "Link Shortening", href: "#" },
      { text: "Branded Links", href: "#" },
      { text: "Analytics", href: "#" }
    ]
  },
  {
    name: "Resources",
    urls: [
      { text: "Blog", href: "#" },
      { text: "Developers", href: "#" },
      { text: "Support", href: "#" }
    ]
  },
  {
    name: "Company",
    urls: [
      { text: "About", href: "#" },
      { text: "Our Team", href: "#" },
      { text: "Careers", href: "#" },
      { text: "Contact", href: "#" }
    ]
  }
];

const SOCIALS = [
  {
    name: "facebook",
    url: {link: "#", icon: 'src/images/icon-facebook.svg'}
  },
  {
    name: "twitter",
    url: {link: "#", icon: 'src/images/icon-twitter.svg'}
  },
  {
    name: "pinterest",
    url: {link: "#", icon: 'src/images/icon-pinterest.svg'}
  },
  {
    name: "instagram",
    url: {link: "#", icon: 'src/images/icon-instagram.svg'}
  },
]

const Footer = () => {
  return(
    <footer className="footer">
      <div className="container">
      <img src={logo} alt="shortly" />
        <nav>
          <ul>
            <li>
              {NAVGROUP.map((group) => {
                return (
                  <NavGroup
                    key={group.name}
                    name={group.name}
                    urls={group.urls}/>
              )})}
            </li>
            <li>
              <ul className="socials">
                {SOCIALS.map((social) => {
                  return (
                    <Social
                      key={social.name}
                      name={social.name}
                      url={social.url}/>
                  )
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
