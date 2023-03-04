import React from 'react'
import { Link } from 'react-router-dom'
import cartIcon from '../assets/img/shopping-cart.svg'
import trashIcon from '../assets/img/trash.svg'
import arrowBack from '../assets/img/grey_arrow.svg'
import CartItem from '../components/CartItem'

export default function Cart() {
  return (
    <div class="container container--cart">
      <div class="cart">
        <div class="cart__top">
          <h2 class="content__title"> <img src={cartIcon} alt="cart" /> Корзина</h2>
          <div class="cart__clear">
            <img src={trashIcon} alt="trash" />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div class="content__items">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div class="cart__bottom">
          <div class="cart__bottom-details">
            <span> Всего пицц: <b>3 шт.</b> </span>
            <span> Сумма заказа: <b>900 ₽</b> </span>
          </div>
          <div class="cart__bottom-buttons">
            <Link to="/" class="button button--outline button--add go-back-btn">
              <img src={arrowBack} alt="arrow" />
              <span>Back to home..</span>
            </Link>
            <div class="button pay-btn">
              <span>Buy now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
