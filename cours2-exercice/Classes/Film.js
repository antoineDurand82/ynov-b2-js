import Media from "./Media.js";
import Helpers from "../Helpers.js";

export default class Film extends Media {
        constructor(data) {
        super(data)
        this.cacherPanneau("serie")
    }

    remplir() {
        super.remplir()
        Helpers.remplirChamp("nom", this.data.title)
        document.title = `Film : ${this.data.title}`
        this.remplirAnnee(this.data.release_date)
        const nbHeures = Math.floor(this.data.runtime / 60)
        const nbMinutes = Math.floor(this.data.runtime % 60)
        Helpers.remplirChamp("duree", `${nbHeures}h ${nbMinutes}`)
        Helpers.remplirChamp("budget", )
    }
}
