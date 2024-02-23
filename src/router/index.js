const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/');
};

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    return;
  }
  next('/login');
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: function () {
      return import('../views/HomeView.vue');
    },
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../components/Login.vue');
    },
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/cart',
    name: 'cart',
    component: function () {
      return import('../components/Cart.vue');
    },
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/orders',
    name: 'orders',
    component: function () {
      return import('../components/Orders.vue');
    },
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../components/Register.vue');
    },
    beforeEnter: ifNotAuthenticated,
  },
]