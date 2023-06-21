import React from 'react'
import { css } from '@emotion/react'
import { array, bool } from 'prop-types'
import Empty from './Empty'
import ProductListItem from './ProductListItem'

const makeMarginTop = (openFilterArea, openSearchArea) => 115 + (openFilterArea ? 50 : 0) + (openSearchArea ? 80 : 0)

export default function ProductList ({ list, openFilterArea, openSearchArea }) {
    const marginTop = makeMarginTop(openFilterArea, openSearchArea)
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
            {list.map((item, index) => (
                <ProductListItem key={index} item={item} />
            ))}
        </div>
    )
}

ProductList.propTypes = {
    list: array,
    openFilterArea: bool,
    openSearchArea: bool
}
