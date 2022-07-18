import type { AxiosError } from "axios";
import { axiosAuthInstance, axiosVerifiedAuthInstance } from "./axios";

export interface ISignUpPayload {
  confirmPassword: string;
  email: string;
  password: string;
}

export interface ISignInPayload {
  idToken: string;
  state: string;
  country: string;
}

export interface IRenewTokenPayload {
  accessToken: string;
  refreshToken: string;
  email: string;
}

export interface IForgotPasswordPayload {
  email: string;
}

export interface IResetPasswordPayload {
  password: string;
  confirmPassword: string;
  forgotPasswordToken: string;
}

export const signIn = (payload: ISignInPayload) => {
  return axiosAuthInstance({
    method: "POST",
    url: `fetch-login-data`,
    data: payload,
  });
};

export const renewAccessToken = (payload: IRenewTokenPayload) => {
  return axiosAuthInstance({
    method: "POST",
    url: `renew-access-token`,
    data: payload,
  });
};

export const signUp = async (payload: ISignUpPayload) => {
  try {
    await axiosAuthInstance({
      method: "POST",
      url: `sign-up`,
      data: payload,
    });
  } catch (ex: unknown) {
    throw (ex as AxiosError).response?.data;
  }
};

export const forgotPassword = (payload: IForgotPasswordPayload) => {
  try {
    return axiosAuthInstance({
      method: "POST",
      url: `forgot-password`,
      data: payload,
    });
  } catch (ex: unknown) {
    throw (ex as AxiosError).response?.data;
  }
};

export const resetPassword = (payload: IResetPasswordPayload) => {
  return axiosAuthInstance({
    method: "POST",
    url: `reset-password`,
    data: payload,
  });
};

export const signOut = () => {
  return axiosVerifiedAuthInstance({
    method: "POST",
    url: `logout`,
  });
};
