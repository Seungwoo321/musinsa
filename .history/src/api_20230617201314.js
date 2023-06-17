const API_END_POINT = 'https://static.msscdn.net'

const cache = {}

const request = async url => {
    if (cache[url]) {
        return cache[url]
    }
    try {
        const response = await fetch(url)
        if (response.ok) {
            const json = await response.json()
            cache[url] = json.data
            return json.data
        }
        throw new Error('API 통신 실패')
    } catch (error) {
        alert(error.message)
    }
}

export const fetchGoods = async (step = 0) => request(`${API_END_POINT}/musinsaUI/homework/data/goods${step}.json`)
