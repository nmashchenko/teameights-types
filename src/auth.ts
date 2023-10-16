export interface IResetPassword {
  password: string;
  hash: string;
}

export interface IRegisterLogin {
  email: string;
  password: string;
}

export interface IGithubLogin {
  code: string;
}

export interface IGoogleLogin {
  idToken: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IConfirmEmail {
  hash: string;
}
