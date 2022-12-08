import axios from "axios";
export default class LancamentosApi {
  async BuscaTodosOsLancamentos() {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=d87e737e17e3280b4560807dcf86f2cc&language=en-US&page=1"
    );
    return response.data.results;
  }
  async BuscarLancamentos(id) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=d87e737e17e3280b4560807dcf86f2cc&language=en-US&page=1${id}`
    );
    return response.data.results;
  }
}