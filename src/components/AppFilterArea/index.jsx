import React from 'react'
import { object, array, func } from 'prop-types'
import { StyledAppFilterArea, StyledButtonContainer } from './style'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

export default function AppFilterArea ({ filterLabel, activeFilters, activeKeywords, onRemoveFilter, onRemoveSearchFilter }) {
    const isVisible = activeFilters.length || activeKeywords.length
    const handleResetFilter = () => {
        activeFilters.forEach(key => onRemoveFilter(key))
        activeKeywords.forEach(key => onRemoveSearchFilter(key))
    }
    return (
        <StyledAppFilterArea
            className={isVisible ? 'show' : 'hide'}
        >
            <StyledButtonContainer>
                {activeKeywords.map(key => {
                    return (
                        <Button
                            key={key}
                            icon="close"
                            iconSize={16}
                            accent
                            small
                        >
                            {key}
                            <Icon name="Close" size={10} style={{ marginLeft: '6px' }} onClick={() => onRemoveSearchFilter(key)} />
                        </Button>
                    )
                })}
                {activeFilters.map(key => {
                    return (
                        <Button
                            key={key}
                            icon="close"
                            iconSize={16}
                            accent
                            small
                        >
                            {filterLabel[key]}
                            <Icon name="Close" size={10} style={{ marginLeft: '6px' }} onClick={() => onRemoveFilter(key)} />
                        </Button>
                    )
                })}
            </StyledButtonContainer>
            <Button style={{ position: 'absolute', bottom: '10px', right: '3px', border: 'none' }}>
                <Icon name="Refresh" size={22} onClick={handleResetFilter} />
            </Button>
        </StyledAppFilterArea>
    )
}

AppFilterArea.propTypes = {
    filterLabel: object,
    activeFilters: array,
    activeKeywords: array,
    onRemoveFilter: func,
    onRemoveSearchFilter: func
}
