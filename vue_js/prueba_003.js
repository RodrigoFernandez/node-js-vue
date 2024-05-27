const vm = new Vue({
    el: '#vue_det',
    data: {
        firstname: "Ria",
        lastname: "Singh",
        address: "Mumbai",
        htmlmydetails: "<div> <h1>Soy Ria Singh de Mumbai</h1></div>"
    },
    methods: {
        mydetails: function() {
            return "Soy " + this.firstname + " " + this.lastname;
        }
    }
});