import React from "react";
import Cocktail from "./Cocktail";
import Loading from "../UI/Loading";
import { useGlobalContext } from "../../store/context";
import classes from './CocktailList.module.css'

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2 className={classes.sectiontitle}>oops! No matches found.</h2>;
  }
  return (
    <section className={classes.section}>
      <h2 className={classes.section_title}>Cocktails</h2>
      <div className={classes.cocktails_center}>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
