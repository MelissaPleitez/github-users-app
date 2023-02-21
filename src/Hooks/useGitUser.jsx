import React, { useState, useEffect } from "react";


function useGitUser() {

const [user, setUser] = useState({});

 const [gitUsers, setGitUsers] = useState('');


const submitHandler = async (e) => {

  e.preventDefault();
  const data = await fetch(`https://api.github.com/users/${gitUsers}`);
    const dataJson = await data.json();
   

    if (dataJson) {
      setUser(dataJson);
    }

  };
  

  
  return {
    
    user,
    setUser,
    submitHandler,
    gitUsers,
    setGitUsers
  };
}

export default useGitUser;
