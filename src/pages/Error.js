import React from "react";
import { Link } from "react-router-dom";
import classes from './Error.module.css'
export default function Error() {
  return (
    <section className={classes.section}>
      <div className={classes.error_container}>
        <h1>oops! it's a dead end</h1>
        <Link to="/" className="btn btn-primary">
          back home
        </Link>
      </div>
    </section>
  );
}
