/*eslint-disable @typescript-eslint/no-empty-object-type*/
export interface User {
    _id: string;
    full_name: string;
    email:string;
    password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}



export interface LoginCredentials {
    email: string;
    password: string;
  }


  export interface SigninCredentials {
    email: string;
    password: string;
  }


  export interface LoginResponse {
    success: boolean;
    data?: {
      user: User;
      token: string;
    };
    message?: string;
    token?: string;
    user?: User;
  }


  export interface RegisterCredentials
  extends Omit<User, "_id" | "createdAt" | "updatedAt"> {}
