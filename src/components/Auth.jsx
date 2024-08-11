import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../config/firebase';

const Auth = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log(auth?.currentUser?.email);

    const signIn = async () => {
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            // await signInWithEmailAndPassword(auth, email, password);
        } catch (err){
            console.error(err);
        }
    }
    return (
        <div>
            <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn} >Sign in</button>
        </div>
    )
}

export default Auth