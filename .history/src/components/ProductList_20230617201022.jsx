import { css } from '@emotion/react'
import React from 'react'
export default function ProductList ({ list }) {
    return (
        <div
            css={css`
                margin-top: 120px;
            `}
        >

            {list.map(item => {
                return (
                    <p>
                        {item.goodsName}
                    </p>
                )
            })}
        </div>
    )
}
