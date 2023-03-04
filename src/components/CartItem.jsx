import React from 'react'
import minIcon from '../assets/img/Vector_min.svg'
import plusIcon from '../assets/img/Vector_plus.svg'
import removeIcon from '../assets/img/remove_icon.svg'

export default function CartItem() {
    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>Сырный цыпленок</h3>
                <p>тонкое тесто, 26 см.</p>
            </div>
            <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus">
                    <img src={minIcon} alt="min" />
                </div>
                <b>2</b>
                <div className="button button--outline button--circle cart__item-count-plus">
                    <img src={plusIcon} alt="plus" />
                </div>
            </div>
            <div className="cart__item-price">
                <b>770 ₽</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle">
                    <img src={removeIcon} alt="remove" />
                </div>
            </div>
        </div>
    )
}
