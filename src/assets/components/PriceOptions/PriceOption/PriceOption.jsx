import PropTypes from "prop-types";

const PriceOption = ({ option }) => {
  console.log(option);
  const { name, features, price } = option;
  return (
    <div className="bg-yellow-200 p-5 rounded-xl">
      <h1 className="text-3xl">{name}</h1>
      <p className="mt-5">
        <strong>Features:</strong>{" "}
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </p>
      <button className="btn btn-success text-white mt-4 text-4xl">
        ${price} /month
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
