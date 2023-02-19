import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();

		const authObject = {
			"Project-ID": "83fedf7d-eea9-46e3-b65c-5b01d6a75bc6",
			"User-Name": username,
			"User-Secret": password,
		};

		try {
			await axios.get("https://api.chatengine.io/chats", {
				headers: authObject,
			});
			localStorage.setItem('username', username)
			localStorage.setItem('password', password)

			window.location.reload()
		} catch (error) {
			setError('Uh-oh!, Incorrect Login details')
		}
	};

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">React Chat Application</h1>
				<h4 className="error">{error}</h4>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<div align="center">
						<button type="submit" className="button">
							<span>Start Chat</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
