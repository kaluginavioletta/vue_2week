import { createStore } from "vuex";
import { loginRequest } from "@/utils/api.js";

export default createStore({
  state: {
    products: [],
    snp: '',
    email: '',
    password: '',
    user_token: null,
    user_auth: false,
    token: localStorage.getItem('myAppToken') || '',
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
  }, 
  actions: {
    AUTH_REQUEST: ({ commit }, user) => {
      return new Promise((resolve, reject) => {
        loginRequest(user)
          .then((token) => {
            commit('AUTH_SUCCESS', token);
            localStorage.setItem('myAppToken', token);
            resolve();
          })
          .catch(() => {
            commit('AUTH_ERROR');
            localStorage.removeItem('myAppToken');
            reject();
          }) 
      })
    }
  },
  mutations: {
    async getProducts(state){
      const {data} = await axios.get('https://jurapro.bhuser.ru/api-shop/products')
          .then(response => state.products = response.data)
          .catch(error =>{console.log(error)})
      state.products = data;
    },
    async login(state){
      let userInfo = {
        email: state.email,
        password: state.password
      }
      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/login', userInfo)
      .then(function(response){
        state.user_token = response.data.data.user_token;
        localStorage.token = state.user_token;
      })
      .catch(error =>{console.log(error)})

      console.log(data);
      console.log(state.user_token);

      if(localStorage.token !== undefined && localStorage.token !== null){
        window.location.href = "/";
      }
    },
    async registration(state){
      let userInfo = {
        fio: state.fio,
        email: state.email,
        password: state.password
      }
      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/signup', userInfo)
      .then(function(response){
        console.log(response);
        state.user_token = response.data.data.user_token;
        localStorage.token = state.user_token;
      })
      .catch(error =>{console.log(error)})

      console.log(data);
      console.log(state.user_token);

      if(localStorage.token !== undefined && localStorage.token !== null){
        window.location.href = "/login";
      }
    },
    async registration(state){
      let userInfo = {
        fio: state.fio,
        email: state.email,
        password: state.password
      }
      const data = await axios.post('https://jurapro.bhuser.ru/api-shop/signup', userInfo)
      .then(function(response){
        console.log(response);
        state.user_token = response.data.data.user_token;
        localStorage.token = state.user_token;
      })
      .catch(error =>{console.log(error)})

      console.log(data);
      console.log(state.user_token);

      if(localStorage.token !== undefined && localStorage.token !== null){
        window.location.href = "/login";
      }
    },
    logout(state){
      state.user_token = null;
      localStorage.clear();
    },
    AUTH_SUCCESS: (state, token) => {
      state.token = token;
    },
    AUTH_ERROR: (state) => {
      state.token = '';
    }
  }
})