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

const produtos = [

    /** Indice 0 mais vendidos**/

    [{
        id: 0,
        nome: 'Ração GranPlus para cães adultos',
        img: 'img/caes-1.png',
        preco: 139.90

    },

    {
        id: 1,
        nome: 'Osso PetTreats Orelha Bovina',
        img: 'img/caes-2.png',
        preco: 5.99
    },

    {
        id: 2,
        nome: 'Ração Úmida GranPlus Gourmet',
        img: 'img/caes-3.png',
        preco: 2.99
    },

    {
        id: 3,
        nome: 'Brinquedo Mordedor Corda Dental Plástica',
        img: 'img/caes-4.png',
        preco: 29.99
    },

    {
        id: 4,
        nome: 'Ração Nestlé Purina Friskies Sachê',
        img: 'img/gatos-1.png',
        preco: 2.79


    },

    {
        id: 5,
        nome: 'Catnip Chalesco Erva de Gato - 10 g',
        img: 'img/gatos-2.png',
        preco: 19.95


    },

    {
        id: 6,
        nome: 'Ração Seca PremieR Golden Gatos Adultos',
        img: 'img/caes-3.png',
        preco: 131.31

    },

    {
        id: 7,
        nome: 'Casaco Jingles Moletom Salmão',
        img: 'img/gatos-5.png',
        preco: 92.99

    }],

    /** Indice 1 produtos gatos**/

    [{
        id: 8,
        nome: 'Petisco Whiskas Antibola de Pelo',
        img: 'img/gatos-2-1.png',
        preco: 9.62

    },

    {
        id: 9,
        nome: 'Comedouro CatMyPet Snack Cat Vermelho',
        img: 'img/gatos-2-2.png',
        preco: 116.99
    },

    {
        id: 10,
        nome: 'Comedouro CatMyPet Snack Cat Vermelho',
        img: 'img/gatos-2-3.png',
        preco: 166.50
    },

    {
        id: 11,
        nome: 'Ração Seca Golden para Gatos Adultos',
        img: 'img/gatos-2-1.png',
        preco: 149.31
    }],

    /** Indice 2 produtos cachorros**/

    [{
        id: 12,
        nome: 'Petisco Pedigree Dentastix Cuidado Oral',
        img: 'img/caes-2-1.png',
        preco: 17.54

    },

    {
        id: 13,
        nome: 'Colchonete Pickorruchos Xadrez',
        img: 'img/caes-2-2.png',
        preco: 143.91
    },

    {
        id: 14,
        nome: 'Guia e Peitoral American Pets',
        img: 'img/caes-2-3.png',
        preco: 84.05
    },

    {
        id: 15,
        nome: 'Guia e Peitoral American Pets',
        img: 'img/caes-2-4.png',
        preco: 181.71
    }]
]


async function creatCard(container, j) {
    let i = 0
    let numCards = 1
    let num = 0

    for (let card = 0; card < produtos[j].length; card++) {
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
            button.className = 'btn';
            divImg.className = 'card-img';
            tagImg.className = 'logo-img';

            tagImg.src = produtos[j][i].img;
            tagImg.setAttribute('alt', produtos[j][i].nome)

            h2.innerText = produtos[j][i].nome;
            p.innerText = `R$${produtos[j][i].preco}`;
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

creatCard(document.querySelector('.mais-vendidos'), 0);
creatCard(document.querySelector('.gatos-adoram'), 1);
creatCard(document.querySelector('.cachorros-amam'), 2)
