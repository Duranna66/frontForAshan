import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Matrix from "./components/Matrix";
import Matrix2 from "./components/Matrix2";
import MatrixTest from "./components/Matrix2";
import SaveButton from "./components/SaveButton";
import InputPrison from "./components/InputPrison";

function App() {
    const [appState, setAppState] = useState([])
    const [size, setSize] = useState(0)
    useEffect(() => {
        const apiUrl = "http://localhost:8080/search/size";
        axios.get(apiUrl).then((resp) => {
            const gotSize = resp.data;
            setSize(gotSize.size);
        });
    }, []);
    return (

        <div className="App">
            <InputPrison setSize={setSize}></InputPrison>
            <MatrixTest size={size} appState={appState} setAppState={setAppState}></MatrixTest>
        </div>

    );
}

export default App;