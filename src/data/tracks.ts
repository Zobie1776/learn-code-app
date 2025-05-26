
export const tracks = [
  {
    id: 'python-basics',
    title: 'Python Fundamentals',
    type: 'python',
    description: 'Master Python from the ground up with hands-on projects. Perfect for beginners who want to see immediate results.',
    color: 'bg-gradient-to-r from-green-500 to-blue-500',
    skills: ['Variables', 'Functions', 'Loops', 'Data Structures', 'File Handling', 'Error Handling'],
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
        title: 'User Input',
        explanation: 'Get information from users with input(). Make your programs interactive!',
        startCode: '# Get user input\n',
        goal: 'name = input("What is your name? ")\nprint(f"Hello, {name}!")',
        expectedOutput: 'What is your name? \nHello, [name]!',
        hint: 'Use input() to get text from the user, then use it in a print statement'
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
      },
      {
        title: 'Working with Lists',
        explanation: 'Store multiple items in lists. Perfect for organizing related data.',
        startCode: '# Create and use lists\nfruits = ["apple", "banana", "orange"]\n',
        goal: 'for fruit in fruits:\n    print(f"I like {fruit}")',
        expectedOutput: 'I like apple\nI like banana\nI like orange',
        hint: 'Use "for fruit in fruits:" to loop through each item in the list'
      },
      {
        title: 'Functions - Your Own Commands',
        explanation: 'Create reusable code blocks with functions. Write once, use many times!',
        startCode: '# Create a function\ndef greet(name):\n    # Your code here\n    pass\n',
        goal: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Python"))',
        expectedOutput: 'Hello, Python!',
        hint: 'Replace "pass" with "return f\'Hello, {name}!\'" and call the function'
      },
      {
        title: 'Reading Files',
        explanation: 'Learn to read data from files. Essential for working with real-world data.',
        startCode: '# Read from a file\n# Assume we have a file called "data.txt"\n',
        goal: 'with open("data.txt", "r") as file:\n    content = file.read()\n    print(content)',
        expectedOutput: '[file contents]',
        hint: 'Use "with open(filename, \'r\') as file:" to safely read files'
      },
      {
        title: 'Error Handling',
        explanation: 'Handle errors gracefully with try/except. Make your programs robust!',
        startCode: '# Handle potential errors\nnumber = "not a number"\n',
        goal: 'try:\n    result = int(number)\n    print(result)\nexcept ValueError:\n    print("That\'s not a valid number!")',
        expectedOutput: 'That\'s not a valid number!',
        hint: 'Use try/except to catch ValueError when converting strings to integers'
      },
      {
        title: 'Mini Project: Calculator',
        explanation: 'Combine everything you\'ve learned to build a simple calculator!',
        startCode: '# Build a calculator\ndef calculate(num1, num2, operation):\n    # Your code here\n    pass\n',
        goal: 'def calculate(num1, num2, operation):\n    if operation == "+":\n        return num1 + num2\n    elif operation == "-":\n        return num1 - num2\n    elif operation == "*":\n        return num1 * num2\n    elif operation == "/":\n        return num1 / num2 if num2 != 0 else "Cannot divide by zero"\n\nprint(calculate(10, 5, "+"))',
        expectedOutput: '15',
        hint: 'Use if/elif statements to check the operation and perform the correct math'
      }
    ]
  },
  {
    id: 'javascript-essentials',
    title: 'JavaScript Essentials',
    type: 'javascript',
    description: 'Learn the language of the web. Build interactive features and understand modern JavaScript.',
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    skills: ['DOM Manipulation', 'Events', 'Functions', 'Async/Await', 'APIs', 'ES6+'],
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
        title: 'Variables and Data Types',
        explanation: 'Learn about different data types: strings, numbers, booleans, and arrays.',
        startCode: '// Declare variables\nlet name = "Developer";\nlet age = 25;\nlet isLearning = true;\n',
        goal: 'console.log(`Name: ${name}, Age: ${age}, Learning: ${isLearning}`)',
        expectedOutput: 'Name: Developer, Age: 25, Learning: true',
        hint: 'Use template literals with backticks and ${} for variable interpolation'
      },
      {
        title: 'Functions and Parameters',
        explanation: 'Create reusable code blocks with functions. Pass data using parameters.',
        startCode: '// Create a function\nfunction greet(name) {\n    // Your code here\n}\n',
        goal: 'function greet(name) {\n    return `Hello, ${name}!`;\n}\nconsole.log(greet("World"));',
        expectedOutput: 'Hello, World!',
        hint: 'Use return statement with template literals: return `Hello, ${name}!`'
      },
      {
        title: 'Arrays and Loops',
        explanation: 'Work with collections of data using arrays and iterate with loops.',
        startCode: '// Work with arrays\nconst colors = ["red", "green", "blue"];\n',
        goal: 'for (let color of colors) {\n    console.log(`I like ${color}`);\n}',
        expectedOutput: 'I like red\nI like green\nI like blue',
        hint: 'Use "for (let color of colors)" to loop through each item in the array'
      },
      {
        title: 'Objects and Properties',
        explanation: 'Store related data together using objects. Access properties with dot notation.',
        startCode: '// Create an object\nconst person = {\n    name: "Alex",\n    age: 30,\n    city: "New York"\n};\n',
        goal: 'console.log(`${person.name} is ${person.age} years old and lives in ${person.city}`)',
        expectedOutput: 'Alex is 30 years old and lives in New York',
        hint: 'Access object properties using dot notation: person.name, person.age, etc.'
      },
      {
        title: 'DOM Manipulation',
        explanation: 'Change web page content dynamically. Make your pages interactive!',
        startCode: '// Change page content\n// Assume we have <h1 id="title">Old Title</h1>\n',
        goal: 'document.getElementById("title").textContent = "New Title!";\nconsole.log("Title changed!");',
        expectedOutput: 'Title changed!',
        hint: 'Use document.getElementById() to select elements and textContent to change text'
      },
      {
        title: 'Event Handling',
        explanation: 'Respond to user interactions like clicks, form submissions, and key presses.',
        startCode: '// Handle button clicks\n// Assume we have <button id="myButton">Click me</button>\n',
        goal: 'document.getElementById("myButton").addEventListener("click", function() {\n    console.log("Button clicked!");\n});',
        expectedOutput: 'Button clicked!',
        hint: 'Use addEventListener("click", function() {}) to handle click events'
      },
      {
        title: 'Fetch API and Promises',
        explanation: 'Get data from external sources using the Fetch API. Handle asynchronous operations.',
        startCode: '// Fetch data from an API\n',
        goal: 'fetch("https://api.github.com/users/octocat")\n    .then(response => response.json())\n    .then(data => console.log(data.name));',
        expectedOutput: 'The Octocat',
        hint: 'Use fetch() with .then() to handle promises and get JSON data'
      },
      {
        title: 'Local Storage',
        explanation: 'Save data in the browser for later use. Perfect for user preferences and settings.',
        startCode: '// Save and retrieve data\nconst userData = { name: "John", theme: "dark" };\n',
        goal: 'localStorage.setItem("user", JSON.stringify(userData));\nconst saved = JSON.parse(localStorage.getItem("user"));\nconsole.log(saved.name);',
        expectedOutput: 'John',
        hint: 'Use JSON.stringify() to save objects and JSON.parse() to retrieve them'
      },
      {
        title: 'Mini Project: Todo App',
        explanation: 'Build a simple todo list application combining all JavaScript concepts!',
        startCode: '// Todo app logic\nlet todos = [];\n\nfunction addTodo(text) {\n    // Your code here\n}\n',
        goal: 'function addTodo(text) {\n    todos.push({ id: Date.now(), text: text, completed: false });\n    console.log(`Added: ${text}`);\n}\n\naddTodo("Learn JavaScript");\naddTodo("Build projects");',
        expectedOutput: 'Added: Learn JavaScript\nAdded: Build projects',
        hint: 'Use todos.push() to add new todo objects with id, text, and completed properties'
      }
    ]
  },
  {
    id: 'cybersecurity-101',
    title: 'Cybersecurity Fundamentals',
    type: 'cybersecurity',
    description: 'Learn to think like a security expert. Understand vulnerabilities, encryption, and defense strategies.',
    color: 'bg-gradient-to-r from-red-500 to-pink-500',
    skills: ['Security Principles', 'Encryption', 'Vulnerability Assessment', 'Secure Coding', 'Network Security'],
    lessons: [
      {
        title: 'Password Security Basics',
        explanation: 'Learn about password strength and common vulnerabilities. Strong passwords are your first line of defense.',
        startCode: '# Check password strength\npassword = "123456"\n',
        goal: 'def check_password_strength(password):\n    if len(password) < 8:\n        return "Weak: Too short"\n    elif password.isdigit():\n        return "Weak: Only numbers"\n    else:\n        return "Good password"\n\nprint(check_password_strength(password))',
        expectedOutput: 'Weak: Only numbers',
        hint: 'Check password length with len() and use .isdigit() to detect numeric-only passwords'
      },
      {
        title: 'Input Validation',
        explanation: 'Always validate user input! This prevents many security vulnerabilities.',
        startCode: '# Validate user input\ndef validate_email(email):\n    # Your code here\n    pass\n',
        goal: 'def validate_email(email):\n    if "@" in email and "." in email and len(email) > 5:\n        return "Valid email format"\n    else:\n        return "Invalid email format"\n\nprint(validate_email("user@example.com"))',
        expectedOutput: 'Valid email format',
        hint: 'Check for "@" and "." characters and minimum length for basic email validation'
      },
      {
        title: 'Simple Encryption',
        explanation: 'Learn basic encryption concepts with a Caesar cipher. Protect data by transforming it.',
        startCode: '# Caesar cipher encryption\ndef encrypt_message(message, shift):\n    # Your code here\n    pass\n',
        goal: 'def encrypt_message(message, shift):\n    result = ""\n    for char in message:\n        if char.isalpha():\n            shifted = ord(char) + shift\n            result += chr(shifted)\n        else:\n            result += char\n    return result\n\nprint(encrypt_message("hello", 3))',
        expectedOutput: 'khoor',
        hint: 'Use ord() to get character codes, add the shift, then chr() to convert back'
      },
      {
        title: 'Hash Functions',
        explanation: 'Understand how hashing protects passwords and verifies data integrity.',
        startCode: '# Simple hash function\nimport hashlib\n\ndef hash_password(password):\n    # Your code here\n    pass\n',
        goal: 'def hash_password(password):\n    return hashlib.sha256(password.encode()).hexdigest()\n\nhashed = hash_password("mypassword")\nprint(f"Hashed: {hashed[:16]}...")  # Show first 16 chars',
        expectedOutput: 'Hashed: 89e01536ac207279...',
        hint: 'Use hashlib.sha256(password.encode()).hexdigest() to create a hash'
      },
      {
        title: 'SQL Injection Prevention',
        explanation: 'Learn how to prevent SQL injection attacks through proper input sanitization.',
        startCode: '# Prevent SQL injection\ndef safe_query(user_id):\n    # Your code here - make this safe!\n    pass\n',
        goal: 'def safe_query(user_id):\n    # Validate input is numeric\n    if not str(user_id).isdigit():\n        return "Error: Invalid user ID"\n    # Use parameterized query (simulated)\n    query = f"SELECT * FROM users WHERE id = {int(user_id)}"\n    return f"Safe query: {query}"\n\nprint(safe_query("123"))',
        expectedOutput: 'Safe query: SELECT * FROM users WHERE id = 123',
        hint: 'Always validate input types and use parameterized queries in real applications'
      },
      {
        title: 'Access Control',
        explanation: 'Implement basic access control to ensure users can only access what they should.',
        startCode: '# Simple access control\nuser_roles = {"admin": ["read", "write", "delete"], "user": ["read"]}\n\ndef check_permission(role, action):\n    # Your code here\n    pass\n',
        goal: 'def check_permission(role, action):\n    if role in user_roles and action in user_roles[role]:\n        return f"Access granted for {action}"\n    else:\n        return f"Access denied for {action}"\n\nprint(check_permission("user", "delete"))',
        expectedOutput: 'Access denied for delete',
        hint: 'Check if the role exists and if the action is in the allowed actions list'
      },
      {
        title: 'Secure File Upload',
        explanation: 'Learn to validate file uploads to prevent malicious files from being stored.',
        startCode: '# Validate file uploads\ndef validate_file(filename):\n    # Your code here\n    pass\n',
        goal: 'def validate_file(filename):\n    allowed_extensions = [".jpg", ".png", ".pdf", ".txt"]\n    file_ext = filename.lower().split(".")[-1]\n    if f".{file_ext}" in allowed_extensions:\n        return "File type allowed"\n    else:\n        return "File type not allowed"\n\nprint(validate_file("document.pdf"))',
        expectedOutput: 'File type allowed',
        hint: 'Check the file extension against a whitelist of allowed extensions'
      },
      {
        title: 'Security Headers',
        explanation: 'Understand how HTTP security headers protect web applications.',
        startCode: '# Security headers checker\ndef add_security_headers():\n    # Your code here\n    pass\n',
        goal: 'def add_security_headers():\n    headers = {\n        "X-Frame-Options": "DENY",\n        "X-Content-Type-Options": "nosniff",\n        "X-XSS-Protection": "1; mode=block"\n    }\n    return headers\n\nprint(add_security_headers())',
        expectedOutput: "{'X-Frame-Options': 'DENY', 'X-Content-Type-Options': 'nosniff', 'X-XSS-Protection': '1; mode=block'}",
        hint: 'Return a dictionary with security header names and their protective values'
      },
      {
        title: 'Vulnerability Scanner',
        explanation: 'Build a simple vulnerability scanner to check common security issues.',
        startCode: '# Simple vulnerability scanner\ndef scan_vulnerabilities(url, headers):\n    # Your code here\n    pass\n',
        goal: 'def scan_vulnerabilities(url, headers):\n    vulnerabilities = []\n    \n    if "X-Frame-Options" not in headers:\n        vulnerabilities.append("Missing X-Frame-Options header")\n    \n    if "https://" not in url:\n        vulnerabilities.append("Not using HTTPS")\n    \n    return vulnerabilities if vulnerabilities else ["No vulnerabilities found"]\n\nresult = scan_vulnerabilities("http://example.com", {})\nprint(result)',
        expectedOutput: "['Missing X-Frame-Options header', 'Not using HTTPS']",
        hint: 'Check for missing security headers and insecure protocols'
      },
      {
        title: 'Security Audit Project',
        explanation: 'Combine all security concepts to perform a comprehensive security audit.',
        startCode: '# Security audit system\nclass SecurityAuditor:\n    def __init__(self):\n        pass\n    \n    def audit_system(self, system_data):\n        # Your code here\n        pass\n',
        goal: 'class SecurityAuditor:\n    def __init__(self):\n        self.checks = 0\n        self.issues = []\n    \n    def audit_system(self, system_data):\n        self.checks += 1\n        \n        # Check password policy\n        if len(system_data.get("admin_password", "")) < 8:\n            self.issues.append("Weak admin password")\n        \n        # Check HTTPS\n        if not system_data.get("uses_https", False):\n            self.issues.append("No HTTPS encryption")\n        \n        return f"Audit complete. {len(self.issues)} issues found."\n\nauditor = SecurityAuditor()\nresult = auditor.audit_system({"admin_password": "123", "uses_https": False})\nprint(result)',
        expectedOutput: 'Audit complete. 2 issues found.',
        hint: 'Create methods to check different security aspects and collect issues in a list'
      }
    ]
  },
  {
    id: 'web-dev-fundamentals',
    title: 'Web Development',
    type: 'webdev',
    description: 'Build modern websites and web applications. From HTML basics to advanced frameworks.',
    color: 'bg-gradient-to-r from-blue-500 to-purple-500',
    skills: ['HTML5', 'CSS3', 'Responsive Design', 'JavaScript', 'APIs', 'Frameworks'],
    lessons: [
      {
        title: 'HTML Structure Basics',
        explanation: 'Create the foundation of web pages with HTML. Structure content with semantic elements.',
        startCode: '<!-- Create a basic HTML page -->\n<html>\n<head>\n    <title>My Website</title>\n</head>\n<body>\n    <!-- Your content here -->\n</body>\n</html>',
        goal: '<h1>Welcome to My Website</h1>\n<p>This is my first web page!</p>',
        expectedOutput: 'Welcome to My Website\nThis is my first web page!',
        hint: 'Add <h1> for the main heading and <p> for paragraph text between the body tags'
      },
      {
        title: 'CSS Styling',
        explanation: 'Make your web pages beautiful with CSS. Control colors, fonts, and layout.',
        startCode: '<!-- HTML with CSS -->\n<style>\n/* Your CSS here */\n</style>\n<h1>My Heading</h1>\n<p>My paragraph</p>',
        goal: '<style>\nh1 {\n    color: blue;\n    font-size: 2em;\n}\np {\n    color: green;\n    font-family: Arial;\n}\n</style>',
        expectedOutput: 'Styled blue heading and green paragraph',
        hint: 'Use CSS selectors like h1 and p, then add properties like color and font-size'
      },
      {
        title: 'Responsive Layout with Flexbox',
        explanation: 'Create layouts that work on all devices using CSS Flexbox.',
        startCode: '<style>\n.container {\n    /* Your flexbox code here */\n}\n</style>\n<div class="container">\n    <div>Item 1</div>\n    <div>Item 2</div>\n    <div>Item 3</div>\n</div>',
        goal: '.container {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 200px;\n}',
        expectedOutput: 'Three items spaced evenly across the container',
        hint: 'Use display: flex, justify-content: space-between, and align-items: center'
      },
      {
        title: 'Interactive Forms',
        explanation: 'Collect user input with HTML forms. Essential for any interactive website.',
        startCode: '<form>\n    <!-- Your form fields here -->\n</form>',
        goal: '<form>\n    <label for="name">Name:</label>\n    <input type="text" id="name" name="name" required>\n    \n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" required>\n    \n    <button type="submit">Submit</button>\n</form>',
        expectedOutput: 'Form with name field, email field, and submit button',
        hint: 'Use <label>, <input> with different types, and <button> elements'
      },
      {
        title: 'JavaScript Form Validation',
        explanation: 'Validate form data with JavaScript before submission. Improve user experience.',
        startCode: '<script>\nfunction validateForm() {\n    // Your validation code here\n}\n</script>',
        goal: 'function validateForm() {\n    const name = document.getElementById("name").value;\n    const email = document.getElementById("email").value;\n    \n    if (name.length < 2) {\n        alert("Name must be at least 2 characters");\n        return false;\n    }\n    \n    if (!email.includes("@")) {\n        alert("Please enter a valid email");\n        return false;\n    }\n    \n    return true;\n}',
        expectedOutput: 'Form validation with name length and email format checks',
        hint: 'Get form values with getElementById().value and check length and email format'
      },
      {
        title: 'CSS Grid Layout',
        explanation: 'Create complex layouts with CSS Grid. Perfect for card layouts and dashboards.',
        startCode: '<style>\n.grid-container {\n    /* Your grid code here */\n}\n</style>\n<div class="grid-container">\n    <div>Header</div>\n    <div>Sidebar</div>\n    <div>Main</div>\n    <div>Footer</div>\n</div>',
        goal: '.grid-container {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas: \n        "header header"\n        "sidebar main"\n        "footer footer";\n    height: 100vh;\n}',
        expectedOutput: 'Grid layout with header, sidebar, main content, and footer areas',
        hint: 'Use display: grid, grid-template-columns, grid-template-rows, and grid-template-areas'
      },
      {
        title: 'Fetch API for Data',
        explanation: 'Load data from APIs to make your websites dynamic. Connect to real data sources.',
        startCode: '<script>\nasync function loadData() {\n    // Your fetch code here\n}\n</script>',
        goal: 'async function loadData() {\n    try {\n        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");\n        const data = await response.json();\n        document.getElementById("content").innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;\n    } catch (error) {\n        console.error("Error loading data:", error);\n    }\n}',
        expectedOutput: 'Loads and displays post data from API',
        hint: 'Use async/await with fetch(), convert response to JSON, and update DOM content'
      },
      {
        title: 'Local Storage for Persistence',
        explanation: 'Save user data in the browser. Remember user preferences and settings.',
        startCode: '<script>\nfunction saveUserPreference(theme) {\n    // Your storage code here\n}\n\nfunction loadUserPreference() {\n    // Your loading code here\n}\n</script>',
        goal: 'function saveUserPreference(theme) {\n    localStorage.setItem("userTheme", theme);\n    document.body.className = theme;\n}\n\nfunction loadUserPreference() {\n    const savedTheme = localStorage.getItem("userTheme") || "light";\n    document.body.className = savedTheme;\n    return savedTheme;\n}',
        expectedOutput: 'Saves and loads theme preference from local storage',
        hint: 'Use localStorage.setItem() to save and localStorage.getItem() to retrieve data'
      },
      {
        title: 'Responsive Navigation',
        explanation: 'Create a mobile-friendly navigation menu. Essential for modern websites.',
        startCode: '<style>\n.nav-menu {\n    /* Your responsive nav styles here */\n}\n</style>\n<nav>\n    <button class="menu-toggle">☰</button>\n    <ul class="nav-menu">\n        <li><a href="#home">Home</a></li>\n        <li><a href="#about">About</a></li>\n        <li><a href="#contact">Contact</a></li>\n    </ul>\n</nav>',
        goal: '.nav-menu {\n    display: flex;\n    list-style: none;\n}\n\n@media (max-width: 768px) {\n    .nav-menu {\n        display: none;\n        flex-direction: column;\n    }\n    .nav-menu.active {\n        display: flex;\n    }\n}',
        expectedOutput: 'Responsive navigation that collapses on mobile devices',
        hint: 'Use @media queries and toggle classes to show/hide menu on different screen sizes'
      },
      {
        title: 'Complete Portfolio Website',
        explanation: 'Build a complete portfolio website combining all web development concepts!',
        startCode: '<!DOCTYPE html>\n<html>\n<head>\n    <title>My Portfolio</title>\n    <style>\n        /* Your complete website styles here */\n    </style>\n</head>\n<body>\n    <!-- Your complete website structure here -->\n    <script>\n        // Your interactive JavaScript here\n    </script>\n</body>\n</html>',
        goal: '/* A complete responsive portfolio with header, navigation, hero section, portfolio grid, contact form, and footer */',
        expectedOutput: 'Complete portfolio website with all modern web features',
        hint: 'Combine HTML structure, CSS styling, responsive design, and JavaScript interactivity'
      }
    ]
  },
  {
    id: 'algorithms-datastructures',
    title: 'Algorithms & Data Structures',
    type: 'algorithms',
    description: 'Master the building blocks of computer science. Solve problems efficiently and elegantly.',
    color: 'bg-gradient-to-r from-indigo-500 to-cyan-500',
    skills: ['Big O Notation', 'Sorting', 'Searching', 'Trees', 'Graphs', 'Dynamic Programming'],
    lessons: [
      {
        title: 'Linear Search',
        explanation: 'Find elements in a list by checking each item one by one. The simplest search algorithm.',
        startCode: '# Implement linear search\ndef linear_search(arr, target):\n    # Your code here\n    pass\n\nnumbers = [3, 7, 1, 9, 2]\nresult = linear_search(numbers, 9)',
        goal: 'def linear_search(arr, target):\n    for i, num in enumerate(arr):\n        if num == target:\n            return i\n    return -1\n\nprint(f"Found at index: {linear_search(numbers, 9)}")',
        expectedOutput: 'Found at index: 3',
        hint: 'Use enumerate() to get both index and value, return index when target is found'
      },
      {
        title: 'Binary Search',
        explanation: 'Search sorted arrays efficiently by repeatedly dividing the search space in half.',
        startCode: '# Implement binary search\ndef binary_search(arr, target):\n    # Your code here\n    pass\n\nsorted_numbers = [1, 3, 5, 7, 9, 11, 13]\nresult = binary_search(sorted_numbers, 7)',
        goal: 'def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    \n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    \n    return -1\n\nprint(f"Found at index: {binary_search(sorted_numbers, 7)}")',
        expectedOutput: 'Found at index: 3',
        hint: 'Use left and right pointers, calculate middle, and adjust search range based on comparison'
      },
      {
        title: 'Bubble Sort',
        explanation: 'Sort arrays by repeatedly comparing adjacent elements and swapping them if needed.',
        startCode: '# Implement bubble sort\ndef bubble_sort(arr):\n    # Your code here\n    pass\n\nnumbers = [64, 34, 25, 12, 22, 11, 90]\nbubble_sort(numbers)',
        goal: 'def bubble_sort(arr):\n    n = len(arr)\n    for i in range(n):\n        for j in range(0, n - i - 1):\n            if arr[j] > arr[j + 1]:\n                arr[j], arr[j + 1] = arr[j + 1], arr[j]\n    return arr\n\nprint(f"Sorted: {bubble_sort(numbers.copy())}")',
        expectedOutput: 'Sorted: [11, 12, 22, 25, 34, 64, 90]',
        hint: 'Use nested loops and swap adjacent elements when left > right'
      },
      {
        title: 'Stack Implementation',
        explanation: 'Implement a Last-In-First-Out (LIFO) data structure using a list.',
        startCode: '# Implement a stack\nclass Stack:\n    def __init__(self):\n        # Your code here\n        pass\n    \n    def push(self, item):\n        # Your code here\n        pass\n    \n    def pop(self):\n        # Your code here\n        pass',
        goal: 'class Stack:\n    def __init__(self):\n        self.items = []\n    \n    def push(self, item):\n        self.items.append(item)\n    \n    def pop(self):\n        if not self.is_empty():\n            return self.items.pop()\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\nstack = Stack()\nstack.push(1)\nstack.push(2)\nprint(f"Popped: {stack.pop()}")',
        expectedOutput: 'Popped: 2',
        hint: 'Use a list and implement push with append(), pop with pop(), and check if empty'
      },
      {
        title: 'Queue Implementation',
        explanation: 'Implement a First-In-First-Out (FIFO) data structure.',
        startCode: '# Implement a queue\nclass Queue:\n    def __init__(self):\n        # Your code here\n        pass\n    \n    def enqueue(self, item):\n        # Your code here\n        pass\n    \n    def dequeue(self):\n        # Your code here\n        pass',
        goal: 'class Queue:\n    def __init__(self):\n        self.items = []\n    \n    def enqueue(self, item):\n        self.items.append(item)\n    \n    def dequeue(self):\n        if not self.is_empty():\n            return self.items.pop(0)\n        return None\n    \n    def is_empty(self):\n        return len(self.items) == 0\n\nqueue = Queue()\nqueue.enqueue("first")\nqueue.enqueue("second")\nprint(f"Dequeued: {queue.dequeue()}")',
        expectedOutput: 'Dequeued: first',
        hint: 'Use append() to add to the end and pop(0) to remove from the beginning'
      },
      {
        title: 'Binary Tree Traversal',
        explanation: 'Navigate through binary trees using different traversal methods.',
        startCode: '# Binary tree node\nclass TreeNode:\n    def __init__(self, val=0, left=None, right=None):\n        self.val = val\n        self.left = left\n        self.right = right\n\ndef inorder_traversal(root):\n    # Your code here\n    pass',
        goal: 'def inorder_traversal(root):\n    result = []\n    \n    def inorder(node):\n        if node:\n            inorder(node.left)\n            result.append(node.val)\n            inorder(node.right)\n    \n    inorder(root)\n    return result\n\n# Create a simple tree: 2-1-3\nroot = TreeNode(2, TreeNode(1), TreeNode(3))\nprint(f"Inorder: {inorder_traversal(root)}")',
        expectedOutput: 'Inorder: [1, 2, 3]',
        hint: 'For inorder: recursively visit left, process current, then visit right'
      },
      {
        title: 'Graph Representation',
        explanation: 'Represent graphs using adjacency lists. Foundation for graph algorithms.',
        startCode: '# Implement a graph\nclass Graph:\n    def __init__(self):\n        # Your code here\n        pass\n    \n    def add_edge(self, u, v):\n        # Your code here\n        pass\n    \n    def get_neighbors(self, vertex):\n        # Your code here\n        pass',
        goal: 'class Graph:\n    def __init__(self):\n        self.adjacency_list = {}\n    \n    def add_vertex(self, vertex):\n        if vertex not in self.adjacency_list:\n            self.adjacency_list[vertex] = []\n    \n    def add_edge(self, u, v):\n        self.add_vertex(u)\n        self.add_vertex(v)\n        self.adjacency_list[u].append(v)\n        self.adjacency_list[v].append(u)\n    \n    def get_neighbors(self, vertex):\n        return self.adjacency_list.get(vertex, [])\n\ngraph = Graph()\ngraph.add_edge("A", "B")\ngraph.add_edge("B", "C")\nprint(f"Neighbors of B: {graph.get_neighbors(\'B\')}")',
        expectedOutput: "Neighbors of B: ['A', 'C']",
        hint: 'Use a dictionary where keys are vertices and values are lists of connected vertices'
      },
      {
        title: 'Depth-First Search (DFS)',
        explanation: 'Explore graphs by going as deep as possible before backtracking.',
        startCode: '# Implement DFS\ndef dfs(graph, start, visited=None):\n    # Your code here\n    pass',
        goal: 'def dfs(graph, start, visited=None):\n    if visited is None:\n        visited = set()\n    \n    visited.add(start)\n    print(f"Visiting: {start}")\n    \n    for neighbor in graph.get_neighbors(start):\n        if neighbor not in visited:\n            dfs(graph, neighbor, visited)\n    \n    return visited\n\n# Using the graph from previous lesson\nvisited_nodes = dfs(graph, "A")\nprint(f"All visited: {visited_nodes}")',
        expectedOutput: 'Visiting: A\nVisiting: B\nVisiting: C\nAll visited: {\'A\', \'B\', \'C\'}',
        hint: 'Use recursion and a visited set to track explored nodes'
      },
      {
        title: 'Breadth-First Search (BFS)',
        explanation: 'Explore graphs level by level using a queue. Great for finding shortest paths.',
        startCode: '# Implement BFS\nfrom collections import deque\n\ndef bfs(graph, start):\n    # Your code here\n    pass',
        goal: 'def bfs(graph, start):\n    visited = set()\n    queue = deque([start])\n    visited.add(start)\n    result = []\n    \n    while queue:\n        vertex = queue.popleft()\n        result.append(vertex)\n        print(f"Visiting: {vertex}")\n        \n        for neighbor in graph.get_neighbors(vertex):\n            if neighbor not in visited:\n                visited.add(neighbor)\n                queue.append(neighbor)\n    \n    return result\n\n# Using the graph from previous lessons\npath = bfs(graph, "A")\nprint(f"BFS order: {path}")',
        expectedOutput: 'Visiting: A\nVisiting: B\nVisiting: C\nBFS order: [\'A\', \'B\', \'C\']',
        hint: 'Use a queue (deque) and visit all neighbors before going deeper'
      },
      {
        title: 'Algorithm Complexity Analysis',
        explanation: 'Analyze and compare algorithm efficiency using Big O notation.',
        startCode: '# Analyze algorithm complexity\ndef analyze_algorithm_complexity():\n    # Your analysis here\n    pass',
        goal: 'def analyze_algorithm_complexity():\n    algorithms = {\n        "Linear Search": "O(n)",\n        "Binary Search": "O(log n)",\n        "Bubble Sort": "O(n²)",\n        "Quick Sort": "O(n log n)",\n        "Hash Table Lookup": "O(1)"\n    }\n    \n    print("Algorithm Complexity Analysis:")\n    for algo, complexity in algorithms.items():\n        print(f"{algo}: {complexity}")\n    \n    return algorithms\n\nanalysis = analyze_algorithm_complexity()',
        expectedOutput: 'Algorithm Complexity Analysis:\nLinear Search: O(n)\nBinary Search: O(log n)\nBubble Sort: O(n²)\nQuick Sort: O(n log n)\nHash Table Lookup: O(1)',
        hint: 'Create a dictionary mapping algorithm names to their Big O complexity'
      }
    ]
  }
];
