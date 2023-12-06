function Repos({reposData}) {
    console.log("===",reposData);
    return ( 
        <div>
            <h1>Repositories</h1>
                { reposData && 
           
            (reposData.map(item=>{
                return (
                <div>{item.name}</div>
                )
            }))} 
          
            
        </div>
     );
}

export default Repos;