import React from 'react'
import { css } from '@emotion/react'
import { object, array, func } from 'prop-types'
import Button from './Button'
import Icon from './Icon'

export default function MenuFilterArea ({ filterLabel, activeFilters, activeKeywords, onRemoveFilter, onRemoveSearchFilter }) {
    const isVisible = activeFilters.length || activeKeywords.length
    const handleResetFilter = () => {
        activeFilters.forEach(key => onRemoveFilter(key))
        activeKeywords.forEach(key => onRemoveSearchFilter(key))
    }
    return (
        <div
            css={css`
                display: ${isVisible ? 'flex' : 'none'};
                position: fixed;
                z-index: 3;
                top: 105px;
                left: 0;
                right: 0;
                height: 50px;
                background: #fff;
                padding: 12px 10px 12px 10px;
            `}
        >
            <div
                css={css`
                    width: calc(100% - 50px);
                    overflow-x: auto;
                    white-space: nowrap;
                `}
            >
                {activeKeywords.map(key => {
                    return (
                        <Button
                            small
                            key={key}
                            icon="close"
                            iconSize={16}
                            accent
                        >
                            {key}
                            <Icon name="Close" size={10} style={{ marginLeft: '6px' }} onClick={() => onRemoveSearchFilter(key)} />
                        </Button>
                    )
                })}
                {activeFilters.map(key => {
                    return (
                        <Button
                            small
                            key={key}
                            icon="close"
                            iconSize={16}
                            accent
                        >
                            {filterLabel[key]}
                            <Icon name="Close" size={10} style={{ marginLeft: '6px' }} onClick={() => onRemoveFilter(key)} />
                        </Button>
                    )
                })}
            </div>
            <Button style={{ position: 'absolute', bottom: '10px', right: '3px', border: 'none' }}>
                <Icon name="Refresh" size={22} onClick={handleResetFilter} />
            </Button>
        </div>
    )
}

MenuFilterArea.propTypes = {
    filterLabel: object,
    activeFilters: array,
    activeKeywords: array,
    onRemoveFilter: func,
    onRemoveSearchFilter: func
}
