import React, { Component } from 'react'
import MontantAvecTaxes from '../util/MontantAvecTaxes'

class TaxeQC extends Component {

    state = {
        montantAvecTaxes: new MontantAvecTaxes(2023, 0)
    }

    handleYear = (e) => {
        this.setState({
            montantAvecTaxes: new MontantAvecTaxes(Number(e.target.value), this.state.montantAvecTaxes.getMontantSansTaxe())
        })
    }

    handleMontantAvantTaxe = (e) => {
        this.setState({
            montantAvecTaxes: new MontantAvecTaxes(this.state.montantAvecTaxes.getYear(), Number(e.target.value))
        })
    }

    render() {
        return (
            <div className="App">
                <fieldset>
                    <legend>Choisissez l'année du calcul:</legend>
                    <select onChange={this.handleYear}>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                        <option>2018</option>
                        <option>2017</option>
                        <option>2016</option>
                        <option>2015</option>
                        <option>2014</option>
                        <option>2013</option>
                        <option>2012</option>
                        <option>2011</option>
                    </select>
                    <form>
                        <p>
                            <legend>Entrez le montant avant taxe :</legend>
                            <input value={this.state.montantAvecTaxes.montantSansTaxe} onChange={this.handleMontantAvantTaxe} />
                        </p>
                        <legend>TPS :</legend>
                        <input type="text" name="tps" readonly="" value={this.state.montantAvecTaxes.tps.toFixed(2) + " $"} />

                        <legend>TVQ :</legend>
                        <input type="text" name="tvq" readonly="" value={this.state.montantAvecTaxes.tvq.toFixed(2) + " $"} />

                        <legend>Montant Total :</legend>
                        <input type="text" name="montantAvecTaxe" readonly="" value={this.state.montantAvecTaxes.montantAvecTaxe.toFixed(2) + " $"} />
                    </form>
                </fieldset>
            </div>
        )
    }
}

export default TaxeQC;