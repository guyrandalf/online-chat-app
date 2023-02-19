import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm"
import "./App.css";

const App = () => {
	if (!localStorage.getItem('username')) {
		return <LoginForm />
	}
	return (
		<ChatEngine
			height="100vh"
			projectID="83fedf7d-eea9-46e3-b65c-5b01d6a75bc6
      "
			userName={localStorage.getItem('username')}
			userSecret={localStorage.getItem('password')}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};

export default App;
