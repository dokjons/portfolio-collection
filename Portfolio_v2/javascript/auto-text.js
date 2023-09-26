// Typed auto text
import Typed from "./typed.js";

const auto = new Typed('.auto-text', {
  strings: ['a Webdesigner', 'a Web Developer', 'an IT-Supporter', 'an AI Developer', 'an Etichal Hacker'],
  loop: true,
  IPColor: 'white'
});

// Initialize Typing Effect
auto.start();