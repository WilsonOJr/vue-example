new Vue({
    el: '#desafio',
    data: {
        nome: 'Wilson',
        idade: '27',
        image: 'http://files.cod3r.com.br/curso-vue/vue.jpg'
    },
    methods: {
        idadeVezes3(){
            return this.idade * 3
        },
        Mrandom(){
            return Math.random()
        }
    }
})