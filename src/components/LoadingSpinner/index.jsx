import React from 'react'
import LoadingSpinnerImage from '@/assets/icons/ccommon_loading_spinner.svg'
import { StyledLoadingSpinner } from './style'
export default function LoadingSpinner () {
    return (
        <StyledLoadingSpinner>
            <img
                className="rotate-image"
                src={LoadingSpinnerImage}
            />
        </StyledLoadingSpinner>
    )
}
