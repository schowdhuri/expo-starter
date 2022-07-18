export type RootStackParams = {
  ForgotPassword: undefined;
  Home: undefined;
  Login: undefined;
  Profile: undefined;
  SignUp: undefined;
};

export interface AccessTokenPayload {
  exp: number;
  data: {
    userId: string;
    email: string;
  };
  sub: string;
}
