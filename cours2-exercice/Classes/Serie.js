import Media from "./Media.js";
import Helpers from "../Helpers.js";

export default class Serie extends Media {
    constructor(data) {
        super(data)
        this.cacherPanneau("film")
    }

    remplir() {
        super.remplir()
        
        Helpers.remplirChamp("nom", this.data.name)
        document.title = `Série : ${this.data.name}`
        this.remplirAnnee(this.data.first_air_date)

        let codeHtml = ""
        this.data.seasons.forEach(item => {
            codeHtml += `<li>${item.name} : ${item.episode_count} épisodes </li>`
        })

        Helpers.id("detailsSaisons").innerHTML = codeHtml

        Helpers.remplirChamp("nbSaisons", this.data.number_of_seasons)
        if (this.data.number_of_seasons <= 1) {
            // Helpers.id("saisonPluriel").style.display = "none"
            const div = Helpers.id("saisons")
            const span = Helpers.id("saisonPlurier")
            div.removeChild(span)

        }
    }
}
