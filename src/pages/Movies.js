import "./Image.css"
import { useState, useEffect } from "react"
// import Modal from "../components/UI/Modal"

// import YouTube from 'react-youtube';

const Movies = () => {
    const [pictures, setPictures] = useState([])

    const fetchData = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
            console.log(data)
            setPictures(data.results)
        }
        catch (err) { }
    }

    // const fetchData2 = async () => {
    //     try {
    //         const req = await fetch('https://api.themoviedb.org/3/movie/804150/videos?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=1&with_genres=27&with_watch_monetization_types=flatrate', {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //         const data = await req.json()
    //         console.log(data)
    //     }
    //     catch (err) { }
    // }


    useEffect(() => {
        fetchData()
        // fetchData2()
    }, [])


    const movieInfo = pictures.map(({ id, poster_path }) => {
        return (
            <div key={id} id={id} >
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt='A movie'
                />
            </div>
        )
    })


    return (
        <div className="picture-container">
            {movieInfo}
            {/* <YouTube videoId="cGIVKAGQNKM" play={true} loading='lazy' /> */}
        </div>

    )
}

export default Movies