import React, {useEffect} from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";
import PostItem from "../Form/PostItem";
import {useDispatch, useSelector} from "react-redux";
import {useFetch} from "../../hooks/useFetch";
import {fetchTodo} from "../../API/fetchTodo";
import {addPost} from "../../redux/reducers/postSlice";
import {useSort} from "../../hooks/useSort";
import {useSearch} from "../../hooks/useSearch";

const Posts = () => {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.loading.value)
    const fetch = useFetch( async () => {
        const fetchedPosts = await fetchTodo(0,5)
        dispatch(addPost(fetchedPosts))
    })
    const posts = useSelector(state => state.posts.value)
    const selectSort = useSelector(state => state.select.value)
    const searchPost = useSelector(state => state.search.value)

    const sortedPosts = useSort(posts, selectSort)
    const sortedAndSearchedPosts = useSearch(sortedPosts, searchPost)

    useEffect( () => {
        fetch()
    }, [])
    return (
            <div>
                {sortedAndSearchedPosts.length ?
                    <TransitionGroup>
                        {sortedAndSearchedPosts.map((item, index) =>{
                            return <CSSTransition
                                key={item.id}
                                timeout={500}
                                classNames="item">
                                <PostItem info={item} number={index}/>
                            </CSSTransition>
                        })}
                    </TransitionGroup> :
                    <h3 className="listPost_empty">Список пуст</h3>
                }
            </div>
    );
};

export default Posts;