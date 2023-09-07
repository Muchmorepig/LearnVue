const app = {
    data() {
        return {
            d: {
                name: [],
                surname: [],
                email: [],
                country: [],
                organization: [],
                role: [],
                reason: [],
            },
            el: {
                is_wrong: false,
                is_ee: false,
                is_e: "none",
                is_o: false,
                is_c: false,
                final: false,
            }
        }
    },
    methods: {
        nameCheck(e) {
            const ll = e.target.value.split(' ').join('').length;
            if (ll < 1) { return this.$data.el.is_wrong = true } else { return this.$data.el.is_wrong = false }
        },
        isEmail(email) {
            const e = email.target.value;
            if (!e) {
                this.$data.el.is_e = "inline";
                this.$data.el.is_ee = true;
                return
            }
            var strRegex = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
            if (!strRegex.test(e)) {
                this.$data.el.is_e = "inline";
                this.$data.el.is_ee = true;
            } else {
                this.$data.el.is_e = "none";
                this.$data.el.is_ee = false;
            }
            return
        },
        oCheck(e) {
            const ll = e.target.value.split(' ').join('').length;
            if (ll < 2) { return this.$data.el.is_o = true } else { return this.$data.el.is_o = false }
        },
        cCheck(e) {
            const ll = e.target.value.split(' ').join('').length;
            if (ll < 2) { return this.$data.el.is_c = true } else { return this.$data.el.is_c = false }
        },
        addNote(event) {
            if (this.$data.d.name.length !== 0 &&
                this.$data.d.surname.length !== 0 &&
                this.$data.d.email.length !== 0 &&
                this.$data.d.country.length !== 0 &&
                this.$data.d.organization.length !== 0 &&
                this.$data.d.role.length !== 0) {
                const url = "http://xx.xx.xx.xx:xxxx/event/register"
                axios({
                    method: "post",
                    url: url,
                    data: this.$data.d,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(function (response) {
                        console.log(response);
                        alert("Success")
                    })
                    .catch(function (error) {
                        console.log(error);
                        alert("Sorry……You need to Submit again.");
                    });
            }else{ return alert("Is anyone empty?")}
        },
    }
};

Vue.createApp(app).mount('#app');
