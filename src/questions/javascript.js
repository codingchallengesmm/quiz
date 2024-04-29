export const questions = [
  {
    code: "let a = 100;\n\na += 10;\n\nconsole.log(a);",
    question: "What is the output of the following code? ",
    answer: '110',
    choices: [
      '10',
      '110',
      '10010',
      'null',
    ]
  },
  {
    code: "let a = 100;\nlet b = a;\n\na = 0;\n\nconsole.log(b);",
    question: "What is the output of the following code? ",
    answer: '100',
    choices: [
      '0',
      '"a"',
      '100',
      'null',
    ]
  },
  {
    code: "let a = [10, 20, 30];\nlet b = a;\n\na[0] = 100;\n\nconsole.log(b[0]);",
    question: "What is the output of the following code? ",
    answer: '100',
    choices: [
      '10',
      '100',
      'error',
      'undefined',
    ]
  },
  {
    code: "let a = [10, 20, 30];\nlet b = a;\n\nb[0] = 100;\n\nconsole.log(a[0]);",
    question: "What is the output of the following code? ",
    answer: '100',
    choices: [
      '10',
      '100',
      'error',
      'undefined',
    ]
  },
  {
    code: "let a = 10;\n\nsetTimeout(() => {\n\tconsole.log(a);\n}, 1000);\n\na = 100;",
    question: "What is the output of the following code? ",
    answer: '100',
    choices: [
      '100',
      '10',
      '110',
      'null',
    ]
  },
  {
    code: "let a = 10;\n\nsetTimeout(() => {\n\ta = 100;\n}, 1000);\n\nconsole.log(a)",
    question: "What is the output of the following code? ",
    answer: '10',
    choices: [
      '100',
      '10',
      '110',
      'null',
    ]
  },
  {
    code: "const a = [1,2,3,4,5];\n\na.forEach((el, i) => console.log(i));",
    question: "What is the output of the following code? ",
    answer: '0 ... 4',
    choices: [
      '1 ... 5',
      '0 ... 4',
      'error',
      'null',
    ]
  },
  {
    code: "const a = 100;\n\na = 0;\n\nconsole.log(a)",
    question: "What is the output of the following code? ",
    answer: 'error',
    choices: [
      'a',
      '100',
      'error',
      'null',
    ]
  },
  {
    code: "let a = 0;\n\nfor (let i = 0; i < 5; i++) {\n\ta++;\n}\n\nconsole.log(a);",
    question: "What is the output of the following code? ",
    answer: '5',
    choices: [
      '0',
      '4',
      '5',
      'error',
    ]
  },
  {
    code: "let a = 0;\nlet b = [1, 2, 3, 4, 5];\n\nb.forEach((val) => {a += val})\n\nconsole.log(a);",
    question: "What is the output of the following code? ",
    answer: '15',
    choices: [
      '15',
      '0',
      '5',
      'error',
    ]
  },
  {
    code: "let sum = async (x, y) => x + y;\nlet a = 0;\nlet b = [1, 2, 3, 4, 5];\n\nb.forEach(async (val) => {a = await sum(a, val)})\n\nconsole.log(a);",
    question: "What is the output of the following code? ",
    answer: '0',
    choices: [
      '15',
      '0',
      '5',
      'error',
    ]
  },
  {
    code: "let sum = async (x, y) => x + y;\nlet a = 0;\nlet b = [1, 2, 3, 4, 5];\n\nfor (let i = 0; i < b.length; i++) {\n\ta = await sum(a, b[i]);\n}\n\nconsole.log(a);",
    question: "What is the output of the following code? ",
    answer: '15',
    choices: [
      '15',
      '0',
      '5',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\nlet mod = function() { this.val = 10; }\n\nmod.call(a);\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: '10',
    choices: [
      '0',
      '10',
      'undefined',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\nlet mod = function() { this.val = 10; }\n\na.mod();\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: 'error',
    choices: [
      '0',
      '10',
      'undefined',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\n\na.mod = function() { this.val = 10; }\na.mod();\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: '10',
    choices: [
      '0',
      '10',
      'undefined',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\n\nfunction mod() { a.val = 10; }\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: '0',
    choices: [
      '0',
      '10',
      'undefined',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\n\nfunction() { a.val = 10; }\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: 'error',
    choices: [
      '0',
      '10',
      'null',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\n\n(function() { a.val = 10; })()\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: '10',
    choices: [
      '0',
      '10',
      'null',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\n\na.mod = function() { this.val = 10; };\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: '0',
    choices: [
      '0',
      '10',
      'null',
      'error',
    ]
  },
  {
    code: "let a = { val: 0 };\nlet mod = function(obj) { obj.val = 10; }\n\nmod(a);\n\nconsole.log(a.val)",
    question: "What is the output of the following code? ",
    answer: '10',
    choices: [
      '0',
      '10',
      'null',
      'error',
    ]
  },
]

