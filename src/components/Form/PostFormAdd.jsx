import React, {useState} from 'react';
import Input from "../UI/Input/Input";
import Button from "../UI/button/Button";
import {useDispatch} from "react-redux";
import {addPost} from "../../redux/reducers/postSlice";
import {setError} from "../../redux/reducers/errorHandlerSlice";

const PostFormAdd = () => {
    const dispatch = useDispatch()
    const [newPost, setNewPost] = useState({
        title: "",
        body: ""
    })
    const submitPost = () => {
        if(newPost.title.length && newPost.body.length){
            dispatch(addPost([{
                id: Date.now(),
                ...newPost
            }]))
            setNewPost({
                title: "",
                body: ""
            })
            dispatch(setError({
                flag: false,
                errorText: ""
            }))
        } else {
            dispatch(setError({
                flag: true,
                errorText: "Поля не должны быть пустыми"
            }))
        }
    }
    return (
        <div className="post_form__block">
            <Input onChange={event => setNewPost({...newPost, title: event.target.value})}
                   value={newPost.title}
                   type="text"
                   placeholder={"Введите название поста"} />
            <Input onChange={event => setNewPost({...newPost, body: event.target.value})}
                   value={newPost.body}
                   type="text"
                   placeholder={"Введите текст поста"} />
            <Button onClick={submitPost}>Отправить</Button>
        </div>
    );
};

export default PostFormAdd;