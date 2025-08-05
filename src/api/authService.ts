// resman-ui-host/src/api/authService.ts
import { apiClient } from './apiClient';

interface User {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface SignupRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface SignupApiResponse {
  apiMessageCode: string;
  apiMessage: string;
  httpCode: string;
  data: User[];
  error: string | null;
}

export const authService = {
  async signup(data: SignupRequest): Promise<User> {
    try {
      const response = await apiClient.post<SignupApiResponse>('/api/auth/signup', data);
      const user = response.data.data[0];
      if (!user) {
        throw new Error('No user data returned');
      }
      return user;
    } catch (error) {
      throw new Error((error as Error).message || 'Failed to sign up');
    }
  },
};