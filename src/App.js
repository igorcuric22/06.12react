import { useEffect, useState } from 'react';
import './App.css';
import Avatar from './Avatar';
import Repos from './Repos';

function App() {
  const [user,setUser]=useState("facebook");
  const [datax,setData]=useState();
  const [reposData,setReposData]=useState();
  const [p,setP]=useState(false);
  
 

  const handleUser=(e)=>{
      setUser(e.target.value);
  }

  const loadApi=()=>{

    if(user.length===0){
      alert("Nisi unio usera");
      return;
    }

   setData(null);
   setP(true);

  const url=`https://api.github.com/users/${user}`;

      

      setTimeout(()=>{
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            // console.log(data.results);
            setData(data);
        });
      },2000);

   

        const url_repos=`https://api.github.com/users/${user}/repos`;

        fetch(url_repos)
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setReposData(data);
        });

        }

      useEffect(()=>{
        //setP(true);
        console.log(p);
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
    
    <Avatar datax={datax} p={p} reposData={reposData}/> 

    {/* {reposData && <Repos reposData={reposData} />}  */}

    </div>
    )
  
  }

export default App;
