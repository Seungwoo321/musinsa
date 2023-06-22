import React, { useEffect, useState, useCallback } from 'react'
import AppBar from '@/components/AppBar'
import AppFilterBar from '@/components/AppFilterBar'
import AppFilterArea from '@/components/AppFilterArea'
import AppSearchArea from '@/components/AppSearchArea'
import AutoComplete from '@/components/AutoComplete'
import ProductList from '@/components/ProductList'
import LoadingSpinner from '@/components/LoadingSpinner'
import { FILTER_LABEL, MAX_PAGE } from '@/constants'
import { fetchGoods } from '@/remote'
import useFilter from '@/hooks/useFilter'
import useSearch from '@/hooks/useSearch'
import useInfiniteScroll from '@/hooks/useInfiniteScroll'

export default function App () {
    const [list, setList] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
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
    const filterList = list.filter(filterCallback).filter(searchCallback)
    const completeNames = filterList.map(item => item.goodsName)
    const showLoadingSpinner = currentPage + 1 < MAX_PAGE
    const openFilterArea = activeFilters.length > 0 || activeKeywords.length > 0
    const handleInfiniteScroll = useCallback(() => {
        if (!filterList.length) return
        if (currentPage + 1 === MAX_PAGE) return
        setCurrentPage(currentPage + 1)
        fetchGoods(currentPage + 1).then(result => {
            setList(list.concat(result.list))
        })
    }, [currentPage, list, filterList])

    useInfiniteScroll(handleInfiniteScroll)

    return (
        <>
            <AppBar />
            <AppFilterBar
                filterLabel={FILTER_LABEL}
                activeFilters={activeFilters}
                activeKeywords={activeKeywords}
                onAddFilter={onAddFilter}
                onRemoveFilter={onRemoveFilter}
                isSearchArea={isSearchArea}
                toggleSearchArea={toggleSearchArea}
            />
            <AppFilterArea
                filterLabel={FILTER_LABEL}
                activeFilters={activeFilters}
                activeKeywords={activeKeywords}
                onRemoveFilter={onRemoveFilter}
                onRemoveSearchFilter={onRemoveSearchFilter}
            />
            <AppSearchArea
                searchText={searchText}
                open={isSearchArea}
                openFilterArea={openFilterArea}
                onInputSearch={onInputSearch}
                onAddSearchFilter={onAddSearchFilter}
                toggleSearchArea={toggleSearchArea}
            >
                <AutoComplete
                    completeNames={completeNames}
                    searchText={searchText}
                    onAddSearchFilter={onAddSearchFilter}
                    toggleSearchArea={toggleSearchArea}
                />
            </AppSearchArea>
            <ProductList
                openFilterArea={openFilterArea}
                openSearchArea={isSearchArea}
                list={filterList}
            />
            {showLoadingSpinner && <LoadingSpinner />}
        </>
    )
}
