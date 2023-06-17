const API_END_POINT = ''

const request = async url => {
    const response = await fetch(url)

    if (response.ok) {
        const josn = await response.json()
        return json
    }
    throw new Error('Server Error')
}
