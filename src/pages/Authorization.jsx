import { useEffect, useState } from "react"
import { Value } from "sass";
import Modal from "../ModalWindow/Modal";

const App = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Емейл не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        if(emailError || passwordError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError]  )

    const emailHandler = (e) => {
        setEmail(e.target.value)
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        if(!re.test(String(e.target.value).toLowerCase)) {
            setEmailError('Некорректный емейл')
        }else {
            setEmailError("")
    }

    const passwordHandler = (e) => {
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть не менее 3 и не больше 8 символов')
            if(!e.target.value) {
                setPasswordError('Пароль должен быть не менее 3 и не больше 8 символов')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) =>{
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    const App = () => {
        const [modalActive, setModalActive] = useState(true)
    }

    return (
        <div className="app">
            <form>
                <h1>Регистрация</h1>
                {(emailDirty && emailError)} && <div style={{color:'red'}}>{emailError}</div>
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder='Enter yuor email...'/>
                {(passwordDirty && passwordError)} && <div style={{color:'red'}}>{passwordError}</div>
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder='Enter yuor password...'/>
                <button disabled={!formValid} type="submit">Registration</button>
            </form>
        </div>
    );
    <Modal active={modalActive} setActive={setModalActive}/>
    }
}