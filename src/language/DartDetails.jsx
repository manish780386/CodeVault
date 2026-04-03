import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-cyan-500/20 border border-gray-600 hover:border-cyan-400 text-gray-300 hover:text-cyan-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "dart" }) {
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

const selCls = "bg-cyan-500 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function DartDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-cyan-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png" alt="Dart" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Dart</h1>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 text-xs font-bold">v3.3+</span>
            </div>
            <p className="text-gray-400 text-lg">Google's optimized language for fast apps. The backbone of Flutter.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Statically Typed", "AOT + JIT", "Null Safe", "Sound Type System", "Flutter's Language"].map(b => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs>
          <TabList className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-2xl border border-gray-800">
            {["📖 Introduction", "⚙️ Installation", "💻 Examples", "📦 Packages", "🚀 Flutter"].map((t, i) => (
              <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">What is Dart?</h2>
                <p className="text-gray-300 leading-relaxed">Dart was developed by <span className="text-cyan-400 font-semibold">Google and released in 2011</span>. It's a client-optimized language for developing fast apps on any platform. Dart compiles to native machine code (AOT) for production and uses JIT compilation for development hot-reload.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Dart became hugely popular through <span className="text-cyan-400 font-semibold">Flutter</span> — Google's cross-platform UI framework. A single Dart codebase can target Android, iOS, Web, Desktop (Windows/macOS/Linux), and embedded devices. Sound null safety (introduced in Dart 2.12) eliminates null reference errors at compile time.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-cyan-400 mb-3">✦ Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Sound Null Safety — null errors at compile time", "AOT compilation — fast native apps", "JIT compilation — hot reload in dev", "Async/Await + Streams — reactive programming", "Strong static typing with inference", "Extension methods — extend any type", "Mixins — reuse code without inheritance", "Isolates — true parallel execution (no shared memory)"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-cyan-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-cyan-400 mb-3">✦ Dart Compilation Targets</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["dart compile exe — native executable", "dart compile js — JavaScript for web", "dart compile aot-snapshot — fast startup", "flutter build apk — Android", "flutter build ios — iOS", "flutter build web — Web app", "flutter build windows/macos/linux — Desktop", "dart2native — standalone native binary"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-cyan-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing Dart SDK</h3>
              <h4 className="text-cyan-400 font-semibold text-sm">macOS</h4>
              <CmdBox cmd="brew tap dart-lang/dart && brew install dart" />
              <CmdBox cmd="dart --version" />
              <h4 className="text-cyan-400 font-semibold text-sm">Linux (Ubuntu/Debian)</h4>
              <CmdBox cmd="sudo apt-get update && sudo apt-get install dart" />
              <h4 className="text-cyan-400 font-semibold text-sm">Windows — Chocolatey</h4>
              <CmdBox cmd="choco install dart-sdk" />
              <h4 className="text-cyan-400 font-semibold text-sm">Install Flutter (includes Dart)</h4>
              <div className="bg-cyan-500/10 border border-cyan-400/20 rounded-xl p-4 text-sm text-cyan-300">
                💡 Flutter SDK includes Dart. If you install Flutter, you get Dart automatically! Download from flutter.dev
              </div>
              <CmdBox cmd="flutter --version" />
              <CmdBox cmd="dart --version" />
              <h4 className="text-cyan-400 font-semibold text-sm">Create & Run Dart Project</h4>
              <CmdBox cmd="dart create myproject" />
              <CmdBox cmd="cd myproject && dart run" />
              <h4 className="text-cyan-400 font-semibold text-sm">Create Flutter App</h4>
              <CmdBox cmd="flutter create myapp" />
              <CmdBox cmd="cd myapp && flutter run" />
              <h4 className="text-cyan-400 font-semibold text-sm">Package Manager (pub.dev)</h4>
              <CmdBox cmd="dart pub add http" />
              <CmdBox cmd="dart pub get" />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics & Null Safety", "OOP", "Async & Streams", "Collections", "Isolates"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── Dart Basics & Null Safety ──
void main() {
  // Variables — sound null safety
  String name = "CodeVault";
  int age = 25;
  double pi = 3.14159;
  bool isActive = true;

  // Nullable types — must use ? suffix
  String? nullableName = null;
  print(nullableName?.length ?? 0);  // 0 (null-aware)

  // Late variables — initialized before use
  late String description;
  description = "Dart is awesome";
  print(description);

  // Final & const
  final createdAt = DateTime.now();  // runtime const
  const maxRetries = 3;              // compile-time const

  // String operations
  print("Hello, \$name! Age: \$age");
  print(name.toUpperCase());
  print(name.contains("Code"));   // true
  print(name.replaceAll("Code", "Dev"));

  // List
  List<String> fruits = ["apple", "banana", "cherry"];
  fruits.add("mango");
  print(fruits.length);       // 4
  print(fruits.first);        // apple
  print(fruits.reversed.toList());

  // Map
  Map<String, dynamic> person = {
    "name": "Alice",
    "age": 30,
    "role": "admin",
  };
  print(person["name"]);  // Alice

  // Null-aware operators
  String? city;
  String defaultCity = city ?? "Mumbai";         // ?? null coalescing
  city ??= "Delhi";                              // ??= assign if null
  print(defaultCity);
  print(city);

  // Cascade notation
  List<int> nums = []
    ..add(1)
    ..add(2)
    ..add(3)
    ..addAll([4, 5]);
  print(nums);
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Dart OOP ──

abstract class Shape {
  double get area;
  double get perimeter;
  String describe() => "\${runtimeType}: area=\${area.toStringAsFixed(2)}";
}

mixin Printable {
  void printInfo() => print(toString());
}

class Circle extends Shape with Printable {
  final double radius;
  Circle(this.radius);

  @override double get area => 3.14159 * radius * radius;
  @override double get perimeter => 2 * 3.14159 * radius;
  @override String toString() => "Circle(r=\$radius)";
}

class Rectangle extends Shape with Printable {
  final double width, height;
  Rectangle(this.width, this.height);

  @override double get area => width * height;
  @override double get perimeter => 2 * (width + height);
  @override String toString() => "Rectangle(\${width}x\$height)";
}

// Named constructors & factory
class User {
  final String name;
  final String email;
  final Role role;

  const User({required this.name, required this.email, this.role = Role.viewer});

  // Named constructor
  User.admin({required String name, required String email})
      : this(name: name, email: email, role: Role.admin);

  // Factory constructor
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      name: json["name"] as String,
      email: json["email"] as String,
      role: Role.values.byName(json["role"] as String? ?? "viewer"),
    );
  }

  Map<String, dynamic> toJson() => {
    "name": name, "email": email, "role": role.name
  };

  @override String toString() => "User(name=\$name, role=\$role)";
}

enum Role { admin, editor, viewer }

// Extension methods
extension StringX on String {
  bool get isPalindrome => this == split("").reversed.join();
  String truncate(int max) => length <= max ? this : "\${substring(0, max)}...";
}

void main() {
  final c = Circle(5);
  final r = Rectangle(4, 6);
  print(c.describe());
  print(r.describe());
  c.printInfo();

  final u = User.admin(name: "Alice", email: "alice@test.com");
  final u2 = User.fromJson({"name": "Bob", "email": "bob@test.com", "role": "editor"});
  print(u);
  print(u2.toJson());

  print("racecar".isPalindrome);   // true
  print("hello world from dart!".truncate(15));
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Dart Async, Futures & Streams ──
import 'dart:async';

// Future — single async value
Future<String> fetchUser(int id) async {
  await Future.delayed(Duration(milliseconds: 100));
  if (id <= 0) throw Exception("Invalid ID");
  return "User #\$id: Alice";
}

Future<List<String>> fetchPosts(int userId) async {
  await Future.delayed(Duration(milliseconds: 200));
  return ["Post 1", "Post 2", "Post 3"];
}

// Streams — async sequence of values
Stream<int> countDown(int from) async* {
  for (int i = from; i >= 0; i--) {
    await Future.delayed(Duration(milliseconds: 100));
    yield i;
  }
}

Stream<String> generateEvents() async* {
  final events = ["connected", "authenticated", "data received", "disconnected"];
  for (final event in events) {
    await Future.delayed(Duration(milliseconds: 200));
    yield event;
  }
}

void main() async {
  // Sequential await
  final user = await fetchUser(1);
  print(user);

  // Parallel with Future.wait
  final results = await Future.wait([fetchUser(1), fetchUser(2)]);
  print(results);

  // Error handling
  try {
    final bad = await fetchUser(-1);
    print(bad);
  } catch (e) {
    print("Caught: \$e");
  }

  // Future.wait with mixed types
  final (String u, List<String> posts) = await (fetchUser(1), fetchPosts(1)).wait;
  print(u);
  print(posts);

  // Stream consumption
  await for (final count in countDown(5)) {
    print("T-\$count");
  }

  // Stream transformations
  final eventStream = generateEvents()
    .where((e) => e != "disconnected")
    .map((e) => "[EVENT] \${e.toUpperCase()}");

  await eventStream.forEach(print);

  // StreamController
  final controller = StreamController<int>();
  controller.stream
    .where((n) => n.isEven)
    .map((n) => n * n)
    .listen((n) => print("Stream value: \$n"));

  for (int i = 1; i <= 6; i++) controller.add(i);
  await controller.close();
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Dart Collections & Functional ──
void main() {
  // List operations
  final nums = List.generate(10, (i) => i + 1);
  print(nums);  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  final evens = nums.where((n) => n.isEven).toList();
  final squares = nums.map((n) => n * n).toList();
  final sum = nums.reduce((a, b) => a + b);
  final product = nums.fold(1, (acc, n) => acc * n);

  print("Evens: \$evens");
  print("Sum: \$sum");      // 55
  print("Product: \$product");

  // Spread operator & collection-if/for
  final extras = [11, 12];
  final combined = [...nums, ...extras, if (true) 100];
  final doubled = [for (final n in nums) n * 2];
  print(doubled);

  // Map operations
  final wordCount = <String, int>{};
  "the quick brown fox the quick fox fox".split(" ").forEach((w) {
    wordCount[w] = (wordCount[w] ?? 0) + 1;
  });
  print(wordCount);

  // Sort & transform map
  final sorted = wordCount.entries.toList()
    ..sort((a, b) => b.value.compareTo(a.value));
  sorted.forEach((e) => print("\${e.key}: \${e.value}"));

  // Set operations
  final setA = {1, 2, 3, 4, 5};
  final setB = {4, 5, 6, 7, 8};
  print(setA.intersection(setB));  // {4, 5}
  print(setA.union(setB));         // {1,2,3,4,5,6,7,8}
  print(setA.difference(setB));    // {1, 2, 3}

  // Record types (Dart 3+)
  final point = (x: 10, y: 20);
  print("\${point.x}, \${point.y}");

  (String, int) getUser() => ("Alice", 30);
  final (name, age) = getUser();
  print("\$name is \$age years old");

  // Pattern matching (Dart 3+)
  Object value = [1, 2, 3];
  switch (value) {
    case [int a, int b, int c]:
      print("Three ints: \$a \$b \$c");
    case [int a, ...]:
      print("List starting with int \$a");
    case String s:
      print("String: \$s");
    default:
      print("Something else");
  }
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Dart Isolates (True Parallelism) ──
import 'dart:isolate';
import 'dart:math';

// Isolates = separate memory + separate thread
// No shared memory — communicate via messages

int heavyComputation(int n) {
  // Compute sum of primes up to n
  int sum = 0;
  for (int i = 2; i <= n; i++) {
    bool isPrime = true;
    for (int j = 2; j <= sqrt(i); j++) {
      if (i % j == 0) { isPrime = false; break; }
    }
    if (isPrime) sum += i;
  }
  return sum;
}

// Simple Isolate.run (Dart 2.19+)
void main() async {
  print("Main isolate: \${Isolate.current.debugName}");

  // Run heavy work in separate isolate (non-blocking)
  final result = await Isolate.run(() => heavyComputation(100000));
  print("Sum of primes to 100000: \$result");

  // Run multiple isolates in parallel
  final start = DateTime.now();
  final results = await Future.wait([
    Isolate.run(() => heavyComputation(50000)),
    Isolate.run(() => heavyComputation(50000)),
    Isolate.run(() => heavyComputation(50000)),
  ]);
  final elapsed = DateTime.now().difference(start);
  print("3 parallel results: \$results in \${elapsed.inMilliseconds}ms");

  // Manual SendPort/ReceivePort communication
  final receivePort = ReceivePort();
  await Isolate.spawn(_worker, receivePort.sendPort);

  final messages = <String>[];
  await for (final msg in receivePort) {
    if (msg is String) {
      messages.add(msg);
      if (msg == "done") { receivePort.close(); break; }
    }
  }
  print("Received from worker: \$messages");
}

void _worker(SendPort sendPort) {
  for (int i = 1; i <= 5; i++) {
    sendPort.send("Message \$i");
  }
  sendPort.send("done");
}`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["http", "Simple HTTP client for Dart/Flutter. GET, POST, PUT requests.", "dart pub add http", "Networking"],
                ["dio", "Powerful HTTP client with interceptors, transformers, global config.", "flutter pub add dio", "HTTP"],
                ["provider", "Lightweight state management. Recommended for Flutter beginners.", "flutter pub add provider", "State Mgmt"],
                ["riverpod", "Modern, reactive state management for Flutter apps.", "flutter pub add flutter_riverpod", "State Mgmt"],
                ["hive", "Fast, lightweight NoSQL database. Pure Dart — works offline.", "flutter pub add hive", "Database"],
                ["freezed", "Code generator for immutable classes, union types, copyWith.", "flutter pub add freezed", "Code Gen"],
                ["json_serializable", "Automatic JSON serialization/deserialization via code gen.", "flutter pub add json_serializable", "Serialization"],
                ["go_router", "Declarative routing for Flutter based on Navigator 2.0.", "flutter pub add go_router", "Routing"],
              ].map(([name, desc, cmd, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-cyan-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{use}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
                  <CmdBox cmd={cmd} />
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-3">Flutter — Build Once, Run Everywhere</h2>
                <p className="text-gray-300 leading-relaxed">Flutter is Google's UI toolkit built on Dart. One codebase compiles natively to Android, iOS, Web, Windows, macOS, and Linux. Flutter uses its own rendering engine (Skia/Impeller) — no WebViews, no native bridges. Pixel-perfect UI everywhere.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: "📱", title: "Mobile (Android & iOS)", desc: "Compile to native ARM code. 60/120fps performance. No JavaScript bridge. Used by Google Pay, eBay, BMW app.", companies: ["Google Pay", "eBay Motors", "BMW"] },
                  { icon: "🌐", title: "Web Apps", desc: "Flutter compiles to HTML/CSS/Canvas/WebAssembly. Full Dart business logic shared with mobile.", companies: ["Google Ads", "iRobot"] },
                  { icon: "🖥️", title: "Desktop Apps", desc: "Native Windows, macOS, Linux apps from the same codebase. Used for developer tools and productivity apps.", companies: ["GitHub Desktop alt", "Rive"] },
                  { icon: "⚙️", title: "Embedded & TV", desc: "Flutter runs on embedded devices, smart TVs, kiosks and digital signage displays.", companies: ["Google Nest Hub", "Toyota"] },
                ].map(({ icon, title, desc, companies }) => (
                  <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-cyan-500/30 transition-all">
                    <div className="text-3xl mb-2">{icon}</div>
                    <h3 className="font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {companies.map(c => <span key={c} className="text-xs px-2 py-0.5 rounded bg-gray-800 text-gray-300 border border-gray-700">{c}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}