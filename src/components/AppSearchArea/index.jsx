import React from 'react'
import { css } from '@emotion/react'
import { bool, string, func, node } from 'prop-types'
import { TEXT_CONTENT } from '@/constants'
import Icon from '@/components/Icon'
import { StyledAppSearchArea, StyledForm, StyledInputText, StyledIconContainer } from './style'

export default function AppSearchArea ({ searchText, open, openFilterArea, onInputSearch, onAddSearchFilter, toggleSearchArea, children }) {
    const handleInput = e => onInputSearch(e.target.value)
    const handleKeyUp = e => {
        if (e.key === 'Enter' && e.target.value.toString().trim() !== '') {
            onAddSearchFilter(e.target.value)
            toggleSearchArea()
        }
    }
    return (
        <StyledAppSearchArea
            css={css`
                display: ${open ? 'block' : 'none'};
                top: ${105 + (openFilterArea ? 50 : 0)}px;
            `}
        >
            <StyledForm
                onSubmit={e => e.preventDefault()}
            >
                <StyledInputText
                    type="text"
                    placeholder={TEXT_CONTENT.INPUT_PLACEHOLDER}
                    value={searchText}
                    onInput={handleInput}
                    onKeyUp={handleKeyUp}
                />
                <StyledIconContainer>
                    <Icon name="Search" size={20} style={{ verticalAlign: 'middle' }} />
                </StyledIconContainer>
            </StyledForm>
            {children}
        </StyledAppSearchArea>
    )
}

AppSearchArea.propTypes = {
    searchText: string,
    open: bool,
    openFilterArea: bool,
    onInputSearch: func,
    onAddSearchFilter: func,
    toggleSearchArea: func,
    children: node
}
