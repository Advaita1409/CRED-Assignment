// src/components/StackItemView.tsx
import React from 'react';
import { StackItem } from '../models/StackItem';

interface StackItemViewProps {
item: StackItem;
isExpanded: boolean;
onToggle: () => void;
}

const StackItemView: React.FC<StackItemViewProps> = ({ item, isExpanded, onToggle }) => {
return (
    <div onClick={onToggle} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', cursor: 'pointer' }}>
    <h3>{item.title}</h3>
    {isExpanded && <p>{item.description}</p>}
    <p>{isExpanded ? 'Collapse' : 'Expand'}</p>
    </div>
);
};

export default StackItemView;