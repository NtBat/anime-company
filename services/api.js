import axios from "axios";

class Api {
  constructor() {
    this.kitsu = axios.create({ baseURL: "https://kitsu.io/api/edge" });
  }

  async getTrending() {
    let query = `/trending/anime?limit=20`;
    return await this.kitsu.get(query).then((response) => {
      return response.data.data;
    });
  }

  async getCategories(animeId) {
    let query = `/anime/${animeId}/categories`;

    return await this.kitsu.get(query).then((response) => {
      return response.data.data;
    });
  }

  async getAnime(animeId) {
    let query = `/anime/${animeId}`;

    return await this.kitsu.get(query).then((response) => {
      return response.data.data;
    });
  }
}

export default new Api();
