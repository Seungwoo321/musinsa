import { useCallback, useReducer } from 'react'
import { ACTION_TYPE } from '@/constants'

const defaultFilter = item => !item.isSoldOut

const initialState = {
    filterCallback: defaultFilter,
    activeFilters: []
}

function makeFilterState (activeFilters, filterKey, isAdd = false) {
    const newActiveFilters = [...activeFilters.filter(value => value !== filterKey)]
    if (isAdd) newActiveFilters.push(filterKey)
    const filterFunc = {
        sale: item => newActiveFilters.includes('soldOut') ? item.isSale : item.isSale && !item.isSoldOut,
        exclusive: item => newActiveFilters.includes('soldOut') ? item.isExclusive : item.isExclusive && !item.isSoldOut,
        soldOut: () => true
    }
    return {
        activeFilters: newActiveFilters,
        filterCallback: newActiveFilters.length
            ? item => newActiveFilters.every(key => filterFunc[key](item))
            : defaultFilter
    }
}
function reducer (state, action) {
    switch (action.type) {
    case ACTION_TYPE.ADD_FILTER:
        return {
            ...state,
            ...makeFilterState(state.activeFilters, action.filterKey, true)
        }
    case ACTION_TYPE.REMOVE_FILTER:
        return {
            ...state,
            ...makeFilterState(state.activeFilters, action.filterKey)
        }
    default:
        return state
    }
}

const useFilter = () => {
    const [filterState, dispatch] = useReducer(reducer, initialState)
    const onAddFilter = useCallback(filterKey => {
        dispatch({ type: ACTION_TYPE.ADD_FILTER, filterKey })
    }, [])
    const onRemoveFilter = useCallback(filterKey => {
        dispatch({ type: ACTION_TYPE.REMOVE_FILTER, filterKey })
    }, [])
    return {
        ...filterState,
        onAddFilter,
        onRemoveFilter
    }
}

export default useFilter
