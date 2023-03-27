import "./Search.css"
import { useState, useEffect } from "react"

const TV = () => {
    const [pictures, setPictures] = useState([])
    const [search, setSearch] = useState('')


    useEffect(() => {
        const fetchData = async () => {
            try {
                const req = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b8f14a6a8c65baef33f77a05cfe2bf47&query=${search}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                const data = await req.json()
                console.log(data)
                setPictures(data.results)
            }
            catch (err) {
                console.log('enter a valid movie')
            }
        }
        fetchData()
    }, [search])


    const movieInfo = pictures.map(({ id, poster_path }) => {
        return (
            <div key={id} id={id}>
                {poster_path !== null && (
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                        alt='A movie'
                    />
                )}
            </div>
        )
    })


    return (
        <div className="main-container">
            <div className="search-container">
                <input placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)}></input>
            </div>
            {movieInfo.length > 0 && (
                <div className="picture-container">
                    {movieInfo}
                </div>
            )}
            {movieInfo.length === 0 && (
                <h1>Nothing here, try searching for a movie</h1>
            )}
        </div>

    )
}

export default TV