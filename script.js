import answerButtons from './js/components/card.js';
import toggleAnswer from './js/components/card.js';
import { cardWithBookmark } from './js/components/bookmark.js';
import { toggleBookmark } from './js/components/bookmark.js';

import {
  textareaQuestion,
  textareaAnswer,
  counterQuestion,
  counterAnswer,
} from './js/components/charCounter.js';
import { questionCount, answerCount } from './js/components/charCounter.js';

console.log(
  answerButtons,
  cardWithBookmark,
  textareaAnswer,
  textareaQuestion,
  counterAnswer,
  counterQuestion
);

toggleBookmark();
toggleAnswer();
questionCount();
answerCount();

const indexPage = document.querySelector('#index');
const profilePage = document.querySelector('#profile');
const bookmarkPage = document.querySelector('#bookmark');
const createPage = document.querySelector('#create');

const indexLink = document.querySelector('.link-index');
const profileLink = document.querySelector('.link-profile');
const bookmarkLink = document.querySelector('.link-bookmark');
const createLink = document.querySelector('.link-create');

indexLink.addEventListener('click', () => {
  profilePage.classList.remove('current');
  bookmarkPage.classList.remove('current');
  createPage.classList.remove('current');
  indexPage.classList.add('current');
});

profileLink.addEventListener('click', () => {
  indexPage.classList.remove('current');
  bookmarkPage.classList.remove('current');
  createPage.classList.remove('current');
  profilePage.classList.add('current');
});

bookmarkLink.addEventListener('click', () => {
  profilePage.classList.remove('current');
  createPage.classList.remove('current');
  indexPage.classList.remove('current');
  bookmarkPage.classList.add('current');
});

createLink.addEventListener('click', () => {
  indexPage.classList.remove('current');
  profilePage.classList.remove('current');
  bookmarkPage.classList.remove('current');
  createPage.classList.add('current');
});
