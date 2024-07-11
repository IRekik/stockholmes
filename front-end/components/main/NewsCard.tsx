import React from 'react';
import Image from 'next/image';

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
  imageReference: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, description, imageReference }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-800">{title}</div>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex justify-center">
          <Image
            src={imageReference}
            alt="Picture"
            width="200"
            height="200"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
