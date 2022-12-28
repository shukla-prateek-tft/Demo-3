import { useEffect, useState } from "react";
import "../Component/style.css";
import "../App.css";
const validateEmail = (text, errorMessage = "This is a required field") => {
  if (text.trim().length === 0) {
    return errorMessage;
  }

  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return reg.test(text) ? "" : "Please enter valid email";
};
const checkForEmpty = (text, errorMessage = "This is a required field") => {
  if (text.length === 0) {
    return errorMessage;
  }
  return "";
};

const validatePhone = (phone, errorMessage = "This is a required field") => {
  if (phone.trim().length === 0) {
    return errorMessage;
  } else if (isNaN(+phone)) {
    return "Phone must be a number";
  } else if (phone.trim().length < 10) {
    return "Phone must be 10 digit number";
  }
  let reg = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;
  return reg.test(phone) ? "" : "Please enter valid Phone";
};
export const BottomScreen = () => {
  const [canValidate, setCanValidate] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = () => {
    setCanValidate(true);
    if (
      !checkForEmpty(userData.name) &&
      !validateEmail(userData.email) &&
      !validatePhone(userData.phone)
    ) {
      alert("submited", userData);
    }
  };
  useEffect(() => {
    setCanValidate(false);
  }, [userData]);
  return (
    <div class="container p-4 border border-dark rounded m-auto ">
      <div class="row ">
        <div class="col-sm   v1  m-2 align-middle justify-center">
          <h2 className="text-dark text-center font-weight-bold">
            GET IN TOUCH
          </h2>
          <h6 className="text-dark text-center font-weight-bold">
            Please Complete the form and we will get back to you
          </h6>
        </div>

        <div class="col-sm  border-dark border-left   ">
          <div className="form-group ">
            <label htmlFor="name">Name*</label>
            <input
              className="form-control"
              name="name"
              value={userData.name}
              onChange={handleChange}
              aria-describedby="name"
              placeholder="Enter your Name"
            />
            <p style={{ color: "red" }}>
              {canValidate && checkForEmpty(userData.name)}
            </p>
          </div>
          <div className="form-group my-2">
            <label htmlFor="email">Email*</label>
            <input
              className="form-control"
              name="email"
              value={userData.email}
              onChange={handleChange}
              aria-describedby="email"
              placeholder="Enter your email"
            />
            <p style={{ color: "red" }}>
              {canValidate && validateEmail(userData.email)}
            </p>
          </div>

          <div className="form-group my-2">
            <label htmlFor="mobile">Mobile Number*</label>
            <input
              className="form-control"
              name="phone"
              type="number"
              value={userData.phone}
              onChange={handleChange}
              aria-describedby="mobile number"
              placeholder="Enter your Mobile Number"
            />
            <p style={{ color: "red" }}>
              {canValidate && validatePhone(userData.phone)}
            </p>
          </div>
          <div className="text-center ">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn  btn-primary my-1 text-center  btn-lg col-12 "
              style={{ backgroundColor: "#123456" }}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
