const objeto = document.getElementById('objeto');
const adicionar = document.getElementById('adicionar');
const ordenar = document.getElementById('ordenar')
let array = []

adicionar.addEventListener('click', () => {
    
    if (!objeto.value){
        return alert(`Erro! Preencha o campo com algum elemento válido.`)
    }

    if(
    array.includes(objeto.value)){
        return alert(`Esse elemento já existe, insira um elemento diferente.`)
    }

    array.push(objeto.value)
    console.log(array)

    objeto.value = ""

})

ordenar.addEventListener('click', () => {
    const organizado = array.sort((a,b) => {
        if (a > b)
            return 1;

        if (a <b)
            return -1;

        return 0;
    })

    console.log(organizado)
})