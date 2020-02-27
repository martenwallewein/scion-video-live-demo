import React, { useState, useEffect } from "react";
import axios from "axios";
export const ScionHeader = (props) => {

    const [stats, setStats] = useState();

    useEffect(() => {
        setTimeout(() => axios.get("http://49.12.6.5:81/__stats").then(res => setStats(res.data)), 1000);
        setInterval(() => {
            axios.get("http://49.12.6.5:81/__stats").then(res => setStats(res.data));
        }, 2000);
    }, [props.source])

    console.log(stats);

    return (
        <div>
            <h1>SCION Video Player</h1> 
            <hr />
            {
                stats ? [
                    <h3>SCION Ingress Proxy: {stats.local}</h3>,
                    <h3>SCION Egress Proxy: {stats.remote}</h3>,
                    <h3>Selected Path: {stats.path}</h3>
                ] : <h3>Loading...</h3>
            }
        </div>
    )
};