import React from 'react';
import Button from "../UI/button/Button";
import {useDispatch} from "react-redux";
import {deletePost} from "../../redux/reducers/postSlice";

const PostItem = ({info, number}) => {
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