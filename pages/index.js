import React from "react";
import axios from "axios";
import ProductList from "../components/Index/ProductList";
//import SummaryList from "../components/Index/SummaryList";
import baseUrl from "../utils/baseUrl";

function Home({ products }) {
  return <ProductList products={products} />;
  //return <SummaryList summaries={summaries} />;
}

Home.getInitialProps = async () => {
  const url = `${baseUrl}/api/products`;
  // fetch data on server
  const response = await axios.get(url);
  // return response data as an object
  return { products: response.data };
  // note: this object will be merged with existing props
};

export default Home;
