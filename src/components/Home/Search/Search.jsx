import React from "react";
import debounce from 'lodash.debounce';

import { SearchContext } from "../../../context/SearchProvider";

import classes from "./Search.module.scss";

const Search = () => {
  const [value, setValue] = React.useState('');
  const {setSearchValue} = React.useContext(SearchContext);
  const inputRef = React.useRef();

  const onClickClear = () => {
    setSearchValue('');
    setValue('');
    inputRef.current.focus();
  }

  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 250), 
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className={classes.input}
        placeholder="Filter by name..."
      />
    </>
  );
};

export default Search;
