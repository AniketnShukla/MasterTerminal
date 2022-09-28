import React from 'react'

const Home = () => {
  return (
    <div>
        <div id="main-container">
    <div className="time" id="time">
         Master Terminal /.
        </div>      
        <div className="quick-look">
        <div className="currents">
            <h2>Current</h2>
            <ul>
                <li>Externals </li>
                <li>Time Complexity - DSA.</li>
                <li>Portfolio - React.</li>
            </ul>
            <h2>Secondary</h2>
            <ul>
                <li><a target="_blank" href="https://www.youtube.com/watch?v=bMknfKXIFA8&t=3333s&ab_channel=freeCodeCamp.org">React FCC video</a>.</li>
            </ul>
        </div>
        <div className="dsa">
            <h2 >DSA prep</h2>
            <div className="current-topic dsa-list">
                Time Complexity
            </div>
            <div className="sub-topics dsa-list">
                <span>easy: 0</span>
                <span>medium: 0</span>
                <span>hard: 0</span>
            </div>
        </div>
    </div>

        <div className="steps">
            react  react protfolio mongodb mern blog
        </div>
        <div>
            idc, fine  im selfish, whatever gets the work done.
        </div>
    </div>
    </div>
  )
}

export default Home