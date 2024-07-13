import { ROUTES } from "../../../common/routePaths"; 

export const getAllArticles = async () => {
  const res = await fetch(ROUTES.api.articles.getAllArticles, {
    method: "GET",
  });
  if (!res.ok) throw new Error(await res.text());
  const articles = await res.json();
  return articles;
};