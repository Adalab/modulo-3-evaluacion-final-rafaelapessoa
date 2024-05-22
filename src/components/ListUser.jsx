import User from "./User"

function ListUser({ listUser }) {

    const html = listUser.map((user) => <User key={user.id} info={user} />)

    return (
        <div>
            {html}
        </div>
    )
}

export default ListUser