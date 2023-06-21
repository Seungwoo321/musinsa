import { useEffect } from 'react'
import { debounce } from '../libs'

function useInfiniteScroll (callback) {
    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1
            if (isBottom) {
                callback()
            }
        }
        const debouncedHandleScroll = debounce(handleScroll, 500)
        window.addEventListener('scroll', debouncedHandleScroll)

        return () => {
            window.removeEventListener('scroll', debouncedHandleScroll)
        }
    }, [callback])
}

export default useInfiniteScroll
