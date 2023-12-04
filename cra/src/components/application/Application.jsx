import React from "react";

const Application = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="Name">Name</label>
          <input type="text" id="name" />
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
      </form>
    </div>
  );
};

export default Application;
