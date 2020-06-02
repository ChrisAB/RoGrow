import React from 'react'
import BuyerEditProfile from "./BuyerEditProfile"
import {isSigned} from '../auth/index'

const EditProfile = () => {
    const {data:  {role}} = isSigned();
    
    const isSeller = () =>{
        if (role == "seller"){
            return true;
        }
        return false;
    }

    return (
        <div>
            {!isSeller() && <BuyerEditProfile/>}
        </div>
    )
}

export default EditProfile;