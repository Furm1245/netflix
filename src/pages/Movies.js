import "./Image.css"
import { useState, useEffect } from "react"
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'

// import Modal from "../components/UI/Modal"

// import YouTube from 'react-youtube';

const Movies = () => {
    const [video, setVideo] = useState('')
    const [videoUrl, setVideoUrl] = useState('')
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

    useEffect(() => {
        const handleSearch = async () => {
            try {
                await movieTrailer(video).then(response => setVideoUrl(response))

            }
            catch (err) {
                console.log(err)
            }
        }
        handleSearch()
    }, [video])

    useEffect(() => {
        fetchData()
    }, [])


    const movieInfo = pictures.map(({ id, poster_path, original_title }) => {
        return (
            <div key={id} id={id} onClick={() => { setVideo(original_title) }}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt='A movie'
                />
            </div>
        )
    })

    console.log(video)


    return (
        <div className="picture-container">
            {movieInfo}
            <ReactPlayer url={videoUrl} />
        </div>

    )
}

export default Movies