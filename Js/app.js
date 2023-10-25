//npx json-server --watch db.json
const url = 'http://localhost:3000/produtos'
fetch(url)
    .then((req) => req.json())
    .then((data) => mostraProdutos(data));

function mostraProdutos(IMGS){
    const htmlProdutos = IMGS.map(
        (IMGS) =>`
        <img src=${IMGS.img} width=200 height=200><br>`
    );
    document.getElementById('app').innerHTML = htmlIMGS;
}