# Javascript JSON API example: Guardian new

IMPORTANT: For this code to work you will have to apply for a [Guardian API key](http://open-platform.theguardian.com/access/) and add it to the code (scripts.js line 11), replacing the bit that says `<YOUR-API-KEY>`. Be sure to keep the "&q=" at the end!

- Try the Codecademy [mini course](https://www.codecademy.com/courses/javascript-beginner-en-EID4t/0/1?curriculum_id=50ecba3b57ff25277d00010a) on using APIs with JavaScript.
- Guardian [Search Documentation](http://open-platform.theguardian.com/documentation/search).

Now look at the index.html file in your browser. Enter a query in the search box and press enter. You will see a set of urls that link to Guardian articles related to the search term you entered. 

Comment in line 17 and inspect the response object in the web inspector, or line 21 to see the data.

You can also put the request url from line 10 straight into your browser - add the word animal (or whatever) the "&q=" at the end - and view the JSON data there. So you can read it more easily to identify which parts of the data you want, copy the resulting JSON code into a [JSON beautifier](https://jsonformatter.org/).
