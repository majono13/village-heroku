/*MENU RESPONSIVO*/

const menu = document.querySelector('.menu');


menu.addEventListener('click', () => {
    if (menu.className === 'menu') {
        menu.className += ' menu-mobile'
    } else {
        menu.className = 'menu'
    }
})

/**** ADICIONA ITENS AO HTML ******/

async function creatCard(container) {
    let i = 0
    let numCards = 1
    let num = 0

    for (let card = 0; card < produtos.length; card++) {
        num = 0
        numCards = 1
        const grid = document.createElement('div');

        while (num <= 3) {

            const card = document.createElement('div');
            const divImg = document.createElement('div');
            const tagImg = document.createElement('img');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const button = document.createElement('button');


            grid.className = 'grid';
            card.className = 'card card-' + numCards;
            p.className = 'preco';
            button.className = 'btn btn-comprar';
            button.setAttribute('value', produtos[i].id)
            divImg.className = 'card-img';
            tagImg.className = 'logo-img';

            tagImg.src = produtos[i].img;

            h2.innerText = produtos[i].nome;
            p.innerText = `R$${produtos[i].preco}`;
            button.innerText = 'Comprar';


            container.appendChild(grid);
            grid.appendChild(card);
            card.appendChild(divImg);
            divImg.appendChild(tagImg);
            card.appendChild(h2);
            card.appendChild(p);
            card.appendChild(button);

            Number(numCards++);
            i++;
            num++;
        }
    }
}

creatCard(document.querySelector('.mais-vendidos'));
creatCard(document.querySelector('.gatos-adoram'));
creatCard(document.querySelector('.cachorros-amam'))
creatCard(document.querySelector('.brinq-gatos'), 3)
creatCard(document.querySelector('.brinq-caes'), 4)
creatCard(document.querySelector('.alim-gatos'), 5)
creatCard(document.querySelector('.alim-caes'), 6)
creatCard(document.querySelector('.diversos-gatos'), 7)
creatCard(document.querySelector('.diversos-caes'), 8)
creatCard(document.querySelector('.outono'), 9)

/*** CARRINHO ***/
const body = document.querySelector('.produtos')

body.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('btn-comprar')) {
        carrinho.addBag(el.value)
    }
});