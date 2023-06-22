import styled from '@emotion/styled'

export const StyledAppFilterArea = styled.div`
    position: fixed;
    z-index: 3;
    top: 105px;
    left: 0;
    right: 0;
    height: 50px;
    background: #fff;
    padding: 12px 10px 12px 10px;
    &.show {
        display: flex
    }
    &.hide {
        display: none
    }
`

export const StyledButtonContainer = styled.div`
    width: calc(100% - 50px);
    overflow-x: auto;
    white-space: nowrap;
`
