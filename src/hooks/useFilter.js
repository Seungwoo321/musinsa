import { useCallback, useReducer } from 'react'
import { ACTION_TYPE } from '../constants'

const useFilter = () => {
    const initialState = {
        filterCallback: () => true,
        activeFilters: []
    }
    const [filterState, dispatch] = useReducer(reducer, initialState)
    return {
        ...filterState,
        onAddFilter: useCallback(filterKey => {
            dispatch({ type: ACTION_TYPE.ADD_FILTER, filterKey })
        }, []),
        onRemoveFilter: useCallback(filterKey => {
            dispatch({ type: ACTION_TYPE.REMOVE_FILTER, filterKey })
        }, [])
    }
}
const filterFunc = {
    sale: item => item.isSale && !item.isSoldOut,
    exclusive: item => item.isExclusive && !item.isSoldOut,
    soldOut: item => item.isSoldOut,
    default: item => !item.isSoldOut
}
function makeFilterState (activeFilters, filterKey, isAdd = false) {
    const newActiveFilters = [...activeFilters.filter(value => value !== filterKey)]
    if (isAdd) newActiveFilters.push(filterKey)
    return {
        activeFilters: newActiveFilters,
        filterCallback: newActiveFilters.length
            ? item => {
                return newActiveFilters.some(key => filterFunc[key](item))
            }
            : filterFunc.default
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

export default useFilter
