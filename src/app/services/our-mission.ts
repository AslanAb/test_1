import http from "../utils/http";

const getMain = (language: string = "ru") => {
  return http.get("/our-missions/main", {
    headers: { "Accept-Language": language },
  });
};

const getValues = (language: string = "ru") => {
  return http.get("/our-missions/values", {
    headers: { "Accept-Language": language },
  });
};

export const OurMissionService = {
  getMain,
  getValues,
};
