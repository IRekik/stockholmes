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
    <div className="bg-gray-200 min-h-screen items-center w-full pt-10">
      {article ? (
        <div className="w-5/6 bg-white p-10 rounded-lg shadow-lg m-auto">
          <h1 className="text-3xl font-bold text-gray-800">{article.title}</h1>
          <p className="text-xs mt-1 mb-6">Created on: {new Date(article.creation_date).toLocaleDateString()}</p>
          {article.img_ref && <img src={article.img_ref} alt={article.title} className="mb-6" />}
          <div className="text-gray-700 text-base text-justify">
            <p>{article.description}</p>
          </div>
        </div>
      ) : (
        <div>Article not found</div>
      )}
    </div>
  );
};

export default ArticlePage;
