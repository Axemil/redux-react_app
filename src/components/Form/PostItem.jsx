// у импортов есть своя расстановка приоритетов
// не путай кавычки
import React from 'react';
import Button from "../UI/button/Button";
import {useDispatch} from "react-redux";
import {deletePost} from "../../redux/reducers/postSlice";

// ненужные элементы не передавай (number)
const PostItem = ({info, number}) => {
    //используй деструктуризацию по максимуму, избегай info.id, info.title
    // const {id, title} = info
    const dispatch = useDispatch()
    const deletePostItem = () => dispatch(deletePost(info.id))
    return (
        <div className="postItem">
            <div className="postItem_block">
                <p>{info.id} - {info.title}</p>
                <p>{info.body}</p>
            </div>
            <Button onClick={deletePostItem}>X</Button>
        </div>
    );
};

export default PostItem;
