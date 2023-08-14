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

    document.querySelector("#title0").innerHTML = date[0].title;
    document.querySelector("#title1").innerHTML = date[3].title;
    document.querySelector("#title2").innerHTML = date[2].title;
    document.querySelector("#title3").innerHTML = date[4].title;
    document.querySelector("#title4").innerHTML = date[1].title;
    document.querySelector("#title5").innerHTML = date[5].title;
}
ApiBlog();