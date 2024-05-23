import { Link, Navigate } from "react-router-dom"

function DetailUser({userDetail}) {
    return ( userDetail ?        
            <form>    
            <Link to="/">Volver</Link>    
            <img src={userDetail.image} alt="" />
            <h2>{userDetail.name}</h2>
            <p>Status:{userDetail.status}</p>
            <p>Specie:{userDetail.specie}</p>
            <p>Origin:{userDetail.origin}</p>
            <p>Episodes:{userDetail.episode}</p>
            </form> : <Navigate to="/"/>            
    )
}

export default DetailUser