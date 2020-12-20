let accessToken: string;

export const setAccessToken = (token: string) => {
  accessToken = token;
  console.log(accessToken);
};

export const getAccessToken = () => {
  return accessToken;
};
