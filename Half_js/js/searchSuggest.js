
let i = 0;

class createSuggest {
    constructor(_parent, item) {
        this.name = item[i].name
        this.parent = _parent;
    }

    render() {
        let div = document.createElement("div");
        div.className = "suggest_class border ";
        document.querySelector(this.parent).append(div);
        div.innerHTML = this.name;


        div.addEventListener("click", function () {
            getApi(div.innerHTML);
            document.querySelector("#id_searchInput").value = "";
            document.querySelector("#id_suggest").innerHTML = "";

        })
    }




}

function searchSugest(item) {
    document.querySelector("#id_suggest").innerHTML = "";
    for (i = 0; i < 5; i++) {
        if (i < item.length) {
            let suggestBox = new createSuggest("#id_suggest", item);
            suggestBox.render();
        }
    }

}