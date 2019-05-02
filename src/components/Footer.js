import React from "react";
import PropTypes from "prop-types";

const Footer = function({ title, copyRight }) {
  return (
    <footer style={{ position: "sticky", float: "right", paddingRight: "30px", bottom: "10px" }}>
      <p>
        {title} {copyRight.getFullYear()}
      </p>
    </footer>
  );
};

Footer.propTypes = {
  year: PropTypes.number.isRequired,
};

export default Footer;
