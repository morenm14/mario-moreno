/**
 * Wrap everything in IIFE
 */
(function(){

/***************************************
* Package data and constructor objects
****************************************/

//Package data array ( simulated data source, such JSON or database recordset)    
var data = [
    {
        name: "1. Emmet",
        description: "Emmet is the number one code snippet tool used by front end developers. Emmet helps to create HTML and CSS faster with the use of snippets. It uses abbreviations that expand to valid HTML tags.",
        author: "emmetio",
        url: "https://code.visualstudio.com/docs/editor/emmet",
        downloads: 178993,
        stars: 5,
        price: 12.50,
        selector: "p1"
    },
    {
        name: "2. Debugger for Chrome",
        description: "The Debugger for Chrome extension adds the Google Chrome browser debugger into your editor. It allows you to launch an instance of Chrome navigated to your app, or it can attach to a running instance of Chrome. Using the url parameter, you tell VS Code which URL to either open or launch in Chrome.",
        author: "Microsoft",
        url: "https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome",
        downloads: 6511540,
        stars: 4,
        price: "free",
        selector: "p2"
    },
    {
        name: "3. CSS Peak",
        description: "CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.",
        author: "Pranay Prakash",
        url: "https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek",
        downloads: 1156278,
        stars: 3.5,
        price: "free",
        selector: "p3"
    }
];

    function Package (data){
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector;
    

        this.getFormattedDownloads = function (){
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    };

/***************************************
* Utility Functions
****************************************/

    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    var getEl = function(id){
        return document.getElementById(id);
    };

    var writePackageInfo = function(package){
        var selector = package.selector,
        nameEl = getEl(selector+ "-name"),
        descEl = getEl(selector + "-description"),
        authEl = getEl(selector + "-author"),
        downloadEl = getEl(selector + "-downloads"),
        starsEl = getEl(selector + "-stars");

        //write package data to DOM elements

        nameEl.textContent = package.name;
        descEl.textContent = package.description;
        authEl.textContent = package.author;
        downloadEl.textContent = package.getFormattedDownloads();
        starsEl.textContent = package.getFormattedStars();
    };

    var dateEl = getEl("date");
        dateEl.textContent = getTodaysDate();

    var emmet = new Package(data [0]);
    writePackageInfo(emmet);

    var chromeDebug = new Package(data[1]);
    writePackageInfo(chromeDebug);

    var cssPeak = new Package(data[2]);
    writePackageInfo(cssPeak);
    
}());