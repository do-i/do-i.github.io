
function loadBookmarks() {
  $.ajaxSetup({ cache: false });
  // CORS error occurs if file:// protocol is used to load the json file.
  $.getJSON("data/bookmarks.json", populateBookmarks);
}

function populateBookmarks(bookmarks) {
  bookmarks.forEach(function (bookmark) {
    const title = bookmark["title"];
    const webUrl = bookmark["webUrl"];
    const iconUrl = bookmark["iconUrl"];
    const imgTag = `<img width="16" height="16" hspace="8" src="${iconUrl}"/>`;
    const divTag = `<div>${imgTag}${title}</div>`;
    const linkTag = `<a href="${webUrl}">${divTag}</a>`;
    const tdTag = `<td class="bookmark">${linkTag}</td>`;
    const trTag = `<tr>${tdTag}</tr>`;
    $("#bookmark_table").append(trTag);
  });
}
$(document).ready(loadBookmarks);