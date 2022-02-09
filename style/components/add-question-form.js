export default {
  title: "Components/Add-question-form",
};

export const Default = () => /*html*/ `
  <article class="card-layout">
  
<!-- Let's create a Form! -->

<h2 id="form-heading">Newsletter Form</h2>
<p id="form-description">Please provide us with your personal information so that we can send you extremely important, daily updates about our project.</p>

<form aria-labelledby="form-heading" aria-describedby="form-description">
  <fieldset>
    <legend>Personal Information</legend>
    <label for="firstname">First Name:</label>
    <input type="text" name="firstname" id="firstname" required>
    <label for="lastname">Last Name:</label>
    <input type="text" name="lasttname" id="lastname" required>
  </fieldset>

  <fieldset>
    <legend>Other Information</legend>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" inputmode="email" required>
    <label for="date">Date:</label>
    <input type="date" name="date" id="date" required>

    <label for="newsletter-options">Newsletter Options</label>
    <select name="newsletter-options" id="newsletter-options">
      <option value="free" disabled>Free</option>
      <option value="basic">Basic</option>
      <option value="premium" selected>Premium</option>
    </select>

    <label for="personal-message">Your personal message:</label>
    <textarea name="personal-message" id="personal-message" placeholder="Send us a personal message..." rows="10" cols="50" maxlength="100"></textarea>
  </fieldset>

  <input type="submit" value="Subscribe!">
  <button type="submit" disabled>Unsubscribe!</button>
</form>
  `;
