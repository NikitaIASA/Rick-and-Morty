import React from "react";

import classes from "./Search.module.scss";

const Search = () => {
  return (
    <>
      <input
        className={classes.input}
        placeholder="Filter by name..."
      />
    </>
  );
};

export default Search;
