import React from "react";
import { useGlobalContext } from "../../store/context";
import classes from './Searchform.module.css';
export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchCocktail() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section >
      <form className="search-form" onSubmit={handleSubmit}>
        <div className={classes.form_control}>
          <label htmlFor="name">COCKTAIL</label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            placeholder="Search cocktail by ingredient"
            className={classes.input}
          />
        </div>
      </form>
    </section>
  );
}
