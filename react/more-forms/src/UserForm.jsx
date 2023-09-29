import React, { useState } from "react";

const UserForm = (props) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [firstNameError, setFirstNameError] = useState("");
	const [lastNameError, setLastNameError] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [confirmPasswordError, setConfirmPasswordError] = useState("");

	const firstNameHandler = (firstNameVal) => {
		setFirstName(firstNameVal);
		if (firstNameVal.length < 2) {
			setFirstNameError("First Name must be at least 2 char");
		} else {
			setFirstNameError("");
		}
	};
	const lastNameHandler = (lastNameVal) => {
		setLastName(lastNameVal);
		if (lastNameVal.length < 2) {
			setLastNameError("Last Name must be at least 2 char");
		} else {
			setLastNameError("");
		}
	};
	const emailHandler = (emailVal) => {
		setEmail(emailVal);
		if (emailVal.length < 6) {
			setEmailError("Email must be at least 6 char");
		} else {
			setEmailError("");
		}
	};
	const passwordHandler = (passwordVal) => {
		setPassword(passwordVal);
		if (passwordVal.length < 8) {
			setPasswordError("Password must be at least 8 char");
		} else {
			setPasswordError("");
		}
	};
	const confirmPasswordHandler = (passwordVal) => {
		setConfirmPassword(passwordVal);
		if (passwordVal.length > 0 && passwordVal !== password) {
			setConfirmPasswordError("Passwords must match");
		} else {
			setConfirmPasswordError("");
		}
	};

	return (
		<fieldset>
			<legend>Form</legend>
			<form>
				<div>
					<div>
						<label>First Name: </label>
						<input
							value={firstName}
							onChange={(e) => firstNameHandler(e.target.value)}
						/>
					</div>
					{firstNameError && <p>{firstNameError}</p>}
				</div>
				<div>
					<div>
						<label>Last Name: </label>
						<input
							value={lastName}
							onChange={(e) => lastNameHandler(e.target.value)}
						/>
					</div>
					{lastNameError && <p>{lastNameError}</p>}
				</div>
				<div>
					<div>
						<label>Email Address: </label>
						<input
							value={email}
							onChange={(e) => emailHandler(e.target.value)}
						/>
					</div>
					{emailError && <p>{emailError}</p>}
				</div>
				<div>
					<div>
						<label>Password: </label>
						<input
							value={password}
							onChange={(e) => passwordHandler(e.target.value)}
						/>
					</div>
					{passwordError && <p>{passwordError}</p>}
				</div>
				<div>
					<div>
						<label>Confirm Password: </label>
						<input
							value={confirmPassword}
							onChange={(e) =>
								confirmPasswordHandler(e.target.value)
							}
						/>
					</div>
					{confirmPasswordError && <p>{confirmPasswordError}</p>}
				</div>
			</form>
		</fieldset>
	);
};

export default UserForm;
