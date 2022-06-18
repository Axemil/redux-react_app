import React, {useEffect} from "react";
import {useSelector} from "react-redux";
import PostFormBlock from "./components/Form/PostFormBlock";
import PostBlock from "./components/Posts/PostBlock";
import ErrorNotification from "./components/UI/error/ErrorNotification";


function App() {
    const posts = useSelector(state => state.posts.value)
    return (
        <div className="App">
            <ErrorNotification />
            <PostFormBlock title={"Todo-list App"} />
            <PostBlock />
        </div>
    );
}

export default App;
