import React, {useState, useRef, useCallback } from 'react'
import debounce from 'lodash.debounce'
import searchIcon from '../../assets/icons/search_icon.svg'
import closeIcon from '../../assets/icons/close_icon.svg'
import s from './Search.module.scss'

export default function Search({ searchValue, setSearchValue }) {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    const onClickClear = () => {
        setSearchValue('');
        setValue('');
        inputRef.current.focus();
    };

    const updateSearchvalue = useCallback(
        debounce((str) => {
            setSearchValue(str)
        }, 1500),
        []
    );

    const onChangeInput = e => {
        setValue(e.target.value);
        updateSearchvalue(e.target.value)
    }

    return (
        <div className={s.root}>
            <img
                className={s.icon}
                src={searchIcon}
                alt="search" />
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={s.input}
                type="text"
                placeholder='search pizza...' />
            {
                value && <img
                    onClick={onClickClear}
                    className={s.close_icon}
                    src={closeIcon}
                    alt="close" />
            }

        </div>
    )
}
