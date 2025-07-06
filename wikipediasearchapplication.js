let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner=document.getElementById("spinner");
function createandappend(result){
    
    let {title,link,description}=result;
    let resultItem=document.createElement('div');
    searchResults.appendChild(resultItem);
    let titleEl=document.createElement('a');
    titleEl.href=link;
    titleEl.textContent=title;
    titleEl.target="_blank";
    resultItem.appendChild(titleEl);
    
    let titlebreakel=document.createElement('br');
    resultItem.appendChild(titlebreakel);
    
    let linkEl=document.createElement('a');
    linkEl.textContent=link;
    linkEl.href=link;
    linkEl.target="_blank";
    resultItem.appendChild(linkEl);
    
    let linebreakel=document.createElement('br');
    resultItem.appendChild(linebreakel);
    
    let para=document.createElement('p');
    para.textContent=description;
    resultItem.appendChild(para);
}
function displayresults(searchresults){
    spinner.classList.add("d-none");
    for(let result of searchresults){
        createandappend(result);
    }
}
    function search(event){
       

        if(event.key==="Enter"){
            searchResults.textContent="";
             spinner.classList.remove("d-none");
        let options = {
        method: "GET"
    }
    let searchInputValue=searchInput.value;
    fetch("https://apis.ccbp.in/wiki-search?search="+searchInputValue,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsondata){
     let  {search_results}=jsondata;
       displayresults(search_results);
    });
    } 
    }
    searchInput.addEventListener("keydown",search);