"use client";
import React, { useEffect, useState } from 'react';
import { Article } from "../../../../common/types/DBTables";
import { getArticleById } from '@/utils/fetches/articlesFetches';
import { usePathname } from "next/navigation";


const ArticlePage: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const id = usePathname().split("/").pop();
  
  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const fetchedArticle = await getArticleById(Number(id));
          setArticle(fetchedArticle);
        } catch (err) {
          setError("Failed to fetch article");
        } finally {
          setLoading(false);
        }
      };

      fetchArticle();
    }
  }, [id]);

  return (
    <div>
      {article ? (
        <div className="flex justify-center items-center h-screen bg-green-800 opacity-85">
          <div className="w-1/2 text-center bg-white p-10 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">{article.title}</h1>
            {article.img_ref && <img src={article.img_ref} alt={article.title} className="mb-6" />}
            <div className="text-gray-700 text-base text-justify">
              <p>{article.description}</p>
              <p className="text-sm mt-6">Created on: {new Date(article.creation_date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Article not found</div>
      )}
    </div>
  );
};

export default ArticlePage;
