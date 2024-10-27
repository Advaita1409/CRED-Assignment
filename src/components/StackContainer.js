// src/components/StackContainer.js
import React, { useEffect, useState } from 'react';
import { fetchStackData } from '../services/StackService';
import StackItemView from './StackItemView';

const StackContainer = () => {
const [items, setItems] = useState([]);
const [activeIndex, setActiveIndex] = useState(null);

useEffect(() => {
    const loadData = async () => {
    const data = await fetchStackData();
    setItems(data);
    };
    loadData();
}, []);

const toggleItem = (index) => {
    // If the clicked item is already expanded, collapse it
    // Otherwise, expand the clicked item and collapse others
    setActiveIndex(activeIndex === index ? null : index);
};

return (
    <div>
    {items.map((item, index) => (
        <StackItemView
        key={item.id}
        item={item}
        isExpanded={activeIndex === index}
        onToggle={() => toggleItem(index)}
        />
    ))}
    </div>
);
};

export default StackContainer;