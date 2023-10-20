export const isAuthenticated = () => {
    return localStorage.getItem('jwtToken') !== null;
  };
  