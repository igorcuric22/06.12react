function Repos({reposData}) {
    console.log("===",reposData);
    return ( 
        <div>
            
                { reposData && (reposData.message!=="Not Found"?
           
            (<div><h1>Repositories</h1>
                {reposData.map(item=>{
                return (
                <div>{item.name}</div>
                )
                })}</div> ):(<p></p>)) }
            

          
            
        </div>
     );
}

export default Repos;