import React, { useEffect, useState } from 'react'
import backarrow from "../../assets/back_arrow_icon.png"
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
    const{id} = useParams();
    const navigate = useNavigate()
    const[apiData, setapiData] = useState({
        name:"",
        key:"",
        published_at:"",
        type:""
    });

    const options = {
        method:"GET",
        headers:{
            accept: "application",
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmQxZWExZGI0Mjk0M2EwNWRmN2E3ZjAyNDg2Nzg3OCIsIm5iZiI6MTc4MTA4MTg3Ny4wNDE5OTk4LCJzdWIiOiI2YTI5MjcxNTA4ODlkN2YwOWRkNGU0MDkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6LJREnUCBpjCpSDc7PPqQMnWVVugYMLpAws9B1RBKL0'
        }
    }

useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options).then((res)=>res.json())
    .then((res)=> setapiData(res.results[0]))
    .catch((err)=>console.errror(err))
},[])

  return (
   <div className="player">
    <img src={backarrow} alt="" onClick={()=>navigate(-2)}/>
    <iframe src={`https://www.youtube.com/embed/${apiData?.key}`} title="trailer" frameBorder='0' allowFullScreen></iframe>
    <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.type}</p>
    </div>
   </div>
  )
}

export default Player;