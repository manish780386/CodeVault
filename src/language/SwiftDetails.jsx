import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-orange-500/20 border border-gray-600 hover:border-orange-400 text-gray-300 hover:text-orange-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "swift" }) {
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
      <pre className="bg-gray-950 text-gray-200 text-sm p-4 overflow-x-auto leading-relaxed whitespace-pre">{code}</pre>
    </div>
  );
}

const selCls = "bg-orange-500 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

const BASICS = `// -- Swift Basics --
import Foundation

// Constants & Variables
let name: String = "CodeVault"   // let = immutable constant
var age: Int = 25                 // var = mutable variable
let pi = 3.14159                  // type inferred

// String interpolation  (Swift uses backslash-paren)
print("Hello, " + name + "! Age: " + String(age))
print("Pi = " + String(pi))

// Optional -- safe null handling
var nickname: String? = "Cody"
print(nickname ?? "no nickname")   // nil coalescing
nickname = nil

// Optional binding
if let nick = nickname {
    print("Nickname: " + nick)
} else {
    print("No nickname set")
}

// Guard statement
func greet(name: String?) {
    guard let n = name else {
        print("Name is nil!")
        return
    }
    print("Hello, " + n + "!")
}
greet(name: "Alice")
greet(name: nil)

// String operations
let str = "Hello, Swift!"
print(str.count)                  // 13
print(str.uppercased())           // HELLO, SWIFT!
print(str.hasPrefix("Hello"))     // true
print(str.replacingOccurrences(of: "Swift", with: "World"))

// Arrays
var fruits = ["apple", "banana", "cherry"]
fruits.append("mango")
print(fruits.count)    // 4
fruits.sort()
print(fruits)

// Dictionaries
var person: [String: Any] = [
    "name": "Bob",
    "age": 30,
    "role": "developer"
]
print(person["name"] as! String)

// Tuples
let coordinate = (x: 10.5, y: 20.3)
print("x=" + String(coordinate.x) + ", y=" + String(coordinate.y))`;

const CONTROL_FLOW = `// -- Swift Control Flow & Pattern Matching --

let score = 87
let grade: String
if score >= 90 { grade = "A" }
else if score >= 80 { grade = "B" }
else if score >= 70 { grade = "C" }
else { grade = "F" }
print("Grade: " + grade)

// Switch -- exhaustive, no fallthrough
let day = "Monday"
switch day {
case "Saturday", "Sunday":
    print("Weekend!")
case "Monday"..."Friday":
    print("Weekday: " + day)
default:
    print("Unknown day")
}

// Switch with value binding & where clause
let point = (3, -2)
switch point {
case (0, 0):
    print("Origin")
case (let x, 0):
    print("On x-axis at " + String(x))
case (0, let y):
    print("On y-axis at " + String(y))
case (let x, let y) where x == y:
    print("On diagonal at " + String(x))
case (let x, let y) where x > 0 && y > 0:
    print("First quadrant")
case (let x, let y):
    print("Point: (" + String(x) + ", " + String(y) + ")")
}

// For-in loops
for i in 1...5 { print(i, terminator: " ") }
print()

for i in stride(from: 0, to: 10, by: 2) { print(i, terminator: " ") }
print()

let fruits = ["apple", "banana", "cherry"]
for (index, fruit) in fruits.enumerated() {
    print(String(index) + ": " + fruit)
}

// forEach & map
fruits.forEach { print($0.uppercased()) }
let lengths = fruits.map { $0.count }
print(lengths)

// while / repeat-while
var n = 1
while n < 32 { n *= 2 }
print(n)   // 32

var count = 0
repeat { count += 1 } while count < 5`;

const OOP = `// -- Swift OOP: Classes, Structs, Protocols, Enums --

// Protocol (interface)
protocol Describable {
    var description: String { get }
    func describe()
}
extension Describable {
    func describe() { print(description) }   // default implementation
}

// Struct -- value type (copied on assignment)
struct Point: Describable {
    var x: Double
    var y: Double
    var description: String { "Point(" + String(x) + ", " + String(y) + ")" }

    func distance(to other: Point) -> Double {
        let dx = x - other.x
        let dy = y - other.y
        return (dx*dx + dy*dy).squareRoot()
    }

    mutating func translate(by dx: Double, _ dy: Double) {
        x += dx; y += dy
    }
}

// Class -- reference type
class Animal: Describable {
    let name: String
    let sound: String
    private(set) var tricks: [String] = []
    static var count = 0

    init(name: String, sound: String) {
        self.name = name
        self.sound = sound
        Animal.count += 1
    }

    var description: String { name + " (" + String(describing: type(of: self)) + ")" }
    func speak() { print(name + " says " + sound + "!") }
    func learn(_ trick: String) { tricks.append(trick) }
}

// Inheritance
class Dog: Animal {
    let breed: String

    init(name: String, breed: String) {
        self.breed = breed
        super.init(name: name, sound: "Woof")
    }

    override func speak() {
        super.speak()
        print("  (" + breed + " breed)")
    }
}

// Enum with associated values
enum NetworkResult<T> {
    case success(T)
    case failure(String, code: Int)

    var isSuccess: Bool {
        if case .success = self { return true }
        return false
    }
}

// Usage
var p1 = Point(x: 0, y: 0)
let p2 = Point(x: 3, y: 4)
print(p1.distance(to: p2))   // 5.0
p1.translate(by: 1, 1)
p1.describe()

let dog = Dog(name: "Rex", breed: "Labrador")
dog.speak()
dog.learn("sit"); dog.learn("shake")
print(dog.tricks)
print("Total animals: " + String(Animal.count))

let result: NetworkResult<String> = .success("Data loaded")
switch result {
case .success(let data): print("OK: " + data)
case .failure(let msg, let code): print("Error " + String(code) + ": " + msg)
}`;

const CLOSURES = `// -- Swift Closures, Generics & Functional --

// Closures
let add: (Int, Int) -> Int = { $0 + $1 }
let greet: (String) -> String = { "Hello, " + $0 + "!" }
print(add(3, 7))         // 10
print(greet("Alice"))    // Hello, Alice!

// Trailing closure syntax
let nums = [5, 3, 8, 1, 9, 2, 7, 4, 6]
let sorted = nums.sorted { $0 < $1 }
let doubled = nums.map { $0 * 2 }
let evens = nums.filter { $0 % 2 == 0 }
let total = nums.reduce(0, +)
print(sorted)
print(doubled)

// Chaining
let result = nums
    .filter { $0 > 3 }
    .map { $0 * $0 }
    .sorted()
print(result)

// Capturing values (closure)
func makeCounter(start: Int = 0) -> () -> Int {
    var count = start
    return {
        count += 1
        return count
    }
}
let counter = makeCounter()
print(counter(), counter(), counter())   // 1 2 3

// Generics
func swapValues<T>(_ a: inout T, _ b: inout T) {
    let temp = a; a = b; b = temp
}

func maxOf<T: Comparable>(_ a: T, _ b: T) -> T {
    return a > b ? a : b
}

struct Stack<Element> {
    private var storage: [Element] = []
    mutating func push(_ item: Element) { storage.append(item) }
    mutating func pop() -> Element? { storage.popLast() }
    var top: Element? { storage.last }
    var isEmpty: Bool { storage.isEmpty }
    var count: Int { storage.count }
}

var stack = Stack<Int>()
stack.push(1); stack.push(2); stack.push(3)
print(stack.top!)     // 3
print(stack.pop()!)   // 3
print(stack.count)    // 2

// Property wrapper
@propertyWrapper
struct Clamped {
    private var value: Int
    let range: ClosedRange<Int>
    init(wrappedValue: Int, _ range: ClosedRange<Int>) {
        self.range = range
        self.value = min(max(wrappedValue, range.lowerBound), range.upperBound)
    }
    var wrappedValue: Int {
        get { value }
        set { value = min(max(newValue, range.lowerBound), range.upperBound) }
    }
}

struct Settings {
    @Clamped(0...100) var volume: Int = 50
    @Clamped(1...16) var fontSize: Int = 12
}
var s = Settings()
s.volume = 150    // clamped to 100
s.fontSize = 0    // clamped to 1
print("Volume: " + String(s.volume) + ", Font: " + String(s.fontSize))`;

const ASYNC = `// -- Swift Concurrency: async/await & Actors --
import Foundation

// async function
func fetchUser(id: Int) async throws -> String {
    try await Task.sleep(nanoseconds: 100_000_000)
    if id <= 0 { throw URLError(.badURL) }
    return "User #" + String(id) + ": Alice"
}

func fetchPosts(userId: Int) async throws -> [String] {
    try await Task.sleep(nanoseconds: 200_000_000)
    return ["Post 1", "Post 2", "Post 3"]
}

// Sequential
func sequentialFetch() async throws {
    let user = try await fetchUser(id: 1)
    let posts = try await fetchPosts(userId: 1)
    print(user + " has " + String(posts.count) + " posts")
}

// Parallel with async let
func parallelFetch() async throws {
    async let user = fetchUser(id: 1)
    async let posts = fetchPosts(userId: 1)
    let (u, p) = try await (user, posts)
    print("Parallel: " + u + " -- " + String(p.count) + " posts")
}

// Task groups
func fetchAllUsers() async throws -> [String] {
    try await withThrowingTaskGroup(of: String.self) { group in
        for id in 1...5 {
            group.addTask { try await fetchUser(id: id) }
        }
        var results: [String] = []
        for try await user in group { results.append(user) }
        return results
    }
}

// Actor -- thread-safe reference type
actor BankAccount {
    private(set) var balance: Double
    private var transactions: [(String, Double)] = []

    init(balance: Double) { self.balance = balance }

    func deposit(_ amount: Double) {
        balance += amount
        transactions.append(("deposit", amount))
        print("Deposited " + String(amount) + ". Balance: " + String(balance))
    }

    func withdraw(_ amount: Double) throws {
        guard amount <= balance else {
            throw NSError(domain: "Bank", code: 1,
                userInfo: [NSLocalizedDescriptionKey: "Insufficient funds"])
        }
        balance -= amount
        transactions.append(("withdraw", amount))
        print("Withdrew " + String(amount) + ". Balance: " + String(balance))
    }
}

// Structured concurrency entry
Task {
    do {
        try await sequentialFetch()
        try await parallelFetch()
        let account = BankAccount(balance: 1000)
        await account.deposit(500)
        try await account.withdraw(200)
        print("Final balance: " + String(await account.balance))
        let users = try await fetchAllUsers()
        print("Fetched " + String(users.count) + " users")
    } catch {
        print("Error: " + error.localizedDescription)
    }
}`;

export default function SwiftDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-orange-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/9d/Swift_logo.svg" alt="Swift" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight">Swift</h1>
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-400/30 text-xs font-bold">v5.10+</span>
            </div>
            <p className="text-gray-400 text-lg">Apple's powerful, safe, and fast language for iOS, macOS, watchOS & tvOS.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Type Safe", "Protocol-Oriented", "ARC Memory", "Optionals", "Concurrency", "Open Source"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">What is Swift?</h2>
                <p className="text-gray-300 leading-relaxed">Swift was created by <span className="text-orange-400 font-semibold">Chris Lattner at Apple</span> and unveiled at WWDC 2014. It replaced Objective-C as Apple's primary language. Swift is <span className="text-orange-400 font-semibold">open source</span> (Swift.org) and runs on Linux and Windows too. It compiles to native machine code via LLVM — extremely fast execution.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Swift features include <span className="text-orange-400 font-semibold">type inference, optionals, generics, protocol-oriented programming, closures, async/await, and actors</span>. SwiftUI — the declarative UI framework — uses Swift result builders to describe interfaces as code. Swift Package Manager (SPM) handles dependencies.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-orange-400 mb-3">✦ Swift vs Objective-C</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Cleaner syntax — no header files, no semicolons needed", "Optionals — crash-safe nil handling built in", "Type inference — less boilerplate type declarations", "Generics — type-safe reusable algorithms", "Structs & Enums as first-class with methods", "Protocol-oriented over class inheritance", "ARC memory management — no manual malloc/free", "Interoperable with Objective-C and C libraries"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-orange-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-orange-400 mb-3">✦ Swift Unique Concepts</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Optionals — ? and ! operators for nil safety", "Value types (struct) vs Reference types (class)", "Protocol extensions — add default implementations", "Property wrappers — @State, @Binding, @Published", "Result builders — declarative DSLs like SwiftUI", "Actors — thread-safe concurrency primitive", "Opaque return types (some Protocol)", "Phantom types for compile-time guarantees"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-orange-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing Swift</h3>
              <h4 className="text-orange-400 font-semibold text-sm">macOS — Xcode (Official, Recommended)</h4>
              <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-4 text-sm text-orange-300">
                💡 Install <strong>Xcode</strong> from the Mac App Store — includes Swift, all Apple SDKs, Simulator, and Instruments profiler.
              </div>
              <CmdBox cmd="xcode-select --install" />
              <CmdBox cmd="swift --version" />
              <h4 className="text-orange-400 font-semibold text-sm">macOS — via Homebrew (CLI tools only)</h4>
              <CmdBox cmd="brew install swift" />
              <h4 className="text-orange-400 font-semibold text-sm">Linux (Ubuntu 22.04)</h4>
              <CmdBox cmd="wget https://download.swift.org/swift-5.10-release/ubuntu2204/swift-5.10-RELEASE/swift-5.10-RELEASE-ubuntu22.04.tar.gz" />
              <CmdBox cmd="tar xzf swift-*.tar.gz && export PATH=$PWD/swift-*/usr/bin:$PATH" />
              <CmdBox cmd="swift --version" />
              <h4 className="text-orange-400 font-semibold text-sm">Windows</h4>
              <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-4 text-sm text-orange-300">
                💡 Download Swift for Windows from <strong>swift.org/download</strong> — experimental Windows support available.
              </div>
              <h4 className="text-orange-400 font-semibold text-sm">Create Swift Package</h4>
              <CmdBox cmd="mkdir MyProject && cd MyProject" />
              <CmdBox cmd="swift package init --type executable" />
              <CmdBox cmd="swift run" />
              <h4 className="text-orange-400 font-semibold text-sm">Swift REPL (interactive)</h4>
              <CmdBox cmd="swift" />
              <h4 className="text-orange-400 font-semibold text-sm">Run a Swift script</h4>
              <CmdBox cmd="swift hello.swift" />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "Control Flow", "OOP & Protocols", "Closures & Generics", "Async/Await & Actors"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel><CodeBlock code={BASICS} /></TabPanel>
              <TabPanel><CodeBlock code={CONTROL_FLOW} /></TabPanel>
              <TabPanel><CodeBlock code={OOP} /></TabPanel>
              <TabPanel><CodeBlock code={CLOSURES} /></TabPanel>
              <TabPanel><CodeBlock code={ASYNC} /></TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Alamofire", "Elegant HTTP networking. Built on URLSession. Most popular iOS networking library.", ".package(url: \"https://github.com/Alamofire/Alamofire\", from: \"5.9.0\")", "Networking"],
                ["SwiftyJSON", "Easy JSON parsing in Swift. Simplified JSON manipulation.", ".package(url: \"https://github.com/SwiftyJSON/SwiftyJSON\", from: \"5.0.0\")", "JSON"],
                ["Realm", "Mobile-first database. Faster than SQLite. Reactive queries.", ".package(url: \"https://github.com/realm/realm-swift\", from: \"10.49.0\")", "Database"],
                ["Kingfisher", "Image downloading and caching for iOS and macOS.", ".package(url: \"https://github.com/onevcat/Kingfisher\", from: \"7.11.0\")", "Images"],
                ["SwiftLint", "Enforce Swift style and conventions. Xcode integration.", "brew install swiftlint", "Linting"],
                ["Combine", "Apple's reactive framework. Publishers, Subscribers, Operators.", "// Built-in: iOS 13+, macOS 10.15+", "Reactive"],
                ["SnapKit", "Auto Layout DSL. Makes UI constraints readable and concise.", ".package(url: \"https://github.com/SnapKit/SnapKit\", from: \"5.7.0\")", "UI"],
                ["ArgumentParser", "Declarative CLI tools in Swift with auto help generation.", ".package(url: \"https://github.com/apple/swift-argument-parser\", from: \"1.3.0\")", "CLI"],
              ].map(([name, desc, dep, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-orange-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">{use}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 font-mono text-xs text-green-400 break-all">{dep}</div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "📱", title: "iOS App Development", desc: "Swift is THE language for iPhone and iPad apps. UIKit for traditional UI, SwiftUI for modern declarative interfaces. Publish on App Store.", companies: ["UIKit", "SwiftUI", "Xcode"] },
                { icon: "🖥️", title: "macOS Applications", desc: "Build native Mac apps with AppKit or SwiftUI. Mac Catalyst ports iPad apps to Mac easily with minimal changes.", companies: ["AppKit", "SwiftUI", "Catalyst"] },
                { icon: "⌚", title: "watchOS & tvOS", desc: "WatchKit for Apple Watch health and fitness apps. TVUIKit for Apple TV entertainment experiences.", companies: ["WatchKit", "TVUIKit", "HealthKit"] },
                { icon: "🌐", title: "Server-Side Swift", desc: "Vapor framework lets you write Swift backends on Linux. Same language for frontend (iOS) and backend — full-stack Swift.", companies: ["Vapor", "Hummingbird", "Swift NIO"] },
                { icon: "🔧", title: "CLI Tools & Scripting", desc: "Swift Argument Parser makes command-line tools easy. Swift scripts replace Python/Ruby scripts with type safety.", companies: ["ArgumentParser", "Swift System"] },
                { icon: "🤖", title: "Machine Learning (CoreML)", desc: "CoreML runs ML models on-device. Create ML trains custom models. Vision, NaturalLanguage, Speech frameworks built in.", companies: ["CoreML", "Create ML", "Vision"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-orange-500/30 transition-all">
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