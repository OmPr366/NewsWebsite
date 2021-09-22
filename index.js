console.log("1538dcbbc63b4e24b909c673eae1e264");

let allNews = document.getElementById('accordionFlushExample');

const xmr  = new XMLHttpRequest();

xmr.open("GET","https://newsapi.org/v2/top-headlines?country=in&apiKey=1538dcbbc63b4e24b909c673eae1e264",true);
xmr.getResponseHeader('Content-type','application/json');

xmr.onload  = function () {
     if (this.status===200) {
         let json = JSON.parse(this.responseText);
        // console.log(json[0]);
        let newHtml = "";
        let article = json.articles;
        article.forEach(function(element,index) {
            
        
            // console.log(article[news]);
            newHtml+= `<div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                <b>Breaking News ${index+1}:- </b>${element["title"]}
              </button>
            </h2>
            <div id="flush-collapse${index}" class="accordion-collapse collapse" aria-labelledby="flush-heading${index}" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">${element["content"]} <a href="${element["url"]}" target="blank">Read more here...</a></div>
            </div>
          </div>`
        });
        allNews.innerHTML= newHtml;
     }else console.log("No handel")
}
xmr.send();