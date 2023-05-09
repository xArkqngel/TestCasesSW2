const getUserCredentials = (form) => {
    var formData = new FormData(form);
    const data = {};
    for(var[key, value] of formData.entries()){
        data[key] = value;
    }
    return data;
}

const loginUser = async () => {
    var login = document.getElementById("LoginForm");
    const user = getUserCredentials(login);
    const response = await fetch('http://127.0.0.1:3001/persons/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        window.alert('login successful!');
        return true;
    } else {
        window.alert('login failed!');
        return false;
    }
};


const registerUser = async () => {
    var register = document.getElementById("RegForm");
    const user = getUserCredentials(register);
    const response = await fetch('http://127.0.0.1:3001/persons/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    if (response.ok) {
        window.alert('Registration successful!');
        window.location.href("/src/views/html/home.html")
    } else {
        window.alert('Registration failed!');
    }
};

var registerButton = document.querySelector("#regButton");
registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    registerUser();
});

var loginButton = document.querySelector("#loginButton");
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginUser();
});

module.exports = { loginUser };
