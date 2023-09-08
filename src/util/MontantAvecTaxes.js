import { calculTps } from "./Mathematique";
import { calculTvq } from "./Mathematique";

class MontantAvecTaxes {

    constructor(Annee, MontantSansTaxe) {
        this.annee = Annee;
        this.montantSansTaxe = MontantSansTaxe;
        this.tps = calculTps(this.getYear(), this.getMontantSansTaxe());
        this.tvq = calculTvq(this.getYear(), this.getMontantSansTaxe());
        this.montantAvecTaxe = this.calculMontantAvecTaxe();
    }

    getMontantSansTaxe() {
        return Number(this.montantSansTaxe);
    }

    getTPS() {
        return Number(this.tps);
    }

    getTVQ() {
        return Number(this.tvq);
    }

    getMontantAvecTaxe() {
        return Number(this.montantAvecTaxe);
    }

    getYear() {
        return Number(this.annee);
    }

    calculMontantAvecTaxe() {
        return this.getMontantSansTaxe() + this.getTPS() + this.getTVQ();
    }
}

export default MontantAvecTaxes;