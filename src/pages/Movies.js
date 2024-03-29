import "./Image.css"
import { useState, useEffect } from "react"
import ReactPlayer from 'react-player'
import movieTrailer from 'movie-trailer'
import Modal from 'react-bootstrap/Modal';



const Movies = () => {
    const [video, setVideo] = useState('')
    const [videoUrl, setVideoUrl] = useState(null)
    const [pictures, setPictures] = useState([])
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const fetchData = async () => {
        try {
            const req = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await req.json()
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


    const movieInfo = pictures.map(({ id, poster_path, original_title }) => {
        return (
            <div key={id} id={id} onClick={() => { setVideo(original_title); handleShow() }}>
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
                    <div>
                        <Modal.Body>
                            <h2>This video is unavailable</h2>
                        </Modal.Body>
                    </div>
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

export default Movies