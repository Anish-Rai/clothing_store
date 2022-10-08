import React, { Fragment } from 'react'
import './category-item.style.scss'
const CategoryItem = ({category}) => {

    const {title, imageUrl} = category;
  return (
    <Fragment>
        { 
          <div className="category-container">
          <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`,
          }} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      }
    </Fragment>
  )
}

export default CategoryItem