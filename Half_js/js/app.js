const init = () => {
    createDivs()
    getApi("israel");
    declareSearch();
    barCountries()
}

const getApi = (name) => {
    let url = `https://restcountries.com/v2/name/${name}`;
    axios.get(url)
        .then((rsp) => {
            if (rsp.status == 200) {
                // console.log(rsp);
                createCountry(rsp.data[0])
            }
        })
}

const createCountry = (item) => {
    // console.log(item);
    let countryTab = new CountryClass("#info_parent", item);
    countryTab.render();
}


init();