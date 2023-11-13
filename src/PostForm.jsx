import React, {useRef, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/MyButton";
import PostList from "./PostList";

function PostForm({create}) {
    const bodyInputRef = useRef();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [index, setIndex] = useState(1)
    const addnewPost = (e) => {
        e.preventDefault();
        setIndex(index + 1)
        const newPost = {
            id: index,
            title,
            body
        }
        create(newPost)
        setTitle("");
        setBody("")
    }
    return (
        <div>
        <form>
            <MyInput  value={title} onChange={e => setTitle(e.target.value)} type={"text"} placeholder={"write smth"} ref={bodyInputRef}></MyInput>
            <MyInput  value={body} onChange={e => setBody(e.target.value)} type={"text"} placeholder={"write smth"} ref={bodyInputRef}></MyInput>
            <MyButton onClick={addnewPost}>создать новый пост</MyButton>
        </form>
        </div>
    )
}

export default PostForm;