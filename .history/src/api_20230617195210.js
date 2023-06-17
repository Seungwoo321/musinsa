const API_END_POINT = 'https://static.msscdn.net/musinsaUI/homework/data/'

const request = async url => {
    const response = await fetch(url)

    if (response.ok) {
        const json = await response.json()
        return json
    }
    throw new Error('Server Error')
}

export const fetchGoods = async step => request(`${API_END_POINT}/`)
