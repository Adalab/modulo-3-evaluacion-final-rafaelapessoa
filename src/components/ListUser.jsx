import User from "./User"
import logoRick from "../images/logo.png";

function ListUser({ listUsers }) {

    const html = listUsers.map((user) => <User key={user.id} info={user} />)

    return (    
        <>                 
        <main className="container">            
            <img className="logo" src={logoRick} alt="Logo Rick and Morty"></img>
            <input className="input" type="text" />
            <div className="cards">
                {html}
            </div>
        </main>
    </>
    )
}

export default ListUser