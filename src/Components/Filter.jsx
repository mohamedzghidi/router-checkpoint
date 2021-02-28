import React, { useRef, useEffect, useState } from "react";

function Filter(props) {
  const textChanged = (e) => {
    props.handleChange(e.target.value);
  };

  return (
    <div className="col-4 offset-4 mt-3">
      <input
        type="text"
        placeholder="Search"
        className="form-control"
        onChange={textChanged}
      />
    </div>
  );
}

export default Filter;
