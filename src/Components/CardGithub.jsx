import React from "react";
import "./cardGithub.css";


function CardGithub({user}) {
  return (
    <div className="card" >
     
        <div key={user.id}>
          <div className="card-header">
          {!user.avatar_url ? (
              " "
            ): (
            <img  src={user.avatar_url} alt={user.login}  />
            )}
          </div>
          <div className="card-body">
            <h3>Name: {user.name}</h3>
            <p>Followers: {user.followers}</p>
            <span>Location: {user.location}</span>
            <div className="card-botton"><br/>
            <a href={user.html_url}>Go to GitHub Profile</a>
            </div>
          </div>
        </div>  
    </div>
  );
}

export default CardGithub;
