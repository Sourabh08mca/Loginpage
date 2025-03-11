import React, { useState } from "react";

function Newlogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Remove error if email becomes valid
    if (/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    // Remove error if password becomes valid
    if (value.length >= 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Email:", email);
      console.log("Password:", password);
      alert("Login Successful!");
    } else {
      setErrors(validationErrors);
    }
  };

  const validate = () => {
    const error = {};

    if (!email) {
      error.email = "Email is Required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Invalid Email Format";
    }

    if (!password) {
      error.password = "Password is Required";
    } else if (password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }

    return error;
  };

  return (
    <div>
      <div class=" bg-[url('https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center min-h-screen flex flex-col justify-center items-center">
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-md">
        <h1 class="text-4xl font-bold text-center text-black mb-8">Login </h1>
        <form class="space-y-6" onSubmit={handleSubmit}>
            <div>
                <label class="block text-gray-700 font-bold mb-2" for="email">
                    Email
                </label>
                {errors.email && <div className="text-red-500">{errors.email}</div>}
                <input class="w-full px-4 py-2 rounded-lg border border-gray-400" id="email" name="email"
                    type="email"  value={email}
                    onChange={handleEmailChange}/>
            </div>
            <div>
                <label class="block text-gray-700 font-bold mb-2" for="password">
                    Password
                </label>
                {errors.password && <div className="text-red-500">{errors.password}</div>}
                <input class="w-full px-4 py-2 rounded-lg border border-gray-400" id="password" name="password"
                    type="password" value={password}
                    onChange={handlePasswordChange}/>
            </div>
            <div>
                <button class="w-full bg-blue-500 hover:bg-blue-500k text-white font-bold py-2 px-4 rounded-lg">
                    Log In
                </button>
            </div>
        </form>
    </div>
</div>
    </div>
  );
}

export default Newlogin;