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
                            background: #fff;
                            flex-basis: calc(50%);
                            ${'' /* height: 226px; */}
                            ${'' /* flex: 1 0 50%; */}
                        `}
                    >
                        <img
                            css={css`

                                width: 100%;
                                margin: 0 auto;
                                object-fit: cover;
                            `}
                            // height="220px"
                            src={item.imageUrl}
                            onError={handlerImgError}
                        />
                        <div
                            css={css`
                                padding: 0 10px;
                            `}
                        >
                            <div
                                css={css`
                                    font-size: 11px;
                                    line-height: 16px;
                                    margin: 4px 0;
                                `}
                            >
                                {item.brandName}
                            </div>
                            <div
                                css={css`
                                    font-weight: bold;
                                    margin: 4px 0;
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
                                <span>
                                    {item.price.toLocaleString('ko-KR')}원
                                </span>
                                <span>{item.saleRate}%</span>
                            </div>
                            <small
                                css={css`
                                    ${'' /* font-size: 11px; */}
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
