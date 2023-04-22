import "./UserCard.scss"

const UserCard = ({id, name, group}) => {
    return(
        <div key={id} className="user__card">
                <div className="image__wrapper">
                    <img src="https://icon-library.com/images/default-profile-icon/default-profile-icon-5.jpg" alt="" />
                </div>
                <h3>{name}</h3>
                {
                   group !== "Все"? <p>{group}</p> : ""
                }
        </div>
    )
}
export default UserCard