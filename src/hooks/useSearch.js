import { useCallback, useReducer } from 'react'
import { ACTION_TYPE } from '../constants'

const defaultFilter = () => true

const initialState = {
    searchText: '',
    activeKeywords: [],
    isSearchArea: false,
    searchCallback: defaultFilter
}

function makeSearchState (activeKeywords, keyword, isAdd = false) {
    const newActiveKeywords = ((isAdd && [keyword]) || []).concat([...activeKeywords.filter(value => value !== keyword)])
    return {
        activeKeywords: newActiveKeywords,
        searchCallback: newActiveKeywords.length
            ? item => newActiveKeywords.every(keyword => item.goodsName.includes(keyword))
            : defaultFilter
    }
}

function reducer (state, action) {
    switch (action.type) {
    case ACTION_TYPE.ADD_SEARCH_FILTER:
        return {
            ...state,
            ...makeSearchState(state.activeKeywords, action.keyword.toString().trim(), true)
        }
    case ACTION_TYPE.REMOVE_SEARCH_FILTER:
        return {
            ...state,
            ...makeSearchState(state.activeKeywords, action.keyword.toString().trim())
        }
    case ACTION_TYPE.TOGGLE_SEARCH_AREA:
        return {
            ...state,
            isSearchArea: !state.isSearchArea
        }
    case ACTION_TYPE.INPUT_SEARCH_TEXT:
        return {
            ...state,
            searchText: action.keyword
        }
    default:
        return state
    }
}

const useSearch = () => {
    const [searchState, dispatch] = useReducer(reducer, initialState)
    const toggleSearchArea = useCallback(() => {
        dispatch({ type: ACTION_TYPE.INPUT_SEARCH_TEXT, keyword: '' })
        dispatch({ type: ACTION_TYPE.TOGGLE_SEARCH_AREA })
    }, [])
    const onInputSearch = useCallback(keyword => {
        dispatch({ type: ACTION_TYPE.INPUT_SEARCH_TEXT, keyword })
    }, [])
    const onAddSearchFilter = useCallback(keyword => {
        dispatch({ type: ACTION_TYPE.INPUT_SEARCH_TEXT, keyword: '' })
        dispatch({ type: ACTION_TYPE.ADD_SEARCH_FILTER, keyword })
    }, [])
    const onRemoveSearchFilter = useCallback(keyword => {
        dispatch({ type: ACTION_TYPE.REMOVE_SEARCH_FILTER, keyword })
    }, [])
    return {
        ...searchState,
        toggleSearchArea,
        onInputSearch,
        onAddSearchFilter,
        onRemoveSearchFilter
    }
}

export default useSearch
