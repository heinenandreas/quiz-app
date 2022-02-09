export default {
  title: "Components/Add-question-form",
};

export const Default = () => /*html*/ `
<h1 id="form-heading">Fragekarte erstellen</h1>
<p id="form-description">Füge eine neue Frage und die dazugehörige Antwort zum Fragenpool hinzu.</p>

<form aria-labelledby="form-heading" aria-describedby="form-description">
  <fieldset>
    <legend>Neue Frage</legend>
    <label for="neue-frage">Füge hier deine neue Frage ein:</label>
    <textarea name="neue-frage" id="pneue-frage" placeholder="Hier kommt die neue Frage hinein" rows="10" cols="50" maxlength="100"></textarea>
   
    <label for="kategorie">In welche Kategorie gehört diese Frage?</label>
    <select name="kategorie" id="kategorie">
      <option value="HTML" >HTML</option>
      <option value="CSS">CSS</option>
      <option value="Grid" >Grid</option>
      <option value="Flex" >Flex</option>
    </select>


  </fieldset>

  <fieldset>
    <legend>Neue Antwort</legend>
    <label for="personal-message">Hier kommt die passende Antwort hinein:</label>
    <textarea name="personal-message" id="personal-message" placeholder="Answer me..." rows="10" cols="50" maxlength="100"></textarea>
  </fieldset>

  <input type="submit" value="Subscribe!">
  <button type="submit" disabled>Unsubscribe!</button>
</form>
  `;
