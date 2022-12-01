import React, { Component } from "react";
import "./Form.css";

let states = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttarakhand",
  "Uttar Pradesh",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli",
  "Daman and Diu",
  "Delhi",
  "Lakshadweep",
  "Puducherry",
];

export class Form extends Component {
  render() {
    return (
      <div className="form-div">
        <form action="">
          <div className="contents">
            <label htmlFor="name">Name</label>
            <input type="text" />
          </div>
          <div className="contents">
            <label htmlFor="name">Phone</label>
            <input type="number" />
          </div>
          <div className="contents">
            <label htmlFor="name">Email</label>
            <input type="email" />
          </div>

          <div className="contents1">
            <select name="state" id="state">
              <option value="">state</option>
              {states.map((state,i) => {
                return (<option value={state} key={i}>{state}</option>)
              })}
            </select>
          </div>
          <div className="contents-gender">
            <label htmlFor="gender">Gender :</label>
            <div className="genders">Male
            <input type="radio" name="gender" value="male" /></div>
            <div className="genders">Female
            <input type="radio" name="gender" value="female" /></div>
            <div className="genders">Others
            <input type="radio" name="gender" value="others" /></div>
            </div>
          <div className="contents">
            <input type="checkbox" name="opt" id="opt" />option for mail
            </div>
            
          
          <div className="contents">
            <input type="submit"  />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
