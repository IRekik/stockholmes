export const ROUTES = {
  api: {
    articles: {
      getAllArticles: "/api/articles/get-all-articles",
      getArticle: "/api/articles/get-article",
      getThreeArticles: "/api/articles/get-three-articles"
    },
    users: {
      createUser: "/api/users/create-user",
      authenticateUser: "/api/users/authenticate-user",
      checkExistence: "/api/users/check-existence"
    }
  }
}