const API_END_POINT = 'https://static.msscdn.net/'

const request = async url => {
    const response = await fetch(url)

    if (response.ok) {
        const json = await response.json()
        return json
    }
    throw new Error('Server Error')
}

export const fetchGoods = async step = 0 => request(`${API_END_POINT}/musinsaUI/homework/data/goods${step}.json`)
