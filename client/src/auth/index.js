import {API} from '../config'

export const registerSeller = async (user) => {
    //console.log(user);
    return await fetch(`${API}/v1/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

export const registerBuyer = async (user) => {
    //console.log(user);
    return await fetch(`${API}/v1/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const login = async (user) => {
    //console.log(user);
    return await fetch(`${API}/v1/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const userSession =  (data, next) => {
      if (typeof window !== 'undefined'){
            localStorage.setItem('jwt', JSON.stringify(data))
            next();
        }
  };

  export const signout = (next) => {
    if (typeof window !== 'undefined'){
        localStorage.removeItem('jwt');
        next();
    }
  };

  export const isSigned = () => {
      if (typeof window == 'undefined'){
            return false;
      }
      if (localStorage){
          if (localStorage.getItem('jwt')){
              return JSON.parse(localStorage.getItem('jwt'))
          }else {
              return false;
          }
      }

  };
  

