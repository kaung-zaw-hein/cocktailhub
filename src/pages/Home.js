import React from "react";
import SearchForm from "../components/UI/Searchform";
import CocktailList from "../components/Hub/CocktailList";
import classes from './home.module.css';
export default function Home() {
  return (
    <div className={classes.container}>
      <SearchForm />
      <CocktailList />
    </div>
  );
}
