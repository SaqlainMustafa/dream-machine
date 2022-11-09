import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
function Home() {
    const [loading, setLoading] = useState(true)
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        // setTimeout(() => {
        //     setLoading(false);
        // }, 3000)
    }, [])

    const handleImageShow = () => {
        let interval = setInterval(() => {
            setProgress(prev => {
                return prev > 100 ? prev : prev + 1;
            })
        }, 45)
        setTimeout(() => {
            setLoading(false);
            clearInterval(interval);
        }, 5000)
    }

    return (
        <Layout>
            <div className="mike-container">
                <div className="container-fluid">
                    <div className="row mike-flex">
                        <div className="mike-left-content animate__animated animate__fadeInLeft">
                            <h1 className='mike-heading'>Hey Mike</h1>
                            <div className="mike-search">
                                <input className='mike-input-search' type="text" placeholder='Create your dreams' />
                                <img className='mike-upload-img' src='./images/Upload.png' alt='' />
                            </div>
                            <div className="mike-submit-btn">
                                <button type='btn' className='submit-btn' onClick={handleImageShow}>Submit</button>
                            </div>
                            <div className="mike-right-content animate__animated animate__fadeInRight">
                                <div className="dream-machine-running d-block d-md-none mt-lg-0 mt-5">
                                    {loading ?
                                        <img className='dream-machine-img' src='./images/dream-img.png' alt='' /> :
                                        <img className='dream-change-img' src='./images/home-img-1.png' alt='' />
                                    }
                                    <p className='dream-machine-text'>
                                        Dream machine
                                        {loading ? ' running' : ' done'}
                                    </p>
                                    <div className="App">
                                        <Progressbar progress={progress} />
                                    </div>
                                </div>
                            </div>
                            <div className="img-container">
                                <p className='img-dreamer-text'>Get inspired by other Dreamers</p>
                                <div className="img-section">
                                    <div className="img-left-content">
                                        <div className="img-1">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='horse-img' src='./images/home-img-1.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>Austronaut riding a horse in space</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='horse-img-desiner-name'>Liso</p>
                                        </div>

                                        <div className="img-2">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='cartoon-img' src='./images/home-img-3.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>cartoon Playing gathering</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-right-content mt-lg-0 mt-5">
                                        <div className="img-3">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='dish-img' src='./images/home-img-2.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>A bowl of soup that looks like monster knitted out of wool</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='dish-img-designer-name'>Alberto</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-section">
                                    <div className="img-left-content">
                                        <div className="img-1">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='horse-img' src='./images/home-img-1.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>Austronaut riding a horse in space</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='horse-img-desiner-name'>Liso</p>
                                        </div>

                                        <div className="img-2">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='cartoon-img' src='./images/home-img-3.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>cartoon Playing gathering</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-right-content mt-lg-0 mt-5">
                                        <div className="img-3">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='dish-img' src='./images/home-img-2.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>A bowl of soup that looks like monster knitted out of wool</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='dish-img-designer-name'>Alberto</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-section">
                                    <div className="img-left-content">
                                        <div className="img-1">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='horse-img' src='./images/home-img-1.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>Austronaut riding a horse in space</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='horse-img-desiner-name'>Liso</p>
                                        </div>

                                        <div className="img-2">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='cartoon-img' src='./images/home-img-3.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>cartoon Playing gathering</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-right-content mt-lg-0 mt-5">
                                        <div className="img-3">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='dish-img' src='./images/home-img-2.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>A bowl of soup that looks like monster knitted out of wool</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='dish-img-designer-name'>Alberto</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-section">
                                    <div className="img-left-content">
                                        <div className="img-1">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='horse-img' src='./images/home-img-1.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>Austronaut riding a horse in space</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='horse-img-desiner-name'>Liso</p>
                                        </div>

                                        <div className="img-2">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='cartoon-img' src='./images/home-img-3.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>cartoon Playing gathering</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="img-right-content mt-lg-0 mt-5">
                                        <div className="img-3">
                                            <div className="img-detail">
                                                <Link to="#">
                                                    <img className='dish-img' src='./images/home-img-2.png' alt='' />
                                                    <div className="overlay">
                                                        <div className="content">
                                                            <p className='img-overlay-text'>A bowl of soup that looks like monster knitted out of wool</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <p className='dish-img-designer-name'>Alberto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mike-right-content animate__animated animate__fadeInRight">
                            <div className="dream-machine-running d-none d-md-block mt-lg-0 mt-5">
                                {loading ?
                                    <img className='dream-machine-img' src='./images/dream-img.png' alt='' /> :
                                    <img className='dream-change-img' src='./images/dream-machine-done.png' alt='' />
                                }
                                <p className='dream-machine-text'>
                                    Dream machine
                                    {loading ? ' running' : ' done'}
                                </p>
                                <div className="App">
                                    <Progressbar progress={progress} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}
export default Home

const Progressbar = ({ progress }) => {
    return (
        <div>
            <div className="progressbar">
                <div style={{
                    height: "100%",
                    width: `${progress}%`,
                    backgroundColor: "#5E48E8",
                    // transition: "width 0.5s"
                }}></div>
                <span className="progressPercent"></span>
            </div>
        </div>
    )
}