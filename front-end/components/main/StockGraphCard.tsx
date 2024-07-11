import React from 'react';
import Image from 'next/image';

interface StockGraphCardProps {
  title: string;
  imageReference: string;
}

const StockGraphCard: React.FC<StockGraphCardProps> = ({ title, imageReference }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-2 text-green-800">{title}</div>
        <div className="flex justify-center">
          <Image
            src={imageReference}
            alt="Stock Graph"
            width="150"
            height="150"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default StockGraphCard;
