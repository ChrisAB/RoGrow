import React from 'react'
import BuyerEditProfile from "./BuyerEditProfile"
import {isSigned} from '../auth/index'

const EditProfile = () => {
    const {data: {userFromDatabase: {SellerOrClientFlag}}} = isSigned();
    
    const isSeller = () =>{
        if (SellerOrClientFlag == "seller"){
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