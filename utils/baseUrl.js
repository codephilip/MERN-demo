const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://myreactreserveapp10.now.sh"
    : "http://localhost:3000";

export default baseUrl;
