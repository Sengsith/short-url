const FeatureCard = ({ feature, description, icon, alt }) => {

  return(
    <div className="card-content container">
      <img className="card-img" src={icon} alt={alt} />
      <h3>{feature}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;
