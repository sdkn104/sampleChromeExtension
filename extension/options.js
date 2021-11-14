
console.log("options.js");

chrome.storage.local.set({ meanifyWords: { id1: {audio:"https://ssl.gstatic.com/dictionary/static/sounds/20200429/experience--_gb_1.8.mp3"}} });


document.addEventListener('click', function (e) { 
    e.preventDefault();
    if (e.target.matches('.audioBtn')) {   
        console.log("btn click");
        chrome.storage.local.get({ meanifyWords: [] }, (result) => { 
            console.log(result);
            let getWordsObj = result.meanifyWords;
            let getAudio = getWordsObj[e.target.id].audio;  //getAudio="//ssl.gstatic.com/dictionary/static/sounds/20200429/experience--_gb_1.8.mp3"
            let sound = new Audio(getAudio);
            sound.play();
        })
    }
});
