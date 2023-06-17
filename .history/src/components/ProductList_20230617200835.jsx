import React from 'react'
export default function ProductList ({ list }) {
    return (
        <div>
            {list.map(item => item.goodsName).join('\n')}
        </div>
    )
}
