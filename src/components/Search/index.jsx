import React, { useRef } from 'react'
import searchIcon from '../../assets/icons/search_icon.svg'
import closeIcon from '../../assets/icons/close_icon.svg'
import s from './Search.module.scss'

export default function Search({ searchValue, setSearchValue }) {
    const inputRef = useRef();
    const onClickClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    }

    return (
        <div className={s.root}>
            <img
                className={s.icon}
                src={searchIcon}
                alt="search" />
            <input
                ref={inputRef}
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                className={s.input}
                type="text"
                placeholder='search pizza...' />
            {
                searchValue && <img
                    onClick={onClickClear}
                    className={s.close_icon}
                    src={closeIcon}
                    alt="close" />
            }

        </div>
    )
}
