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
        img: 'img/gatos-3.png',
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
        img: 'img/gatos-2-4.png',
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
        nome: 'Ração Magnus Todo Dia Sabor Carne',
        img: 'img/caes-2-4.png',
        preco: 181.71
    }],

    /*** Brinquedos para gatos indice 3 ****/
    [{
        id: 0,
        nome: 'Brinquedo Chalesco Para Gatos',
        img: 'img/brinq-gatos-1.png',
        preco: 29.99

    },

    {
        id: 1,
        nome: 'Brinquedo Furacão Pet Cat Box',
        img: 'img/brinq-gatos-2.png',
        preco: 66.49
    },

    {
        id: 2,
        nome: 'Brinquedo Truqys Pets Cat Spin Verde',
        img: 'img/brinq-gatos-3.png',
        preco: 89.99
    },

    {
        id: 3,
        nome: 'Brinquedo Petwi Pelúcia Peixe',
        img: 'img/brinq-gatos-4.png',
        preco: 16.15
    },

    {
        id: 4,
        nome: 'Brinquedo KONG Puzzle Sway`n Play',
        img: 'img/brinq-gatos-5.png',
        preco: 105.65


    },

    {
        id: 5,
        nome: 'Brinquedo Chalesco Túnel Fun',
        img: 'img/brinq-gatos-6.png',
        preco: 108.89


    },

    {
        id: 6,
        nome: 'Brinquedo Odontopet Minhoca Infused',
        img: 'img/brinq-gatos-7.png',
        preco: 17.89

    },

    {
        id: 7,
        nome: 'Brinquedo Ratinho Chiq para Gatos',
        img: 'img/brinq-gatos-8.png',
        preco: 13.19

    }
    ],

    /*** Brinquedos para caes indice 4 ****/
    [{
        id: 0,
        nome: 'Brinquedo Furacão Pet Dental Bone',
        img: 'img/brinq-caes-1.png',
        preco: 9.81

    },

    {
        id: 1,
        nome: 'Brinquedo Chalesco Pelúcia Octopus',
        img: 'img/brinq-caes-2.png',
        preco: 27.89
    },

    {
        id: 2,
        nome: 'Brinquedo Mordedor Escova Pet',
        img: 'img/brinq-caes-3.png',
        preco: 28.98
    },

    {
        id: 3,
        nome: 'Brinquedo American Pets',
        img: 'img/brinq-caes-4.png',
        preco: 49.40
    },

    {
        id: 4,
        nome: 'Brinquedo Buddy Toys Osso Flex',
        img: 'img/brinq-caes-5.png',
        preco: 30.51


    },

    {
        id: 5,
        nome: 'Brinquedo KONG Puzzle Gyro ',
        img: 'img/brinq-caes-6.png',
        preco: 99.99


    },

    {
        id: 6,
        nome: 'Brinquedo de Vinil LCM Pintinho',
        img: 'img/brinq-caes-7.png',
        preco: 15.29

    },

    {
        id: 7,
        nome: 'Brinquedo Chalesco Frisbee Totóys',
        img: 'img/brinq-caes-8.png',
        preco: 49.40

    }],
    /** Indice 5 alimentação gatos**/

    [{
        id: 0,
        nome: 'Ração Guabi Natural Frango e Arroz',
        img: 'img/racao-guabi.png',
        preco: 215.01

    },

    {
        id: 1,
        nome: 'Ração GranPlus Frango e Arroz para Gatos',
        img: 'img/alim-gatos-1.png',
        preco: 145.71
    },

    {
        id: 2,
        nome: 'Ração Royal Canin Sachê Feline',
        img: 'img/alim-gatos-2.png',
        preco: 8.99
    },

    {
        id: 3,
        nome: 'Ração Úmida Whiskas Sachê Frango',
        img: 'img/alim-gatos-3.png',
        preco: 2.60
    },
    {
        id: 4,
        nome: 'Ração Seca PremieR Pet Golden Gatos',
        img: 'img/gatos-2-4.png',
        preco: 131.31

    },

    {
        id: 5,
        nome: 'Ração Nestlé Purina Friskies Sach',
        img: 'img/gatos-1.png',
        preco: 2.79
    },

    {
        id: 6,
        nome: 'Ração Hercosul Biofresh para Gatose',
        img: 'img/alim-gatos-4.png',
        preco: 288.81
    },

    {
        id: 7,
        nome: 'Petisco Whiskas Antibola de Pelo',
        img: 'img/gatos-2-1.png',
        preco: 9.62
    }],

    /** Indice 7 alimentação cachorros**/

    [{
        id: 0,
        nome: 'Ração GranPlus para cães adultos',
        img: 'img/caes-1.png',
        preco: 139.9

    },

    {
        id: 1,
        nome: 'Ração Úmida GranPlus Gourmet',
        img: 'img/caes-3.png',
        preco: 2.99
    },

    {
        id: 2,
        nome: 'Petisco Pedigree Dentastix Cuidado Oral',
        img: 'img/caes-2-1.png',
        preco: 17.54
    },

    {
        id: 3,
        nome: 'Ração Magnus Todo Dia Sabor Carne',
        img: 'img/caes-2-4.png',
        preco: 181.71
    },
    {
        id: 4,
        nome: 'Ração Seca PremieR Pet Goldens',
        img: 'img/alim-caes-1.png',
        preco: 125.01

    },

    {
        id: 5,
        nome: 'Ração Úmida Pedigree Sachê Cordeiro',
        img: 'img/alim-caes-2.png',
        preco: 2.60
    },

    {
        id: 6,
        nome: 'Ração Úmida Pet Delícia Natural',
        img: 'img/alim-caes-3.png',
        preco: 9.44
    },

    {
        id: 7,
        nome: 'Ração Premier Ambientes Internos',
        img: 'img/alim-caes-4.png',
        preco: 207.81
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
creatCard(document.querySelector('.brinq-gatos'), 3)
creatCard(document.querySelector('.brinq-caes'), 4)
creatCard(document.querySelector('.alim-gatos'), 5)
creatCard(document.querySelector('.alim-caes'), 6)
