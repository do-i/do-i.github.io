
function loadBookmarks() {
  // $.ajax({
  //   "async": false,
  //   "global": false,
  //   "url": "data/bookmarks.json",
  //   "dataType": "json",
  //   "success": populateBookmarks
  // });
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