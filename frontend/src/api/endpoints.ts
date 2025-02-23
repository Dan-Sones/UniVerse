export const AuthEndpoints = {
  signUp: () => 'users/signup',
  login: () => 'users/login',
  logout: () => 'users/logout',
  checkAuth: () => 'users/me',
};

export const ChatEndpoints = {
  searchUsers: () => 'users/search',
  getChatHistory: (userId: number) => `chats/${userId}/history`,
};
