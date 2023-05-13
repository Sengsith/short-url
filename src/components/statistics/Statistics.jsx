import React, { useState } from 'react';

import FeatureCard from './FeatureCard';
import Shorten from '../Shorten';
import LinkCard from '../LinkCard';


import recognition from '/public/images/icon-brand-recognition.svg';
import records from '/public/images/icon-detailed-records.svg';

import customizable from '/public/images/icon-fully-customizable.svg';

const CARDS = [{
  feature: "Brand Recognition",
  description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  icon: recognition,
  alt: "chart"
  },
  {
    feature: "Detailed Records",
    description: "Gain insights into whi is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    icon: records,
    alt: "magnifying glass"
  },
  {
    feature: "Fully Customizable",
    description: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    icon: customizable,
    alt: "multiple tools"
  }];

const Statistics = () => {
  const [shortenedLinks, setShortenedLinks] = useState([]);

  return(
    <section className="statistics">
      <Shorten shortenedLinks={shortenedLinks} setShortenedLinks={setShortenedLinks}/>
      {shortenedLinks.map((item, index) => {
        return (
          <LinkCard 
            key={index}
            link={item.link} 
            shortLink={item.shortLink}/>
        )
      })}
      <div className="container">
        <h2>Advanced Statistics</h2>
        <p className="statistics-description">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        <ul className="feature-cards">
          {CARDS.map((card, index) => {
            return (
              <React.Fragment key={card.feature}>
              <li key={index} className="card">
                <FeatureCard
                  key={card.feature}
                  icon={card.icon}
                  feature={card.feature}
                  description={card.description}/>
              </li>
                {index !== CARDS.length - 1 && <div className="blue-bar"></div>}
              </React.Fragment>
            )
          })}
        </ul>
      </div>
    </section>
  );
}

export default Statistics;
