import styled from '@emotion/styled'
import React from 'react'
import Button from './design/Button'
import Icon from './design/Icon'
import { array, object, func } from 'prop-types'
import { filterFunc } from '../libs'
const StyledMenuFilter = styled.div`
    position: fixed;
    z-index: 2;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #fff;
    padding: 10px 2px;
`

export default function MenuFilter({ activeKeys, filterLabel, onFilterActive, onSearchActive, onSearchSelect }) {
    const handleFilterSelect = (key) => {
        const newActiveKeys = activeKeys.includes(key) ? activeKeys.filter(selected => selected !== key) : activeKeys.concat(key)
        if (newActiveKeys.length) {
            onFilterActive(item => newActiveKeys.some(key => filterFunc[key](item)), newActiveKeys)
        } else {
            onFilterActive(item => !item.isSoldOut, newActiveKeys)
        }
    }
    const handleSearchSelect = (key) => {
        if (key === activeKeys) {
            // setActiveKey('')
            // onSearchSelect(false)
        } else {
            // setActiveKey(key)
            // onSearchSelect(true)
        }
    }
    return (
        <StyledMenuFilter>
            <Button
                round
                active={activeKeys.includes('search')}
                onClick={() => handleSearchSelect('search')}
            >
                {filterLabel.search}
                <Icon name="Search" size="16" style={{ verticalAlign: 'middle', marginLeft: '6px' }} />
            </Button>
            <Button
                round
                active={activeKeys.includes('sale')}
                onClick={() => handleFilterSelect('sale')}
            >
                {filterLabel.sale}
            </Button>
            <Button
                round
                active={activeKeys.includes('exclusive')}
                onClick={() => handleFilterSelect('exclusive')}
            >
                {filterLabel.exclusive}
            </Button>
            <Button
                round
                active={activeKeys.includes('soldOut')}
                onClick={() => handleFilterSelect('soldOut')}
            >
                {filterLabel.soldOut}
            </Button>
        </StyledMenuFilter>
    )
}
MenuFilter.proptype = {
    activeKeys: array,
    filterLabel: object,
    onFilterActive: func,
    onSearchActive: func,
    onSearchSelect: func
}
