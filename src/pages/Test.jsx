import React, { useEffect, useState } from 'react'

import { onAuthStateChanged, getIdToken } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig'

function Test() {
    const [token, setToken] = useState('');

    const showToken = () => {
        let token;
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                token = await getIdToken(user);
                setToken(token);
                console.log(token);
            }
        });
        return token;
    }

    useEffect(() => {
        showToken();
    }, [])

  return (
    <div>
        <h1>Token</h1>
        {token}
    </div>
  )
}

export default Test
