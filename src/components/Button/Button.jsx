import React from "react";

const Button = ({ fetchHits }) => {
  return (
    <button className="Button" type="button" onClick={fetchHits}>
      Load more
    </button>
  );
};

export default Button;
