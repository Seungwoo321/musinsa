const API_END_POINT = 'https://static.msscdn.net'

const request = async url => {
    try {
        const response = await fetch(url)

        if (response.ok) {
            const json = await response.json()
            console.log(json)
            return json.data
        }
        throw new Error('API 통신 실패')
    } catch (error) {
        alert(error.message)
    }
}

export const fetchGoods = async (step = 0) => request(`${API_END_POINT}/musinsaUI/homework/data/goods${step}.json`)
