const FeatureCard = ({ feature, description, icon, alt }) => {

  return(
    <div className="card">
      <div className="card-content container">
        <img className="card-img" src={icon} alt={alt} />
        <h3>{feature}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
