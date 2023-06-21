export function debounce (func, delay = 300) {
    let timerId = null
    return (...args) => {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
