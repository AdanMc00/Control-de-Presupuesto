import React from 'react';

const Spend = ({spend}) => (
<li className="gastos">
    <p>
        {spend.spendname}
        <span className="gasto"> ${spend.spendamount}</span>
    </p>
</li>
    );

export default Spend