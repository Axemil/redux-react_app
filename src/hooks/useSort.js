import {useMemo} from 'react'

export const useSort = (posts, sort) => {
     return useMemo(() => {
        if(sort.length){
            return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        } else {
            return posts
        }
    }, [posts, sort]);
}