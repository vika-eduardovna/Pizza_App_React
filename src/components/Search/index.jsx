import React from 'react'
import searchIcon from '../../assets/icons/search_icon.svg'
import closeIcon from '../../assets/icons/close_icon.svg'
import s from './Search.module.scss'

export default function Search({ searchValue, setSearchValue }) {
    
    return (
        <div className={s.root}>
            <img
                className={s.icon}
                src={searchIcon}
                alt="search" />
            <input
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className={s.input}
                type="text"
                placeholder='search pizza...' />
            {
                searchValue && <img
                    onClick={() => setSearchValue('')}
                    className={s.close_icon}
                    src={closeIcon}
                    alt="close" />
            }

        </div>
    )
}
