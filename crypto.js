$(document).ready(function(){
    pullBTCPrice();
});

/*
    Pulls BTC Price and Maidsafecoin Price within last 15 min
*/
function pullBTCPrice(){
    var urls = ['https://api.coinmarketcap.com/v1/ticker/bitcoin/','https://api.coinmarketcap.com/v1/ticker/maidsafecoin/','https://api.coinmarketcap.com/v1/ticker/ethereum/'];
    for(var i=0; i < urls.length; i++){
        var currency = urls[i].substring(40,urls[i].lastIndexOf('/')); 
        data = getHTML(urls[i]);    
    }
}

function getHTML(url, callback){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'text';
    xhr.onload = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.response);
                setValues(json[0]['id'], json[0]['price_usd'], json[0]['percent_change_7d']);
            }
        }
    };
    xhr.send(null);
}

function setValues(name, price, SevenDayChange){
    var HTMLCurrency = $('.'+name+' > .currencyValue')[0];
    HTMLCurrency.innerHTML = "$"+ price;
    var HTMLCurrency = $('.'+name+' > .percentChange')[0];
    HTMLCurrency.innerHTML = SevenDayChange + "%";
}

