import React, { useState } from 'react'
import '../scss/components/_categories.scss'

export default function Categories() {

  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategory = index => setActiveIndex(index);
  const categories = ['All', 'Meat', 'Vegan', 'Grill', 'Spicy', 'Closed']

  return (
    <div className='categories'>
      <ul>
        {
          categories.map((item, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeIndex === index ? 'active': ''}>
              {item}
            </li>
          ))
        }
      </ul>
    </div>
  )
}