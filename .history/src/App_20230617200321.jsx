import React, { useState } from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import { fetchGoods } from './api.js'
function App () {
    const [goods, setGoods] = useState(0)
    fetchGoods(0).then(list => {
        console.log(list)
    })

    return (
        <>
            <AppBar />
            <MenuFilter />
        </>
    )
}

export default App
