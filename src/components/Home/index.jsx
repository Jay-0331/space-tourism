import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
    return (
        <main className='home'>
            <div className="main-wrapper">
                <div className="content-wrapper">
                    <h5>So, you want to travel to</h5>
                    <h1>SPACE</h1>
                    <p>
                        Let’s face it; if you want to go to space, you might as well genuinely go to 
                        outer space and not hover kind of on the edge of it. Well sit back, and relax 
                        because we’ll give you a truly out of this world experience!
                    </p>
                </div>
                <div className="button-wrapper">
                    <Link className='link' to='/destination'>
                        <button>EXPLORE</button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Home