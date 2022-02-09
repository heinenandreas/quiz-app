export default {
  title: "Components/Card",
};

export const Default = () => /*html*/ `
<article class="card-layout">
<div class="bookmark-style-active"></div> 
    <div class="card-head">
        <h1 class= "question-headline">Question:</h1>
        
    </div>

    <p class="question-text">
        Wie lang kann so eine Frage schon sein?
    </p>

    <div class="button-show-answer">
        <p class="show-answer">show answer</p>
    </div>

    <div class="categories">
        <div class="cat-active">
            <p class="cat-name">HTML</p>    
        </div>
        <div class="cat-inactive">
            <p class="cat-name">CSS</p> 
        </div>
        <div class="cat-inactive">
            <p class="cat-name">Flexbox</p> 
        </div>
        <div class="cat-inactive">
            <p class="cat-name">Grid</p> 
        </div>
    </div>

</article>
`;

export const Answer = () => /*html*/ `
  <article class="card-layout-answer">
  <div class="bookmark-style-active"></div> 
      <div class="card-head">
          <h1 class= "question-headline">Question:</h1>
      </div>
  
      <p class="question-text">
          Wie lang kann so eine Frage schon sein?
      </p>
  
      <div class="button-show-answer">
          <p class="show-answer">hide answer</p>
      </div>

      <p class="answer-text">
      Testi MC test test
        </p>
  
      <div class="categories">
          <div class="cat-active">
              <p class="cat-name">HTML</p>    
          </div>
          <div class="cat-inactive">
              <p class="cat-name">CSS</p> 
          </div>
          <div class="cat-inactive">
              <p class="cat-name">Flexbox</p> 
          </div>
          <div class="cat-inactive">
              <p class="cat-name">Grid</p> 
          </div>
      </div>
  
  </article>
  `;
