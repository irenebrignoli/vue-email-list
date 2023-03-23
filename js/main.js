/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/



const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!',
        result: '',
        arrayMail:[]
      }
    },
    methods:{
      generateArrayMail(){
        for(let i=0; i<10; i++){

          axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
              this.result = response.data;
              console.log(this.result.response);
              this.arrayMail.push(this.result.response);
            });
        }
      }
    },
    mounted(){

      this.generateArrayMail()

    }
  }).mount('#app')