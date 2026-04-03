import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck, Terminal, Zap, Package, Globe } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-yellow-500/20 border border-gray-600 hover:border-yellow-400 text-gray-300 hover:text-yellow-400 text-xs transition-all">
      {copied ? <><CheckCheck size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
    </button>
  );
}
function CmdBox({ cmd }) {
  return (
    <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 my-2 font-mono text-sm">
      <code className="text-green-400">{cmd}</code><CopyBtn text={cmd} />
    </div>
  );
}
function CodeBlock({ code, lang = "javascript" }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-green-500" /></div>
        <span className="text-xs text-gray-400 font-mono">{lang}</span>
        <CopyBtn text={code} />
      </div>
      <pre className="bg-gray-950 text-gray-200 text-sm p-4 overflow-x-auto leading-relaxed">{code}</pre>
    </div>
  );
}
function LibCard({ name, desc, install, use }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700 hover:border-yellow-400/50 rounded-xl p-4 transition-all">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-white text-sm">{name}</h4>
        <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">{use}</span>
      </div>
      <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
      <CmdBox cmd={install} />
    </div>
  );
}
const selCls = "bg-yellow-400 text-gray-900 px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function JavaScriptDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-yellow-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JS" className="w-16 h-16 object-contain rounded-xl" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">JavaScript</h1>
              <span className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 border border-yellow-400/30 text-xs font-bold">ES2024</span>
            </div>
            <p className="text-gray-400 text-lg">The language that runs the entire web — frontend, backend, mobile.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Interpreted", "Event-Driven", "Prototype-based", "Single-threaded", "Non-blocking"].map(b => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs>
          <TabList className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-2xl border border-gray-800">
            {["📖 Introduction", "⚙️ Installation", "💻 Examples", "📦 Libraries", "🚀 Use Cases"].map((t, i) => (
              <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Globe size={18} className="text-yellow-400" /> What is JavaScript?</h2>
                <p className="text-gray-300 leading-relaxed">JavaScript (JS) was created by <span className="text-yellow-400 font-semibold">Brendan Eich in just 10 days</span> in 1995 while working at Netscape. Originally called Mocha, then LiveScript, it was renamed JavaScript for marketing reasons (despite having nothing to do with Java). It is the <span className="text-yellow-400 font-semibold">only programming language natively supported by all web browsers</span>.</p>
                <p className="text-gray-300 leading-relaxed mt-3">With Node.js, JavaScript conquered the backend too. Today it runs everywhere — browsers, servers, mobile apps (React Native), desktop apps (Electron), IoT devices, and even space (SpaceX uses JS-based tools).</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-yellow-400 mb-3">✦ Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Runs natively in every browser — no install needed", "Asynchronous & non-blocking (Event Loop)", "First-class functions — functions are objects", "Prototype-based inheritance model", "Dynamic typing — no type declarations needed", "ES6+ modern syntax: arrow functions, classes, modules", "Closures, callbacks, promises, async/await", "Huge npm ecosystem — 2.1 million packages"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-yellow-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-yellow-400 mb-3">📊 JS Ecosystem Overview</h3>
                  <div className="space-y-3 text-sm">
                    {[["Frontend", "React, Vue, Angular, Svelte", "text-blue-300"],["Backend", "Node.js, Express, Fastify, NestJS", "text-green-300"],["Mobile", "React Native, Ionic, NativeScript", "text-purple-300"],["Desktop", "Electron, Tauri", "text-pink-300"],["Testing", "Jest, Mocha, Cypress, Vitest", "text-orange-300"],["Bundlers", "Webpack, Vite, Rollup, esbuild", "text-cyan-300"]].map(([cat, tools, color]) => (
                      <div key={cat} className="flex items-start gap-3">
                        <span className="text-gray-500 w-16 shrink-0">{cat}</span>
                        <span className={`${color} font-mono text-xs`}>{tools}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center gap-2"><Terminal size={16} className="text-yellow-400" /> Install Node.js (Run JS outside browser)</h3>
                <Tabs>
                  <TabList className="flex gap-2 mb-4">
                    {["Windows", "macOS", "Linux"].map((t, i) => (
                      <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                    ))}
                  </TabList>
                  <TabPanel>
                    <ol className="space-y-3 text-sm text-gray-300 mb-4">
                      {["Visit nodejs.org/en/download", "Download LTS version (.msi installer)", "Run installer with all default settings", "Verify in Command Prompt"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-yellow-400/20 text-yellow-400 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>{s}</li>
                      ))}
                    </ol>
                    <CmdBox cmd="node --version" />
                    <CmdBox cmd="npm --version" />
                  </TabPanel>
                  <TabPanel>
                    <CmdBox cmd="brew install node" />
                    <CmdBox cmd="node --version && npm --version" />
                  </TabPanel>
                  <TabPanel>
                    <CmdBox cmd="sudo apt update && sudo apt install nodejs npm -y" />
                    <CmdBox cmd="node --version" />
                  </TabPanel>
                </Tabs>
                <div className="mt-4">
                  <h4 className="text-yellow-400 font-semibold text-sm mb-2">Start a New Project</h4>
                  <CmdBox cmd="mkdir my-project && cd my-project" />
                  <CmdBox cmd="npm init -y" />
                  <CmdBox cmd="node index.js" />
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["ES6+ Basics", "Async/Await", "DOM", "Classes", "Destructuring"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── Modern JavaScript ES6+ ──

// let, const (no var!)
const name = "CodeVault";
let count = 0;

// Template literals
console.log(\`Hello \${name}! Count: \${count}\`);

// Arrow functions
const add = (a, b) => a + b;
const square = n => n ** 2;
const greet = () => "Hello World!";

// Default parameters
function createUser(name, role = "viewer", active = true) {
  return { name, role, active };
}
console.log(createUser("Alice", "admin"));

// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6];

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };

// Rest parameters
function sum(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));  // 15

// Optional chaining & nullish coalescing
const user = { profile: { name: "Bob" } };
console.log(user?.profile?.age ?? "Age not set");

// Array methods
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = nums.filter(n => n % 2 === 0);
const doubled = evens.map(n => n * 2);
const total = doubled.reduce((sum, n) => sum + n, 0);
console.log(total);  // 60

// Short-circuit evaluation
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");
const displayName = null || "Anonymous";`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Async JavaScript: Promises & Async/Await ──

// Callback (old way — "callback hell")
function fetchOld(url, callback) {
  setTimeout(() => callback(null, { data: "result" }), 1000);
}

// Promise (better)
function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: "CodeVault", lang: "JS" });
      } else {
        reject(new Error("Invalid ID"));
      }
    }, 500);
  });
}

// .then() chaining
fetchData(1)
  .then(data => {
    console.log("Got:", data.name);
    return fetchData(2);
  })
  .then(data2 => console.log("Also got:", data2))
  .catch(err => console.error("Error:", err.message));

// ── async/await (cleanest!) ──
async function loadUser(id) {
  try {
    const user = await fetchData(id);
    console.log("User:", user.name);
    return user;
  } catch (error) {
    console.error("Failed:", error.message);
  }
}

// Parallel requests
async function loadAll() {
  const [user1, user2] = await Promise.all([
    fetchData(1),
    fetchData(2),
  ]);
  console.log(user1.name, user2.name);
}

// Real API fetch
async function getPost(id) {
  const res = await fetch(\`https://jsonplaceholder.typicode.com/posts/\${id}\`);
  if (!res.ok) throw new Error(\`HTTP \${res.status}\`);
  const post = await res.json();
  console.log(post.title);
}
getPost(1);`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── DOM Manipulation ──

// Select elements
const btn = document.getElementById("myBtn");
const title = document.querySelector("h1");
const allCards = document.querySelectorAll(".card");

// Change content
title.textContent = "New Title";
title.innerHTML = "<span>Bold</span> Title";

// Change styles
title.style.color = "yellow";
title.style.fontSize = "2rem";

// CSS classes
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("dark-mode");
title.classList.contains("active");  // true

// Create elements dynamically
function createCard(text) {
  const card = document.createElement("div");
  card.className = "card bg-gray-800 p-4 rounded-xl";
  card.textContent = text;

  const del = document.createElement("button");
  del.textContent = "Delete";
  del.addEventListener("click", () => card.remove());
  card.appendChild(del);

  return card;
}

document.body.appendChild(createCard("Hello!"));

// Events
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Clicked!", e.target);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") console.log("ESC pressed");
});

// LocalStorage
localStorage.setItem("theme", "dark");
const theme = localStorage.getItem("theme");
localStorage.removeItem("theme");`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── ES6 Classes & Inheritance ──

class Vehicle {
  #speed = 0;  // Private field (ES2022)

  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  accelerate(amount) {
    this.#speed += amount;
    return this;  // Method chaining
  }

  brake(amount) {
    this.#speed = Math.max(0, this.#speed - amount);
    return this;
  }

  get speed() { return this.#speed; }

  toString() {
    return \`\${this.year} \${this.make} \${this.model}\`;
  }

  static compare(v1, v2) {
    return v1.year - v2.year;
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors = 4) {
    super(make, model, year);
    this.doors = doors;
  }

  honk() {
    return \`\${this.make} goes beep beep!\`;
  }
}

class ElectricCar extends Car {
  constructor(make, model, year, range) {
    super(make, model, year);
    this.range = range;
  }

  toString() {
    return \`⚡ \${super.toString()} (range: \${this.range}km)\`;
  }
}

const tesla = new ElectricCar("Tesla", "Model 3", 2024, 550);
tesla.accelerate(60).accelerate(40).brake(20);
console.log(tesla.toString());
console.log("Speed:", tesla.speed);  // 80`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Destructuring & Modern Patterns ──

// Array destructuring
const [first, second, , fourth] = [10, 20, 30, 40];
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head);   // 1
console.log(tail);   // [2, 3, 4, 5]

// Object destructuring
const user = { name: "Alice", age: 30, role: "admin", city: "Delhi" };
const { name, role, city = "Unknown" } = user;
const { name: userName, age: userAge } = user; // Rename

// Nested destructuring
const config = {
  db: { host: "localhost", port: 5432, name: "codevault" },
  api: { key: "abc123", version: "v2" }
};
const { db: { host, port }, api: { key } } = config;

// Function parameter destructuring
function renderUser({ name, role = "guest", avatar = "🧑" }) {
  return \`\${avatar} \${name} (\${role})\`;
}
console.log(renderUser(user));

// Swap variables
let a = 1, b = 2;
[a, b] = [b, a];

// Map, Set, WeakMap
const map = new Map();
map.set("key1", "value1");
map.set(42, { data: "numeric key!" });
map.forEach((val, key) => console.log(key, val));

const set = new Set([1, 2, 3, 2, 1, 3]);
console.log([...set]);  // [1, 2, 3] — unique only

// Symbol
const id = Symbol("id");
const obj = { [id]: 999, name: "secure" };
console.log(obj[id]);  // 999`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="space-y-4">
              <Tabs>
                <TabList className="flex flex-wrap gap-2 mb-6">
                  {["Frontend", "Backend", "Testing", "Tooling"].map((t, i) => (
                    <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                  ))}
                </TabList>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "React", desc: "Meta's UI library. Component-based, virtual DOM, hooks system. Powers Facebook, Airbnb, Netflix frontends.", install: "npm create vite@latest my-app -- --template react", use: "UI Framework" },
                      { name: "Vue.js", desc: "Progressive framework. Gentle learning curve, Options API & Composition API. Great for SPAs.", install: "npm create vue@latest", use: "UI Framework" },
                      { name: "Next.js", desc: "React framework with SSR, SSG, file-based routing, API routes. Production-ready.", install: "npx create-next-app@latest", use: "Full-stack" },
                      { name: "Tailwind CSS", desc: "Utility-first CSS framework. Build any design directly in HTML/JSX with atomic classes.", install: "npm install -D tailwindcss postcss autoprefixer", use: "Styling" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Express.js", desc: "Minimal, fast web framework for Node.js. REST APIs, middleware, routing.", install: "npm install express", use: "Backend" },
                      { name: "NestJS", desc: "Progressive Node.js framework. TypeScript-first, Angular-inspired architecture.", install: "npm i -g @nestjs/cli && nest new project", use: "Backend" },
                      { name: "Prisma", desc: "Next-gen ORM for Node.js. Type-safe database queries, migrations, studio UI.", install: "npm install prisma @prisma/client", use: "Database" },
                      { name: "Socket.io", desc: "Real-time bidirectional event-based communication. WebSockets made easy.", install: "npm install socket.io", use: "Real-time" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Jest", desc: "Delightful JavaScript testing framework. Zero config, mocking, snapshots, coverage.", install: "npm install --save-dev jest", use: "Unit Testing" },
                      { name: "Cypress", desc: "End-to-end testing for anything that runs in a browser. Time-travel debugging.", install: "npm install --save-dev cypress", use: "E2E Testing" },
                      { name: "Vitest", desc: "Blazing-fast unit test framework powered by Vite. Jest-compatible API.", install: "npm install --save-dev vitest", use: "Unit Testing" },
                      { name: "Playwright", desc: "Cross-browser automation & testing. Chromium, Firefox, WebKit support.", install: "npm install --save-dev playwright", use: "E2E Testing" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Vite", desc: "Next-generation frontend tooling. Instant server start, lightning-fast HMR.", install: "npm create vite@latest", use: "Bundler" },
                      { name: "TypeScript", desc: "Typed superset of JavaScript. Catches bugs at compile time, better IDE support.", install: "npm install --save-dev typescript", use: "Language" },
                      { name: "ESLint", desc: "Find and fix problems in your JavaScript code. Highly configurable.", install: "npm install --save-dev eslint", use: "Linter" },
                      { name: "Prettier", desc: "Opinionated code formatter. Consistent style across entire codebase.", install: "npm install --save-dev prettier", use: "Formatter" },
                    ].map(l => <LibCard key={l.name} {...l} />)}
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🌐", title: "Web Frontend", desc: "React, Vue, Angular power billions of websites. JS is the only language browsers run natively.", companies: ["Facebook", "Google", "Twitter"] },
                { icon: "🖥️", title: "Backend APIs", desc: "Node.js + Express/NestJS builds fast, scalable REST and GraphQL APIs with JS on the server.", companies: ["LinkedIn", "Uber", "PayPal"] },
                { icon: "📱", title: "Mobile Apps", desc: "React Native & Ionic let you write one codebase deployed to iOS and Android.", companies: ["Airbnb", "Walmart", "Discord"] },
                { icon: "🖱️", title: "Desktop Apps", desc: "Electron powers VS Code, Slack, Figma, Discord — all are JavaScript desktop apps.", companies: ["Microsoft", "Slack", "Figma"] },
                { icon: "⚡", title: "Real-time Apps", desc: "WebSockets via Socket.io enable live chats, collaborative tools, live dashboards.", companies: ["Trello", "Notion", "Miro"] },
                { icon: "🤖", title: "Serverless & Edge", desc: "Cloudflare Workers, Vercel Edge Functions — JS runs at the edge globally.", companies: ["Vercel", "Cloudflare", "AWS Lambda"] },
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