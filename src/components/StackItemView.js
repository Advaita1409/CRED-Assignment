import React from 'react';

const StackItemView = ({ item, isExpanded, onToggle }) => {
return (
    <div
    onClick={onToggle}
    style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', cursor: 'pointer' }}
    >
    <h3>{item.title}</h3>
    {isExpanded && <p>{item.description}</p>}
    <p>{isExpanded ? 'Collapse' : 'Expand'}</p>
    </div>
);
};

export default StackItemView;