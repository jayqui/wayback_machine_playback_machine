chrome.runtime.onInstalled.addListener(() => {
  chrome.browserAction.onClicked.addListener((tab) => {
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (tabs) => {
      var url = tabs[0].url;
      chrome.tabs.create({ url: `https://web.archive.org/web/*/${url}` });
    });
  });
});
