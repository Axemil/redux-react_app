import React, {useEffect} from 'react';
import Posts from "./Posts";
// никогда не оставляй неиспользуемые импорты
import {useSelector} from "react-redux";


const PostBlock = () => {
    return (
        <div className="PostBlock">
            <Posts />
        </div>
    );
};

export default PostBlock;
