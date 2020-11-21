import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
//import SummaryList from "../components/Index/SummaryList";
import {parseCookies} from 'nookies';
import axios from 'axios';
import SummaryComponent from "../components/Summary/SummaryComponent";
import baseUrl from "../utils/baseUrl";

function Summary({user}) {
  return (

    <Segment>
      <SummaryComponent />
    </Segment>
  );
  
}

Summary.getInitialProps = async () => {
  // const {token} = parseCookies(ctx);
  // if(!token){
  //   return {products:[]};
  // }
  const url = `${baseUrl}/api/orders`;
  const payload = {headers: {Authorization: token}};
  // fetch data on server
  
  const response = await axios.get(url, payload);
  // return response data as an object
  return { summary: response.data };
  // note: this object will be merged with existing props
};


export default Summary;
