import React from 'react';
import './StackItem.css';

const StackItem = ({ data, isExpanded, onClick }) => {
return (
    <div 
    className={`stack-item ${isExpanded ? 'expanded' : 'collapsed'}`}
    onClick={onClick}
    >
    <div className="stack-item-header">
        <h3>{data.title}</h3>
        <span className={`arrow ${isExpanded ? 'up' : 'down'}`}></span>
    </div>
    
    {isExpanded && (
        <div className="stack-item-content">
        <p>{data.description}</p>
          {/* Add more content for expanded view */}
        </div>
    )}
    </div>
);
};

export default StackItem;