import { Link } from "react-router-dom"


function User({ info }) {
    return (
        <article>
            <Link to={`/detail/${info.id}`}>
                <img src={info.image} alt="" />
                <p>{info.name}</p>
                <p>{info.specie}</p>                
            </Link>    
        </article>
    )
}

export default User