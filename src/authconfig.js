export const msalConfig = {
  auth: {
    clientId: "242b4dcf-2045-4904-a050-cecb4c84567b",
    authority: "https://login.microsoftonline.com/67b1cb30-65c4-46a7-84f0-6b1176c111e8",
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: false,
  },
};

export const loginRequest = {
  scopes: ["openid", "profile", "email", "User.Read"],
};
