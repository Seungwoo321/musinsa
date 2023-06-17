import React from 'react'
import AppBar from './components/AppBar'
import MenuFilter from './components/MenuFilter'
import { fetchGoods } from './api.js'
function App () {
    // const [count, setCount] = useState(0)
    const { list } = fetchGoods(0)
    console.log(list)

    return (
        <>
            <AppBar />
            <MenuFilter />
            {/* <div>

            </div> */}
        </>
    )
}

export default App
