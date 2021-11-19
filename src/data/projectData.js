import DinoRun from "../assets/dinorun_win.png";
import CatBook from "../assets/catbook.png";
import Podcast from "../assets/upandcoming_main.png";
import StringCalc from "../assets/stringcalc_jasmine.png";
import Bujjit from "../assets/bujjit.png";
import StockChecker from "../assets/stockChecker.png";

export default [
  {
    title: "DinoRun",
    image: DinoRun,
    externalLink: "https://technodactyl-studios-dinorun.herokuapp.com/",
    gitHubLink: "https://github.com/squareben1/technodactyl-studios-dinorun",
    text:
      "<p>Side scrolling platform game in which the level is procedurally generated based on user-uploaded audio files. Upload your favourite song and give it a go! </p> <p>Rather than use an existing library like p5.js, the game mechanics were built exclusively with vanilla JavaScript. This was a big challenge but taught me a huge amount about what goes into creating a game.</p> <p>It is built as a single page Rails application. I learned the basics of responsive design on this project. There’s also a separate set of gesture controls for mobile.</p>",
  },
  {
    title: "CatBook",
    image: CatBook,
    externalLink: "https://acebook-catbook-inc.herokuapp.com/",
    gitHubLink: "https://github.com/squareben1/acebook-catbook-inc",
    text:
      "<p>Facebook style Rails app built as part of an agile team. Features were added iteratively to reflect working conditions on a live project.</p> <p>Users are able to sign up, log in/out, post to their timeline, post to another user's wall, comment on and like posts, delete/update comments, and delete/update their own posts.</p> <p>In addition to getting used to production workflows, this project taught me valuable lessons in database development as well as UX Design & journey mapping.</p>",
  },
  {
    title: "Stock Alert Lambda",
    image: StockChecker,
    externalLink: null,
    gitHubLink: "https://github.com/squareben1/stock-alert",
    text:
      "<p>A Lambda function which sends a text message when the price of one of a list of selected stocks and index funds drops by a specified percentage. Built using Node JS, AWS Lambda and SNS.</p>",
  },
  {
    title: "bujj.it",
    image: Bujjit,
    externalLink: "https://bujj.it/",
    gitHubLink: "https://github.com/bujj-it/bujj.it",
    text:
      "<p>[WIP] Simple to use budgeting tool built using React/Redux and NodeJS. bujj.it is designed to teach young people to budget effectively in as simple and clear a way as possible. Features include user sign-up and authentication, mobile-first responsive design, and Redux-powered budget calculator.</p>",
  },
  {
    title: "Up & Coming Podcast Site",
    image: Podcast,
    externalLink: "https://upandcomingpodcast.co.uk/",
    gitHubLink: "https://github.com/squareben1/upandcoming-site",
    text:
      "<p>I decided to rebuild the website for an entertainment industry podcast I run with my brother – mostly as an excuse to put my new React knowledge into practice.</p> <p>This site is currently under construction. I’m including it here anyway because it represents the first time I have translated a professional designer’s plans into code. This is a challenge in its own right and is spurring on a fast improvement of my front-end skills.</p>",
  },
  {
    title: "String Calc Kata",
    image: StringCalc,
    externalLink: null,
    gitHubLink: "https://github.com/squareben1/string_calc_kata_js",
    text:
      "<p>A TDD kata which adds new requirements incrementally to simulate a real business situation. Test Driven Development is my preferred way to write code and the steps in this kata were completed with as good a TDD process as I could muster. It turned out to be one of my favourite coding exercises up to that point as it lends itself really well to a test-driven approach.</p>",
  },
];
