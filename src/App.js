import { useEffect, useState } from 'react';
import './App.css';
import Avatar from './Avatar';
import Repos from './Repos';

function App() {
  const [user,setUser]=useState("facebook");
  const [datax,setData]=useState();
  const [repos,setRepos]=useState();
  const [reposData,setReposData]=useState();

  const handleUser=(e)=>{
      setUser(e.target.value);
  }

  const loadApi=()=>{

    if(user.length===0){
      alert("Nisi unio usera");
      return;
    }

  const url=`https://api.github.com/users/${user}`;

      setTimeout(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            // console.log(data.results);
            setData(data);

            setRepos(data.repos_url);
        });
      },2000);

        const url_repos=`https://api.github.com/users/${user}/repos`;

        fetch(url_repos)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            // console.log(data.results);
            setReposData(data);
        });

        }

      useEffect(()=>{

      },[])

  return (
    <div className="App">
        <h2>Github username</h2>
    
    <div className="forma">
    <label htmlFor="actors">Unesi ime</label>
    <input type="text" id="actors" value={user} placeholder="facebook" onChange={handleUser}/>
    </div>

    <div className="forma">
    <button onClick={loadApi} >Stisni</button>
    </div>
    
    <Avatar datax={datax}/>
    <Repos reposData={reposData} />

    </div>
  );
}

export default App;
