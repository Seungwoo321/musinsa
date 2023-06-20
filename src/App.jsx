import React, { useEffect, useState } from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import MenuFilterArea from './components/MenuFilterArea'
import MenuFilterSearchArea from './components/MenuFilterSearchArea'
import AutoComplete from './components/AutoComplete'
import ProductList from './components/ProductList'
import LoadingSpinner from './components/LoadingSpinner'
import { FILTER_LABEL } from './constants'
import { fetchGoods } from './api.js'
import useFilter from './hooks/useFilter.js'
import useSearch from './hooks/useSearch.js'
import useInfiniteScroll from './hooks/useInfiniteScroll'

function App () {
    const MAX_REQUST = 4
    const [list, setList] = useState([])
    const [currentRequest, setCurrentRequest] = useState(0)
    const { filterCallback, activeFilters, onAddFilter, onRemoveFilter } = useFilter()
    const {
        searchCallback,
        activeKeywords,
        searchText,
        isSearchArea,
        toggleSearchArea,
        onInputSearch,
        onAddSearchFilter,
        onRemoveSearchFilter
    } = useSearch()
    const handleInfiniteScroll = () => {
        if (currentRequest + 1 === MAX_REQUST) return
        setTimeout(() => {
            setCurrentRequest(currentRequest + 1)
            fetchGoods(currentRequest + 1).then(result => {
                setList(list.concat(result.list))
            })
        }, 1000)
    }
    useInfiniteScroll(handleInfiniteScroll)
    useEffect(() => {
        return () => {
            fetchGoods(0).then(result => {
                setList(result.list)
            })
        }
    }, [setList])
    const filterList = list.filter(filterCallback).filter(searchCallback)
    return (
        <>
            <AppBar />
            <MenuFilter
                filterLabel={FILTER_LABEL}
                activeFilters={activeFilters}
                activeKeywords={activeKeywords}
                onAddFilter={onAddFilter}
                onRemoveFilter={onRemoveFilter}
                isSearchArea={isSearchArea}
                toggleSearchArea={toggleSearchArea}
            />
            <MenuFilterArea
                filterLabel={FILTER_LABEL}
                activeFilters={activeFilters}
                activeKeywords={activeKeywords}
                onRemoveFilter={onRemoveFilter}
                onRemoveSearchFilter={onRemoveSearchFilter}
            />
            <MenuFilterSearchArea
                searchText={searchText}
                open={isSearchArea}
                openFilterArea={activeFilters.length > 0 || activeKeywords.length > 0}
                onInputSearch={onInputSearch}
                onAddSearchFilter={onAddSearchFilter}
            >
                <AutoComplete
                    completeNames={filterList.map(item => item.goodsName)}
                    searchText={searchText}
                />
            </MenuFilterSearchArea>
            <ProductList
                openFilterArea={activeFilters.length > 0 || activeKeywords.length > 0}
                openSearchArea={isSearchArea}
                list={filterList}
            />
            {currentRequest + 1 < MAX_REQUST ? <LoadingSpinner /> : null}
        </>
    )
}

export default App
