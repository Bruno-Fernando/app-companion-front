export const saveToken = (userToken: string): void => {
  localStorage.setItem('token', userToken);
};

export const removeToken = (): void => {
  localStorage.removeItem('token');
};

export const getToken = (): string | null => localStorage.getItem('token');

export const getDecodedToken = () => {
  const token = getToken();

  return token ? JSON.parse(token) : null;
};

export const isAuthenticated = (): boolean => !!getDecodedToken();
