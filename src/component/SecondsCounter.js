import React from 'react'

const SecondsCounter = ({ seconds }) => {

    
    const fourDigit = Math.floor((seconds / 1000)%10);
    const threeDigit = Math.floor((seconds / 100)%10);
    const twoDigit = Math.floor((seconds / 10)%10);
    const oneDigit = Math.floor((seconds / 1)%10);


    return (
        <div className="container d-flex justify-content-center mt-3 px-0">
            <div className="digit bg-dark text-center text-light display-4 p-5">{fourDigit}</div>
            <div className="digit bg-dark text-center text-light display-4 p-5">{threeDigit}</div>
            <div className="digit bg-dark text-center text-light display-4 p-5">{twoDigit}</div>
            <div className="digit bg-dark text-center text-light display-4 p-5">{oneDigit}</div>
        </div>
    )
}

export default SecondsCounter
