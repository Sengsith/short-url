import logo from '/src/images/logo_white.svg';
import facebook from '/src/images/icon-facebook.svg';
import twitter from '/src/images/icon-twitter.svg';
import pinterest from '/src/images/icon-pinterest.svg';
import instagram from '/src/images/icon-instagram.svg';

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
    url: {link: "#", icon: facebook}
  },
  {
    name: "twitter",
    url: {link: "#", icon: twitter}
  },
  {
    name: "pinterest",
    url: {link: "#", icon: pinterest}
  },
  {
    name: "instagram",
    url: {link: "#", icon: instagram}
  },
]

const Footer = () => {
  return(
    <footer className="footer">
      <div className="footer-container container">
      <img src={logo} alt="shortly" />
        <nav>
          <ul className="footer-ul">
            <li className="navgroups">
              {NAVGROUP.map((group) => {
                return (
                  <NavGroup
                    key={group.name}
                    name={group.name}
                    urls={group.urls}/>
              )})}
            </li>
            <li className="socials-container">
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
