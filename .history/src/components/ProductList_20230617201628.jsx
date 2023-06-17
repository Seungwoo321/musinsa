import { css } from '@emotion/react'
import React from 'react'
export default function ProductList ({ list }) {
    if (!list.length) {
        return (
            <div>Empty data</div>
        )
    }
    return (
        <div
            css={css`
                margin-top: 120px;
            `}
        >
            {list.map(item => {
                return (
                    <div
                    key={item.goodsNo}
                    >
                        <img src={item.imageUrl} />
                        <p>{item.goodsName}</p>
                    </div>
                )
            })}
        </div>
    )
}
