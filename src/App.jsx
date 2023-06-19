import React, { useState } from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import MenuSearch from './components/MenuSearch'
import ProductList from './components/ProductList'
import { fetchGoods } from './api.js'
function App () {
    const [goods, setGoods] = useState(0)
    fetchGoods(0).then(result => {
        setGoods(result.list)
    })
    const handleFilter = () => {
        console.log(goods)
    }
    return (
        <>
            <AppBar />
            <MenuFilter
                onFilter={handleFilter}
            />
            <MenuSearch />
            <ProductList
                list={goods}
            />
        </>
    )
}

export default App
