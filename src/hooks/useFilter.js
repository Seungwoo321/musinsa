const filterFunc = {
    sale: item => item.isSale && !item.isSoldOut,
    exclusive: item => item.isExclusive && !item.isSoldOut,
    soldOut: item => item.isSoldOut
}

const useFilter = () => {
    const onCloseFilter = () => {

    }

    return {
        filterFunc,
        onCloseFilter
    }
}

export default useFilter
