import React from 'react'
import { array, object, func, bool } from 'prop-types'
import { StyledAppFilterBar } from './style'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default function AppFilterBar ({ filterLabel, activeFilters, activeKeywords, onAddFilter, onRemoveFilter, isSearchArea, toggleSearchArea }) {
    const handleFilterSelect = (key) => {
        if (activeFilters.includes(key)) {
            onRemoveFilter(key)
        } else {
            onAddFilter(key)
        }
    }
    return (
        <StyledAppFilterBar>
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
        </StyledAppFilterBar>
    )
}
AppFilterBar.propTypes = {
    filterLabel: object,
    activeFilters: array,
    activeKeywords: array,
    onAddFilter: func,
    onRemoveFilter: func,
    isSearchArea: bool,
    toggleSearchArea: func
}
