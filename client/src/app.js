import React, { useEffect, useState } from 'react';
import { fetchData } from './api';

function App() {
    const [data, setData] = useState('');

    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            setData(result);
        };
        getData();
    }, []);

    return (
        <div>
            <h1>React + Node.js App</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;
