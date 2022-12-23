const doApiSearch = async (_searchQ) => {
  try {

    let url = `https://restcountries.com/v2/name/${_searchQ}`;
    let resp = await fetch(url);
    let data = await resp.json();
    // console.log(data[0].name);
    getApi(data[0].name)
  }
  catch (err) {
    console.log(err);
    alert("Can't find this country, Please check your grramer");
  }
}

function declareSearch() {

  let input = document.querySelector("#id_searchInput");
  let inputBtn = document.querySelector("#id_searchBtn");
  
  // Search By Button
  inputBtn.addEventListener("click", function () {
    doApiSearch(input.value);
    input.value="";
    document.querySelector("#id_suggest").innerHTML = "";
  });

  // Add search suggestion
  input.addEventListener("input", async function () {
    let url = `https://restcountries.com/v2/name/${input.value}`;

    let resp = await fetch(url);
    let data = await resp.json();
    // console.log(data.length);
    searchSugest(data);
  })

// Searching on enter
  input.addEventListener("keydown",(e) => {
    if(e.key == "Enter"){
      doApiSearch(input.value);
    // מרוקן חיפוש
    input.value = "";
    document.querySelector("#id_suggest").innerHTML = "";

    }
  })
}

