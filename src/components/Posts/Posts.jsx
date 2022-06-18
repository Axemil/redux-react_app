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
    // не оставляй неиспользуемые переменные
    const loading = useSelector(state => state.loading.value)
    // наименования фетчинга должны быть конретнее
    const fetch = useFetch( async () => {
        // может стоило бы fetchedPosts сохранять в каком-то стэйте и использовать мемоизацию данных?
        const fetchedPosts = await fetchTodo(0,5)
        dispatch(addPost(fetchedPosts))
    })
    // все селекторы стоит размещать выше, как и базовые созданные переменные
    const posts = useSelector(state => state.posts.value)
    const selectSort = useSelector(state => state.select.value)
    const searchPost = useSelector(state => state.search.value)

    const sortedPosts = useSort(posts, selectSort)
    const sortedAndSearchedPosts = useSearch(sortedPosts, searchPost)

    useEffect( () => {
        // здесь можно было бы работать с фиксацией с выводом респонса
        // в стэйте нового элемента условного fetchedPosts
        fetch()
    }, [])
    return (
        // лучше не засорять узловым элементом дом дерево, используй "<></>"
        // на 34 строке тебе следует вынести узел в отдельный компонент
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
