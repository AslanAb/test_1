import http from "../utils/http";

const getMain = (language: string = "ru") => {
  return http.get("/about-companies/main", {
    headers: { "Accept-Language": language },
  });
};

const getDigits = (language: string = "ru") => {
  return http.get("/about-companies/digits", {
    headers: { "Accept-Language": language },
  });
};

const getUniqueSolutions = (language: string = "ru") => {
  return http.get("/about-companies/unique-solutions", {
    headers: { "Accept-Language": language },
  });
};

export const AboutCompanyService = {
  getMain,
  getDigits,
  getUniqueSolutions
};
