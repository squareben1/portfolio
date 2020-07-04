import DinoRun from "../assets/dinorun_win.png";
import CatBook from "../assets/catbook.png";
import Podcast from "../assets/upandcoming_main.png";
import StringCalc from "../assets/stringcalc_jasmine.png";
import Portfolio from "../assets/portfolio.png";
import ConnectZ from "../assets/connectz.png";

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
      "<p>Facebook style Rails app built as part of an agile team. Features were added iteratively to reflect working conditions on a live project. The last time I worked on a software project in this way was as a Business Analyst. It was fascinating to build out the releases from the perspective of a developer this time round. </p> <p>Users are able to sign up, log in/out, post to their timeline, post to another user's wall, comment on and like posts, delete/update comments, and delete/update their own posts.</p> <p>In addition to getting used to production workflows, this project taught me valuable lessons in database development as well as UX Design & journey mapping.</p>",
  },
  {
    title: "Up & Coming Podcast Site",
    image: Podcast,
    externalLink: "https://upandcomingpodcast.co.uk/",
    gitHubLink: "https://github.com/squareben1/upandcoming-site",
    text:
      "<p>I decided to rebuild the website for an entertainment industry podcast I run with my brother – mostly as an excuse to put my new React knowledge into practice.</p> <p>This site is currently under construction. I’m including it here anyway because it represents the first time, I have translated a professional designer’s plans into code. This is a challenge in its own right and is spurring on a fast improvement of my front-end skills.</p>",
  },
  {
    title: "Portfolio",
    image: Portfolio,
    externalLink: "https://bgittins.com/",
    gitHubLink: "https://github.com/squareben1/portfolio",
    text:
      "<p>Site-ception! I learned a huge amount building the very site you’re on now. It's a fairly simple single page app, but is a more involved front-end project than those I have done previously. It really helped me figure out responsive design using breakpoints in Sass.</p> <p>The most interesting part of the project for me is the humble contact form in the section below. I had been meaning to learn about serverless architecture so decided to implement an AWS Lambda function for the form. After a lot of trial and error (during which time I basically built a server on the project – somewhat missing the point of the exercise) I ended up modifying an existing lambda function. I was really pleased with the result – give it a whirl, knowing any message I receive through my shiny serverless contact form will bring me disproportionate joy.</p>",
  },
  {
    title: "String Calc Kata",
    image: StringCalc,
    externalLink: null,
    gitHubLink: "https://github.com/squareben1/string_calc_kata_js",
    text:
      "<p>A TDD kata which adds new requirements incrementally to simulate a real business situation. Test Driven Development is my preferred way to write code and the steps in this kata were completed with as good a TDD process as I could muster. It turned out to be one of my favourite coding exercises up to that point as it lends itself really well to a test-driven approach.</p>",
  },
  {
    title: "ConnectZ",
    image: ConnectZ,
    externalLink: null,
    gitHubLink: "https://github.com/squareben1/string_calc_kata_js",
    text:
      "<p>This is an ongoing project built with TDD in Python. The spec stipulated that the solution be contained in a single file but now that I have it working, I am refactoring it to ensure it is properly encapsulated and conforms to the Single Responsibility Principle. I found the original coding exercise challenging and see a lot of room for improvement in my initial solution – I’m still really pleased that I managed to work through all the edge cases and a complete working program.</p>",
  },
];
