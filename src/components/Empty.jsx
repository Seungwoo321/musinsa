import React from 'react'
import { css } from '@emotion/react'
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
                검색 결과 없음
            </div>

        </div>
    )
}

Empty.propTypes = {

}
