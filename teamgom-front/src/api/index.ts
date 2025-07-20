import axios from 'axios';
import api from '@/api';

import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const instance = axios.create({
  timeout: 1000,
});
// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // config.headers : 요청 헤더
    // JWT 추출
    const { getToken } = useAuthStore();
    const token = getToken();
    if (token) {
      // 토큰이 있는 경우
      config.headers['Authorization'] = `Bearer ${token}`;
      // console.log(config.headers.Authorization);
    }
    return config;
  },
  (error) => {
    // 요청 중 에러가 난 경우
    return Promise.reject(error);
  }
);
// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response;
    }
    if (response.status === 404) {
      return Promise.reject('404: 페이지 없음 ' + response.request);
    }
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      // access token 재발급
      try {
        const { data: newToken } = await api.post('/api/auth/refresh');
        const { setToken } = useAuthStore();
        setToken(newToken);

        // 실패했던 요청 config 다시 시도
        error.config.headers['Authorization'] = `Bearer ${newToken}`;
        return api.request(error.config);
      } catch {
        // refresh도 실패하면 로그아웃
        const { logout } = useAuthStore();
        logout();
        router.push('/auth/login');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);
export default instance;
