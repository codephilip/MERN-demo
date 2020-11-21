import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
import SummaryComponent from "../components/Summary/SummaryComponent";


function Summary() {
  return (

    <Segment>
      <SummaryComponent />
      <SummaryComponent />
    </Segment>
  );
  
}

export default Summary;
