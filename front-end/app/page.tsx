"use client";
import React, { useEffect, useState } from 'react';
import NewsCard from '../components/main/NewsCard';
import StockGraphCard from '../components/main/StockGraphCard';
import { Article } from '../../common/types/DBTables';
import { getAllArticles } from '@/utils/fetches/articlesFetches';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const fetchedArticles = await getAllArticles();
        setArticles(fetchedArticles);
      } catch (err) {
        setError("Failed to fetch articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center h-auto bg-green-800 opacity-85 py-10">
        <div className="w-2/3 text-center">
          <div>
            <h1 className="text-3xl text-yellow-200 p-10">Welcome to Stockholmes</h1>
          </div>
          <div className="text-white p-5">
            <p>A game website where you can challenge yourself in a virtual stock market</p>
          </div>
          <div className="flex justify-center items-center p-10">
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Ready to Play?</h2>
              <p className="text-gray-600 mb-6">Join the fun and start your adventure now!</p>
              <button className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-yellow-100">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-6xl text-center">
            <div className="text-center mb-8 text-green-800">
              <h2 className="text-3xl font-bold text-gray-600 mb-4">Stocks on Fire</h2>
              <p className="text-gray-800">Check out the stocks that are trending and making waves today!</p>
            </div>
            <div className="flex flex-wrap justify-center">
              <StockGraphCard 
                title="$GMO"
                imageReference="/images/stocks/stock.jpg"
              />
              <StockGraphCard 
                title="$PUTA"
                imageReference="/images/stocks/stock.jpg"
              />
              <StockGraphCard 
                title="$LULO"
                imageReference="/images/stocks/stock.jpg"
              />
              <StockGraphCard 
                title="$TSNA"
                imageReference="/images/stocks/stock.jpg"
              />
              <StockGraphCard 
                title="$BGQW"
                imageReference="/images/stocks/stock.jpg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-gray-100">
        <div className="text-center mb-8 text-green-800">
          <h2 className="text-3xl font-bold mb-4">Your Recent News</h2>
          <p className="text-gray-600">Stay updated with the latest news and updates from Stockholmes.</p>
        </div>
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            articles.map((article) => (
              <NewsCard
                id={article.id}
                title={article.title}
                date={new Date(article.creation_date).toLocaleDateString()}
                description={article.description}
                imageReference={article.img_ref || '/images/articles/default.jpg'}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
