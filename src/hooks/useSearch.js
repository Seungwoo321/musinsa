import { useCallback, useReducer } from 'react'
import { ACTION_TYPE } from '../constants'

const useSearch = () => {
    const initialState = {
        searchText: '',
        activeKeywords: [],
        isSearchArea: false,
        searchCallback: defaultFilter
    }
    const [searchState, dispatch] = useReducer(reducer, initialState)
    return {
        ...searchState,
        toggleSearchArea: useCallback(() => {
            dispatch({ type: ACTION_TYPE.TOGGLE_SEARCH_AREA })
        }, []),
        onInputSearch: useCallback(keyword => {
            dispatch({ type: ACTION_TYPE.INPUT_SEARCH_TEXT, keyword })
        }, []),
        onAddSearchFilter: useCallback(keyword => {
            dispatch({ type: ACTION_TYPE.INPUT_SEARCH_TEXT, keyword: '' })
            dispatch({ type: ACTION_TYPE.ADD_SEARCH_FILTER, keyword })
        }, []),
        onRemoveSearchFilter: useCallback(keyword => {
            dispatch({ type: ACTION_TYPE.REMOVE_SEARCH_FILTER, keyword })
        }, [])
    }
}
const defaultFilter = () => true

function makeSearchState (activeKeywords, keyword, isAdd = false) {
    const newActiveKeywords = [...activeKeywords.filter(value => value !== keyword)]
    if (isAdd) newActiveKeywords.push(keyword)
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
            ...makeSearchState(state.activeKeywords, action.keyword, true)
        }
    case ACTION_TYPE.REMOVE_SEARCH_FILTER:
        return {
            ...state,
            ...makeSearchState(state.activeKeywords, action.keyword)
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

export default useSearch
