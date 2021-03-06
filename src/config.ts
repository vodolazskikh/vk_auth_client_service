export const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/"
    : "https://mighty-refuge-88074.herokuapp.com/";

export const vkAuth = {
  url: "https://oauth.vk.com/",
  redirect_uri: "http://inlists.ru/authme",
  client_id: "7719105",
};

export const features = {
  search: process.env.NODE_ENV === "development",
  especial: process.env.NODE_ENV === "development",
  main_promo: true,
  friends: process.env.NODE_ENV === "development",
  favorites: process.env.NODE_ENV === "development",
};

export const core = {
  city: [
    "nsk" as const,
    "ekb" as const,
    "spb" as const,
    "tomsk" as const,
    "tumen" as const,
    "kazan" as const,
  ],
};
