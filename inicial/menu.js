/*Variável que mostra o MENU grande. Seu estado inicial é mostrando*/
let show = true;

/*Dentro do meu documento html vai procurar uma classe .menu-section*/
const menuSection = document.querySelector(".menu-section")

/*Dentro do menu-section procura a classe .menu-toggle*/
/*Obs: tirar o ON da classe menu-section*/
const menuToggle = menuSection.querySelector(".menu-toggle")


/*Esse função será executada quando clicarmos no menuToggle*/
/*O evento que vai acontecer é um evento de click */
/*Essa linha está pegando o menuSection, adicionando uma lista de classes via toggle
e adicionando uma classe ON*/
/*A classe toggle está sendo usada pq ela adiciona e tira a classe on (se existe o on)
ele tira, se não existe ele adiciona*/
/*O segundo parametro 'SHOW' vai garantir que o toggle vai ser usado no momento certo*/
/*Essa linha diz que o show é diferente do show atual, ou seja, diferente de true
sendo agora false*/
menuToggle.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "inicial"
    menuSection.classList.toggle("on", show)
    show = !show;
})