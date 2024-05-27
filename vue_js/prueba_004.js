const vm = new Vue({
    el: '#vue_det',
    data: {
        firstname: "Ria",
        lastname: "Singh",
        address: "Mumbai",
        htmlmydetails: "<div> <h1>Soy Ria Singh de Mumbai</h1></div>",
        imgsrc: "https://cdn.alfabetajuega.com/alfabetajuega/2023/11/naruto-entreno-arduamente-para-dominar-el-modo-sabio-de-los-sapos.jpg"
    },
    methods: {
        mydetails: function() {
            return "Soy " + this.firstname + " " + this.lastname;
        }
    }
});