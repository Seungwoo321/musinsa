import React from 'react'
import { css } from '@emotion/react'
import { array, bool } from 'prop-types'
import Empty from '@/components/Empty'
import ProductListItem from './ProductListItem'
import { StyledProductEmpty, StyledProductList } from './style'

const makeMarginTop = (openFilterArea, openSearchArea) => {
    let marginTop = 115
    if (openFilterArea) marginTop += 50
    if (openSearchArea) marginTop += 80
    return marginTop
}

export default function ProductList ({ list, openFilterArea, openSearchArea }) {
    const marginTop = makeMarginTop(openFilterArea, openSearchArea)
    if (!list.length) {
        return (
            <StyledProductEmpty
                css={css`
                margin-top: ${marginTop}px;
                height: calc(100vh - ${marginTop}px)
            `}
            >
                <Empty />
            </StyledProductEmpty>
        )
    }
    return (
        <StyledProductList
            css={css`
                margin-top: ${marginTop}px;
                min-height: calc(100vh - ${marginTop}px)
            `}
        >
            {list.map((item, index) => (
                <ProductListItem key={index} item={item} />
            ))}
        </StyledProductList>
    )
}

ProductList.propTypes = {
    list: array,
    openFilterArea: bool,
    openSearchArea: bool
}
