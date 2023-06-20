import React from 'react'
import { css } from '@emotion/react'
export default function SoldOutOverlay () {
    return (
        <div css={css`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #fff;
                opacity: 0.8;
                background-image: url('soldout.png');
                background-repeat: no-repeat;
                background-size: 50%;
                background-position: center;
            `}
        />
    )
}
