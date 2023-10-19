import {useState} from "react";
import axios from 'axios';
import React from "react";

function App() {

    const [data, setData] = useState(null);

    // const loadData = () => {
    //     //axios api로
    //     axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
    //
    //         console.log(response);
    //         setData(response.data);
    //     })
    //
    // }

    async function loadData( ){

        try{
            const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=88c4d6b7a8d44f45bc448ae3c107dfa7');
            console.log(response);
            setData(response.data);
        }catch (error){

        }


    }


    return (
        <div>

            <div>

                <button onClick={loadData}> 데이터 불러오기</button>

            </div>

            {data && <textarea rows={7} value={JSON.stringify(data)} readOnly={true}>
            </textarea>}


        </div>


    );
}

export default App;
