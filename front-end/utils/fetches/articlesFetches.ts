import { ROUTES } from "../../../common/constants/routePaths"; 

export const getAllArticles = async () => {
  const res = await fetch(ROUTES.api.articles.getAllArticles, {
    method: "GET",
  });
  if (!res.ok) throw new Error(await res.text());
  const articles = await res.json();
  return articles;
};

export const getArticleById = async (id: number) => {
  const res = await fetch(`${ROUTES.api.articles.getArticle.replace(':id', id.toString())}`, {
    method: "GET",
  });
  if (!res.ok) throw new Error(await res.text());
  const article = await res.json();
  return article;
};