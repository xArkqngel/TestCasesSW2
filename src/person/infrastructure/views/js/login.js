export const loginF = async (user) =>{
    const response = await fetch('http://127.0.0.1:3001/persons/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response.ok;
}
export const registerF = async (user) =>{
    const mailRegex = /^\S+@\S+\.\S+$/;
    if (!mailRegex.test(user.email)) {
        throw new Error('Invalid email address');
    }
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!passwordRegex.test(user.password)) {
        throw new Error('Password incorrect');
    }
    const response = await fetch('http://127.0.0.1:3001/persons/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return response.ok
}

