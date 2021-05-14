import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

let api = {
  getMultipleUsers: function() {
    return axios.get("https://randomuser.me/api/?results=75&nat=us");
  },
};

export default api;
