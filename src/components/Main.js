import React from "react";
import PropTypes from "prop-types";

const Main = function({ title, subTitle, techs }) {
  const renderTechs = () => {
    return techs.map(tech => <li key={tech}> {tech} </li>);
  };
  return (
    <main style={{ textAlign: "center" }}>
      <h3> {title} </h3> <p> {subTitle} </p> <ul style={{ listStyle: "none", padding: "0" }}> {renderTechs()} </ul>
      <hr />
    </main>
  );
};
Main.propTypes = {
  techs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Main;
