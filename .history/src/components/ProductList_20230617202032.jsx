import { css } from '@emotion/react'
import React from 'react'
export default function ProductList ({ list }) {
    if (!list.length) {
        return (
            <div>Empty data</div>
        )
    }
    const handlerImgError = (e) => {
        e.target.src = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg'
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
                        css={css`
                            display:flex;
                            flex: 1 0 50%;
                        `}
                    >
                        <img
                            height="220px"
                            src={item.imageUrl}
                            onError="this.src = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg' "
                        />
                        {/* <p>{item.goodsName}</p> */}
                    </div>
                )
            })}
        </div>
    )
}
