import { useState } from "react";

export default function Form() {
    //define the values to enable data submission from the form
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    //define where to submit the form
    const handleSubmit = (e) => {
        //prevent the default behavior (refreshing the whole form)
        e.preventDefault();
            
        //submit the form to given server
        const form = { login, pass, email, phone };
        fetch('https://example/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        .then(() => {
            alert('Zapisano, dzięki!');
        }
        );
    }

//TODO:
//FORM VALIDATION (red messages instead of system default popups)
// i dunno how to do it :(
// I tried, but it didn't work - try again in a month or so

    return (
    <div class="form">
        <h2>Formularz rejestracyjny</h2>
        <hr></hr>
        <form 
            onSubmit={handleSubmit}
            >

            <label htmlFor='login'>Login: </label>
            <input 
                name='login' 
                id='login' 
                type='text'
                value= {login}
                onChange={(e) => setLogin(e.target.value)}>
            </input>

            <label htmlFor='pass'>Hasło: </label>
            <input 
                name='pass' 
                id='pass' 
                type='password'
                value= {pass}
                onChange={(e) => setPass(e.target.value)}>
            </input>

            <label htmlFor='email'>E-mail: </label>
            <input 
                name='email' 
                id='email' 
                type='email'
                required
                value= {email}
                onChange={(e) => setEmail(e.target.value)}>
            </input>

            <label htmlFor='phone'>Numer telefonu: </label>
            <input 
                name='phone' 
                id='phone' 
                pattern="[0-9]{9}"
                required
                value= {phone}
                onChange={(e) => setPhone(e.target.value)}>
            </input>

            <label htmlFor="accept-policy">
                <input 
                        name="accept-policy"
                        id="accept-policy"
                        type="checkbox"
                        required
                        >
                </input>
                Akceptuję Regulamin
            </label>

            <button type="submit" function="submit" class="registerbtn">zapisz</button>
            
        </form>
    </div>
    )
}