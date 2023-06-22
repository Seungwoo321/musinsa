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
        throw new Error('데이터를 가져오는 중에 오류가 발생했습니다')
    } catch (error) {
        alert(error.message)
    }
}

export function fetchGoods (page = 0) {
    return request(`${API_END_POINT}/musinsaUI/homework/data/goods${page}.json`)
}
