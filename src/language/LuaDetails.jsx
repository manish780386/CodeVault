import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-violet-500/20 border border-gray-600 hover:border-violet-400 text-gray-300 hover:text-violet-400 text-xs transition-all">
      {copied ? <><CheckCheck size={12} /> Copied!</> : <><Copy size={12} /> Copy</>}
    </button>
  );
}
function CmdBox({ cmd }) {
  return (
    <div className="flex items-center justify-between bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 my-2 font-mono text-sm">
      <code className="text-green-400 break-all">{cmd}</code><CopyBtn text={cmd} />
    </div>
  );
}
function CodeBlock({ code, lang = "lua" }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-green-500" /></div>
        <span className="text-xs text-gray-400 font-mono">{lang}</span><CopyBtn text={code} />
      </div>
      <pre className="bg-gray-950 text-gray-200 text-sm p-4 overflow-x-auto leading-relaxed whitespace-pre">{code}</pre>
    </div>
  );
}

const selCls = "bg-violet-600 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function LuaDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-violet-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg" alt="Lua" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Lua</h1>
              <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-400/30 text-xs font-bold">v5.4+</span>
            </div>
            <p className="text-gray-400 text-lg">The lightweight embeddable scripting language. Powers games, configs, and embedded systems.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Embeddable", "Lightweight", "Fast", "Portable", "Coroutines", "Dynamic Typing"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">What is Lua?</h2>
                <p className="text-gray-300 leading-relaxed">Lua was designed in <span className="text-violet-400 font-semibold">1993 at PUC-Rio in Brazil</span> by Roberto Ierusalimschy, Luiz Henrique de Figueiredo, and Waldemar Celes. The name "Lua" means <span className="text-violet-400 font-semibold">"Moon" in Portuguese</span>. Lua is specifically designed to be embedded inside other applications — it's the most popular scripting language for embedding.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Lua is <span className="text-violet-400 font-semibold">tiny (~300KB)</span>, fast, and portable. Its entire design is elegant: one data structure (table) handles arrays, dictionaries, objects, modules, and namespaces. Lua is used extensively in games (Roblox, World of Warcraft, LÖVE2D), networking (NGINX via OpenResty), and embedded systems (NodeMCU for ESP8266/ESP32).</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-violet-400 mb-3">✦ Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Tables — single structure for arrays, maps, OOP", "Metatables — operator overloading and OOP", "Coroutines — cooperative multitasking", "First-class functions and closures", "Multiple return values", "Automatic memory management (GC)", "C API — embed in any C/C++ application", "LuaJIT — JIT compiled, near-C performance"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-violet-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-violet-400 mb-3">✦ Famous Lua Embeddings</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Roblox — 70M daily users, all game logic is Lua", "World of Warcraft — addon scripting in Lua", "Neovim — configuration and plugin system", "Redis — server-side scripting (EVAL)", "NGINX / OpenResty — web server scripting", "Adobe Lightroom — plugin API", "Wireshark — protocol dissectors", "NodeMCU — IoT device scripting (ESP8266)"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-violet-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing Lua</h3>
              <h4 className="text-violet-400 font-semibold text-sm">macOS via Homebrew</h4>
              <CmdBox cmd="brew install lua" />
              <CmdBox cmd="lua -v" />
              <h4 className="text-violet-400 font-semibold text-sm">Linux (Ubuntu/Debian)</h4>
              <CmdBox cmd="sudo apt install lua5.4 luarocks" />
              <CmdBox cmd="lua5.4 -v" />
              <h4 className="text-violet-400 font-semibold text-sm">Windows — Download binary</h4>
              <div className="bg-violet-500/10 border border-violet-400/20 rounded-xl p-4 text-sm text-violet-300">
                💡 Download Lua for Windows from <strong>luabinaries.sourceforge.net</strong> or install via Chocolatey: <code>choco install lua</code>
              </div>
              <h4 className="text-violet-400 font-semibold text-sm">Install LuaJIT (faster runtime)</h4>
              <CmdBox cmd="brew install luajit" />
              <CmdBox cmd="luajit -v" />
              <h4 className="text-violet-400 font-semibold text-sm">LuaRocks — Package Manager</h4>
              <CmdBox cmd="brew install luarocks" />
              <CmdBox cmd="luarocks install luasocket" />
              <CmdBox cmd="luarocks install penlight" />
              <h4 className="text-violet-400 font-semibold text-sm">Run Lua script</h4>
              <CmdBox cmd="lua script.lua" />
              <h4 className="text-violet-400 font-semibold text-sm">Interactive REPL</h4>
              <CmdBox cmd="lua" />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "Tables & OOP", "Metatables", "Coroutines", "Modules"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`-- ── Lua Basics ──

-- Comments with double dash
--[[
  Multi-line comment
  block comment style
--]]

-- Variables (global by default, use local!)
local name = "CodeVault"
local age = 25
local pi = 3.14159
local is_active = true

-- nil is like null/None
local nothing = nil

print("Hello, " .. name .. "!")   -- .. is string concat
print(string.format("Age: %d, Pi: %.2f", age, pi))

-- String operations
print(#name)                        -- length: 9
print(string.upper(name))           -- CODEVAULT
print(string.rep("ab", 3))         -- ababab
print(string.sub(name, 1, 4))      -- Code (1-indexed!)
print(string.find(name, "Vault"))  -- 5 9

-- Multiple assignment
local a, b, c = 10, 20, 30
print(a, b, c)

-- Swap values
a, b = b, a
print(a, b)   -- 20, 10

-- Conditionals
local score = 85
if score >= 90 then
  print("Grade: A")
elseif score >= 80 then
  print("Grade: B")
elseif score >= 70 then
  print("Grade: C")
else
  print("Grade: F")
end

-- Ternary-style (short circuit)
local max = a > b and a or b
print("Max:", max)

-- Loops
for i = 1, 5 do
  io.write(i .. " ")
end
print()

-- Step value
for i = 10, 1, -2 do
  io.write(i .. " ")
end
print()

-- while
local i = 1
while i <= 5 do
  io.write(i .. " ")
  i = i + 1
end
print()

-- repeat until (do-while equivalent)
local n = 1
repeat
  io.write(n .. " ")
  n = n + 1
until n > 5
print()`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`-- ── Lua Tables — Arrays, Dicts, and OOP ──

-- Table as array (1-indexed!)
local fruits = {"apple", "banana", "cherry", "mango"}
print(#fruits)           -- 4
print(fruits[1])         -- apple (NOT fruits[0]!)
table.insert(fruits, "kiwi")        -- append
table.insert(fruits, 2, "avocado")  -- insert at index 2
table.remove(fruits, 1)             -- remove index 1

for i, v in ipairs(fruits) do
  print(i, v)
end

-- Table as dictionary
local person = {
  name = "Alice",
  age  = 30,
  role = "developer"
}
print(person.name)        -- Alice
print(person["age"])      -- 30
person.email = "alice@example.com"

for k, v in pairs(person) do
  print(k, "=", v)
end

-- Nested tables
local config = {
  server = { host = "localhost", port = 8080 },
  db     = { name = "myapp", pool_size = 10 },
  debug  = true,
}
print(config.server.host)    -- localhost
print(config.db.pool_size)   -- 10

-- OOP using tables + functions
local Animal = {}
Animal.__index = Animal

function Animal.new(name, sound)
  local self = setmetatable({}, Animal)
  self.name  = name
  self.sound = sound
  return self
end

function Animal:speak()
  print(self.name .. " says " .. self.sound .. "!")
end

function Animal:describe()
  return string.format("Animal(%s)", self.name)
end

-- Inheritance
local Dog = setmetatable({}, { __index = Animal })
Dog.__index = Dog

function Dog.new(name)
  local self = Animal.new(name, "Woof")
  self.tricks = {}
  return setmetatable(self, Dog)
end

function Dog:learn(trick)
  table.insert(self.tricks, trick)
  return self  -- for chaining
end

function Dog:perform()
  for _, trick in ipairs(self.tricks) do
    print(self.name .. " performs: " .. trick)
  end
end

local dog = Dog.new("Rex")
dog:learn("sit"):learn("shake"):learn("roll over")
dog:speak()
dog:perform()
print(dog:describe())`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`-- ── Lua Metatables — Operator Overloading ──

-- Metatables allow customizing behavior of tables
-- __index, __newindex, __add, __tostring, __call, etc.

local Vector = {}
Vector.__index = Vector

function Vector.new(x, y)
  return setmetatable({ x = x, y = y }, Vector)
end

-- Arithmetic metamethods
Vector.__add = function(a, b)
  return Vector.new(a.x + b.x, a.y + b.y)
end

Vector.__sub = function(a, b)
  return Vector.new(a.x - b.x, a.y - b.y)
end

Vector.__mul = function(a, b)
  if type(a) == "number" then return Vector.new(a * b.x, a * b.y) end
  if type(b) == "number" then return Vector.new(a.x * b, a.y * b) end
  return a.x * b.x + a.y * b.y   -- dot product
end

Vector.__unm = function(a)   -- unary minus
  return Vector.new(-a.x, -a.y)
end

Vector.__eq = function(a, b)
  return a.x == b.x and a.y == b.y
end

Vector.__lt = function(a, b)
  return a:length() < b:length()
end

Vector.__tostring = function(v)
  return string.format("Vector(%.2f, %.2f)", v.x, v.y)
end

Vector.__call = function(v, scalar)
  return Vector.new(v.x * scalar, v.y * scalar)
end

function Vector:length()
  return math.sqrt(self.x^2 + self.y^2)
end

function Vector:normalize()
  local len = self:length()
  return Vector.new(self.x / len, self.y / len)
end

-- Usage
local v1 = Vector.new(3, 4)
local v2 = Vector.new(1, 2)

print(tostring(v1))             -- Vector(3.00, 4.00)
print(tostring(v1 + v2))       -- Vector(4.00, 6.00)
print(tostring(v1 - v2))       -- Vector(2.00, 2.00)
print(tostring(v1 * 2))        -- Vector(6.00, 8.00)
print("Length:", v1:length())  -- 5.0
print("Dot product:", v1 * v2) -- 11
print(v1 == v1)                -- true
print(v1 < v2)                 -- false
print(tostring(v1(3)))         -- Vector(9.00, 12.00)
print(tostring(v1:normalize())) -- normalized

-- __index as function (proxy pattern)
local defaults = { color = "white", size = 12, bold = false }
local settings = setmetatable({}, {
  __index = function(t, k)
    print("  [Reading default for: " .. k .. "]")
    return defaults[k]
  end,
  __newindex = function(t, k, v)
    print("  [Setting " .. k .. " = " .. tostring(v) .. "]")
    rawset(t, k, v)
  end,
})

print(settings.color)    -- reads from defaults
settings.color = "blue"  -- triggers __newindex
print(settings.color)    -- now reads directly`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`-- ── Lua Coroutines ──
-- Coroutines = cooperative multitasking
-- Like Python generators or Kotlin coroutines

-- Basic coroutine
local function counter(max)
  for i = 1, max do
    coroutine.yield(i)    -- pause and return value
  end
end

local co = coroutine.create(counter)

for _ = 1, 5 do
  local ok, value = coroutine.resume(co, 5)
  if ok and value then
    print("Got:", value)
  end
end

-- coroutine.wrap — simpler generator-style
local function range(from, to, step)
  step = step or 1
  return coroutine.wrap(function()
    local i = from
    while i <= to do
      coroutine.yield(i)
      i = i + step
    end
  end)
end

io.write("Range: ")
for n in range(1, 10, 2) do
  io.write(n .. " ")
end
print()

-- Producer-Consumer pattern
local function producer(items)
  return coroutine.create(function()
    for _, item in ipairs(items) do
      print("Producing: " .. item)
      coroutine.yield(item)
    end
  end)
end

local function consumer(prod)
  while true do
    local ok, item = coroutine.resume(prod)
    if not ok or item == nil then break end
    print("Consuming: " .. item)
  end
end

local prod = producer({"apple", "banana", "cherry"})
consumer(prod)

-- Async-like with coroutines (scheduler)
local tasks = {}
local function spawn(fn)
  table.insert(tasks, coroutine.create(fn))
end

local function run_all()
  while #tasks > 0 do
    local still_running = {}
    for _, co in ipairs(tasks) do
      if coroutine.status(co) ~= "dead" then
        coroutine.resume(co)
        if coroutine.status(co) ~= "dead" then
          table.insert(still_running, co)
        end
      end
    end
    tasks = still_running
  end
end

spawn(function()
  for i = 1, 3 do
    print("Task A: step " .. i)
    coroutine.yield()
  end
end)

spawn(function()
  for i = 1, 3 do
    print("Task B: step " .. i)
    coroutine.yield()
  end
end)

run_all()`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`-- ── Lua Modules ──
-- Each file is a module. Return a table of exports.

-- math_utils.lua
local M = {}

function M.clamp(value, min, max)
  return math.max(min, math.min(max, value))
end

function M.lerp(a, b, t)
  return a + (b - a) * t
end

function M.round(n, decimals)
  local factor = 10 ^ (decimals or 0)
  return math.floor(n * factor + 0.5) / factor
end

function M.map(value, in_min, in_max, out_min, out_max)
  return out_min + (value - in_min) / (in_max - in_min) * (out_max - out_min)
end

function M.is_prime(n)
  if n < 2 then return false end
  for i = 2, math.floor(math.sqrt(n)) do
    if n % i == 0 then return false end
  end
  return true
end

function M.primes_up_to(limit)
  local result = {}
  for n = 2, limit do
    if M.is_prime(n) then
      table.insert(result, n)
    end
  end
  return result
end

-- Usage example (if this were another file):
-- local math_utils = require("math_utils")
-- print(math_utils.clamp(150, 0, 100))  -- 100

-- Demonstrating module patterns inline:
print(M.clamp(150, 0, 100))      -- 100
print(M.lerp(0, 100, 0.75))      -- 75.0
print(M.round(3.14159, 2))       -- 3.14
print(M.map(5, 0, 10, 0, 100))   -- 50.0

local primes = M.primes_up_to(30)
print(table.concat(primes, ", "))  -- 2, 3, 5, 7, 11, 13, 17, 19, 23, 29

-- Standard library modules
print(math.floor(3.7))    -- 3
print(math.ceil(3.2))     -- 4
print(math.abs(-5))       -- 5
print(math.random(1, 10)) -- random 1-10
print(math.huge)          -- inf

-- String library
local str = "Hello, World!"
print(string.len(str))                    -- 13
print(string.byte(str, 1))               -- 72 (H)
print(string.char(72, 105))              -- Hi
print(string.format("%05d", 42))         -- 00042
for word in string.gmatch("a b c d", "%S+") do
  io.write(word .. " ")
end
print()

-- Table library
local t = {3, 1, 4, 1, 5, 9, 2, 6}
table.sort(t)
print(table.concat(t, ", "))  -- 1, 1, 2, 3, 4, 5, 6, 9`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["LuaSocket", "Network support: TCP, UDP, HTTP, SMTP. Web requests in Lua.", "luarocks install luasocket", "Networking"],
                ["Penlight", "Utility libraries: string, table, functional, OOP helpers.", "luarocks install penlight", "Utilities"],
                ["LÖVE2D", "2D game framework. Windows, macOS, Linux, Android, iOS.", "brew install love", "Game Dev"],
                ["LuaSQL", "Database connectivity: MySQL, PostgreSQL, SQLite, ODBC.", "luarocks install luasql-sqlite3", "Database"],
                ["OpenResty", "NGINX + LuaJIT for high-performance web applications.", "brew install openresty", "Web Server"],
                ["lapis", "Web framework for Lua/MoonScript. Runs on OpenResty.", "luarocks install lapis", "Web Framework"],
                ["lua-cjson", "Fast JSON encoding/decoding. Used widely in OpenResty.", "luarocks install lua-cjson", "JSON"],
                ["busted", "BDD unit testing framework for Lua.", "luarocks install busted", "Testing"],
              ].map(([name, desc, cmd, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-violet-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">{use}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
                  <CmdBox cmd={cmd} />
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🎮", title: "Game Development", desc: "Roblox uses Luau (Lua variant) — 70M+ daily players. World of Warcraft addon API. LÖVE2D indie games. Corona SDK.", companies: ["Roblox", "World of Warcraft", "LÖVE2D"] },
                { icon: "🌐", title: "Web Servers (OpenResty)", desc: "NGINX + LuaJIT via OpenResty handles millions of requests/sec. Used by Cloudflare, Kong API Gateway.", companies: ["OpenResty", "Kong", "Cloudflare"] },
                { icon: "📝", title: "Text Editor Plugins", desc: "Neovim uses Lua as its primary scripting language. All modern Neovim plugins (telescope, nvim-tree) are written in Lua.", companies: ["Neovim", "Awesome WM"] },
                { icon: "🗄️", title: "Redis Scripting", desc: "Redis EVAL command runs Lua scripts atomically on the server. Complex transactions and server-side logic.", companies: ["Redis", "Valkey"] },
                { icon: "🔌", title: "Embedded Systems / IoT", desc: "NodeMCU firmware lets you write Lua on ESP8266/ESP32 microcontrollers. WiFi, GPIO, sensors in Lua.", companies: ["NodeMCU", "ESP8266", "ESP32"] },
                { icon: "🎵", title: "Audio & Creative Tools", desc: "Adobe Lightroom plugins, Sonic Pi (music coding), and various creative applications embed Lua for scripting.", companies: ["Adobe Lightroom", "Sonic Pi"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-violet-500/30 transition-all">
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