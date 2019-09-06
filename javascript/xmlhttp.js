"use strict";

(function(){
  // creates a new object called xhr
  // which will handle the API call
  const xhr = new XMLHttpRequest();
  // console.log(`Current readyState: ${xhr.readyState}`);

  const queryBox = document.getElementById("wikiQuery");
  const searchForm = document.getElementById("searchForm");
  const demoJSON = document.getElementById("demo");

  // constructs the base for the request url
  const baseURL = "https://en.wikipedia.org/w/api.php? \
                format=json& \
                action=query& \
                generator=search& \
                gsrnamespace=0& \
                gsrlimit=10& \
                prop=info|extracts|langlinks|pageimages& \
                inprop=url& \
                exintro& \
                explaintext& \
                exsentences=1& \
                exlimit=max& \
                llprop=url& \
                lllimit=max& \
                piprop=thumbnail|name& \
                origin=*& \
                gsrsearch=".replace(/\s/g, "");

/*
API Sandbox url
https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&generator=search&prop=extracts%7Clanglinks%7Cpageimages&gsrlimit=10&gsrnamespace=0&exintro&explaintext&exsentences=1&exlimit=max&llprop=url&lllimit=max&piprop=thumbnail|name&origin=*&gsrsearch=kittens

Request url
https://en.wikipedia.org/w/api.php?action=query&format=json&generator=search&prop=extracts%7Clanglinks%7Cpageimages&gsrlimit=10&gsrnamespace=0&exintro&explaintext&exsentences=1&exlimit=max&llprop=url&lllimit=max&piprop=thumbnail|name&origin=*&gsrsearch=kittens
*/


  const fetchButton = document.getElementById("fetch-button");
  const fetchResult = document.getElementById("fetch-result");

  fetchButton.addEventListener("click", ev => {
    fetch(`${baseURL}${queryBox.value || 'kittens'}`).then(response => {
      return response.json();
    }).then(data => {
      for(let key in data.query.pages) {
        let result = document.createElement('li');
        let record = data.query.pages[key];
        result.appendChild(thumbnail(record));
        result.appendChild(title(record));
        result.appendChild(extract(record));
        result.appendChild(languages(record));
        fetchResult.appendChild(result);
      };
    })
  });

  let thumbnail = data => {
    let img = document.createElement('img');
    if(data.thumbnail) {
      img.src = data.thumbnail.source;
      img.alt = data.title;
    }
    return img;
  }

  let title = data => {
    let strong = document.createElement('strong');
    let a = document.createElement('a');
    a.href = data.fullurl;
    a.textContent = data.title;
    strong.appendChild(a);
    return strong;
  }

  let extract = data => {
    let extract = document.createElement('span');
    extract.classList.add('txt');
    extract.textContent = data.extract;
    return extract;
  }

  let languages = data => {
    if(!data.langlinks) { return document.createElement('span'); }
    let details = document.createElement('details');
    details.classList.add('langs');
    let summary = document.createElement('summary');
    summary.textContent = `${data.langlinks.length} language${data.langlinks.length > 1 ? 's': ''}`;
    details.appendChild(summary)
    for (let lang in data.langlinks) {
      let myLanguage = data.langlinks[lang];
      let l = document.createElement('a');
      l.href = myLanguage.url;
      l.textContent = myLanguage.lang
      details.appendChild(l);
    }
    return details;
  }

}());
