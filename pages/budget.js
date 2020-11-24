import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
import BudgetComponent2 from "../components/Budget/BudgetComponent2";
import {parseCookies} from 'nookies'
import axios from 'axios'

import baseUrl from "../utils/baseUrl";


function Budget({budgets, user}) {
  console.log(budgets)
  return (

    <Segment>
      <BudgetComponent2/>
    </Segment>
  );
  
}





Budget.getInitialProps = async ctx => {

  const {token} = parseCookies(ctx)
  //redundant securtity layer
  if(!token){
    return {budgets: []};
  }
  
  const url = `${baseUrl}/api/budget`
  const payload = {headers: {Authorization: token }}
  const response = await axios.get(url, payload)
  //console.log(response.data);
  return {budgets: response.data}
}

export default Budget;
