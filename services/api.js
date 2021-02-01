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

  async getUpcoming() {
    let query = `/anime?page[limit]=20`;
    query += `&filter[status]=upcoming`;
    query += `&sort=-userCount`;

    return await this.kitsu.get(query).then((response) => {
      return response.data.data;
    });
  }

  async getByCategory(category) {
    const categoryId = await this.getCategoryId(category);
    let query = `/trending/anime?limit=20`;
    query += `&in_category=true&category=${categoryId}`;

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

  async getCategoryId(slug) {
    let query = `/categories?filter[slug]=${slug}`;
    return await this.kitsu.get(query).then((response) => {
      return response.data.data[0].id;
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
