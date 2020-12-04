import React, {Fragment, useState} from 'react';
import Error from './Error'

const Question = ({saveBadge,saveRemaining, setQuestion}) => {
    //define State
    const [amount, saveAmount] = useState(0);
    const [error, saveError] = useState(false)
    // Read Budget
    const defineBudget = e => {
        saveAmount(parseInt(e.target.value, 10))
    }

    //submit Badge

    const addBadge = e => {
        e.preventDefault();

        //Validate
        if(amount < 1 || isNaN(amount) ) {
            saveError(true);
            return;
        }

        // validate Success
        saveError(false);
        saveBadge(amount);
        saveRemaining(amount);
        setQuestion(false);
    }
    return (
        <Fragment>
            <h2> Coloca tu Presupuesto </h2>
            {error ? <Error message="El Presupuesto es Incorrecto"/> : null}
            <form
                onSubmit={addBadge}
            >
                <input
                    type="number"
                    className="u-full-qidth"
                    placeholder={"coloca tu presupuesto"}
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-qidth"
                    value={"Definir Presupuesto"}
                />
            </form>
        </Fragment>
    )
}

export default Question