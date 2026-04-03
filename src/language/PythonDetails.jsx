import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck, Cpu, Package, Code2, BookOpen, Terminal, Zap } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-yellow-500/20 border border-gray-600 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 text-xs transition-all">
      {copied ? <><CheckCheck size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
    </button>
  );
}

function CmdBox({ cmd }) {
  return (
    <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 my-2 font-mono text-sm">
      <code className="text-green-400">{cmd}</code>
      <CopyBtn text={cmd} />
    </div>
  );
}

function CodeBlock({ code, lang = "python" }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-gray-400 font-mono">{lang}</span>
        <CopyBtn text={code} />
      </div>
      <pre className="bg-gray-950 text-gray-200 text-sm p-4 overflow-x-auto leading-relaxed">{code}</pre>
    </div>
  );
}

function LibCard({ name, desc, install, use }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700 hover:border-yellow-400/50 rounded-xl p-4 transition-all hover:shadow-lg hover:shadow-yellow-500/5">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-white text-sm">{name}</h4>
        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">{use}</span>
      </div>
      <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
      <CmdBox cmd={install} />
    </div>
  );
}

const tabCls = ({ selected }) =>
  `px-5 py-2.5 text-sm font-semibold rounded-xl cursor-pointer transition-all outline-none select-none ` +
  (selected ? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/30" : "text-gray-400 hover:text-yellow-300 hover:bg-gray-800");

export default function PythonDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://pluspng.com/img-png/python-logo-png-python-logo-png-img-640-480-free-transparent-python-png-900x480.jpg" alt="Python" className="w-20 h-14 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Python</h1>
              <span className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 text-xs font-bold">v3.12+</span>
            </div>
            <p className="text-gray-400 text-lg">Simple syntax. Massive power. Endless possibilities.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Interpreted", "High-Level", "Dynamically Typed", "Open Source", "Multi-Paradigm"].map(b => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs>
          <TabList className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-2xl border border-gray-800">
            {["📖 Introduction", "⚙️ Installation", "💻 Examples", "📦 Libraries", "🚀 Use Cases"].map((t, i) => (
              <Tab key={i} className={({ selected }) => tabCls({ selected })}
                selectedClassName="bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/30 px-5 py-2.5 text-sm font-semibold rounded-xl cursor-pointer outline-none"
                disabledClassName=""
              >
                {t}
              </Tab>
            ))}
          </TabList>

          {/* ── INTRODUCTION ── */}
          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4"><BookOpen size={18} className="text-yellow-400" /><h2 className="text-xl font-bold">What is Python?</h2></div>
                <p className="text-gray-300 leading-relaxed">
                  Python is a high-level, interpreted, general-purpose programming language created by <span className="text-yellow-400 font-semibold">Guido van Rossum</span> and first released in <span className="text-yellow-400 font-semibold">1991</span>. It emphasizes code readability and simplicity, using indentation as part of its syntax. Python supports multiple programming paradigms including procedural, object-oriented, and functional programming.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  It is widely used in AI & Machine Learning, Web Development, Data Science, Automation, Scientific Computing, Cybersecurity, and more. Major companies like Google, Netflix, Instagram, Spotify, and NASA use Python heavily.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3"><Zap size={16} className="text-yellow-400" /><h3 className="font-bold text-yellow-400">Key Features</h3></div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Easy to read & write — English-like syntax", "Free & Open Source — no license cost", "Huge standard library — batteries included", "Cross-platform — Windows, Mac, Linux", "Strongly typed but dynamically typed", "Supports OOP, Functional & Procedural styles", "Massive community & ecosystem (PyPI)", "Excellent for rapid prototyping"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-yellow-400 mt-0.5">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3"><Cpu size={16} className="text-yellow-400" /><h3 className="font-bold text-yellow-400">Fun Facts</h3></div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Named after Monty Python, not the snake!", "Guido Van Rossum wrote Python during Christmas holidays", "Python 2 officially retired on Jan 1, 2020", "pip has 500,000+ packages on PyPI", "#1 language for AI/ML worldwide", "The Zen of Python: import this", "Python is used on the International Space Station", "YouTube was originally written in Python"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-green-400 mt-0.5">✦</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-500/10 to-blue-500/10 border border-yellow-400/20 rounded-2xl p-5">
                <h3 className="font-bold text-yellow-400 mb-3">Python vs Other Languages</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-gray-300">
                    <thead><tr className="border-b border-gray-700 text-gray-400"><th className="text-left py-2 pr-4">Feature</th><th className="text-left py-2 pr-4">Python</th><th className="text-left py-2 pr-4">Java</th><th className="text-left py-2">JavaScript</th></tr></thead>
                    <tbody className="divide-y divide-gray-800">
                      {[["Syntax", "Very simple", "Verbose", "Moderate"], ["Speed", "Slower", "Fast", "Fast"], ["Use Case", "AI/Data/Web", "Enterprise", "Web/Node"], ["Learning Curve", "Easy", "Hard", "Moderate"], ["Typing", "Dynamic", "Static", "Dynamic"]].map(([f, py, ja, js]) => (
                        <tr key={f}><td className="py-2 pr-4 text-gray-400">{f}</td><td className="py-2 pr-4 text-yellow-300">{py}</td><td className="py-2 pr-4">{ja}</td><td className="py-2">{js}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* ── INSTALLATION ── */}
          <TabPanel>
            <div className="space-y-6">
              <Tabs>
                <TabList className="flex gap-2 mb-6">
                  {["🪟 Windows", "🍎 macOS", "🐧 Linux"].map((t, i) => (
                    <Tab key={i}
                      className="px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all"
                      selectedClassName="bg-yellow-400 text-gray-900 px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none"
                    >{t}</Tab>
                  ))}
                </TabList>

                <TabPanel>
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
                    <h3 className="font-bold text-white flex items-center gap-2"><Terminal size={16} className="text-yellow-400" /> Windows Installation</h3>
                    <ol className="space-y-3 text-sm text-gray-300">
                      {["Visit official site: python.org/downloads", "Click 'Download Python 3.x.x' button", "Run the downloaded .exe installer", "✅ IMPORTANT: Check 'Add Python to PATH' checkbox", "Click 'Install Now' and wait for completion", "Open Command Prompt and verify installation"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                    <CmdBox cmd="python --version" />
                    <CmdBox cmd="pip --version" />
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm text-blue-300">
                      💡 <strong>Tip:</strong> Also install VS Code + Python extension for the best development experience on Windows.
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
                    <h3 className="font-bold text-white flex items-center gap-2"><Terminal size={16} className="text-yellow-400" /> macOS Installation</h3>
                    <p className="text-gray-400 text-sm">macOS comes with Python 2 pre-installed. Install Python 3 via Homebrew (recommended):</p>
                    <h4 className="text-yellow-400 font-semibold text-sm">Step 1: Install Homebrew (if not installed)</h4>
                    <CmdBox cmd='/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"' />
                    <h4 className="text-yellow-400 font-semibold text-sm">Step 2: Install Python 3</h4>
                    <CmdBox cmd="brew install python3" />
                    <h4 className="text-yellow-400 font-semibold text-sm">Step 3: Verify</h4>
                    <CmdBox cmd="python3 --version" />
                    <CmdBox cmd="pip3 --version" />
                    <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-sm text-green-300">
                      💡 Use <code className="font-mono">python3</code> and <code className="font-mono">pip3</code> on macOS instead of <code className="font-mono">python</code>.
                    </div>
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
                    <h3 className="font-bold text-white flex items-center gap-2"><Terminal size={16} className="text-yellow-400" /> Linux (Ubuntu/Debian)</h3>
                    <CmdBox cmd="sudo apt update && sudo apt upgrade -y" />
                    <CmdBox cmd="sudo apt install python3 python3-pip python3-venv -y" />
                    <CmdBox cmd="python3 --version" />
                    <h4 className="text-yellow-400 font-semibold text-sm mt-4">Virtual Environment (Best Practice)</h4>
                    <CmdBox cmd="python3 -m venv myenv" />
                    <CmdBox cmd="source myenv/bin/activate" />
                    <CmdBox cmd="deactivate" />
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4 text-sm text-yellow-300">
                      💡 Always use a virtual environment per project to avoid dependency conflicts.
                    </div>
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>

          {/* ── EXAMPLES ── */}
          <TabPanel>
            <div className="space-y-6">
              <Tabs>
                <TabList className="flex flex-wrap gap-2 mb-6">
                  {["Basics", "OOP", "File I/O", "APIs", "Data Structures"].map((t, i) => (
                    <Tab key={i}
                      className="px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all"
                      selectedClassName="bg-yellow-400 text-gray-900 px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none"
                    >{t}</Tab>
                  ))}
                </TabList>

                <TabPanel>
                  <CodeBlock lang="python" code={`# ── Python Basics ──

# Variables & Types
name = "CodeVault"
age = 25
pi = 3.14159
is_active = True

# String methods
print(name.upper())         # CODEVAULT
print(name.lower())         # codevault
print(f"Length: {len(name)}")  # Length: 9

# Lists
fruits = ["apple", "banana", "cherry"]
fruits.append("mango")
fruits.remove("banana")
print(fruits[0])            # apple
print(fruits[-1])           # mango

# Tuples (immutable)
coords = (10.5, 20.3)

# Dictionaries
person = {"name": "Alice", "age": 30, "lang": "Python"}
print(person["name"])       # Alice
person["city"] = "Delhi"

# Sets
unique = {1, 2, 3, 2, 1}   # {1, 2, 3}

# Conditional
if age >= 18:
    print("Adult")
elif age >= 13:
    print("Teen")
else:
    print("Child")

# Loops
for i in range(5):
    print(i, end=" ")       # 0 1 2 3 4

# While
count = 0
while count < 3:
    print(f"Count: {count}")
    count += 1

# List comprehension
squares = [x**2 for x in range(1, 6)]
print(squares)  # [1, 4, 9, 16, 25]

# Lambda
double = lambda x: x * 2
print(double(7))            # 14`} />
                </TabPanel>

                <TabPanel>
                  <CodeBlock lang="python" code={`# ── Object-Oriented Programming ──

class Animal:
    species = "Unknown"  # Class variable

    def __init__(self, name, sound):
        self.name = name    # Instance variable
        self.sound = sound

    def speak(self):
        return f"{self.name} says '{self.sound}'"

    def __str__(self):
        return f"Animal({self.name})"

    def __repr__(self):
        return f"Animal(name={self.name!r})"

# Inheritance
class Dog(Animal):
    def __init__(self, name, breed):
        super().__init__(name, "Woof")
        self.breed = breed

    def fetch(self, item):
        return f"{self.name} fetched the {item}!"

    # Method overriding
    def speak(self):
        return f"{self.name} barks loudly: WOOF WOOF!"

class Cat(Animal):
    def __init__(self, name):
        super().__init__(name, "Meow")

    def purr(self):
        return f"{self.name} purrs softly..."

# Polymorphism
animals = [Dog("Rex", "Labrador"), Cat("Whiskers"), Animal("Parrot", "Squawk")]
for animal in animals:
    print(animal.speak())

# Encapsulation (private with __)
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.__balance = balance  # private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount("Alice", 1000)
acc.deposit(500)
print(acc.get_balance())   # 1500`} />
                </TabPanel>

                <TabPanel>
                  <CodeBlock lang="python" code={`# ── File I/O Operations ──

import os
import json

# Write to a file
with open("data.txt", "w") as f:
    f.write("Hello, CodeVault!\\n")
    f.write("Python File I/O is simple.\\n")

# Read entire file
with open("data.txt", "r") as f:
    content = f.read()
    print(content)

# Read line by line
with open("data.txt", "r") as f:
    for line in f:
        print(line.strip())

# Append to file
with open("data.txt", "a") as f:
    f.write("Appended line!\\n")

# Read all lines into list
with open("data.txt", "r") as f:
    lines = f.readlines()
print(lines)

# ── JSON File ──
data = {
    "name": "CodeVault",
    "version": "1.0",
    "languages": ["Python", "JavaScript", "Java"]
}

# Write JSON
with open("config.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("config.json", "r") as f:
    loaded = json.load(f)
print(loaded["name"])        # CodeVault

# File existence check
if os.path.exists("data.txt"):
    print("File exists!")
    os.remove("data.txt")   # Delete file`} />
                </TabPanel>

                <TabPanel>
                  <CodeBlock lang="python" code={`# ── Working with APIs using Requests ──
# pip install requests

import requests
import json

# ── GET Request ──
url = "https://jsonplaceholder.typicode.com/posts/1"
response = requests.get(url)

if response.status_code == 200:
    data = response.json()
    print("Title:", data["title"])
    print("Body:", data["body"][:50])
else:
    print("Error:", response.status_code)

# ── GET with Parameters ──
params = {"userId": 1, "_limit": 3}
res = requests.get("https://jsonplaceholder.typicode.com/posts", params=params)
posts = res.json()
for post in posts:
    print(f"- {post['title'][:40]}")

# ── POST Request ──
new_post = {
    "title": "CodeVault Post",
    "body": "Learning Python APIs",
    "userId": 1
}
headers = {"Content-Type": "application/json"}
post_res = requests.post(
    "https://jsonplaceholder.typicode.com/posts",
    data=json.dumps(new_post),
    headers=headers
)
print("Created:", post_res.json())

# ── Error Handling ──
try:
    r = requests.get("https://api.example.com/data", timeout=5)
    r.raise_for_status()
    print(r.json())
except requests.exceptions.Timeout:
    print("Request timed out!")
except requests.exceptions.HTTPError as e:
    print(f"HTTP Error: {e}")
except requests.exceptions.ConnectionError:
    print("Connection failed!")`} />
                </TabPanel>

                <TabPanel>
                  <CodeBlock lang="python" code={`# ── Data Structures & Algorithms ──

from collections import defaultdict, Counter, deque
import heapq

# ── Stack using list ──
stack = []
stack.append(1)
stack.append(2)
stack.append(3)
print(stack.pop())          # 3 (LIFO)

# ── Queue using deque ──
queue = deque()
queue.append("a")
queue.append("b")
queue.append("c")
print(queue.popleft())      # a (FIFO)

# ── Counter ──
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
count = Counter(words)
print(count.most_common(2)) # [('apple', 3), ('banana', 2)]

# ── DefaultDict ──
graph = defaultdict(list)
graph["A"].append("B")
graph["A"].append("C")
graph["B"].append("D")
print(dict(graph))

# ── Binary Search ──
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

sorted_arr = [1, 3, 5, 7, 9, 11, 13]
print(binary_search(sorted_arr, 7))   # 3

# ── Min Heap ──
heap = [5, 3, 8, 1, 4]
heapq.heapify(heap)
print(heapq.heappop(heap))  # 1 (minimum)`} />
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>

          {/* ── LIBRARIES ── */}
          <TabPanel>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">Python has 500,000+ packages on PyPI. Here are the most essential ones by category:</p>
              <Tabs>
                <TabList className="flex flex-wrap gap-2 mb-6">
                  {["Data Science", "Web", "ML/AI", "Utilities"].map((t, i) => (
                    <Tab key={i}
                      className="px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all"
                      selectedClassName="bg-yellow-400 text-gray-900 px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none"
                    >{t}</Tab>
                  ))}
                </TabList>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "NumPy", desc: "Fundamental package for numerical computing. N-dimensional arrays, linear algebra, Fourier transforms, random number generation.", install: "pip install numpy", use: "Numeric" },
                      { name: "Pandas", desc: "Data manipulation and analysis. Powerful DataFrames for structured data, CSV/Excel/SQL reading, groupby, merge operations.", install: "pip install pandas", use: "Data" },
                      { name: "Matplotlib", desc: "Comprehensive library for creating static, animated, and interactive visualizations in Python.", install: "pip install matplotlib", use: "Visualization" },
                      { name: "Seaborn", desc: "Statistical data visualization based on Matplotlib. Beautiful default styles and color palettes.", install: "pip install seaborn", use: "Visualization" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Flask", desc: "Lightweight, minimal web framework. Great for REST APIs, microservices, and small to medium web apps.", install: "pip install flask", use: "Web" },
                      { name: "Django", desc: "Batteries-included full-stack web framework. ORM, admin panel, auth, templating — everything included.", install: "pip install django", use: "Web" },
                      { name: "FastAPI", desc: "Modern, fast web framework for building APIs. Auto documentation, async support, Pydantic validation.", install: "pip install fastapi uvicorn", use: "API" },
                      { name: "Requests", desc: "Elegant HTTP library for making web requests. Simple API for GET, POST, PUT, DELETE with session support.", install: "pip install requests", use: "HTTP" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "TensorFlow", desc: "End-to-end open-source platform for machine learning by Google. Deep neural networks, GPU support.", install: "pip install tensorflow", use: "Deep Learning" },
                      { name: "PyTorch", desc: "Deep learning framework by Facebook/Meta. Dynamic computation graphs, great for research.", install: "pip install torch torchvision", use: "Deep Learning" },
                      { name: "Scikit-learn", desc: "Simple and efficient tools for ML. Classification, regression, clustering, dimensionality reduction.", install: "pip install scikit-learn", use: "ML" },
                      { name: "OpenCV", desc: "Computer vision library. Image processing, face detection, video analysis, object detection.", install: "pip install opencv-python", use: "Vision" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Pytest", desc: "Powerful testing framework. Simple fixtures, parameterized tests, plugins ecosystem.", install: "pip install pytest", use: "Testing" },
                      { name: "SQLAlchemy", desc: "SQL toolkit and ORM. Works with PostgreSQL, MySQL, SQLite. Database abstraction layer.", install: "pip install sqlalchemy", use: "Database" },
                      { name: "Celery", desc: "Distributed task queue. Background jobs, scheduled tasks, async processing with Redis/RabbitMQ.", install: "pip install celery", use: "Async" },
                      { name: "Boto3", desc: "AWS SDK for Python. Interact with S3, EC2, Lambda, DynamoDB and all AWS services.", install: "pip install boto3", use: "Cloud" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>

          {/* ── USE CASES ── */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🤖", title: "AI & Machine Learning", desc: "TensorFlow, PyTorch, Scikit-learn make Python the #1 language for AI. Used for NLP, computer vision, recommendation systems.", companies: ["Google DeepMind", "OpenAI", "Tesla Autopilot"] },
                { icon: "📊", title: "Data Science", desc: "NumPy, Pandas, Matplotlib form the backbone of data science. Used for analysis, visualization, statistical modeling.", companies: ["Netflix", "Spotify", "LinkedIn"] },
                { icon: "🌐", title: "Web Development", desc: "Django, Flask, FastAPI power backend APIs and web apps. Instagram, Pinterest, and Disqus are built on Django.", companies: ["Instagram", "Pinterest", "Dropbox"] },
                { icon: "🔧", title: "DevOps & Automation", desc: "Scripting, CI/CD pipelines, infrastructure automation with Ansible, Terraform scripts, and custom tooling.", companies: ["Ansible", "AWS", "Cloudflare"] },
                { icon: "🔬", title: "Scientific Computing", desc: "SciPy, SymPy for mathematics. Used in physics simulations, bioinformatics, and research.", companies: ["CERN", "NASA", "NIH"] },
                { icon: "🕷️", title: "Web Scraping", desc: "BeautifulSoup, Scrapy, Selenium for data extraction from websites. Used in competitive intelligence.", companies: ["Scrapy Cloud", "Diffbot"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-yellow-400/30 transition-all">
                  <div className="text-3xl mb-3">{icon}</div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {companies.map(c => <span key={c} className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}