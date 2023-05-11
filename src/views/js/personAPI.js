import {loginF, registerF} from "./login";

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
    const response = loginF(user)
    if (response) {
        window.alert('login successful!');
    } else {
        window.alert('login failed!');
    }
};

const registerUser = async () => {
    var register = document.getElementById("RegForm");
    const user = getUserCredentials(register);
    const response = registerF(user)
    if (response) {
        window.alert('register successful!');
    } else {
        window.alert('register failed!');
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