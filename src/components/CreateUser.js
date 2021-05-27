import CreateUserCard from "./CreateUserCard";

function CreateUser({createNewUserFun,createUserMessage}) {
    return (
        <div className="createUser">
            <div>
                <CreateUserCard createNewUserFun={createNewUserFun}/>
                <h2>{createUserMessage.message}</h2>
            </div>

        </div>
    );
}

export default CreateUser;