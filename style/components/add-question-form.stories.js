export default {
  title: "Components/Add-question-form",
};

export const Default = () => /*html*/ `


<article class="form-layout">
        <div class="bookmark-style-active"></div>
        <div class="card-head">
          <h1 class="question-headline" id="form-heading">
            Fragekarte erstellen
          </h1>
        </div>

        <form
          class="form-flex"
          aria-labelledby="form-heading"
          aria-describedby="form-description"
        >
          <p class="question-text" id="form-description">
            Füge eine neue Frage und die dazugehörige Antwort zum Fragenpool
            hinzu.
          </p>
          <fieldset class="form-box">
            <!-- <legend>Neue Frage</legend> -->
            <label for="neue-frage">Füge hier deine neue Frage ein:</label>
            <textarea
              name="neue-frage"
              id="neue-frage"
              placeholder="Hier kommt die neue Frage hinein"
              rows="5"
              cols="50"
              maxlength="100"
            ></textarea>

            <label for="kategorie"
              >In welche Kategorie gehört diese Frage?</label
            >
            <select name="kategorie" id="kategorie">
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Grid">Grid</option>
              <option value="Flex">Flex</option>
            </select>

            <div class="middle-line"></div>

            <!--  <legend>Neue Antwort</legend> -->
            <label for="personal-message"
              >Hier kommt die passende Antwort hinein:</label
            >
            <textarea
              name="personal-message"
              id="personal-message"
              placeholder="Answer me..."
              rows="5"
              cols="50"
              maxlength="100"
            ></textarea>
          </fieldset>
          <div class="categories"><input type="submit" value="Submit" /></div>
        </form>
      </article>
  `;
