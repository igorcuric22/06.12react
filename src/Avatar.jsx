// import "./Avatar.css"

function Avatar({datax}) {
    console.log("+++",datax);
    return ( 
        <div> 
         {datax &&  ( Object.keys(datax).length!==0?(
    <div className="avatar">
       {datax.avatar_url && (<p><img src={datax.avatar_url} width="300px" height="200px" /></p>)}
        <p>{datax.bio}</p>
        <p>{datax.name}</p>
        <p>{datax.location}</p>
        
      
    </div>
):(
    <p>Nema rezultata</p>
) )
}
        </div>
     );
}

export default Avatar;