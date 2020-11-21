import { Segment } from "semantic-ui-react";
//import CartItemList from "../components/Cart/CartItemList";
//import CartSummary from "../components/Cart/CartSummary";
import React from "react";
import axios from "axios";
//import SummaryList from "../components/Index/SummaryList";
import SummaryComponent from "../components/Summary/SummaryComponent";
import baseUrl from "../utils/baseUrl";

function Summary() {
  return (

    <Segment>
      <SummaryComponent />
    </Segment>
  );
  
}

// function Home({ products }) {
//   return <ProductList products={products} />;
// }

// Summary.getInitialProps = async () => {
//   const url = `${baseUrl}/api/summary`;
//   // fetch data on server
//   const response = await axios.get(url);
//   // return response data as an object
//   return { summary: response.data };
//   // note: this object will be merged with existing props
// };


export default Summary;
