function getPrefix() {
  var prefix = "";
  if (location.protocol == "file:") {
    prefix = "https://do-i.github.io/";
  }
  return prefix;
}

function loadBookmarks() {
  $.ajaxSetup({ cache: false });
  // CORS error occurs if file:// protocol is used to load the json file.
  const now = new Date().getMilliseconds();
  $.getJSON(`${getPrefix()}data/bookmarks.json?h=${now}`, populateBookmarks);
}

function populateBookmarks(bookmarks) {
  // Refactor table creation like http://jsfiddle.net/n7cyE/93/
  bookmarks.forEach(function (bookmark) {
    const title = bookmark["title"];
    const webUrl = bookmark["webUrl"];
    // const iconUrl = bookmark["iconUrl"];
    const iconUrl = bookmark["webUrl"] + '/favicon.ico';
    const imgTag = `<img width="16" height="16" hspace="8" src="${iconUrl}"/>`;
    const divTag = `<div>${imgTag}${title}</div>`;
    const linkTag = `<a href="${webUrl}">${divTag}</a>`;
    const tdTag = `<td class="bookmark">${linkTag}</td>`;
    const trTag = `<tr>${tdTag}</tr>`;
    $("#bookmark_table").append(trTag);
  });
}
$(document).ready(loadBookmarks);