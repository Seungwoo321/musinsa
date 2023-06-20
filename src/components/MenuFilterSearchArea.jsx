import { css } from '@emotion/react'
import React from 'react'
import Icon from './design/Icon'
import { bool, string, func } from 'prop-types'
export default function MenuFilterSearchArea ({ searchText, open, openFilterArea, onInputSearch, onAddSearchFilter }) {
    const handleInput = e => {
        onInputSearch(e.target.value)
    }
    const handleKeyUp = e => {
        if (e.key === 'Enter' && e.target.value !== '') {
            onAddSearchFilter(e.target.value)
        }
    }
    return (
        <div
            css={css`
                display: ${open ? 'block' : 'none'};
                position: fixed;
                z-index: 2;
                top: ${105 + (openFilterArea ? 50 : 0)}px;
                left: 0;
                right: 0;
                height: 80px;
                background: #f9f9f9;
                padding: 20px 15px;
            `}
        >
            <form
                css={css`
                    position: relative;
                `}
                onSubmit={e => e.preventDefault()}
            >
                <input
                    css={css`
                    height: 40px;
                    width: 100%;
                    border: 1px solid #ccc;
                    color: #aaa;
                    font-size: 16px;
                    padding-left: 30px;
                `}
                    type="text"
                    placeholder="상품명 검색"
                    value={searchText}
                    onInput={handleInput}
                    onKeyUp={handleKeyUp}
                />
                <span
                    css={css`
                        position: absolute;
                        top: 8px;
                        left: 8px;
                    `}
                >
                    <Icon name="Search" size={20} style={{ verticalAlign: 'middle' }} />
                </span>
            </form>
        </div>
    )
}

MenuFilterSearchArea.proptype = {
    searchText: string,
    open: bool,
    openFilterArea: bool,
    onInputSearch: func
}
