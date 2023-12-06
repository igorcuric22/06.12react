// import "./Avatar.css"

function Avatar({datax}) {
    console.log("+++",datax);
    return ( 
        <div> 
            {datax ? (
    <div className="avatar">
        <p><img src={datax.avatar_url} width="300px" height="200px" /></p>
        <p>{datax.bio}</p>
        <p>{datax.name}</p>
        <p>{datax.location}</p>
        
      
    </div>
):(
    <p>Podaci se ucitavaju</p>
)}
        </div>
     );
}

export default Avatar;