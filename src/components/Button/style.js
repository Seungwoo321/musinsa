import styled from '@emotion/styled'

export const StyledButton = styled.button`
    padding: 7px 15px;
    font-size: 14px;
    line-height: 21px;
    height: 35px;
    color: #000;
    background: #fff;
    border-radius: 4px;
    border: 1px solid #eee;
    cursor: pointer;
    margin-left: 5px;
    &.accent {
        color: #fff;
        background: #0078ff;
    }
    &.active {
        color: #0078ff
    }
    &.round {
        border-radius: 18px;
    }
    &.small {
        padding: 4px 10px;
        font-size: 12px;
        line-height: 18px;
        height: 26px;
    }
`
