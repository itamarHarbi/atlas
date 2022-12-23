class CountryClass {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.flag = _item.flag;
        this.name = _item.name;
        this.realName = _item.nativeName;
        this.pop = _item.population;
        this.reg = _item.region;
        this.lang = _item.languages[0].name;
        this.realLang = _item.languages[0].nativeName;
        this.capital = _item.capital;
        this.border = _item.borders;
        if (_item.currencies) {
            this.coin = _item.currencies[0].name;
            this.coinSymbol = _item.currencies[0].symbol;
        }
    }

    render() {
        let div = document.querySelector("#countryTab");
        div.className = "row";

        div.innerHTML = `
        <div id="flag_img" class="d-flex align-items-center border border-4 col-md-6">
        <img max-height="100%" width="100%" src=${this.flag}
            alt="afgan flag">
    </div>
    <div id="country_data" class=" col-md-6 mt-4 mt-md-0">
        <h2 class="h1">${this.name} (${this.realName})</h2>
        <h2>POP: ${this.pop}</h2>
        <h2>Region: ${this.reg}</h2>
        <h2>Languages: ${this.lang} (${this.realLang})</h2>
        <h2>Coin: ${this.coin}(${this.coinSymbol})</h2>
        <h2>Capital: ${this.capital}</h2>
    </div>
<div id="strip_second" class="row">
       <div id="map_wrap" class=" my-3 col-12 col-md-6"> 
        <div class="mapouter">
          <div class="gmap_canvas">
          <iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=${this.name}&t=&z=5&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
          <a href="https://123movies-to.org">123 movies</a>
         <br>

        <a href="https://www.embedgooglemap.net">google map iframe</a>
        
         </div>
       </div>
     </div>

     <div id="borders_id" class="col-12 col-md-6 mb-5   m-md-auto row">
     <h2>List of Countries with border:</h2>
     <br>
     </div>
     </div>
        `
        let border_ar = this.border;
        border_ar.forEach(function (item) {
            let url = `https://restcountries.com/v3.1/alpha/${item}`;
            axios.get(url)
            .then((rsp) => {
                if (rsp.status == 200) {
                        let span = document.createElement("span");
                        span.className="me-3 h4 text-info col-auto"
                        span.style.cursor="pointer"
                        let name = rsp.data[0].name.common;
                        document.querySelector("#borders_id").appendChild(span);
                        span.innerHTML = name;
                        span.addEventListener("click",function(){
                            getApi(name)
                        })
                    }
                })
        })
    }
}