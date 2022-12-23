function createDivs() {
    let div = document.createElement("div");
    div.id="countryTab";
    document.querySelector("#info_parent").append(div);
}

function barCountries(){
    function call(){
        console.log(event.target.textContent);
     getApi(event.target.textContent) ; 
    }
    document.querySelector("#usa_bar").addEventListener("click",call);
    document.querySelector("#israel_bar").addEventListener("click",call);
    document.querySelector("#france_bar").addEventListener("click",call);
    document.querySelector("#thailand_bar").addEventListener("click",call);
}

