import { css } from '@emotion/react'
import React from 'react'

export default function ExclusiveLabel () {
    return (
        <div
            css={css`
                z-index: 3;
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
            단독
        </div>
    )
}

ExclusiveLabel.propTypes = {

}
