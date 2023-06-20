import React, { useEffect, useState } from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import MenuFilterArea from './components/MenuFilterArea'
import MenuFilterSearchArea from './components/MenuFilterSearchArea'
import ProductList from './components/ProductList'
import { FILTER_LABEL } from './constants'
import { fetchGoods } from './api.js'
import useFilter from './hooks/useFilter.js'
import useSearch from './hooks/useSearch.js'
function App () {
    const [list, setList] = useState([])
    const { filterCallback, activeFilters, onAddFilter, onRemoveFilter } = useFilter()
    const { searchCallback, activeKeywords, searchText, isSearchArea, toggleSearchArea, onInputSearch, onAddSearchFilter, onRemoveSearchFilter } = useSearch()
    useEffect(() => {
        return () => {
            fetchGoods(0).then(result => {
                setList(result.list)
            })
        }
    }, [setList])
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
            />
            <ProductList
                openFilterArea={activeFilters.length > 0 || activeKeywords.length > 0}
                openSearchArea={isSearchArea}
                list={list.filter(filterCallback).filter(searchCallback)}
            />
        </>
    )
}

export default App
