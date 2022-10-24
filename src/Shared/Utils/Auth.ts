import { ParsedToken } from 'firebase/auth';
import jwt_decode from 'jwt-decode';

export const saveToken = (userToken: string): void => {
  localStorage.setItem('token', userToken);
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};

export const getToken = (): string | null => localStorage.getItem('token');

export const getDecodedToken = (): ParsedToken | null => {
  const token = getToken();

  if (token) {
    try {
      const decoded: ParsedToken = jwt_decode<ParsedToken>(token);
      return decoded;
    } catch (error) {
      return null;
    }
  }

  return null;
};

export const isAuthenticated = (): boolean => !!getDecodedToken();
