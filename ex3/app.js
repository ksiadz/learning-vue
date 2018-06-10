new Vue({
        el: '#exercise',
        data: {
            value: 0
        },
        computed: {
            result: function () {
                return this.value == 37? "done" : "not there";
            }
        },
        watch: {
            result: function (value) {
                var vm = this;
                setTimeout(function () {
                    vm.value = 0;
                }, 1000);
            }
        }
    });