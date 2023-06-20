import React from 'react'
import { css } from '@emotion/react'
import LoadingSpinnerImage from '../assets/icons/ccommon_loading_spinner.svg'

export default function LoadingSpinner () {
    return (
        <div
            css={css`
                text-align: center;
                background: #fff;
                padding: 50px;
            `}
        >
            <img
                className="rotate-image"
                src={LoadingSpinnerImage}
            />
        </div>
    )
}
