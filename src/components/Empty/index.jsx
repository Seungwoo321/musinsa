import React from 'react'
import { TEXT_CONTENT } from '@/constants'
import EmptyImage from '@/assets/icon-general-empty.png'
import { StyledEmpty } from './style'
export default function Empty () {
    return (
        <StyledEmpty>
            <img src={EmptyImage} alt="empty" />
            <div>
                {TEXT_CONTENT.EMPTY_RESULT}
            </div>
        </StyledEmpty>
    )
}
