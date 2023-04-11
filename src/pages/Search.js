import "./Search.css"
import { useState, useEffect } from "react"
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import Modal from 'react-bootstrap/Modal';

const TV = () => {
    const [pictures, setPictures] = useState([])
    const [search, setSearch] = useState('')
    const [video, setVideo] = useState('')
    const [videoUrl, setVideoUrl] = useState(null)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



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

    useEffect(() => {
        const handleSearch = async () => {
            try {
                await movieTrailer(video).then(response => setVideoUrl(response))

            }
            catch (err) {
                console.log()
            }
        }
        handleSearch()
    }, [video])


    const movieInfo = pictures.map(({ id, poster_path, original_title }) => {
        return (
            <div key={id} id={id} onClick={() => { setVideo(original_title); handleShow() }}>
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
            <Modal show={show} onHide={handleClose} className="backdrop" style={{ opacity: 1 }} centered>
                {videoUrl == null &&
                    <>
                        <Modal.Body>
                            <h2>This video is unavailable</h2>
                        </Modal.Body>
                    </>
                }
                {videoUrl !== null &&
                    <div className="react-player">

                        <ReactPlayer
                            width="100%"
                            height="100%"
                            url={videoUrl} />
                    </div>
                }
            </Modal>
        </div>

    )
}

export default TV