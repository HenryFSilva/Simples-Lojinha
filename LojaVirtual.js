class LojaVirtual {

    constructor() {
        this.produto = new Map();
    }

    cadsProduto(pNome, pNumCads) {
        this.produto[pNome] = pNumCads;
        return `${pNome} cadastrado com sucesso`;
    }

    carrinhoComp(pNome, pValor) {
        this.produto[pNome] = pValor;
        return `Foi adicionado ao seu carrinho, ${pNome} no valor de ${pValor}.`
    }

    calcularSubtotal(preco, quantidade) {
        this.produto[preco] = quantidade
        return preco * quantidade;
    }

    aplicarDesconto(desconto, percentual) {
        this.produto[desconto] = percentual;
        return `${this.preco} * ${(percentual / 100)} - ${desconto}`
    }
}



let produto1 = new LojaVirtual()
console.log(produto1.cadsProduto('Computador'));

let produto2 = new LojaVirtual()
console.log(produto2.carrinhoComp('teclado', 149.99));

let produto3 = new LojaVirtual()
console.log(produto3.calcularSubtotal(149.99, 2));

let produto4 = new LojaVirtual()
console.log(produto4.aplicarDesconto(149.99, 10));