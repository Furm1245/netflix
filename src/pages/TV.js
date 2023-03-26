import { useState, useEffect } from "react"
import "./TV.css"

const TV = () => {
    const [pictures, setPictures] = useState([])

    const fetchData = async () => {
        try {
            const req = await fetch('https://api.themoviedb.org/3/trending/tv/week?api_key=b8f14a6a8c65baef33f77a05cfe2bf47', {
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
        fetchData()
    }, [])


    const movieInfo = pictures.map(({ id, poster_path }) => {
        return (
            <div key={id} id={id}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt='A movie'
                />
            </div>
        )
    })


    return (
        <div className="tv-container">
            {movieInfo}
        </div>

    )
}

export default TV