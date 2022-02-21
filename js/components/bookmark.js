/* ==================================== */
/* ----------Bookmark-change----------- */
/* ==================================== */

// export const bookmarkInactive = document.querySelector(
//   "[data-js='bookmark-inaktive1']"
// );

// function bookmarker() {
//   bookmarkInactive?.addEventListener('click', () => {
//     if (
//       bookmarkInactive.classList.contains('bookmark-style-inactive') == true
//     ) {
//       bookmarkInactive.classList.remove('bookmark-style-inactive');
//       bookmarkInactive.classList.add('bookmark-style-active');
//     } else {
//       bookmarkInactive.classList.remove('bookmark-style-active');
//       bookmarkInactive.classList.add('bookmark-style-inactive');
//     }
//   });
// }

export const cardWithBookmark = document.querySelectorAll(
  "[data-js='cardLayout']"
);
console.log(cardWithBookmark);

function toggleBookmark() {
  cardWithBookmark.forEach(bookmarkSign => {
    const bookmark = bookmarkSign.querySelector(
      '[data-js="bookmark-inaktive1"]'
    );
    bookmark.addEventListener('click', () => {
      bookmark.classList.toggle('bookmark-style-active');
    });
  });
}

export { toggleBookmark };
