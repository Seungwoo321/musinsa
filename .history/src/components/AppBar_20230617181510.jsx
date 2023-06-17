import React from 'react'
import Logo from '../assets/logo_musinsa.svg'
import { css } from '@emotion/react'

export default function AppBar () {
    return (
        <header css={css`
                position: fixed;
                left: 0;
                top: 0;
                right: 0;
            `}
        >
            <div css={css`
                    width: 100%;
                    height: 50px;
                    position: relative;
                    padding: 1rem;
                `}
            >
                <img src={Logo} className="logo" />
            </div>
        </header>
    )
}
