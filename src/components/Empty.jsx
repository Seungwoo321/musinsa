import React from 'react'
import { css } from '@emotion/react'
import { TEXT_CONTENT } from '../constants'
import EmptyImage from '../assets/icon-general-empty.png'

export default function Empty () {
    return (
        <div
            css={css`
                text-align: center;
                padding-top: 50%;
                color: #aaa;
            `}
        >
            <img src={EmptyImage} alt="empty" />
            <div>
                {TEXT_CONTENT.EMPTY_RESULT}
            </div>

        </div>
    )
}
