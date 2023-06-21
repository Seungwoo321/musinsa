import React from 'react'
import { css } from '@emotion/react'
import { TEXT_CONTENT } from '../constants'

export default function ExclusiveLabel () {
    return (
        <div
            css={css`
                z-index: 2;
                padding: 4px 6px;
                line-height: 18px;
                font-size: 12px;
                background-color: #18a286;
                color: #fff;
                position: absolute;
                bottom: -6px;
                left: 10px;
            `}
        >
            {TEXT_CONTENT.LABEL_EXCLUSIVE}
        </div>
    )
}

ExclusiveLabel.propTypes = {

}
