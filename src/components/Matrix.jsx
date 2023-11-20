import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Matrix({ mass }) {

    let data = { id: '1' };
    axios.post('http://localhost:8080/search/test', data)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            // Обработка ошибки
        });
    return (
        <div></div>
    );
}

export default Matrix;