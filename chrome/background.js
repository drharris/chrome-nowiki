var igUrl = "https://infogalactic.com/info/";
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {redirectUrl: igUrl + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]}
  },
  {
    urls: [
      "*wikipedia.org/*"
    ],
    types: ["main_frame", "sub_frame", "stylesheet", "script", "image", "object", "xmlhttprequest", "other"]
  }
);
