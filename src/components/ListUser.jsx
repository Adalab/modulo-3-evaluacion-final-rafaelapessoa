import User from "./User"
import FilterByName from "./FilterByName";
import logoRick from "../images/logo.png";

function ListUser({ listUsers, setNameFilter }) {

    const html = listUsers.map((user) => <User key={user.id} info={user} />)

    return (    
    <>                 
        <main className="container">            
                <img className="logo" src={logoRick} alt="Logo Rick and Morty"></img>
                <FilterByName setNameFilter={setNameFilter} />
            <div className="cards">
                {html}
            </div>
        </main>
    </>
    )
}

export default ListUser