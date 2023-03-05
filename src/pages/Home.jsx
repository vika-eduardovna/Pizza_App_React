import React, { useEffect, useState } from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import '../scss/app.scss'

export default function Home() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [categoryId, setCategoryId] = useState(0);
    const [sortType, setSortType] = useState({ name: 'popular', sortProperty: 'rating' });

    useEffect(() => {
        setIsLoading(true);
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sortProperty.replace('-', '');
        const category_id = categoryId > 0 ? `category=${categoryId}` : '';

        fetch(
            `https://63ff2b80571200b7b7d749c8.mockapi.io/pizzas?${category_id}&sortBy=${sortBy}&order=${order}`
        )
            .then(res => res.json())
            .then(json => {
                setItems(json);
                setIsLoading(false);
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType]); //empty array is component did mount

    return (
        <>
            <div className="container">
                <div className="content_top">

                    <Categories
                        value={categoryId}
                        onClickCategory={(i) => setCategoryId(i)} />
                    <Sort
                        sortType={sortType}
                        onClickSortType={(i) => setSortType(i)} />

                </div>
                <h2 className="title">All pizzas</h2>
                <div className="items">
                    {
                        isLoading
                            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
                            : items.map(el => <PizzaBlock key={el.id} {...el} />)
                    }
                </div>
            </div>
        </>
    )
}
