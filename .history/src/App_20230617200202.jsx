import React from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import { fetchGoods } from './api.js'
function async App () {
    fetchGoods(0)

    return (
        <>
            <AppBar />
            <MenuFilter />
        </>
    )
}

export default App
