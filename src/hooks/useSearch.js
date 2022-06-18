import {useMemo} from 'react'

export const useSearch = (sortedPosts, searchPost) => {
    // не совсем понятно, какая обработка ошибок поиска
    return useMemo(() => {
        if(searchPost.length){
            return sortedPosts.filter(post => post.title.toLowerCase().includes(searchPost.toLowerCase()))
        } else {
            return sortedPosts
        }
    }, [sortedPosts, searchPost])
}
