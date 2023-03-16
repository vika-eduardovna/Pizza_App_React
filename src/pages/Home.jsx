import React, { useEffect, useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import Pagination from '../components/Pagination';
import { sortList } from '../components/Sort';
import '../scss/app.scss'


export default function Home({ searchValue }) {
    const navigate = useNavigate();
    const categoryId = useSelector(state => state.filter.categoryId);
    const currentPage = useSelector(state => state.filter.currentPage);
    const sortType = useSelector(state => state.filter.sort.sortProperty);
    const dispatch = useDispatch();
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sort = sortList.find(obj => obj.sortProperty === params.sortProperty)
            dispatch(setFilters({
                ...params, sort
            }));
        }
    }, [])

    useEffect(() => {
        setIsLoading(true);
        const sortBy = sortType.replace('-', '');
        const order = sortType.includes('-') ? 'asc' : 'desc';
        const category_id = categoryId > 0 ? `category=${categoryId}` : '';
        const search = searchValue ? `&search=${searchValue}` : '';

        axios
            .get(`https://63ff2b80571200b7b7d749c8.mockapi.io/pizzas?page=${currentPage}&limit=4&${category_id}&sortBy=${sortBy}&order=${order}${search}`)
            .then(res => {
                setItems(res.data);
                setIsLoading(false);
            })
        window.scrollTo(0, 0)
    }, [categoryId, sortType, searchValue, currentPage]); //empty array is component did mount


    useEffect(() => {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage
      });
      navigate(`?${queryString}`);
    }, [categoryId, sortType, searchValue, currentPage])
    
    // this search function is able for static array only
    // const pizzas = items
    //     .filter(el => el.title.toLowerCase().includes(searchValue.toLowerCase()))
    //     .map(el => <PizzaBlock key={el.id} {...el} />);

    const pizzas = items.map(el => <PizzaBlock key={el.id} {...el} />);
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);

    return (
        <>
            <div className="container">
                <div className="content_top">

                    <Categories
                        value={categoryId}
                        onClickCategory={(id) => dispatch(setCategoryId(id))} />
                    <Sort />

                </div>
                <h2 className="title">All pizzas</h2>
                <div className="items">
                    {
                        isLoading ? skeletons : pizzas
                    }
                </div>
                <Pagination
                    currentPage={currentPage}
                    onChangePage={number => dispatch(setCurrentPage(number))} />
            </div>
        </>
    )
}
