const express = require("express");
const app = express();
const axios = require("axios");
const cheerio = require('cheerio');
const _ = require('lodash');

// axios.get('https://en.wikipedia.org/wiki/List_of_presidents_of_the_United_States').then((response) => {
//   // Load the web page source code into a cheerio instance
//   const $ = cheerio.load(response.data)

//   // The pre.highlight.shell CSS selector matches all `pre` elements
//   // that have both the `highlight` and `shell` class
// const urlElems = $('.wikitable tr td b a');
  
// for(var i = 0; i< urlElems.length;i++){
//     console.log(urlElems[i].attribs.title)
// }

// })


async function fetchHTML() {
    try{
    
        const url = "https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States";
        let response = await axios.get(url);         
        return cheerio.load(response.data);
    }
    catch (error)
    {
        console.log(`Could sending request:`,error);
    }
    return cheerio.load(response.data);
};


const getResults = async () => {
    try{
        const $ = await fetchHTML();
        const urlElems = $('.wikitable tr td b a');
        let presidetArray = [];
        let vicePresidentArrat = []
        const urlElems1 = $('.wikitable tr td[data-sort-value] > a:not(:has(>img))');
        for(var i = 0; i < urlElems.length; i++){
            presidetArray.push(urlElems[i].attribs.title)
            vicePresidentArrat.push(urlElems1[i].attribs.title)
        }

        result =  {p:presidetArray,vc:vicePresidentArrat};
        console.log(result)

    }
    catch (error)
    {
        console.log(`Could sending request: `,error);
    }
    
  
  
};
getResults();





  







const port = process.env.PORT || 3000;
app.set('port', port);
app.listen(port, () => console.log(`App started on port ${port}.`));