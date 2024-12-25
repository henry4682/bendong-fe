import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // 後端 Laravel API 的基址
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 請求攔截器
apiClient.interceptors.request.use(
  (config) => {
    // 可在這裡加入身份驗證 token，例如：
    // const token = localStorage.getItem('authToken');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// 回應攔截器
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // 統一處理錯誤，例如 401 未授權
    if (error.response && error.response.status === 401) {
      console.error('未授權，請登入');
    }
    return Promise.reject(error);
  }
);

export default apiClient;