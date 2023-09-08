export function calculTps(annee, montantSansTaxe) {
    let tps = 0;

    if (annee <= 2006) {
        tps = 0.07 * montantSansTaxe;
    } else if (2006 < annee && annee <= 2008) {
        tps = 0.06 * montantSansTaxe;
    } else {
        tps = 0.05 * montantSansTaxe;
    }

    return tps
}

export function calculTvq(annee, montantSansTaxe) {
    let tvq = 0;

    if (annee <= 1994) {
        tvq = 0.08 * montantSansTaxe;
    } else if (1994 < annee && annee <= 1997) {
        tvq = 0.065 * montantSansTaxe;
    } else if (1997 < annee && annee <= 2010) {
        tvq = 0.075 * montantSansTaxe;
    } else if (2010 < annee && annee <= 2011) {
        tvq = 0.085 * montantSansTaxe;
    } else if (2011 < annee && annee <= 2012) {
        tvq = 0.095 * montantSansTaxe;
    } else {
        tvq = 0.0975 * montantSansTaxe;
    }

    return tvq;
}