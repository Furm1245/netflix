import { useState, useEffect } from "react"
import "./Image.css"
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import Modal from 'react-bootstrap/Modal';

const Trending = () => {
    const [video, setVideo] = useState('')
    const [videoUrl, setVideoUrl] = useState(null)
    const [pictures, setPictures] = useState([])
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const fetchData = async () => {
        try {
            const req = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_API_KEY}`, {
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
                console.log()
            }
        }
        handleSearch()
    }, [video])


    useEffect(() => {
        fetchData()
    }, [])


    const movieInfo = pictures.map(({ id, poster_path, original_name }) => {
        return (
            <div key={id} id={id} onClick={() => { setVideo(original_name); handleShow() }}>
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

export default Trending