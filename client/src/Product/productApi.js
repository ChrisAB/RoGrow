import {API} from '../config'

export const createProduct = async (token, product) => {
    //console.log(user);
    return await fetch(`${API}/v1/product`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  export const getUserProducts =  async (token, user) => {
    return await fetch(`${API}/v1/product?sellerID=${user}`,{
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

export const getAllProducts =  async ( token) => {
  return await fetch(`${API}/v1/product`,{
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
