import React, { useState } from 'react'
import '../scss/components/_categories.scss'

export default function Categories({value, onClickCategory}) {
  const categories = ['All', 'Meat', 'Grill', 'Spicy', 'Closed', 'Vegan']

  return (
    <div className='categories'>
      <ul>
        {
          categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={value === index ? 'active': ''}>
              {categoryName}
            </li>
          ))
        }
      </ul>
    </div>
  )
}