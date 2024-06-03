Vue.component('testcomponent', {
    template: '<div><h1>Esto viene del componente</h1></div>'
});

const vm1 = new Vue({
    el: '#component_1'
});

const vm2 = new Vue({
    el: '#component_2',
    components: {
        'testcomponent': {
            template: '<div><h2>Esto viene del componente</h2></div>'
        }
    }
});
