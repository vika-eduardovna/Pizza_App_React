import React from 'react'
import empty_logo from '../assets/img/shopping-cart-colour 1.svg'

export default function EmptyCart() {
    return (
        <div className="content">
            <div className="container container--cart">
                <div className="cart cart--empty">
                    <h2>Cart is empty... <icon>😕</icon></h2>
                    <p>
                        You probably haven't ordered pizza yet..<br />
                        To order pizza, go to the home page.
                    </p>
                    <img src={empty_logo} />
                    <a href="/" class="button button--black">
                        <span>Go back</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
