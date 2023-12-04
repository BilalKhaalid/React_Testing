import React from "react";

const Application = () => {
  return (
    <div>
      <h1>This is heading</h1>
      <h2>This is section 1</h2>
      <p>All fields are required</p>
      <span title="close">X</span>
      <form action="">
        <div>
          <label htmlFor="Name">Bio</label>
          <input
            type="text"
            id="Name"
            placeholder="Form"
            value={true}
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Job Location</label>
          <select name="job-location" id="job-location">
            <option value="">Select a Country</option>
            <option value="usa">USA</option>
            <option value="aus">Australia</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
            <option value="greece">Greece</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" /> I agree to terms and conditions
          </label>
        </div>
        <div>
          <button>Submit</button>
        </div>
        <img src="" alt="This is an image" />
      </form>
    </div>
  );
};

export default Application;
