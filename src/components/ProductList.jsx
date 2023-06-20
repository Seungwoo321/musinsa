import React from 'react'
import SoldOutOverlay from './SoldOutOverlay'
import { css } from '@emotion/react'
import { array, bool } from 'prop-types'
import { NO_IMAGE_URL } from '../constants'
import Empty from './Empty'
import ExclusiveLabel from './ExclusiveLabel'

export default function ProductList ({ list, openFilterArea, openSearchArea }) {
    const marginTop = 115 + (openFilterArea ? 50 : 0) + (openSearchArea ? 80 : 0)
    if (!list.length) {
        return (
            <div
                css={css`
                background: #fff;
                margin-top: ${marginTop}px;
                height: calc(100vh - ${marginTop}px)
            `}
            >
                <Empty />
            </div>
        )
    }
    return (
        <div
            css={css`
                background: #fff;
                margin-top: ${marginTop}px;
                display: flex;
                flex-wrap: wrap;
                min-height: calc(100vh - ${marginTop}px)
            `}
        >
            {list.map((item, index) => {
                return (
                    <div
                        key={index}
                        css={css`
                            background: #fff;
                            flex-basis: calc(50%);
                        `}
                    >
                        <div
                            css={css`
                                position: relative;
                            `}
                        >
                            <img
                                css={css`
                                    width: 100%;
                                    margin: 0 auto;
                                    object-fit: cover;
                                `}
                                src={item.imageUrl}
                                alt={item.goodsName}
                                onError={e => (e.target.src = NO_IMAGE_URL)}
                            />
                            {item.isSoldOut ? <SoldOutOverlay /> : null}
                            {item.isExclusive ? <ExclusiveLabel /> : null}
                        </div>

                        <div
                            css={css`
                                padding: 0 10px;
                            `}
                        >
                            <div
                                css={css`
                                    font-size: 11px;
                                    line-height: 16px;
                                    margin: 20px 0 0 0;
                                `}
                            >
                                {item.brandName}
                            </div>
                            <div
                                css={css`
                                    line-break: anywhere;
                                    font-weight: bold;
                                    margin: 4px 0;
                                    display: -webkit-box;
                                    -webkit-line-clamp: 2;
                                    -webkit-box-orient: vertical;
                                    overflow: hidden;
                                `}
                            >
                                {item.goodsName}
                            </div>
                            <div
                                css={css`
                                display:flex;
                                justify-content: space-between;
                            `}
                            >
                                <span
                                    css={css`
                                        font-size: 16px;
                                        font-weight: 500;
                                    `}
                                >
                                    {item.price.toLocaleString('ko-KR')}원
                                </span>
                                {
                                    item.saleRate > 0
                                        ? (
                                            <span
                                                css={css`
                                                    font-size: 16px;
                                                    font-weight: 500;
                                                    color: #ff0000;
                                                `}
                                            >
                                                {item.saleRate}%
                                            </span>
                                        )
                                        : null
                                }

                            </div>
                            <small
                                css={css`
                                    text-decoration: line-through;
                                    color: #aaa;
                                    line-height: 11.55px;
                                `}
                            >
                                {item.normalPrice.toLocaleString('ko-KR')}원
                            </small>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

ProductList.propTypes = {
    list: array,
    openFilterArea: bool,
    openSearchArea: bool
}
