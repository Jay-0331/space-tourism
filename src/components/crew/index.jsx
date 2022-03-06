import React, { useEffect, useState } from 'react'
import './crew.css'
import axios from 'axios';

const Crew = () => {
    const [crews, setCrews] = useState([]);
    const [crewDetails, setcrewDetails] = useState();

    useEffect(() => {
        axios.get('data.json').then((res)=> {
            setCrews(res.data.crew);
        })
    }, []);

    useEffect(() => {
        setcrewDetails(...(crews.filter(element => element.name === "Douglas Hurley")))
    }, [crews])
    
    const changecrew = (e) => {
        let info = crews.filter(element => element.name === e.target.id)
        setcrewDetails(...(info))
    }
    return (
        <main className="crew">
            <div className="crew-wrapper">
                <p className="crew-heading"><span>02</span>MEET YOUR CREW</p>
                <div className="crewinfo-wrapper">
                    {crewDetails !== undefined && <CrewDescription data={crewDetails}/>}
                    <div className="crew-nav">
                        <div className={crewDetails !== undefined && crewDetails.name === "Douglas Hurley" ? "active" : "" } id="Douglas Hurley" onClick={changecrew}></div>
                        <div className={crewDetails !== undefined && crewDetails.name === "Mark Shuttleworth" ? "active" : "" } id="Mark Shuttleworth" onClick={changecrew}></div>
                        <div className={crewDetails !== undefined && crewDetails.name === "Victor Glover" ? "active" : "" } id="Victor Glover" onClick={changecrew}></div>
                        <div className={crewDetails !== undefined && crewDetails.name === "Anousheh Ansari" ? "active" : "" } id="Anousheh Ansari" onClick={changecrew}></div>
                    </div>
                </div>
                {crewDetails !== undefined && <CrewImage data={crewDetails}/>}
            </div>
        </main>
    )
}

const CrewImage = ({data}) => {
    return (
        <div className="crewimage-wrapper">
            <img src={process.env.PUBLIC_URL+data.images.png} alt={data.name + " image"}/>
        </div>
    )
}

const CrewDescription = ({data}) => {
    return (
        <div className="crew-description">
            <p className="crew-role">{data.role}</p>
            <h1 className="crew-name">{data.name}</h1>
            <p className="crew-bio">
                {data.bio}
            </p>
        </div>
    )
}

export default Crew