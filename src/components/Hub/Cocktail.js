import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Cocktail.module.css';

export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className={classes.cocktail}>
          <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
            <div className={classes.img_container}>
              <img src={image} alt={name} />
            </div>
            <div className={classes.cocktail_footer}>
              <h3>{name}</h3>
              <h4>{glass}</h4>
              <p>{info}</p>
            </div>
          </Link>
    </article>
    
  )
}
