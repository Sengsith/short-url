import React, { useState } from 'react';

import FeatureCard from './FeatureCard';
import Shorten from '../Shorten';
import LinkCard from '../LinkCard';


import recognition from '../../images/icon-brand-recognition.svg';
import records from '../../images/icon-detailed-records.svg';

import customizable from '../../images/icon-fully-customizable.svg';

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
      {shortenedLinks.map((item) => {
        return (
          <LinkCard 
            key={item.shortLink}
            link={item.link} 
            shortLink={item.shortLink}/>
        )
      })}
      {shortenedLinks.length !== 0 }
      <div className="container">
        <h2>Advanced Statistics</h2>
        <p className="statistics-description">Track how your links are performing across the web with our advanced statistics dashboard.</p>
        {CARDS.map((card, index) => {
          return (
            <React.Fragment key={index}>
              <FeatureCard
                key={card.feature}
                icon={card.icon}
                feature={card.feature}
                description={card.description}/>
              {index !== CARDS.length - 1 && <div className="blue-bar"></div>}
            </React.Fragment>
          )
        })}
      </div>
    </section>
  );
}

export default Statistics;
