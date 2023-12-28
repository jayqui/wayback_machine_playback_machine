chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, (tabs) => {
    const url = tabs[0].url;
    chrome.tabs.create({ url: `https://web.archive.org/web/*/${url}` });
  });
});
