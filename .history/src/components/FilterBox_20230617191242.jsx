import styled from '@emotion/styled'
import React from 'react'
import Button from './design/Button'
import Icon from './design/Icon'
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
                <Icon
                    name="search"
                    size={15}
                />
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
        </StyledFilterBox>
    )
}
