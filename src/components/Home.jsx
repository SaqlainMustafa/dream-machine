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
        },45)
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
                                <label htmlFor="upload-img" className='mike-upload-img'>Create your dreams
                                    {/* <input className='mike-input-search' type="text" placeholder='Create your dreams' /> */}
                                    <img className='mike-input-upload-img' src='./images/Upload.png' alt='' />
                                </label>
                                <input type="file" id='upload-img' className='mike-input-search' />
                            </div>
                            <div className="mike-submit-btn">
                                <button type='btn' className='submit-btn' onClick={handleImageShow}>Submit</button>
                            </div>
                            <div className="img-container">
                                <p className='img-dreamer-text'>Get inspired by other Dreamers</p>
                                <div className="img-section">
                                    <div className="img-left-content">
                                    {!loading &&
                                        <div className="img-1">
                                            <Link to ="#">
                                                <img className='horse-img' src='./images/home-img-1.png' alt='' />
                                            </Link>
                                            <p className='horse-img-desiner-name'>Liso</p>
                                        </div>}

                                        {!loading &&
                                        <div className="img-2">
                                            <Link to ="#">
                                                <img className='cartoon-img' src='./images/home-img-3.png' alt='' />
                                            </Link>
                                        </div>
                                        }
                                    </div>
                                    <div className="img-right-content mt-lg-0 mt-5">
                                    {!loading &&
                                        <div className="img-3">
                                                <div className="dish-img-detail">
                                                    <Link to ="#">
                                                        <img className='dish-img' src='./images/home-img-2.png' alt='' />
                                                        <div className="dish-img-upper-text">
                                                            <p className='dish-img-text'>A bowl of soup that looks like monster knitted out of wool</p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            <p className='dish-img-designer-name'>Alberto</p>
                                        </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mike-right-content animate__animated animate__fadeInRight">
                            <div className="dream-machine-running mt-lg-0 mt-5">
                                <img className='dream-machine-img' src='./images/dream-img.png' alt='' />
                                <p className='dream-machine-text'>Dream machine running</p>
                                {/* <Progress done="100" /> */}
                                <div className="App">
                                    <Progressbar progress ={progress} />
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

// const Progress = ({ done }) => {
//     const [style, setStyle] = useState({})

//     setTimeout(() => {
//         const newStyle = {
//             opacity: 1,
//             width: `${done}%`
//         }
//         setStyle(newStyle);
//     });
//     return (
//         <div class="progress">
//             <div class="progress-done" style={style}>
//             </div>
//         </div>
//     );
// }


const Progressbar = ({progress}) => {
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