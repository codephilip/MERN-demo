import React from 'react';
import { Input } from "semantic-ui-react";
import {useRouter} from 'next/router';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import cookie from 'js-cookie'


function AddBudget({user, productId}) {

    const router = useRouter();
    function handleAddBudget(){

    async function handleAddBudget(){
        const url = `${baseUrl}/api/post`
        const payload = {productId}
        const token = cookie.get('token')
        const headers = {headers: {Authorization:token}}
        await axios.put(url,payload,headers)
    }


    }

  return (
    <Input
      type="String"
      placeholder="Quantity"
      value={1}
      action={{
        color: "orange",
        content: "Add to Cart",
        icon: "plus cart",
        onClick: handleAddBudget
      }}
    />
  );
}

export default AddBudget;