import React from 'react';
import './App.css';
import MyButton from "./UI/MyButton";
function PostItem(props) {
    return (
        <div className="PostItem">
            <div className="post">
                <div className="post_content">
                    <strong>{props.post.id}. {props.post.name}</strong>
                <MyButton>add</MyButton>
                </div>
            </div>

        </div>
    );
}
export default PostItem;