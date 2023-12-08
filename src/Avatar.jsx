import Repos from "./Repos";

// import "./Avatar.css"


function Avatar({datax,p,reposData}) {
    console.log("+++",datax);
    return ( 
        <div> 

{ datax?(
<div>
    
    {datax.avatar_url && (<p><img src={datax.avatar_url} width="300px" height="200px" /></p>)}
     <p>{datax.bio}</p>
     <p>{datax.name}</p>
     <p>{datax.location}</p>
     {reposData && <Repos reposData={reposData} />}   
           </div>):(p && (<div className="loading"></div>))
   
}

{datax && datax.message==="Not Found" && (<div>Nije pronaden</div>)}


        </div>
     );
}

export default Avatar;