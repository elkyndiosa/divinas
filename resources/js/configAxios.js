window._ = require('lodash');
window.NotificationHandler = require('./handlers/NotificationHandler').default
window.ErrorHandler = require('./handlers/ErrorHandler').default
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').content;

