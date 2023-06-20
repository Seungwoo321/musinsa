import React, { useState, useEffect } from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import MenuFilterSearchArea from './components/MenuFilterSearchArea'
import ProductList from './components/ProductList'
import { fetchGoods } from './api.js'
import MenuFilterArea from './components/MenuFilterArea'
import { FILTER_LABEL } from './constants'
function App () {
    const [items, setItems] = useState([])
    const [filterItems, setFilterItems] = useState([])
    const [showSearchArea, setShowSearchArea] = useState(false)
    const [showFilterArea, setShowFilterArea] = useState(false)
    const [activeKeys, setActiveKeys] = useState([])
    useEffect(() => {
        fetchGoods(0).then(result => {
            setItems(result.list)
            setFilterItems(result.list.filter(item => !item.isSoldOut))
        })
    }, [])
    const handleFilterActive = (fn, keys) => {
        setShowFilterArea(keys.length > 0)
        setActiveKeys(keys)
        setFilterItems(items.filter(fn))
    }
    const handleSearchActive = () => {

    }
    const handleSearchSelect = (isActive) => {
        setShowSearchArea(isActive)
    }
    const handleCloseFilter = (keys) => {
        setActiveKeys(keys)
    }
    return (
        <>
            <AppBar />
            <MenuFilter
                filterLabel={FILTER_LABEL}
                activeKeys={activeKeys}
                onFilterActive={handleFilterActive}
                onSearchActive={handleSearchActive}
                onSearchSelect={handleSearchSelect}
            />
            <MenuFilterArea
                filterLabel={FILTER_LABEL}
                show={showFilterArea}
                activeKeys={activeKeys}
                onCloseFilter={handleCloseFilter}
            />
            <MenuFilterSearchArea
                show={showSearchArea}
                showFilterArea={showFilterArea}
            />
            <ProductList
                showFilterArea={showFilterArea}
                showSearchArea={showSearchArea}
                list={filterItems}
            />
        </>
    )
}

export default App
