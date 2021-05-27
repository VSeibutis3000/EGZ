import ShowUserCard from "./ShowUserCard";

function AllUsers({allUsers, deleteUserFun,updateIdFun}) {
    return (
        <div className="allUsers">
            {allUsers.map((user, i) =>
                <ShowUserCard
                    key={i}
                    user={user}
                    deleteUserFun={deleteUserFun}
                    updateIdFun={updateIdFun}/>)}
        </div>
    );
}

export default AllUsers;