import PropTypes from "prop-types";
const Link = ({ route }) => {
  console.log(route);
  return (
    <li className="mr-6 pl-3 py-2  px-4 hover:bg-yellow-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object,
};

export default Link;
