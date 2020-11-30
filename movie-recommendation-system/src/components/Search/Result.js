import React from 'react';

function Result({ movie }) {
    const baseImgUrl = "https://image.tmdb.org/t/p"
    const imgSize = "w92"
    return (
        <div className="result">
            <img title={movie.title} key={movie.id} src={`${baseImgUrl}/${imgSize}${movie.poster_path}`} />
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
        </div>
    )
}

export default Result;