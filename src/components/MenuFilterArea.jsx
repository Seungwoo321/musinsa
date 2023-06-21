import React from 'react'
import { css } from '@emotion/react'
import { object, array, func } from 'prop-types'
import Button from './Button'
import Icon from './Icon'

export default function MenuFilterArea ({ filterLabel, activeFilters, activeKeywords, onRemoveFilter, onRemoveSearchFilter }) {
    const isVisible = activeFilters.length || activeKeywords.length
    return (
        <div
            css={css`
                display: ${isVisible ? 'block' : 'none'};
                position: fixed;
                z-index: 3;
                top: 105px;
                left: 0;
                right: 0;
                height: 50px;
                background: #fff;
                padding: 12px 10px;
                overflow: scroll;
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
    )
}

MenuFilterArea.propTypes = {
    filterLabel: object,
    activeFilters: array,
    activeKeywords: array,
    onRemoveFilter: func,
    onRemoveSearchFilter: func
}
