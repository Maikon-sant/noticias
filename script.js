//Adiciona um evento de clique ao botão com o id
document.getElementById('sharebtn').addEventListener('click', function() {
    const url = window.location.href; // url da página atual
    const text = "Veja este conteúdo incrível!"; //texto que será compartilhado
    const shareData = {
        title: 'Título da Página',//título da página
        text: text,//texto que será exibido no compartilhamento
        url: url, //url da página
    };

    //verifica se a API de compartilhamento do navegador está disponível
    if (navigator.share) {
        //Tenta compartilhar os dados usando a API
        navigator.share(shareData)
            .then(() => console.log('Compartilhado com sucesso')) //Mensagem de compartilhamento no console
            .catch((error) => console.error('Erro ao compartilhar:', error)); //Mensagem de erro no console
    } else {
        //Se a API não for suportada exibe um alerta
        alert('O compartilhamento não é suportado neste navegador.');
    }
});





//Parte de anúncios


//Array que contém os objetos das imagens e seus links
const imagens = [
    {
        src: "https://th.bing.com/th/id/OIP.zp_KzcYhj1YP9u9hABjQlQHaEK?rs=1&pid=ImgDetMain",
        link: "https://www.coca-cola.com/"//link que manda para o site do anúncio
    },
    {
        src: "https://th.bing.com/th/id/OIP.9hRq-9avgf1zomPPImx8AQHaEK?rs=1&pid=ImgDetMain",
        link: "https://www.pepsi.pt/"
    },
    {
        src: "https://gkpb.com.br/wp-content/uploads/2017/05/novo-logo-identidade-visual-fanta-brasil.jpg",
        link: "https://www.coca-cola.com/us/en/brands/fanta"
    }
];

//variável para armazenar o índice da imagem atual
let index = 0;


//função para trocar a imagem
function trocarImagem() {
    //seleciona o elemento da imagem e o link
    const imagemElement = document.getElementById('imagem');
    const linkElement = document.getElementById('aId');

    // Atualiza a imagem e o link do índice atual
    imagemElement.src = imagens[index].src;// define a nova imagem
    linkElement.href = imagens[index].link;//define o novo link

    // Atualiza o índice para a próxima imagem
    index = (index + 1) % imagens.length; // Retorna ao início após a última imagem

    // Chama a função novamente após 3 segundos
    setTimeout(trocarImagem, 3000);
}

// Inicia o slideshow
trocarImagem();

function centralizarImagem() {
    var img = document.getElementById("image_page2");
    
}
