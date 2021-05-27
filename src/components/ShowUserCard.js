import {Link} from "react-router-dom";
function ShowUserCard({user,deleteUserFun,updateIdFun}) {
    return (
        <div className="showUserCard">
            <div className="w50">
                <h2>Vartotojo vardas: {user.userName}</h2>
            </div>
            <div className="w25">
                <h3>Amžius: {user.age}</h3>
            </div>
            <div className="w25">
                <h3>El.paštas: {user.email}</h3>
            </div>
            <div className="updBtns w25">
                <Link to='/update' onClick={()=>updateIdFun(user._id)} className='btn w50'>Redaguoti</Link>
                <div className='btn w50' onClick={()=>deleteUserFun(user._id)}>Ištrinti</div>
            </div>
        </div>
    );
}

export default ShowUserCard;