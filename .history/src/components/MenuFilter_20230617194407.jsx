import styled from '@emotion/styled'
import React from 'react'
import Button from './design/Button'

const StyledMenuFilter = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 2px;
`

export default function MenuFilter () {
    return (
        <StyledMenuFilter>
            <Button
                active
                icon="search"
            >
                검색
            </Button>
            <Button>
                세일상품
            </Button>
            <Button>
                단독상품
            </Button>
            <Button>
                품절포함
            </Button>
        </StyledMenuFilter>
    )
}
