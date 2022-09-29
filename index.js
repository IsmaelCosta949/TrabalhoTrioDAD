var marca, produto, codigo, preco, item = ''
var excluir = document.getElementById("codigo_remover").value

// criando a função para mostrar o produto
function Mostrar(){
    marca = document.getElementById("marca").value
    produto = document.getElementById("name").value
    codigo = document.getElementById("number").value
    preco = document.getElementById("preco").value

    console.log(marca, produto, codigo, preco)
}

// criando a função para adicionar o produto
function addProduto(){
    confirm("Quer criar um novo produto?")
    Mostrar()
    if(marca == "Swift"){
        item = document.querySelector("#lista-swift").innerHTML += "<li>Produto " + produto + ", código " + codigo + ", preco" + preco + "</li>"
} else if(marca == "Seara"){
    item = document.querySelector("#lista-seara").innerHTML += "<li>Produto " + produto + ", código " + codigo + ", preco" + preco + "</li>"
} else if(marca == "Friboi"){
    item = document.querySelector("#lista-friboi").innerHTML += "<li>Produto " + produto + ", código " + codigo + ", preco" + preco + "</li>"
}
    
}

// criando a função para deletar o produto
function removeProduto(){
    if(confirm("Você quer mesmo excluir?") == true){
            if(marca == "Swift"){
                item = document.querySelector("#lista-swift").innerHTML -= "<li>Produto " +     produto + ", código " + codigo + ", preco" + preco + "</li>"
             } else if(marca == "Seara"){
               item = document.querySelector("#lista-seara").innerHTML -= "<li>Produto " + produto + ", código " + codigo + ", preco" + preco + "</li>"
             } else if(marca == "Friboi"){
               item = document.querySelector("#lista-friboi").innerHTML -= "<li>Produto " + produto + ", código " + codigo + ", preco" + preco + "</li>"
            }
    } else {
        alert()
    }
}