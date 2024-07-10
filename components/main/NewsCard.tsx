import React from 'react';

interface NewsCardProps {
  title: string;
  date: string;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-green-800">{title}</div>
        <p className="text-gray-600 text-sm mb-2">{date}</p>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
