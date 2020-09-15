import React, { useState, useEffect } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Message from "./Message";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {username: 'Kioria', text: 'I am mucheso'},
    {username:'Tony Stark', text:'I am iron man'}
  ]);
  const [username, setUsername] = useState("");

  //useState is how define variables in React
  //useEffect is piece of code that runs when the dependency changes
  useEffect(() => {
    setUsername(prompt("Please enter your name"));
  }, []);

  const sendMessage = (event) => {
    //Disables refresh when you put press the button to submit message as it is in a form
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput("");
  };

  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />

          <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>

      {/*Messages */}
      {messages.map((message) => (
        <Message message={message} username ={username} />
      ))}
    </div>
  );
}

export default App;
