const mcqs = [
  {
    question: "Q1. What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Q2. Which HTML element is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
  },
  {
    question: "Q3. What is the correct HTML for inserting an image?",
    options: [
      "<img src='image.jpg' alt='My Image' />",
      "<image src='image.jpg' />",
      "<img href='image.jpg' alt='My Image' />",
      "<img alt='My Image'>image.jpg</img>",
    ],
    answer: "<img src='image.jpg' alt='My Image' />",
  },
  // {
  //   question:
  //     "Q4. Which HTML attribute specifies an alternate text for an image?",
  //   options: ["title", "src", "alt", "longdesc"],
  //   answer: "alt",
  // },
  // {
  //   question: "Q5. Which HTML element is used to define a paragraph?",
  //   options: ["<para>", "<p>", "<paragraph>", "<pg>"],
  //   answer: "<p>",
  // },
  // {
  //   question: "Q6. Which HTML element is used to define a hyperlink?",
  //   options: ["<link>", "<a>", "<hyperlink>", "<href>"],
  //   answer: "<a>",
  // },
  // {
  //   question: "Q7. Which HTML element is used to define a table row?",
  //   options: ["<table-row>", "<tr>", "<td>", "<th>"],
  //   answer: "<tr>",
  // },
  // {
  //   question: "Q8. Which HTML element is used to define important text?",
  //   options: ["<important>", "<i>", "<strong>", "<b>"],
  //   answer: "<strong>",
  // },
  // {
  //   question: "Q9. Which HTML element is used to define a list item?",
  //   options: ["<list>", "<ul>", "<ol>", "<li>"],
  //   answer: "<li>",
  // },
  // {
  //   question: "Q10. Which HTML5 element is used for playing video files?",
  //   options: ["<movie>", "<media>", "<video>", "<play>"],
  //   answer: "<video>",
  // },
  // {
  //   question: "Q11. What does CSS stand for?",
  //   options: [
  //     "Creative Style Sheets",
  //     "Cascading Style Sheets",
  //     "Computer Style Sheets",
  //     "Colorful Style Sheets",
  //   ],
  //   answer: "Cascading Style Sheets",
  // },
  // {
  //   question:
  //     "Q12. Which CSS property is used to change the text color of an element?",
  //   options: ["text-color", "font-color", "color", "text-style"],
  //   answer: "color",
  // },
  // {
  //   question: "Q13. Which CSS property controls the text size?",
  //   options: ["text-style", "font-size", "text-size", "font-style"],
  //   answer: "font-size",
  // },
  // {
  //   question:
  //     "Q14. How do you make each word in a text start with a capital letter?",
  //   options: [
  //     "text-transform: capitalize",
  //     "text-transform: uppercase",
  //     "text-style: capital",
  //     "You can't do that with CSS",
  //   ],
  //   answer: "text-transform: capitalize",
  // },
  // {
  //   question:
  //     "Q15. Which CSS property is used to change the font of an element?",
  //   options: ["font-family", "font-style", "font-weight", "text-font"],
  //   answer: "font-family",
  // },
  // {
  //   question: "Q16. How do you select an element with id 'demo' in CSS?",
  //   options: [".demo", "#demo", "demo", "*demo"],
  //   answer: "#demo",
  // },
  // {
  //   question: "Q17. Which CSS property is used to change the background color?",
  //   options: ["bgcolor", "background-color", "color-background", "background"],
  //   answer: "background-color",
  // },
  // {
  //   question: "Q18. How do you select all <p> elements inside a <div> element?",
  //   options: ["div.p", "div + p", "div p", "div > p"],
  //   answer: "div p",
  // },
  // {
  //   question:
  //     "Q19. Which property is used to change the left margin of an element?",
  //   options: ["margin-left", "padding-left", "indent", "left-margin"],
  //   answer: "margin-left",
  // },
  // {
  //   question: "Q20. Which CSS property is used to make the text bold?",
  //   options: ["font-weight", "text-bold", "font-style", "text-weight"],
  //   answer: "font-weight",
  // },
  // {
  //   question: "Q21. Inside which HTML element do we put the JavaScript code?",
  //   options: ["<scripting>", "<js>", "<script>", "<javascript>"],
  //   answer: "<script>",
  // },
  // {
  //   question: "Q22. How do you creat a function in JavaScript?",
  //   options: [
  //     "function = myFunction()",
  //     "function myFunction()",
  //     "create myFunction()",
  //     "new function myFunction()",
  //   ],
  //   answer: "function myFunction()",
  // },
  // {
  //   question: "Q23. How do you call a function named myFunction?",
  //   options: [
  //     "call myFunction()",
  //     "myFunction()",
  //     "call function myFunction()",
  //     "execute myFunction()",
  //   ],
  //   answer: "myFunction()",
  // },
  // {
  //   question: "Q24. How to write an IF statement in JavaScript?",
  //   options: ["if i = 5 then", "if(i == 5)", "if i == 5 then", "if i = 5"],
  //   answer: "if(i == 5)",
  // },
  // {
  //   question: "Q25. How does a WHILE loop start?",
  //   options: [
  //     "while(i <= 10; i++)",
  //     "while i = 1 to 10",
  //     "while(i <= 10)",
  //     "while i <= 10",
  //   ],
  //   answer: "while(i <= 10)",
  // },
  // {
  //   question: "Q26. How do you add a comment in JavScript?",
  //   options: [
  //     "<!--This is a comment-->",
  //     "//This is a comment",
  //     "'This is a comment",
  //     "This is a comment",
  //   ],
  //   answer: "//This is a comment",
  // },
  // {
  //   question: "Q27. Which operator is used to assign a value to a variable?",
  //   options: ["*", "-", "=", "x"],
  //   answer: "=",
  // },
  // {
  //   question: "Q28. What it the correct way to write a JavaScript array?",
  //   options: [
  //     "var colors = 'red', 'green', 'blue'`",
  //     "var colors = (1:'red', 2:'green', 3:'blue')",
  //     "var colors = ['red', 'green', 'blue']",
  //     "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
  //   ],
  //   answer: "var colors = ['red', 'green', 'blue']",
  // },
  // {
  //   question: "Q29. How do you round the number 7.25 to the nearest integer?",
  //   options: ["Math.rnd(7.25)", "round(7.25)", "Math.round(7.25)", "rnd(7.25)"],
  //   answer: "Math.round(7.25)",
  // },
  // {
  //   question:
  //     "Q30. Which event occurs when the user clicks on an HTML element?",
  //   options: ["onmouseclick", "onchange", "onclick", "onmouseover"],
  //   answer: "onclick",
  // },
];
