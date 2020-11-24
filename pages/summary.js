import axios from "axios";
import SummarySummary from "../components/Summary/SummarySummary";
import SummaryAttributes from "../components/Summary/SummaryAttributes";
import baseUrl from "../utils/baseUrl";

function Summary({ summary, user }) {
  return (
    <>
      <SummarySummary {...summary} />
      <SummaryAttributes user={user} {...summary} />
    </>
  );
}

Summary.getInitialProps = async ({ query: { _id } }) => {
  const url = `${baseUrl}/api/summary`;
  const payload = { params: { _id } };
  const response = await axios.get(url, payload);
  return { summary: response.data };
};

export default Summary;
