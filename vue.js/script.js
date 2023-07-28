const app = Vue.createApp({
    data() {
        return {
            randomEmail: [],
        }
    },
    methods: {

    },
    mounted() {

        for (let i = 0; i < 10; i++) {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosResp) => {
                    this.randomEmail.push(axiosResp.data.response)

                })
            this

        };
    }


});
console.log(app);
app.mount("#app")

