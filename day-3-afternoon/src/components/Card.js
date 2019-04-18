import React from 'react';

function Card(props){
    
    return(
        <div className="card">
            <h1>{props.data.name.first} {props.data.name.last}</h1>
            <p>From: {props.data.city} {props.data.country}</p>
            <p>Job Title: {props.data.title}</p>
            <p>Employer: {props.data.employer}</p>
            <p>Favorite Movies: </p>
                <li>{props.data.favoriteMovies.map (movie => (
            <li> key ={props.index}>{movie}</li>
            
            ))}</li>
            </div>
            

        

    )

    
}

export default Card;