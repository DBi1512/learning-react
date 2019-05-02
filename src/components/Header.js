import React from "react";
import PropTypes from "prop-types";

let num1 = 3;
let num2 = 7;

const style = {
  background: "#590000",
  color: "white",
  padding: "20px",
  textAlign: "center",
};

const Header = function(props) {
  return (
    <header style={style}>
      <h1>
        {props.title}: {props.year.getFullYear()}
      </h1>
      <p>
        Teacher: {props.firstName} {props.lastName}
      </p>
      <p>
        The sum of {num1} + {num2} = {num1 + num2}
      </p>
    </header>
  );
};

Header.defaultProps = {
  title: "This is a title",
  firstName: "Dean",
  lastName: "Phan",
  year: 2019,
  type: "text",
};

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
