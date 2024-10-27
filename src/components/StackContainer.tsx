// src/components/StackContainer.tsx
import React, { useEffect, useState } from 'react';
import { StackItem } from '../models/StackItem';
import { fetchStackData } from '../services/StackService';
import StackItemView from './StackItemView';

const StackContainer: React.FC = () => {
  const [items, setItems] = useState<StackItem[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchStackData();
      setItems(data);
    };
    loadData();
  }, []);

  const toggleItem = (index: number) => {
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