import React from 'react';

const Icon = ({ name, color, size, onClick }) => {
    return (
        <i className={`fa fa-${name} fa-${size}`} style={{ color: color }} onClick={onClick} />
    );
};

export default Icon;