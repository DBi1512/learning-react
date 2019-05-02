import React from "react";

const Student = function({ firstName, lastName, title, imgUrl, skills }) {
  const renderSkills = () => {
    return skills.map(skill => <li key={skill}>{skill}</li>);
  };

  return (
    <div style={{ width: "20vw", margin: "0 auto", textAlign: "center" }}>
      <img src={imgUrl} style={{ width: "100%" }} alt="student icon" />
      <h2 style={{ margin: "0", marginTop: "-50px" }}>
        Name: {firstName} {lastName}
      </h2>
      <em>Title: {title}</em>
      <details>
        <summary>Skills</summary>
        <ul style={{ listStyle: "none", padding: "0" }}>{renderSkills()}</ul>
      </details>
      <hr style={{ marginTop: "20px" }} />
    </div>
  );
};

export default Student;
