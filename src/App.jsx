import React, { useEffect, useState, useCallback } from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import MenuFilterArea from './components/MenuFilterArea'
import MenuFilterSearchArea from './components/MenuFilterSearchArea'
import AutoComplete from './components/AutoComplete'
import ProductList from './components/ProductList'
import LoadingSpinner from './components/LoadingSpinner'
import { FILTER_LABEL, MAX_REQUST } from './constants'
import { fetchGoods } from './api.js'
import useFilter from './hooks/useFilter.js'
import useSearch from './hooks/useSearch.js'
import useInfiniteScroll from './hooks/useInfiniteScroll'

export default function App () {
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

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetchGoods(0)
            setList(result.list)
        }
        fetchData()
    }, [])

    const handleInfiniteScroll = useCallback(() => {
        if (currentRequest + 1 === MAX_REQUST) return
        setCurrentRequest(currentRequest + 1)
        fetchGoods(currentRequest + 1).then(result => {
            setList(list.concat(result.list))
        })
    }, [currentRequest, list])

    useInfiniteScroll(handleInfiniteScroll)

    const filterList = list.filter(filterCallback).filter(searchCallback)
    const showLoadingSpinner = currentRequest + 1 < MAX_REQUST

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
            {showLoadingSpinner && <LoadingSpinner />}
        </>
    )
}
