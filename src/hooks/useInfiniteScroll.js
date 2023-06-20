import { useEffect } from 'react'

function useInfiniteScroll (callback) {
    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1
            if (isBottom) {
                callback()
            }
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [callback])
}

export default useInfiniteScroll
