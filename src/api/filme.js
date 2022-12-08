import axios from "axios";
export default class FilmeApi {
  async BuscaTodosOsFilmes() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=d87e737e17e3280b4560807dcf86f2cc&language=pt-Br&page=1"
    );
    return response.data.results;
  }
  async BuscarFilmes(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=d87e737e17e3280b4560807dcf86f2cc&language=pt-Br&page=1${id}`
    );
    return response.data.results;
  }
}