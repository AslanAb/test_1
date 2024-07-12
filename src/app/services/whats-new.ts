import http from "../utils/http";

const getMain = (language: string = "ru") => {
  return http.get("/whats-new/main", {
    headers: { "Accept-Language": language },
  });
};

const getNewsPageArticleCategories = (language: string = "ru") => {
  return http.get("whats-new/records/categories", {
    headers: { "Accept-Language": language },
  });
};

const getNews = (language: string = "ru", page: number, per_page: number) => {
  return http.get(`/whats-new/records?page=${page}&per_page=${per_page}`, {
    headers: { "Accept-Language": language },
  });
};

const getNewsByCategory = (language: string = "ru", categoryId: number, page?: number, per_page?: number) => {
  return http.get(`/whats-new/records?record_category_id=${categoryId}&page=${page}&per_page=${per_page}`, {
    headers: { "Accept-Language": language },
  });
};

const getNewsById = (language: string = "ru", id: string) => {
  return http.get(`/whats-new/records/${id}`, {
    headers: { "Accept-Language": language },
  });
};

export const WhatsNewService = {
  getMain,
  getNewsPageArticleCategories,
  getNews,
  getNewsByCategory,
  getNewsById
};
