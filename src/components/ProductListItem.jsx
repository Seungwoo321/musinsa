import React from 'react'
import { css } from '@emotion/react'
import { object } from 'prop-types'
import { NO_IMAGE_URL } from '../constants'
import { displayPrice } from '../libs'
import SoldOutOverlay from './SoldOutOverlay'
import ExclusiveLabel from './ExclusiveLabel'

export default function ProductListItem ({ item }) {
    const handleError = (e) => {
        e.target.src = NO_IMAGE_URL
    }

    return (
        <div
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
                    onError={handleError}
                />
                {item.isSoldOut && <SoldOutOverlay />}
                {item.isExclusive && <ExclusiveLabel />}
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
                        display: flex;
                        justify-content: space-between;
                    `}
                >
                    <span
                        css={css`
                            font-size: 16px;
                            font-weight: 500;
                        `}
                    >
                        {displayPrice(item.price)}
                    </span>
                    {item.saleRate > 0 && (
                        <span
                            css={css`
                                font-size: 16px;
                                font-weight: 500;
                                color: #ff0000;
                            `}
                        >
                            {item.saleRate}%
                        </span>
                    )}
                </div>
                <small
                    css={css`
                        text-decoration: line-through;
                        color: #aaa;
                        line-height: 11.55px;
                    `}
                >
                    {displayPrice(item.normalPrice)}
                </small>
            </div>
        </div>
    )
}

ProductListItem.propsType = {
    item: object
}
