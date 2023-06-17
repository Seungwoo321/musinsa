import React from 'react'
export default function ProductList ({ list }) {
    return (list.map(item => item.goodsName))
}
