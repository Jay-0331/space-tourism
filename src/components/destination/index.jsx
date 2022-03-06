import { useEffect, useState } from 'react';
import './destination.css'
import axios from 'axios'

const Destination = () => {
    const [destinations, setDestinations] = useState([]);
    const [destDetails, setDestDetails] = useState();

    useEffect(() => {
        axios.get('data.json').then((res)=> {
            setDestinations(res.data.destinations);
        })
    }, []);

    useEffect(() => {
        setDestDetails(...(destinations.filter(element => element.name === "Moon")))
    }, [destinations])

    const changeDestination = (e) => {
        let info = destinations.filter(element => element.name === e.target.id)
        setDestDetails(...(info))
    };

    return (
        <main className="destination">
            <div className="destination-wrapper">
                <div className="destinationimage-wrapper">
                    <p><span>01</span>PICK YOUR DESTINATION</p>
                    {destDetails !== undefined && <DestinationImage data={destDetails}/>}
                </div>
                <div className="destinationinfo-wrapper">
                    <ul className="destination-nav">
                        <li className={`destination-nav-link ${destDetails !== undefined && destDetails.name === "Moon" ? "active" : ""}`} id="Moon" onClick={changeDestination}>MOON<div className="destination-hover" /></li>
                        <li className={`destination-nav-link ${destDetails !== undefined && destDetails.name === "Mars" ? "active" : ""}`} id="Mars" onClick={changeDestination}>MARS<div className="destination-hover" /></li>
                        <li className={`destination-nav-link ${destDetails !== undefined && destDetails.name === "Europa" ? "active" : ""}`} id="Europa" onClick={changeDestination}>EUROPA<div className="destination-hover" /></li>
                        <li className={`destination-nav-link ${destDetails !== undefined && destDetails.name === "Titan" ? "active" : ""}`} id="Titan" onClick={changeDestination}>TITAN<div className="destination-hover" /></li>
                    </ul>
                    {destDetails !== undefined && <DestinationInfo data={destDetails}/>}
                </div>
            </div>
        </main>
    )
}


const DestinationImage = ({data}) => {
    return <img className="destination-image" src={process.env.PUBLIC_URL+data.images.png} alt={data.name+" image"}/>
}

const DestinationInfo = ({data}) => {
    return(
        <div>
            <h1 className="destinationinfo-title">
                {data.name}
            </h1>
            <p className="destinationinfo-description">
                {data.description}
            </p>
            <div className="timedistance-wrapper">
                <span className="destinationinfo-distance">
                    <p className="subheading-2">AVG. DISTANCE</p>    
                    <p className="subheading-1">{data.distance}</p>
                </span>
                <span className="destinationinfo-time">
                    <p className="subheading-2">EST. TRAVEL TIME</p>    
                    <p className="subheading-1">{data.travel}</p>
                </span>
            </div>
        </div>
    )
}

export default Destination