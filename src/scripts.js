
class Carrinho {
    constructor() {
        this.bag = []

    }

    addBag(id) {

        for (let j = 0; j <= produtos[j].length; j++) {

            for (let i in produtos[j]) {

                if (produtos[j][i].id == id) {

                    this.bag.push(produtos[j][i])

                    //Enviando requisição post
                    let request = new XMLHttpRequest();
                    request.open("POST", "http://localhost:3000/carrinho")
                    request.setRequestHeader("Accept", "application/json");
                    request.setRequestHeader("Content-Type", "application/json");

                    request.send(JSON.stringify(produtos[j][i]))
                }
            }
        }
        this.exibeItens()
        this.attItems()
    }

    attItems() {
        const bagItens = document.querySelector('.bag-itens')

        bagItens.innerText = this.bag.length

    }

    async exibeItens() {
        const container = document.querySelector('.produtos-bag');
        const p = document.querySelector('.total')
        let total = 0

        for (let i in this.bag) {

            /* Cria e exibe elementos no HTML*/
            const divItem = document.createElement('div');
            const divInfo = document.createElement('div')
            const divImg = document.createElement('div');
            const img = document.createElement('img')
            const nomePro = document.createElement('h2');
            const preco = document.createElement('h2');
            const btnRem = document.createElement('button');

            divItem.className = 'item';
            btnRem.className = 'btn remover'

            img.src = this.bag[i].img;
            nomePro.innerText = this.bag[i].nome;
            preco.innerText = this.bag[i].preco;
            btnRem.innerText = 'Remover'

            container.appendChild(divItem);
            divItem.appendChild(divImg);
            divImg.appendChild(img);
            divItem.appendChild(divInfo)
            divInfo.appendChild(nomePro);
            divInfo.appendChild(preco);
            divInfo.appendChild(btnRem);

            /* Calcula total */

            total += this.bag[i].preco

        }

        p.innerText = `Total: R$ ${total.toFixed(2)}`
    }

}

const carrinho = new Carrinho()
