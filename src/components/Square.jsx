import React from "react";

const Square = (props) => {
  const style = {
    width: "30px",
    height: "30px",
    fontSize: "26px",
    fontWeight: "bold",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: props.clickable ? "pointer" : "default",
    transition: "background-color 0.6s ease",
    background: "rgba(255, 255, 255, 0.19)",
    borderRadius: "10px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(2.7px)",
    WebkitBackdropFilter: "blur(2.7px)",
    border: "1px solid rgba(255, 255, 255, 1)",
  };

  if (props.value) {
    style.color = props.value === "X" ? "#88f549" : "#49e5eb";
  }

  if (props.winner) {
    style.background = props.winner === "X" ? "#12c212" : "#096e6e";
  } else if (props.clickable) {
    style.background = "#202d9e ";
  }

  return (
    <button className="square" style={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
