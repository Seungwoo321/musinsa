import styled from '@emotion/styled'
import SoldOutImage from '@/assets/soldout.png'

const SoldOutOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    opacity: 0.8;
    background-image: url(${SoldOutImage});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: center;
`

export default SoldOutOverlay
