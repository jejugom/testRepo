import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

interface Member {
  username: string;
  password: string;
  email?: string;
}

const initState = {
  token: '', // 접근 토큰(JWT)
  user: {
    username: '', // 사용자 ID
    email: '', // Email
    roles: [], // 권한 목록
  },
};
export const useAuthStore = defineStore('auth', () => {
  const state = ref({ ...initState });
  const isLogin = computed(() => !!state.value.user.username); // 로그인 여부
  const username = computed(() => state.value.user.username); // 로그인 사용자 ID
  const email = computed(() => state.value.user.email); // 로그인 사용자 email

  const login = async (member: Member) => {
    // api 호출
    const { data } = await axios.post('/api/auth/login', member);
    state.value = { ...data };
    sessionStorage.setItem('auth', JSON.stringify(state.value));
  };
  const logout = () => {
    sessionStorage.removeItem('auth');
    state.value = { ...initState };
  };
  const getToken = () => state.value.token;

  const setToken = (token: string) => {
    state.value.token = token;
    sessionStorage.setItem('auth', JSON.stringify(state.value));
  };

  const load = () => {
    const auth = sessionStorage.getItem('auth');
    if (auth != null) {
      state.value = JSON.parse(auth);
      console.log(state.value);
    }
  };
  const changeProfile = (member: Partial<Member>) => {
    if (member.email) {
      state.value.user.email = member.email;
      sessionStorage.setItem('auth', JSON.stringify(state.value));
    }
  };

  load();
  return {
    state,
    username,
    email,
    isLogin,
    changeProfile,
    login,
    logout,
    getToken,
    setToken,
  };
});
