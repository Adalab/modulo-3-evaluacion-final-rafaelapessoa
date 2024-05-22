

function User({ info }) {
    return (
        <article>
            <img src={info.image} alt="" />
            <p>{info.name}</p>
            <p>{info.specie}</p>
        </article>
    )
}

export default User