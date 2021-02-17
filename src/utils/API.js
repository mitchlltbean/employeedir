import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: () => axios.get(BASEURL),
};
