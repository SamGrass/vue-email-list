const { createApp } = Vue

  createApp({
    data() {
      return {
            emails: [

            ],
      }
    },
    mounted() {
        // utilizzo axios per richiamare l'api per creare una mail 10 volte
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(randomEmail => {
                let email = randomEmail.data.response;
                this.emails.push(email); 
            }) 
        } 
        console.log(this.emails);
    },
  }).mount('#app')