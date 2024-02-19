chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "getTabs") {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            const tabIds = tabs.map(tab => tab.id);
            sendResponse({ tabs: tabIds[0] });
            chrome.scripting
                .executeScript({
                    target : {tabId : tabIds[0]},
                    files : [ "js/data.js" ],
                })
                .then(() => console.log("injected script file"));
        });
        return true; // Important pour indiquer que la réponse sera asynchrone
    }
});
