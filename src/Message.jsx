import PropTypes from "prop-types";

function Message({ plan, price, features, buttonText = "BUTTON" }) {
    return (
        <div className="card">
            <h5 className="my-0 fw-normal">{plan}</h5>
            <h2>${price}/month</h2>
            <ul>
                {features.map((feature, index) => (
                    <li key={index} style={{ textDecoration: feature.enable ? "none" : "line-through" }}>
                        {feature.name}
                    </li>
                ))}
            </ul>
            <button>{buttonText}</button>
        </div>
    );
}

Message.propTypes = {
    plan: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    features: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            enable: PropTypes.bool.isRequired,
        })
    ).isRequired,
    buttonText: PropTypes.string,
};

export default Message;



