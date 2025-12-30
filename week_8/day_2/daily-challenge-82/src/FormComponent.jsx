import React from "react";

function FormComponent(props) {
  const { data, handleChange } = props;

  return (
    <form>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={data.firstName}
        onChange={handleChange}
      />

      <br />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={data.lastName}
        onChange={handleChange}
      />

      <br />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={data.age}
        onChange={handleChange}
      />

      <br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === "male"}
          onChange={handleChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === "female"}
          onChange={handleChange}
        />
        Female
      </label>

      <br />

      <select
        name="destination"
        value={data.destination}
        onChange={handleChange}
      >
        <option value="">-- Please Choose a destination --</option>
        <option value="Japan">Japan</option>
        <option value="Thailand">Thailand</option>
        <option value="Brazil">Brazil</option>
      </select>

      <br />

      <label>
        <input
          type="checkbox"
          name="nutsFree"
          checked={data.nutsFree}
          onChange={handleChange}
        />
        Nuts Free
      </label>

      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={data.lactoseFree}
          onChange={handleChange}
        />
        Lactose Free
      </label>

      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={data.vegan}
          onChange={handleChange}
        />
        Vegan
      </label>      

      <br /><br />

      <button type="submit">Submit</button>

      <hr />

      <h3>Entered information:</h3>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Age: {data.age}</p>
      <p>Gender: {data.gender}</p>
      <p>Destination: {data.destination}</p>
      <p>Nuts Free: {data.nutsFree ? "Yes" : "No"}</p>
      <p>Lactose Free: {data.lactoseFree ? "Yes" : "No"}</p>
      <p>Vegan: {data.vegan ? "Yes" : "No"}</p>
    </form>
  );
}

export default FormComponent;
