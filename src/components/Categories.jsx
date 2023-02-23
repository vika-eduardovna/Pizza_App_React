import React from 'react'
import '../scss/components/_categories.scss'

export default function Categories() {
  return (
    <div className='categories'>
      <ul>
        <li className='active'> All</li>
        <li>Meat</li>
        <li>Vegan</li>
        <li>Grill</li>
        <li>Chili</li>
        <li>Closed</li>
      </ul>
    </div>
  )
}