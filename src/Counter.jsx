import React, {useState} from 'react';
import axios from "axios";

function Counter() {
    const data = /*seState([{id: 1, title: 'list', items: [{id: 1, title: 'aslfnalsknf'},
            {id: 2, title: 'aslfnalsknf'}]}])*/[]
    let response =  axios.get("http://localhost:8080/search/all")
    console.log(response.data)
    return (
        <div className="item">
            {data.map(s => s.name)}
        </div>
    );
}

export default Counter;