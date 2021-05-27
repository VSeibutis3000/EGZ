import {useRef} from 'react';

function UpdateUser({getUser,updateUserFun,updatedUser}) {
    const userName = useRef()
    const age = useRef()
    const email = useRef()

    const update = () =>{
        updateUserFun(userName.current.value,
            age.current.value,
            email.current.value,
            getUser._id)
    }

    return (
        <div className='updateUserCont'>
            <div className="updateUser">
                <div>
                    <div><b>Įveskite vartotojo vardą</b></div>
                    <input ref={userName} type="text" placeholder={getUser.userName}/>
                </div>
                <div>
                    <div><b>Įveskite vartotojo amžių</b></div>
                    <input ref={age} type="number" placeholder={getUser.age}/>
                </div>
                <div>
                    <div><b>Įveskite vartotojo el.pašto adresą</b></div>
                    <input ref={email} type="email" placeholder={getUser.email}/>
                </div>
                <div className='btn' onClick={update}>Patvirtinti</div>
            </div>
            <h2 style={{color:updatedUser.error?'red':'green'}}>{updatedUser.message}</h2>
        </div>

    );
}

export default UpdateUser;