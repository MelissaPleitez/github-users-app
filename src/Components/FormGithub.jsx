import React, { useState } from "react";
import useGitUser from "../Hooks/useGitUser";
import CardGithub from "./CardGithub";
import { TfiGithub } from "react-icons/tfi";

function FormGithub() {
 
const { user, submitHandler, gitUsers,setGitUsers} = useGitUser();

const onChangeHandler= e =>{
  setGitUsers(e.target.value);
}


  return (
    <div >
      <form>
        <h1 >GitHub Profile <TfiGithub/></h1>
        <label htmlFor='gitUsers' >UserName: </label><br/>
        <input id='gitUsers' placeholder="Searching.."
          onChange={onChangeHandler}
        value={gitUsers}/>
        <button onClick={submitHandler}>Search</button>
      </form>

      
        <div>
        <CardGithub user={user} />
        </div>
      
    
          
      
      </div>
    
  );
}

export default FormGithub;
