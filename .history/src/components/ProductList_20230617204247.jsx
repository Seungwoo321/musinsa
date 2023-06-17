import { css } from '@emotion/react'
import React from 'react'
export default function ProductList ({ list }) {
    if (!list.length) {
        return (
            <div>Empty data</div>
        )
    }
    const handlerImgError = e => {
        e.target.src = 'https://image.msscdn.net/musinsaUI/homework/data/img.jpg'
    }
    return (
        <div
            css={css`
                margin-top: 120px;
                display: flex;
                flex-wrap: wrap;
            `}
        >
            {list.map(item => {
                return (
                    <div
                        key={item.goodsNo}
                        css={css`
                            ${'' /* width: calc(50%); */}
                            ${'' /* flex-basis: calc(50%); */}
                            margin: 0;

                        `}
                    >
                        <img
                            css={css`
                                width: 50%;
                                margin: 0 auto;
                                object-fit: cover;
                            `}
                            // width="50%"
                            // height="220px"
                            src={item.imageUrl}
                            onError={handlerImgError}
                        />
                        {/* <p>{item.goodsName}</p> */}
                    </div>
                )
            })}
        </div>
    )
}
