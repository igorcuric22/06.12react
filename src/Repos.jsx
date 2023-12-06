function Repos({reposData}) {
    console.log("===",reposData);
    return ( 
        <div>
            <h1>Repositories</h1>
                { reposData && (reposData.message!=="Not Found"?
           
            (reposData.map(item=>{
                return (
                <div>{item.name}</div>
                )
                }) ):(<p>Nije nasao</p>)) }
            

          
            
        </div>
     );
}

export default Repos;