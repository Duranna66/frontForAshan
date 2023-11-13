import React from 'react';
import { List } from 'react-virtualized';
import './App.css';

function VirtualScroll() {
    // Генерируйте список данных, который вы хотите отобразить
    const data = Array.from({ length: 1000 }, (_, index) => `Item ${index}`);

    // Функция для отображения каждого элемента списка
    const rowRenderer = ({ index, key, style }) => (
        <div key={key} style={style}>
            {data[index]}
        </div>
    );

    return (
        <List
            height={400} // Высота контейнера списка
            width={300} // Ширина контейнера списка
            rowCount={data.length} // Количество элементов в списке
            rowHeight={50} // Высота каждого элемента в списке
            rowRenderer={rowRenderer} // Функция для отображения каждого элемента
        />
    );
}

export default VirtualScroll;