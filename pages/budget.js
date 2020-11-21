import axios from "axios";
import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
import BudgetComponent from "../components/Budget/BudgetComponent";
import baseUrl from "../utils/baseUrl";


function Budget({product,user}) {
  return (

    <Segment>
      <BudgetComponent {...product}/>
      <BudgetComponent user={user} {...product} />
    </Segment>
  );
  
}



export default Budget;
