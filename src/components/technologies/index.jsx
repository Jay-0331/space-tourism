import { useState, useEffect } from 'react'
import './technologies.css'
import axios from 'axios';

const Technologies = () => {
    const [technologies, setTechnologies] = useState([]);
    const [techDetails, setTechDetails] = useState();
    const [isLandscape, setIsLandscape] = useState(false);

    useEffect(() => {
        axios.get('data.json').then((res)=> {
            setTechnologies(res.data.technology);
        })
    }, []);

    useEffect(() => {
        setTechDetails(...(technologies.filter(element => element.name === "Launch vehicle")))
    }, [technologies]);

    window.addEventListener('resize', () => {
        if(window.screen.width < 1101){
            setIsLandscape(true)
        }
        else {
            setIsLandscape(false)
        }
    })

    const changetech = (e) => {
        let info = technologies.filter(element => element.name === e.target.value)
        setTechDetails(...(info))
    }

    return (
        <main className="technologies">
            <div className="tech-wrapper">
                <p className="tech-heading"><span>03</span>SPACE LAUNCH 101</p>
                <div className="techinfo-wrapper">
                    <div className="tech-nav">
                        <button value="Launch vehicle" className={techDetails !== undefined && techDetails.name === "Launch vehicle"? "active" : ""} onClick={changetech} >1</button>    
                        <button value="Spaceport" className={techDetails !== undefined && techDetails.name === "Spaceport"? "active" : ""} onClick={changetech} >2</button>    
                        <button value="Space capsule" className={techDetails !== undefined && techDetails.name === "Space capsule"? "active" : ""} onClick={changetech} >3</button>    
                    </div>
                    {techDetails !== undefined && <TechInfo data={techDetails}/>}
                </div>
                {techDetails !== undefined && <TechImage data={techDetails} isLandscape={isLandscape}/>}
            </div>
        </main>
    )
}

const TechImage = ({data, isLandscape}) => {
    return (
        <div className="techimage-wrapper">
            <img src={isLandscape ? process.env.PUBLIC_URL + data.images.landscape : process.env.PUBLIC_URL + data.images.portrait} alt={data.name + " image"} />    
        </div>
    )
}

const TechInfo = ({data}) => {
    return (
        <div className="tech-info">
            <p className="terminology">THE TERMINOLOGY...</p>
            <h1 className="tech-name">{data.name}</h1>
            <p className="tech-description">{data.description}</p>    
        </div>
    )
}

export default Technologies