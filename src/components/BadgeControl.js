import React, {Fragment} from 'react';

const BadgeControl = ({badge, remaining}) => {
    return (
        <Fragment>
            <div className='alert alert-primary'>
                presupuesto: {badge}
            </div>
            <div className='alert '>
                restante: {remaining}
            </div>
        </Fragment>
    );
}
export default BadgeControl