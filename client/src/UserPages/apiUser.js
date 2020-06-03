import {API} from '../config'


export const readUser =  (userId, token) => {
    return  fetch(`${API}/v1/user/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }) .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const deleteUser =  (userId, token) => {
    return  fetch(`${API}/v1/user/${userId}`,{
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }) .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};

export const removeToken = () => {
    if (typeof window !== 'undefined'){
        localStorage.removeItem('jwt');
    }
};

export const update =  (userId, token, user) => {
    return  fetch(`${API}/v1/user/${userId}`,{
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(user)
    }) .then(response => {
        return response.json();
    })
    .catch(err => console.log(err));
};


export const updateUserStorage = (user, next) => {
    if (typeof window !== 'undefined'){
        if (localStorage){
            if (localStorage.getItem('jwt')){
                let auth = JSON.parse(localStorage.getItem("jwt"));
                auth.data = user.data;
                localStorage.removeItem('jwt');
                localStorage.setItem('jwt', JSON.stringify(auth));
                next();
            }else {
                return false;
            }
        }
    }

};