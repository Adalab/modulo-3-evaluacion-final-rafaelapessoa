import User from "./User"

function ListUser({ listUsers }) {

    const html = listUsers.map((user) => <User key={user.id} info={user} />)

    return (    
        <div>
            {html}
        </div>
    
    )
}

export default ListUser