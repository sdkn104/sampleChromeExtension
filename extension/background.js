// Copyright (C) 2020 hashedpotato3@gmail.com
// License: MIT 

const appName = "com.node.open_local"

// on installation of this extension
chrome.runtime.onInstalled.addListener(details => {
    if( details.reason === "install" ){ // on install
        let message  = { cmd: "get-options" }
    }
    return;
});


chrome.runtime.onMessage.addListener((message, sender) => {
    if (message.cmd === 'open-local') {
    }
});


chrome.webRequest.onCompleted.addListener(details => {
     console.log("listener")
     console.log(details);
      chrome.storage.local.get('urls', function(data){ 
        console.log("get data")
        console.log(data)
        let urls = [];
        if( data.urls ) {
            urls = data.urls;
        }
        urls.push(details);
        chrome.storage.local.set({urls: urls}, function() {
            console.log('Value is set to ');
            console.log(urls);
        });

        chrome.scripting.executeScript( { 
             target: {tabId: details.tabId}, 
             func: function(details, urls){ console.log("executed script") }, 
             args: [details, urls] 
        }, 
        () => { 
            console.log("injected")
        }); 
    }); 
}, 
{ urls: ['<all_urls>'] }
);
