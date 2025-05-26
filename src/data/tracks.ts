
export const tracks = [
  {
    id: 'python-basics',
    title: 'Python Fundamentals',
    type: 'python',
    description: 'Master Python from the ground up with hands-on projects. Perfect for beginners who want to see immediate results.',
    color: 'bg-gradient-to-r from-green-500 to-blue-500',
    skills: ['Variables', 'Functions', 'Loops', 'Data Structures'],
    lessons: [
      {
        title: 'Hello, Python!',
        explanation: 'Let\'s start with the classic first program. Use the print() function to display text.',
        startCode: '# Write your first Python program\n',
        goal: 'print("Hello, World!")',
        expectedOutput: 'Hello, World!',
        hint: 'Use print() with your message inside quotes: print("Hello, World!")'
      },
      {
        title: 'Variables and Math',
        explanation: 'Store values in variables and perform calculations. Variables are like containers for data.',
        startCode: '# Create variables and do math\nname = "Coder"\nage = 25\n',
        goal: 'print(f"I am {name} and I am {age} years old")',
        expectedOutput: 'I am Coder and I am 25 years old',
        hint: 'Use f-strings to combine text and variables: f"I am {name} and I am {age} years old"'
      },
      {
        title: 'Making Decisions',
        explanation: 'Use if statements to make your code smart. Let your program decide what to do based on conditions.',
        startCode: '# Make decisions with if statements\nscore = 85\n',
        goal: 'if score >= 90:\n    print("A grade")\nelse:\n    print("Keep studying!")',
        expectedOutput: 'Keep studying!',
        hint: 'Use if score >= 90: followed by print() statements. Don\'t forget the indentation!'
      },
      {
        title: 'Loops for Repetition',
        explanation: 'Repeat actions efficiently with loops. Why write the same code multiple times?',
        startCode: '# Use a loop to count\n',
        goal: 'for i in range(5):\n    print(f"Count: {i}")',
        expectedOutput: 'Count: 0\nCount: 1\nCount: 2\nCount: 3\nCount: 4',
        hint: 'Use "for i in range(5):" to loop 5 times, then print(f"Count: {i}")'
      }
    ]
  },
  {
    id: 'javascript-essentials',
    title: 'JavaScript Essentials',
    type: 'javascript',
    description: 'Learn the language of the web. Build interactive features and understand modern JavaScript.',
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    skills: ['DOM Manipulation', 'Events', 'Functions', 'Async/Await'],
    lessons: [
      {
        title: 'JavaScript Basics',
        explanation: 'Start with JavaScript fundamentals. Variables, functions, and basic syntax.',
        startCode: '// Your first JavaScript program\n',
        goal: 'console.log("Hello, JavaScript!")',
        expectedOutput: 'Hello, JavaScript!',
        hint: 'Use console.log() to display text: console.log("Hello, JavaScript!")'
      },
      {
        title: 'Functions and Variables',
        explanation: 'Create reusable code blocks with functions. Store data in variables.',
        startCode: '// Create a function\nfunction greet(name) {\n    \n}\n',
        goal: 'return `Hello, ${name}!`',
        expectedOutput: 'Hello, Coder!',
        hint: 'Inside the function, use "return `Hello, ${name}!`" with template literals'
      }
    ]
  },
  {
    id: 'cybersecurity-101',
    title: 'Cybersecurity Fundamentals',
    type: 'cybersecurity',
    description: 'Learn to think like a security expert. Understand vulnerabilities, encryption, and defense strategies.',
    color: 'bg-gradient-to-r from-red-500 to-pink-500',
    skills: ['Encryption', 'Network Security', 'Vulnerability Assessment', 'Incident Response'],
    lessons: [
      {
        title: 'Password Security',
        explanation: 'Learn about password strength and common vulnerabilities. Strong passwords are your first line of defense.',
        startCode: '# Check password strength\npassword = "123456"\n',
        goal: 'if len(password) < 8:\n    print("Weak password")\nelse:\n    print("Strong password")',
        expectedOutput: 'Weak password',
        hint: 'Use len(password) to check length, then compare with < 8'
      }
    ]
  },
  {
    id: 'web-dev-fundamentals',
    title: 'Web Development',
    type: 'webdev',
    description: 'Build modern websites and web applications. From HTML basics to advanced frameworks.',
    color: 'bg-gradient-to-r from-blue-500 to-purple-500',
    skills: ['HTML', 'CSS', 'Responsive Design', 'JavaScript'],
    lessons: [
      {
        title: 'HTML Structure',
        explanation: 'Create the foundation of web pages with HTML. Structure content with semantic elements.',
        startCode: '<!-- Create a basic HTML page -->\n<html>\n<body>\n\n</body>\n</html>',
        goal: '<h1>My First Website</h1>',
        expectedOutput: 'My First Website',
        hint: 'Add <h1>My First Website</h1> between the body tags'
      }
    ]
  },
  {
    id: 'algorithms-datastructures',
    title: 'Algorithms & Data Structures',
    type: 'algorithms',
    description: 'Master the building blocks of computer science. Solve problems efficiently and elegantly.',
    color: 'bg-gradient-to-r from-indigo-500 to-cyan-500',
    skills: ['Big O Notation', 'Sorting', 'Searching', 'Trees', 'Graphs'],
    lessons: [
      {
        title: 'Linear Search',
        explanation: 'Find elements in a list by checking each item one by one. The simplest search algorithm.',
        startCode: '# Implement linear search\nnumbers = [3, 7, 1, 9, 2]\ntarget = 9\n',
        goal: 'for i, num in enumerate(numbers):\n    if num == target:\n        print(f"Found {target} at index {i}")',
        expectedOutput: 'Found 9 at index 3',
        hint: 'Use enumerate() to get both index and value, then check if num == target'
      }
    ]
  }
];
