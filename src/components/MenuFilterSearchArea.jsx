import React from 'react'
import { css } from '@emotion/react'
import { bool, string, func, node } from 'prop-types'
import { TEXT_CONTENT } from '../constants'
import Icon from './Icon'

export default function MenuFilterSearchArea ({ searchText, open, openFilterArea, onInputSearch, onAddSearchFilter, toggleSearchArea, children }) {
    const handleInput = e => onInputSearch(e.target.value)
    const handleKeyUp = e => {
        if (e.key === 'Enter' && e.target.value.toString().trim() !== '') {
            onAddSearchFilter(e.target.value)
            toggleSearchArea()
        }
    }
    return (
        <div
            css={css`
                display: ${open ? 'block' : 'none'};
                position: fixed;
                z-index: 3;
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
                    placeholder={TEXT_CONTENT.INPUT_PLACEHOLDER}
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
            {children}
        </div>
    )
}

MenuFilterSearchArea.propTypes = {
    searchText: string,
    open: bool,
    openFilterArea: bool,
    onInputSearch: func,
    onAddSearchFilter: func,
    toggleSearchArea: func,
    children: node
}
