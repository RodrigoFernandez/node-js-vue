const vm = new Vue({
    el: '#vue_det',
    data: {
        firstname: "Ria",
        lastname: "Singh",
        address: "Mumbai"
    },
    methods: {
        mydetails: function() {
            return "Soy " + this.firstname + " " + this.lastname;
        }
    }
});