import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import dgram from 'dgram';

setInterval(() => {
  const client = dgram.createSocket('udp4');
  console.log('keepalive');
  client.send(Buffer.from('1-arduino_button'), 9101, (err) => {
    client.close();
  });
}, 1000);

const onClick = () => {
  console.log('click!');
  const client = dgram.createSocket('udp4');
  client.send(Buffer.from('1-button_down'), 9101, (err) => {
    client.close();
  });
};

const Hello = () => {
  return (
    <button onClick={onClick} type="button">
      Spausti
    </button>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
