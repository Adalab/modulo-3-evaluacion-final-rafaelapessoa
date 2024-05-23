import { Link } from "react-router-dom"

function User({ info }) {
    return (
        <article className="card">
            <Link to={`/detail/${info.id}`}>
                <img className="photo" src={info.image} alt="" />
                <p className="name">{info.name}</p>
                <p className="specie">{info.specie}</p>                
            </Link>    
        </article>
    )
}

export default User