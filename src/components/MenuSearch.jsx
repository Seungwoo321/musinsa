import { css } from '@emotion/react'
import React, { useState } from 'react'
import Icon from './design/Icon'
export default function MenuSearch () {
    const [searchText, setSearchText] = useState('')
    const handleInput = (e) => {
        console.log(e.target.value)
    }

    return (
        <div
            css={css`
                position: absolute;
                top: 107px;
                left: 0;
                right: 0;
                height: 80px;
                background: #fff;
                padding: 20px 15px;
            `}
        >
            <form
                css={css`
                    position: relative;
                `}
            >
                <input
                    css={css`
                    height: 40px;
                    width: 100%;
                    border: 1px solid #ccc;
                    color: #aaa;
                    font-size: 16px;
                    line-height: 24px;
                `}
                    type="text"
                    placeholder="상품명 검색"
                    defaultValue=""
                    onInput={handleInput}
                />
                {
                    searchText
                        ? null
                        : (
                            <span
                                css={css`
                                    position: absolute;
                                    top: 8px;
                                    left: 8px;
                                    color: #aaa;
                                    font-size: 16px;
                                `}
                            >
                                <Icon name="search" />
                                {/* <span>
                                    상품명 검색
                                </span> */}
                            </span>
                        )
                }
            </form>
        </div>
    )
}
