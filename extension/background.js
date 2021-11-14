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
}, 
{ urls: ['<all_urls>'] }
);
