import React from 'react';

const CardContainer = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                {props.children}
            </div>
        </div>
    );
};

export default CardContainer;