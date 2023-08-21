const ApiBlog = async () => {

    fetch("https://api-rest-post-diegocandido.herokuapp.com/postagens/",{
        method: "GET",
        headers:{
            "Content-Type":"aplication/json",
            Accept: "application/josn"
        },
        //body: JSON.stringify(resData),
    }).then((response)=>{
        if(response.ok){
            console.log("Funciona",response);
            return response.json();
        } else{
            console.log("Deu erro",response)
        }
    })

    const URL = "https://api-rest-post-diegocandido.herokuapp.com/postagens/";
    const resp = await fetch(URL);
    const date = await resp.json();
    console.log(date);

    const postagensExistentes = 6;
    
    for (let i = 0; i < postagensExistentes; i++) {
      const imagem = document.querySelector(`#imagem${i}`);
      const Title = document.querySelector(`#title${i}`);
    
      if (date[i]) {
        imagem.src = `./imagens/posts/${i}.jpg`;
        Title.innerHTML = date[i].title;
      }
    }

    const buttons = document.querySelectorAll(".AbrirNoti");
    buttons.forEach((button, i) => {
      button.addEventListener("click", function () {
        AbrirNoti(date[i], i); 
      });
    });

    return date;
};

function AbrirNoti(contDate, idImagem) {

    document.getElementById("HomeNoticias").style.display = "none";
    document.getElementById("CardNotiAberta").style.display = "block";
    
    // Atualiza o conteúdo da notícia selecionada
    const image = document.getElementById("NotiFoto");
    const Titulo = document.getElementById("tituloNoticia");
    const Descricao = document.getElementById("descriNoticia");
  
    image.src = `./imagens/posts/${idImagem}.jpg`;
    Titulo.textContent = contDate.title;
    Descricao.textContent = contDate.description;

  };

  function VoltaHome() {
    const newsSection = document.getElementById("HomeNoticias");
    const insideNewsSection = document.getElementById("CardNotiAberta");
    newsSection.style.display = "block";
    insideNewsSection.style.display = "none";
}
ApiBlog();

