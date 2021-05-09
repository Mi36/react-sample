import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  const onClick = () => {
    console.log(`onclicked`);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "grey",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <header
        style={{
          color: "#fff",
          backgroundColor: "#000",
          border: "none",
          padding: 5,
          borderRadius: 5,
          margin: 5,
          fontFamily: "inherit",
          fontSize: 15,
        }}
      >
        {props.title}
      </header>
      <button
        onClick={onClick}
        style={{
          color: "#fff",
          backgroundColor: "#000",
          border: "none",
          padding: 5,
          borderRadius: 5,
          margin: 5,
          fontFamily: "inherit",
          fontSize: 15,
        }}
      >
        Add
      </button>
    </div>
  );
}

Header.defaultProps = {
  title: "Task Tracker",
};

//to sketch errors quickly
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
