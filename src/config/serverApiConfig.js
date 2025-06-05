console.log(
  "process env REACT_APP_DEV_REMOTE",
  process.env.REACT_APP_DEV_REMOTE
)

export const BACKEND_BASE_URL = 
process.env.NODE_ENV == "production" ||
process.env.REACT_APP_DEV_REMOTE == "remote"
  ? "https://lionfish-app-3jag5.ondigitalocean.app/"
  : "https://lionfish-app-3jag5.ondigitalocean.app/"

export const API_BASE_URL = BACKEND_BASE_URL + "api/";
 
// export const API_BASE_URL = "https://wild-puce-reindeer-sari.cyclic.app/api/";
export const ACCESS_TOKEN_NAME = "x-auth-token"
