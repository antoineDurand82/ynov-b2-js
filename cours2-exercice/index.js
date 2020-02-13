import Helpers from "./Helpers.js";
import Film from "./Classes/Film.js";
import Serie from "./Classes/Serie.js";

const apiKey = "42acad2cd36f93b6fdf553d23a667160";

const traiterMedia = (data, type) => {
    const media = type == "movie" ? new Film(data) : new Serie(data)
    media.remplir()
}
    

const chargerMedia = () => {
    const id = Helpers.getParam("id");
    const type = Helpers.getParam("type");
    const url = `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=fr-FR`
    axios
    .get(url)
    .then(response => traiterMedia(response.data, type))
    .catch(error => {
        if ( error.response && error.response.status == 404) {
            alert("Media introuvable !")
        } else {
            console.error(error)
        }
    }
    )
}

window.addEventListener("load", chargerMedia)
