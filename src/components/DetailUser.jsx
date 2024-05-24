import { Link, Navigate } from "react-router-dom"
import logoRick from "../images/logo.png";

function DetailUser({userDetail}) {
    return ( userDetail ?            
        <div className="containerDetail">    
            <img className="logoDetail" src={logoRick} alt="Logo Rick and Morty"></img>
            <Link className="btnBack" to="/"> Volver </Link>            
            <article className="cardDetail">
            <img className="imgDetail" src={userDetail.image} alt="" />
            <ul className="infosCard"> 
            <li className="nameDetail">{userDetail.name}</li>        
            <li>Status:  {userDetail.status}</li>
            <li>Specie:  {userDetail.specie}</li>
            <li>Origin:  {userDetail.origin}</li>
            <li>Episodes:  {userDetail.episode}</li>
            </ul>
            </article>
        </div> : <Navigate to="/" />  
            
    )
}

export default DetailUser