import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'b4dbea6eed81438e82ae672a3eb1c194'
  }
})