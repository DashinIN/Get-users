import "./UserCard.scss"

const UserCard = ({id, name, group}) => {
    return(
        <div key={id} className="user__card">
                <h4>{name}</h4>
                <p>{group}</p>
        </div>
    )
}
export default UserCard