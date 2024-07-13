
const generalBtn = document.getElementById("general");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sports");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

// Array:
var newsDataArr = [];

// Apis:

const API_KEY = "93b47a02a0e441bf8868cef61c7afed1";
const HEADLINE_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
const GENERAL_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey="
const BUSINESS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey="
const SPORTS_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey="
const ENTERTAINMENT_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey="
const TECHNOLOGY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey="
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q="

// FOR PAKISTAN BUT NOT WORKING:-
// const API_KEY = "bcd8ad68250891601965f12fd207fea0";
// const HEADLINE_NEWS = "https://gnews.io/api/v2/top-headlines?country=pk&apiKey="
// const GENERAL_NEWS = "https://gnews.io/api/v2/top-headlines?country=pk&category=general&apiKey="
// const BUSINESS_NEWS = "https://gnews.io/api/v2/top-headlines?country=pk&category=business&apiKey="
// const SPORTS_NEWS = "https://gnews.io/api/v2/top-headlines?country=pk&category=sports&apiKey="
// const ENTERTAINMENT_NEWS = "https://gnews.io/api/v2/top-headlines?country=pk&category=entertainment&apiKey="
// const TECHNOLOGY_NEWS = "https://gnews.io/api/v2/top-headlines?country=pk&category=technology&apiKey="
// const SEARCH_NEWS = "https://gnews.io/api/v2/everything?q="

window.onload = function(){
    newsType.innerHTML = "<h4>Headlines</h4>"
    fetchHeadlines();
}

generalBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>General News</h4>"
    fetchGeneralNews();
})

businessBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Business</h4>"
    fetchBusinessNews();
})

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Sports</h4>"
    fetchSportsNews();
})

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Entertainment</h4>"
    fetchEntertainmentNews();
})

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Technology</h4>"
    fetchTechnologyNews();
})

searchBtn.addEventListener("click",function(){
    newsType.innerHTML = "<h4>Search :"+newsQuery.value+"</h4>"
    fetchQueryNews();

})



const fetchHeadlines = async () => {
    const response = await fetch(HEADLINE_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles
    }
    else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles
    }
    else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles
    }
    else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles
    }
    else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles
    }
    else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS + API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        console.log(myJson)
        newsDataArr = myJson.articles
    }
    else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}
const fetchQueryNews = async () => {

    if(newsQuery.value==null)
        return

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value)+"&apiKey="+ API_KEY);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300){
        const myJson = await response.json();
        newsDataArr = myJson.articles
    }
    else{
        //handle errors
        console.log(response.status,response.statusText);
    }
    displayNews();
}

function displayNews(){

    newsDetails.innerHTML = ""

    if(newsDataArr.length == 0){
        newsDetails.innerHTML = "<h5>No Data Found</h5>"
        return
    }

    newsDataArr.forEach(news => {


        var date = news.publishedAt.split("T")

        var col = document.createElement('div');
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title

        var dataHeading = document.createElement('h6');
        dataHeading.className = "text-primary";
        dataHeading.innerHTML = date[0];

        var description = document.createElement('p')
        description.className = "textmuted";
        description.innerHTML = news.description;

        var link = document.createElement('a');
        link.className = "btn btn-dark";
        link.setAttribute("target","_blank");
        link.href = news.url
        link.innerHTML = "Read more"


        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dataHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);


        card.appendChild(image)
        card.appendChild(cardBody)

        col.appendChild(card);


        newsDetails.appendChild(col)
    });
}