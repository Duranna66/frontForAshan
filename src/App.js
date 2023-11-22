import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import List from "./components/List";
import Matrix from "./components/Matrix";
import Matrix2 from "./components/Matrix2";
import MatrixTest from "./components/Matrix2";
import Button from "./components/Button";

function App() {
    return (
        <div className="App">
            <MatrixTest size={3}></MatrixTest>
        </div>

    );
}

export default App;