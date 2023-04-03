class Produto{
   
    constructor(){
        this.id = 1  
        this.arrayProdutos = []

    }  

    Adicionar(){    
        let produto = this.lerDados()
        this.salvar(produto)

        this.Listar()
    }

    lerDados(){ 
         let produto ={}

         produto.id = this.id
         produto.nomeProduto = document.getElementById('nome').value
         produto.nomeQuantidade = document.getElementById('quantidade').value
         produto.nomeMedicamento = document.getElementById('medicamento').value

         return produto
    }

    salvar(produto){    
        this.arrayProdutos.push(produto)    
        this.id++
    }

    Listar(){   
        let tbody = document.getElementById('tbody')
        tbody.innerText =''

        for(let i = 0; i < this.arrayProdutos.length; i++){

        let tr = tbody.insertRow()

        let td_id = tr.insertCell()
        let td_nome = tr.insertCell()
        let td_quantidade = tr.insertCell()
        let td_medicamento = tr.insertCell()
        let td_deletar = tr.insertCell()

        td_id.innerText = this.arrayProduto[i].id
        td_nome.innerText = this.arrayProduto[i].nomeProduto
        td_quantidade.innerText = this.arrayProduto[i].nomeQuantidade
        td_medicamento.innerText = this.arrayProduto[i].nomeMedicamento
        let imagem = document.createElement('img')
        imagem.src = 'lixeira.svg'
        td_deletar.appendChild(imagem)


        }
    }
    
}

var produto = new Produto()

