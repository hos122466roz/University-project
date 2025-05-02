import React from 'react';
import "./title.scss"
const Title = ({title , dec}) => {
    return (
        <>
            <div className='heding'>
                <h1>{title}</h1>
                <p>{dec}</p>
            </div>
        </>
    );
};

export default Title;