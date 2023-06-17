import { css } from '@emotion/react'
import React from 'react'
export default function ProductList ({ list }) {
    return (
        <div
            css={css`
                margin-top: 120px;
            `}
        >

            {list.map(item => (<p>{item.goodsName}</p>))}
        </div>
    )
}
