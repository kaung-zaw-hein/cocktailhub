import React from "react";
import { Link } from "react-router-dom";
import classes from './About.module.css'
export default function About() {
  return (
    <div className={classes.about}>
      <h1>React Practice Code Challenge - Cocktails hub APP (5/30)</h1>
      <p>30 react project challenge purpose is a step to reach a level in react.It is structured based on programmed
Feedback and questions are welcome! Framwork and library using in this project are: [React.js, React-Hooks, External API,class CSS]</p>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
    </div>
  );
}
