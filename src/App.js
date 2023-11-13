import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Matrix from "./components/Matrix";
import Matrix2 from "./components/Matrix2";

function App() {
const boards = [{id:1, item:[{id:1, text:'qwe'}]},
    {id:2,item:[{id:1, text:'qwe1'}]},
            {id:3, item:[{id:1, text:'qwe2'}]},
                    {id:4, item:[{id:1, text:'qwe3'}]},
    {id:3, item:[{id:1, text:'qwe5'}]}]
    return (
        <div className="App">
            <Matrix></Matrix>
            <List></List>
        </div>
    );
}

export default App;