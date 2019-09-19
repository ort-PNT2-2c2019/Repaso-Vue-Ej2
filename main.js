// Define a custom filter called "currency". 
Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
});

var demo = new Vue({
    el: '#main',
    data: {
        
       
    },
    methods: {
       
    }
});