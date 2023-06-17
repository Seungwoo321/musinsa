import styled from '@emotion/styled'
import React from 'react'
import Button from './design/Button'
const StyledFilterBox = styled.div`
    position: fixed;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 2px;
`

export default function FilterBox () {
    return (
        <StyledFilterBox>
            <Button>
                검색
            </Button>
        </StyledFilterBox>
    )
}
