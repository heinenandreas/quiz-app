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
