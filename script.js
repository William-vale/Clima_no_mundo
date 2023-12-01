const apiKey = "SUA KEY" //Criada no site da API


function colocarDadosNaTela(dados) {
    console.log(dados);

    document.querySelector(".cidade").innerHTML = "Tempo agora (" + dados.name + ")";
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade:" + dados.main.humidity + "%";
    document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt_br&units=metric`).then(response => response.json());

    colocarDadosNaTela(dados);
}

function clicouBotao() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade)
}
