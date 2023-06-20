import styled from '@emotion/styled'
import React from 'react'
import Button from './design/Button'
import Icon from './design/Icon'
import { array, object, func, bool } from 'prop-types'
const StyledMenuFilter = styled.div`
    position: fixed;
    z-index: 3;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 2px;
`

export default function MenuFilter ({ filterLabel, activeFilters, activeKeywords, onAddFilter, onRemoveFilter, isSearchArea, toggleSearchArea }) {
    const handleFilterSelect = (key) => {
        if (activeFilters.includes(key)) {
            onRemoveFilter(key)
        } else {
            onAddFilter(key)
        }
    }
    return (
        <StyledMenuFilter>
            <Button
                round
                accent={isSearchArea}
                active={activeKeywords.length > 0}
                onClick={toggleSearchArea}
            >
                {filterLabel.search}
                <Icon name="Search" size={16} style={{ verticalAlign: 'middle', marginLeft: '6px' }} />
            </Button>
            <Button
                round
                active={activeFilters.includes('sale')}
                onClick={() => handleFilterSelect('sale')}
            >
                {filterLabel.sale}
            </Button>
            <Button
                round
                active={activeFilters.includes('exclusive')}
                onClick={() => handleFilterSelect('exclusive')}
            >
                {filterLabel.exclusive}
            </Button>
            <Button
                round
                active={activeFilters.includes('soldOut')}
                onClick={() => handleFilterSelect('soldOut')}
            >
                {filterLabel.soldOut}
            </Button>
        </StyledMenuFilter>
    )
}
MenuFilter.propTypes = {
    filterLabel: object,
    activeFilters: array,
    activeKeywords: array,
    onAddFilter: func,
    onRemoveFilter: func,
    isSearchArea: bool,
    toggleSearchArea: func
}
