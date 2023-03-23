import "./Home.css"
import SimpleSlider from '../UI/Slider';
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
<<<<<<< HEAD
=======

>>>>>>> 1b5c63462ed0fcbcd5a09c415b4b27a3eef2a350

const Home = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    // b8f14a6a8c65baef33f77a05cfe2bf47

    // const fetchData = async () => {
    //     try {
    //         const req = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=b8f14a6a8c65baef33f77a05cfe2bf47', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data2 = await req.json()
    //         console.log(data2)
    //     }
    //     catch (err) { }
    // }
    // fetchData()

    const fetchInfo = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/movie/157336?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&append_to_response=videos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            console.log(data)
            setTitle(data.original_title)
            setImage(`https://image.tmdb.org/t/p/w500/${data.poster_path}`)
        }
        catch (err) { }
    }
    fetchInfo()


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
                {title}
                <img src={image} alt="pic of the movie poster"></img>
            </div>
            {/* <div>
                <SimpleSlider />
            </div>
            <div>
                <SimpleSlider />
            </div>
            <div>
                <SimpleSlider />
            </div> */}
        </div >
    )

}

export default Home