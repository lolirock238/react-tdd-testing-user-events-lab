import React, { useState } from "react";

function App() {
  // form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  // checkbox handler
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setInterests((prev) =>
      checked ? [...prev, value] : prev.filter((i) => i !== value)
    );
  };

  // submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      {/* Portfolio Section */}
      <h1>Hi, I'm Nicole</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      {/* Newsletter Form Section */}
      <section>
        <h2>Newsletter Signup</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <fieldset>
              <legend>Select your interests:</legend>
              <label>
                <input
                  type="checkbox"
                  value="Coding"
                  onChange={handleCheckboxChange}
                />
                Coding
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Design"
                  onChange={handleCheckboxChange}
                />
                Design
              </label>
              <label>
                <input
                  type="checkbox"
                  value="Music"
                  onChange={handleCheckboxChange}
                />
                Music
              </label>
            </fieldset>

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h3>Thanks for signing up, {name}!</h3>
            <p>We’ll send updates to {email}.</p>
            {interests.length > 0 && (
              <p>Your interests: {interests.join(", ")}</p>
            )}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
