chrome.runtime.sendMessage({ action: "getTabs" }, function(response) {
    if (response && response.tabs) {
        console.log(response.tabs);
    } else {
        console.error("Unable to get tabs");
    }
});
