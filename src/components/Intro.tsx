import React from 'react'
import '../App.scss'


const Intro = () => {
  return (
    <div className='intro'>
           <div className="back">
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
                <div className="blob"></div>
            </div>
            <div className='scroll'>
                <div className="mouse"></div>
                <p>Scroll</p>
            </div>
    </div>
  )
}

export default Intro
