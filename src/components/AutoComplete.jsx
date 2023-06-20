import React from 'react'
import { array, string } from 'prop-types'
import { css } from '@emotion/react'
export default function AutoComplte ({ completeNames, searchText }) {
    const regex = new RegExp(searchText, 'g')
    return (
        <ul
            css={css`
                    display: ${searchText.length ? 'block' : 'none'};
                    border: 1px solid #f1f1f1;
                    position: absolute;
                    top: 80px;
                    left: 0;
                    right: 0;
                    background: #fff;
                    min-height: 0px;
                    max-height: 300px;
                    margin: 0;
                    list-style: none;
                    padding: 10px;
                    overflow: scroll;
                `}
        >
            {completeNames.filter(name => searchText !== '' && name.match(regex)).map(name => {
                return (
                    <li
                        css={css`
                                padding: 10px;
                                font-size: 14px;
                            `}
                        key={name}
                    >
                        <span
                            dangerouslySetInnerHTML={{
                                __html: name.replace(regex, (match) => `<span style="background-color: #ffff00;">${match}</span>`)
                            }}
                        />
                    </li>
                )
            })}
        </ul>
    )
}

AutoComplte.propTypes = {
    completeNames: array,
    searchText: string
}
