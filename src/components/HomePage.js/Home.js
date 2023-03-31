import "./Home.css"
import SimpleSlider from '../UI/Slider';
import { useState, useEffect } from "react";
// import Button from "react-bootstrap/esm/Button";
import Carousel from "../UI/Carousel";


const Home = () => {
    const [actionData, setActionData] = useState([])
    const [adventureData, setAdventureData] = useState([])
    const [animationData, setAnimationData] = useState([])
    const [horrorData, setHorrorData] = useState([])
    // b8f14a6a8c65baef33f77a05cfe2bf47



    const fetchData = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=28&with_watch_monetization_types=flatrate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            setActionData(data.results)
        }
        catch (err) { }
    }

    const fetchData2 = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=12&with_watch_monetization_types=flatrate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            setAdventureData(data.results)
        }
        catch (err) { }
    }

    const fetchData3 = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=16&with_watch_monetization_types=flatrate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            setAnimationData(data.results)
        }
        catch (err) { }
    }

    const fetchData4 = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27&with_watch_monetization_types=flatrate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            setHorrorData(data.results)
        }
        catch (err) { }
    }

    useEffect(() => {
        fetchData()
        fetchData2()
        fetchData3()
        fetchData4()
    }, [])


    return (

        <div className="sections">
            <div className="contain">
                <Carousel />
            </div>
            <div>
                <div>
                    <div>
                        <h2>Action</h2>
                    </div>
                    <SimpleSlider movies={actionData} />
                </div>
                <div>
                    <div>
                        <h2>Adventure</h2>
                    </div>
                    <SimpleSlider movies={adventureData} />
                </div>
                <div>
                    <div>
                        <h2>Animation</h2>
                    </div>
                    <SimpleSlider movies={animationData} />
                </div>
                <div>
                    <div>
                        <h2>Horror</h2>
                    </div>
                    <SimpleSlider movies={horrorData} />
                </div>
            </div>
        </div >
    )

}

export default Home