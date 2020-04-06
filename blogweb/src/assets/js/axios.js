import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080/blog/"

// 请求头拦截
axios.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios