let marca;
let produto;
let codigo;
let preco

var objeto = {marca:marca, produto:produto, codigo:codigo, preco:preco}
var excluir = document.getElementById("codigo_remover").value

const seara = document.getElementById("lista-seara")
const swift = document.querySelector("#lista-swift")
const friboi = document.querySelector("#lista-friboi")

// criando a função para adicionar o produto
function addProduto(){
    confirm("Quer criar um novo produto?")
    if(confirm("Quer criar um novo produto?") == true){
        const opcaoMarca = document.getElementById("marca").value
        const nomeProd = document.getElementById("name").value
        const codProd = document.getElementById("number").value
        const precoProd = document.getElementById("preco").value

        // passando os valores das opçoes para os objetos
        objeto.marca = opcaoMarca
        objeto.produto = nomeProd
        objeto.preco = precoProd

        // fazendo o if para não permitir o mesmo codigo
        if(document.getElementById(`${codProd}`) != null){
            alert("Cod ja existe")
        } else{
            objeto.codigo = codProd
            let confirma = confirm("Adicionar?")
            if(confirma == true){
                seara.innerHTML +=`<li id=${objeto.codigo}> marca ${objeto.marca} nome ${objeto.nome} codigo ${objeto.codigo} preco ${objeto.preco}</li>`
            }
          }elseif(objeto.marca=="Swift")
        {
            if(confirmacao==true){
              swift.innerHTML+=`<li id=${objeto.codigo}marca ${objeto.marca}nome ${objeto.nome}cod${objeto.codigo}preco ${objeto.preco}</li>`
            }
         }
          }if(objeto.marca=="Friboi"){
      
            if(confirmacao==true){
      
                friboi.innerHTML+=`<li id=${objeto.codigo}marca ${objeto.marca}nome ${objeto.nome}cod${objeto.codigo}preco ${objeto.preco}</li>`
            }
          }
        }

        // fazendo a função para remover os itens
      function remove()
      {
      
        const id = document.getElementById("codigo_remover").value;
      
        const idli = document.getElementById(`${id}`);
        let confirma = confirm("remover?");
      
        if(objeto.marca=="Seara"){
      
          if(confirma==true){
      
              if(idli==null){
                  alert('Não existe!')
              }
              else{
                  liId.remove();
              }
          }
        }elseif(objeto.marca=="Friboi")
        {
          if(confirma==true){
              if(idli==null){
                  alert('Não existe!')
              }
              else{
                  idli.remove();
              }
          }
        }elseif(objeto.marca=="Swift")
        {
          if(confirma==true){
              if(idli==null){
                  alert('Não existe!')
              }
              else{
                  idli.remove();
              }
          }
        }

        marca.classlist.remove()
        preco.classlist.remove()
        produto.classlist.remove()
        codProd.classlist.remove()
        codigo.classlist.remove()
    }