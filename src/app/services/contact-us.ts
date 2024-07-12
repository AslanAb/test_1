import http from "../utils/http";

const postContacts = (payload) => {
  return http.post("/contact-us", payload);
};

export const ContactUsService = { postContacts };
