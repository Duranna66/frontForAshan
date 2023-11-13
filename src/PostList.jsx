import React, {useState} from 'react';
import PostItem from "./PostItem";

function PostList({posts, title}) {
    return (

        <div className="App">
            <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map(post => <PostItem  post={post} key={post.id}/>)}
        </div>
    );
}

export default PostList;