import React from "react";
import axios from "axios";
import SummaryList from "../components/Summary/SummaryList";
//import SummaryList from "../components/Index/SummaryList";
import baseUrl from "../utils/baseUrl";

function Summary({ summaries }) {
  return <SummaryList summaries={summaries} />;
  //return <SummaryList summaries={summaries} />;
}

Summary.getInitialProps = async () => {
  const url = `${baseUrl}/api/summaries`;
  // fetch data on server
  const response = await axios.get(url);
  // return response data as an object
  return { summaries: response.data };
  // note: this object will be merged with existing props
};

export default Summary;





// //import { Segment } from "semantic-ui-react";
// //import CartItemList from "../components/Cart/CartItemList";
// //import CartSummary from "../components/Cart/CartSummary";
// import SummaryComponent from "../components/Summary/SummaryComponent";
// import {parseCookies} from 'nookies'
// import axios from 'axios'

// import baseUrl from "../utils/baseUrl";


// function Summary({summaries, user}) {
//   console.log({summaries})
//   return (


//       <SummaryComponent/>

//   );
  
// }





// Summary.getInitialProps = async ctx => {

//   const {token} = parseCookies(ctx)
//   //redundant securtity layer
//   if(!token){
//     return {summaries: []};
//   }
  
//   const url = `${baseUrl}/api/summaries`
//   const payload = {headers: {Authorization: token }}
//   const response = await axios.get(url, payload)
//   //console.log(response.data);
//   return {summaries: response.data}
// }

// export default Summary;
