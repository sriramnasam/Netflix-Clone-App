import React, { useEffect, useState } from 'react'
import card from '../../assets/cards/Cards_data'
import './Titlecard.css'
import { Link } from 'react-router-dom';

const Titlecard = ({title,category}) => {

const[apiData, setapiData] = useState([]);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQxZWExZGI0Mjk0M2EwNWRmN2E3ZjAyNDg2Nzg3OCIsIm5iZiI6MTc4MTA4MTg3Ny4wNDE5OTk4LCJzdWIiOiI2YTI5MjcxNTA4ODlkN2YwOWRkNGU0MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6LJREnUCBpjCpSDc7PPqQMnWVVugYMLpAws9B1RBKL0'
  }
};

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"upcoming"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapiData(res.results))
  .catch(err => console.error(err));
},[])

  return (
 <div className="titlecard-row">
      <h2 className="row-heading">{title || "Popular On Netflix"}</h2>
      
      <div className="card-list-wrapper">
        {apiData?.map((cardd,index) => (
        
          <Link to={`/player/${cardd.id}`} key={index} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/original`+cardd.backdrop_path} 
              alt={cardd.name || "Movie Thumbnail"} 
              className="card-img" 
            />
            {cardd.title && <p className="card-name-hover">{cardd.title}</p>}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Titlecard