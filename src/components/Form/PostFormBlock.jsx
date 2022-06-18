// у импортов есть своя расстановка приоритетов
// не путай кавычки
import React from 'react';
import PostFormAdd from "./PostFormAdd";
import PostFilterBlock from "./PostFilterBlock";

const PostForm = ({title}) => {
    return (
        <div className="PostForm">
            <h1>{title}</h1>
            <PostFormAdd />
            <PostFilterBlock />
        </div>
    );
};

export default PostForm;
