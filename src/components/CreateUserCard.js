import {useRef} from 'react';

function CreateUserCard({createNewUserFun}) {
    const userName = useRef()
    const age = useRef()
    const email = useRef()
    const password = useRef()
    const password2 = useRef()

    const submitNewUser = () => {
        createNewUserFun(
            userName.current.value,
            age.current.value,
            email.current.value,
            password.current.value,
            password2.current.value)

        userName.current.value=null
        age.current.value=null
        email.current.value=null
        password.current.value=null
        password2.current.value=null
    }

    return (
        <div className="createUserInputs">
            <div>
                <input ref={userName} type="text" placeholder="Vartotojo vardas"/>
            </div>
            <div>
                <input ref={age} type="number" placeholder="Vartotojo amžius"/>
            </div>
            <div>
                <input ref={email} type="email" placeholder="Vartotojo el.pašto adresas"/>
            </div>
            <div>
                <input ref={password} type="password" placeholder="Vartotojo slaptažodis"/>
            </div>
            <div>
                <input ref={password2} type="password" placeholder="Pakartokite slaptažodį"/>
            </div>
            <div className='btn' onClick={submitNewUser}>Kurti vartotoją</div>
        </div>
    );
}

export default CreateUserCard;