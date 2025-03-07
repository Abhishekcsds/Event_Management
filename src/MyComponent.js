import React, { useEffect, useState } from "react";

const MyComponent = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000")
            .then((res) => res.text())
            .then((data) => setMessage(data))  // Store backend response in state
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return <div><h2>Backend Response:</h2> <p>{message}</p></div>;
};

export default MyComponent;
