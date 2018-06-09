new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function () {
                alert('dupa')
            },
            putVal: function (event) {
                this.value = event.target.value;
            }
        }
    });