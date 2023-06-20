import React from 'react'
import { object, bool, array, func } from 'prop-types'
import { css } from '@emotion/react'
import Button from './design/Button'
import Icon from './design/Icon'
import { filterFunc } from '../libs'
export default function MenuFilterArea ({ show, filterLabel, activeKeys, onCloseFilter }) {
    const handleClick = (key) => {
        onCloseFilter(activeKeys.filter(value => value !== key))
    }
    return (
        <div
            css={css`
                display: ${show ? 'block' : 'none'};
                position: fixed;
                z-index: 2;
                top: 105px;
                left: 0;
                right: 0;
                height: 50px;
                background: #fff;
                padding: 12px 10px;
            `}
        >
            {activeKeys.map(key => {
                return (
                    <Button
                        small
                        key={key}
                        icon="close"
                        iconSize={16}
                        accent
                        onClick={() => handleClick(key)}
                    >
                        {filterLabel[key]}
                        <Icon name="Close" size="10" style={{ marginLeft: '6px' }} />
                    </Button>
                )
            })}
        </div>
    )
}

MenuFilterArea.proptype = {
    show: bool,
    filterLabel: object,
    activeKeys: array,
    onCloseFilter: func
}
