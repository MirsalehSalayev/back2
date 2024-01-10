import React, { useEffect, useState } from 'react';

function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3100/')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error:', error));
    }, []);


    // console.log(data);
    return (
        <div>
            {data.map((item) => (
                <div>
                    <h1>{item.name}</h1>
                </div>
            ))}
            {/* {data ? JSON.stringify(data.name) : 'Loading...'} */}
        </div>
    );
}

export default Home;
