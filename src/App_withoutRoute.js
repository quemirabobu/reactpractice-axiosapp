import {useCallback, useState} from "react";
import axios from 'axios';
import React from "react";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

function App() {

    const [category, setCategory] = useState('all');
    const changeCategory = useCallback((category) => {
        setCategory(() => category);
    }, []);

    const a = [];
    const b = [];
    const c = [];
    const d = [];


    return (

        <>
            <Categories  category={category} changeCategory={changeCategory}  ></Categories>
            <NewsList  category={category} ></NewsList>
        </>
    );
}

export default App;
