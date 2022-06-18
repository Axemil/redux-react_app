import {useMemo} from 'react'

export const useSearch = (sortedPosts, searchPost) => {
    return useMemo(() => {
        if(searchPost.length){
            return sortedPosts.filter(post => post.title.toLowerCase().includes(searchPost.toLowerCase()))
        } else {
            return sortedPosts
        }
    }, [sortedPosts, searchPost])
}