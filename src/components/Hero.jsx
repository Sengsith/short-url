import illustration from '/public/images/illustration-working.svg';

const Hero = () => {
  return(
    <div className='hero container'>
      <img src={illustration} alt="person working at desk" className='hero__img'/>
      <div className='hero__content'>
        <h1>More than just shorter links</h1>
        <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <button className="get-started-btn">Get Started</button>
      </div>
      </div>
  );
}

export default Hero;
