import "./Home.css"
import SimpleSlider from '../UI/Slider';
import { useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";


const Home = () => {
    // const [title, setTitle] = useState('')
    // const [id, setId] = useState('')
    // const [image, setImage] = useState('')
    const [moviesData, setMoviesData] = useState([])
    // b8f14a6a8c65baef33f77a05cfe2bf47

    const fetchData = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&language=en-US&page=1', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            console.log(data.results)
            setMoviesData(data.results)
        }
        catch (err) { }
    }

    useEffect(() => {
        fetchData()
    }, [])




    return (

        <div className="sections">
            <div className="contain">
                <div className="inside-1">
                    <h2>Lorem Ipsum</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text
                        commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used
                        as a placeholder before final copy is available.</p>
                    <div className="butt">
                        <div className="butt-1">
                            <Button variant="light">Play</Button>
                        </div>
                        <div className="butt-2">
                            <Button variant="secondary">More info</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <SimpleSlider movies={moviesData} />
                </div>
                <div>
                    <SimpleSlider movies={moviesData} />
                </div>
                <div>
                    <SimpleSlider movies={moviesData} />
                </div>
            </div>
        </div >
    )

}

export default Home