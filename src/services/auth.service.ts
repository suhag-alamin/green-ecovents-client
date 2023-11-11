import { authKey } from "@/constants/storageKey";
import axiosInstance from "@/helpers/axios/axiosInstance";
import { IUserInfo } from "@/interfaces/global";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/localStorage";

export const storeUserInfo = (accessToken: string) => {
  if (accessToken) {
    return setToLocalStorage(authKey, accessToken);
  }
  return null;
};

export const getUserInfo = (): IUserInfo | null => {
  const authToken = getFromLocalStorage(authKey) as string;

  if (authToken && authToken !== "undefined") {
    const decodedData = decodedToken(authToken) as IUserInfo;
    return decodedData;
  } else {
    return null;
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);

  return !!authToken;
};

export const removeUserInfo = async (key: string) => {
  await axiosInstance.post("/auth/logout");

  return localStorage.removeItem(key);
};

export const getNewAccessToken = async () => {
  return await axiosInstance.post("/auth/refresh-token");
};
