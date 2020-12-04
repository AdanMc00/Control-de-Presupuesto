import React, {useState} from 'react';
import Error from './Error'
import  shortid from  'shortid';
const Form = ({saveSpend, saveMakeSpend}) => {
    const [spendname, saveSpendName] = useState('');
    const [spendamount, saveSpendAmount] = useState(0);
    const [error, saveError] = useState(false);

    const addSpend = e => {
        e.preventDefault();
        //validate
        if (spendamount < 1 || isNaN(spendamount) || spendname.trim() === '') {
            saveError(true)
        }
        // Build Spend
        const spend = {
            spendname,
            spendamount,
            id: shortid.generate()
        }
        console.log(spend)
        // Send spend to main component (App.js)
        saveSpend(spend);
        saveMakeSpend(true);
        //Reset Form
        saveSpendName('');
        saveSpendAmount(0);

    }
    return (
        <form
            onSubmit={addSpend}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto "/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej.Transporte"
                    value={spendname}
                    onChange={e => saveSpendName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej.300"
                    value={spendamount}
                    onChange={e => saveSpendAmount(parseInt(e.target.value, 10))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    )
}
export default Form