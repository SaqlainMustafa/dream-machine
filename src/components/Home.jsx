import React, { useState, useEffect } from 'react'
import Layout from './Layout'
function Home() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)

    }, [])




    return (
        <Layout>
            <div className="mike-container">
                <div className="container-fluid">
                    <div className="row mike-flex">
                        <div className="mike-left-content">
                            <h1 className='mike-heading'>Hey Mike</h1>
                            <form className='form'>
                                <div className="mike-search">
                                    <label htmlFor="upload-img" className='mike-upload-img'>Create your dreams
                                        {/* <input className='mike-input-search' type="text" placeholder='Create your dreams' /> */}
                                        <img className='mike-input-upload-img' src='./images/Upload.png' alt='' />
                                    </label>
                                    <input type="file" id='upload-img' className='mike-input-search' />
                                </div>
                                <div className="mike-submit-btn">
                                    <button className='submit-btn'>Submit</button>
                                </div>
                            </form>
                            <div className="img-container">
                                <p className='img-dreamer-text'>Get inspired by other Dreamers</p>
                                <div className="img-section">
                                    <div className="img-left-content">
                                        <div className="img-1">
                                            {!loading &&
                                                <img className='horse-img' src='./images/home-img-1.png' alt='' />    
                                            }
                                            <p className='horse-img-desiner-name'>Liso</p>
                                        </div>
                                        <div className="img-2">
                                            {!loading &&
                                                <img className='cartoon-img' src='./images/home-img-3.png' alt='' />}
                                        </div>
                                    </div>
                                    <div className="img-right-content mt-lg-0 mt-5">
                                        <div className="img-3">
                                        {!loading &&
                                            <div className="dish-img-detail">
                                                
                                                    <img className='dish-img' src='./images/home-img-2.png' alt='' />
                                                <div className="dish-img-upper-text">
                                                    <p className='dish-img-text'>A bowl of soup that looks like monster knitted out of wool</p>
                                                </div>
                                            </div>}
                                            <p className='dish-img-designer-name'>Alberto</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mike-right-content">
                            <div className="dream-machine-running mt-lg-0 mt-5">
                                <img className='dream-machine-img' src='./images/dream-img.png' alt='' />
                                <p className='dream-machine-text'>Dream machine running</p>
                                <Progress done="100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Home

const Progress = ({ done }) => {
    const [style, setStyle] = useState({})

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    });
    return (
        <div class="progress">
            <div class="progress-done" style={style}>
                {/* {done}% */}
            </div>
        </div>
    );
}
