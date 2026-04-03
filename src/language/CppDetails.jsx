import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck, Terminal } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-blue-600/20 border border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "cpp" }) {
  return (
    <div className="my-4 rounded-xl overflow-hidden border border-gray-700">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2 border-b border-gray-700">
        <div className="flex gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500" /><span className="w-3 h-3 rounded-full bg-yellow-400" /><span className="w-3 h-3 rounded-full bg-green-500" /></div>
        <span className="text-xs text-gray-400 font-mono">{lang}</span><CopyBtn text={code} />
      </div>
      <pre className="bg-gray-950 text-gray-200 text-sm p-4 overflow-x-auto leading-relaxed">{code}</pre>
    </div>
  );
}
const selCls = "bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function CppDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950/40 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">C++</h1>
              <span className="px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 border border-blue-500/30 text-xs font-bold">C++23</span>
            </div>
            <p className="text-gray-400 text-lg">Power, performance, precision. The language of systems and games.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Compiled", "Statically Typed", "Multi-Paradigm", "Manual Memory", "High Performance"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">⚡ What is C++?</h2>
                <p className="text-gray-300 leading-relaxed">C++ was created by <span className="text-blue-400 font-semibold">Bjarne Stroustrup</span> in 1979 as an extension of C, originally called "C with Classes". It adds object-oriented, generic, and functional programming features to C's low-level power. C++ gives you direct control over hardware and memory, making it the language of choice for operating systems, game engines, embedded systems, and performance-critical software.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Major versions: C++11 (modern era), C++14, C++17, C++20 (concepts, coroutines, modules), C++23. The STL (Standard Template Library) provides containers, algorithms, and iterators.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-blue-400 mb-3">✦ Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Zero-overhead abstractions — fast as C", "Manual memory management (new/delete)", "Smart pointers — modern memory safety", "Templates & generics — compile-time polymorphism", "RAII — Resource Acquisition Is Initialization", "STL — vectors, maps, sets, algorithms", "Operator overloading for expressive APIs", "Inline assembly for ultra-low-level control"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-blue-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-blue-400 mb-3">🎮 Who Uses C++?</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[["Unreal Engine", "Game engine powering AAA games"],["Adobe Photoshop", "Image processing performance"],["Google Chrome V8", "JavaScript engine"],["Microsoft Windows", "OS kernel components"],["MySQL / PostgreSQL", "Database engines"],["LLVM / GCC", "Compiler toolchains"],["NASA/SpaceX", "Aerospace systems"],["Bloomberg Terminal", "Financial trading"]].map(([n, d]) => (
                      <li key={n} className="flex items-start gap-2"><span className="text-blue-400 shrink-0">▸</span><span><strong className="text-white">{n}</strong> — {d}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white flex items-center gap-2"><Terminal size={16} className="text-blue-400" /> Install C++ Compiler</h3>
              <Tabs>
                <TabList className="flex gap-2 mb-4">
                  {["Windows", "macOS", "Linux"].map((t, i) => <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>)}
                </TabList>
                <TabPanel>
                  <p className="text-gray-400 text-sm mb-3">Install MinGW-w64 or MSVC (Visual Studio):</p>
                  <ol className="space-y-3 text-sm text-gray-300 mb-4">
                    {["Download MSYS2 from msys2.org", "Run the installer", "Open MSYS2 terminal and update packages", "Install GCC compiler"].map((s, i) => (
                      <li key={i} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>{s}</li>
                    ))}
                  </ol>
                  <CmdBox cmd="pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain" />
                  <CmdBox cmd="g++ --version" />
                </TabPanel>
                <TabPanel>
                  <CmdBox cmd="xcode-select --install" />
                  <p className="text-gray-400 text-sm my-2">Or install via Homebrew:</p>
                  <CmdBox cmd="brew install gcc" />
                  <CmdBox cmd="g++ --version" />
                </TabPanel>
                <TabPanel>
                  <CmdBox cmd="sudo apt update && sudo apt install build-essential g++ cmake -y" />
                  <CmdBox cmd="g++ --version" />
                </TabPanel>
              </Tabs>
              <h4 className="text-blue-400 font-semibold text-sm mt-4">Compile & Run</h4>
              <CmdBox cmd="g++ -std=c++17 -o main main.cpp" />
              <CmdBox cmd="./main" />
              <CmdBox cmd="g++ -std=c++20 -O2 -Wall -o main main.cpp" />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "OOP", "Templates", "STL", "Memory"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── C++ Basics (C++17) ──
#include <iostream>
#include <string>
#include <vector>
using namespace std;

int main() {
    // Variables
    int age = 25;
    double pi = 3.14159;
    bool active = true;
    string name = "CodeVault";
    auto score = 98.5;  // type inferred

    // Output
    cout << "Hello, " << name << "!" << endl;
    cout << "Age: " << age << ", PI: " << pi << endl;

    // Structured bindings (C++17)
    auto [x, y] = make_pair(10, 20);
    cout << "x=" << x << " y=" << y << endl;

    // if with initializer (C++17)
    if (auto len = name.size(); len > 5) {
        cout << "Long name: " << len << " chars" << endl;
    }

    // Range-based for
    vector<int> nums = {1, 2, 3, 4, 5};
    for (const auto& n : nums) {
        cout << n << " ";
    }

    // Lambda
    auto add = [](int a, int b) -> int { return a + b; };
    cout << add(3, 4) << endl;

    // Ternary
    string result = age >= 18 ? "Adult" : "Minor";

    return 0;
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── C++ OOP ──
#include <iostream>
#include <string>
#include <memory>
using namespace std;

// Abstract base class
class Shape {
public:
    virtual double area() const = 0;   // pure virtual
    virtual double perimeter() const = 0;
    virtual string name() const = 0;
    virtual ~Shape() = default;        // virtual destructor

    void describe() const {
        cout << name() << ": area=" << area()
             << " perimeter=" << perimeter() << endl;
    }
};

class Circle : public Shape {
    double radius;
public:
    explicit Circle(double r) : radius(r) {}
    double area() const override { return 3.14159 * radius * radius; }
    double perimeter() const override { return 2 * 3.14159 * radius; }
    string name() const override { return "Circle"; }
};

class Rectangle : public Shape {
    double w, h;
public:
    Rectangle(double w, double h) : w(w), h(h) {}
    double area() const override { return w * h; }
    double perimeter() const override { return 2 * (w + h); }
    string name() const override { return "Rectangle"; }
};

// RAII class with resource management
class FileHandle {
    FILE* file;
public:
    explicit FileHandle(const char* path, const char* mode)
        : file(fopen(path, mode)) {
        if (!file) throw runtime_error("Cannot open file");
    }
    ~FileHandle() { if (file) fclose(file); }  // auto cleanup

    // No copy — move only
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;
    FileHandle(FileHandle&& other) noexcept : file(other.file) { other.file = nullptr; }
};

int main() {
    // Smart pointers — no memory leaks!
    auto c = make_unique<Circle>(5.0);
    auto r = make_shared<Rectangle>(4.0, 6.0);

    c->describe();
    r->describe();

    // Polymorphism
    vector<unique_ptr<Shape>> shapes;
    shapes.push_back(make_unique<Circle>(3.0));
    shapes.push_back(make_unique<Rectangle>(2.0, 5.0));
    for (const auto& s : shapes) s->describe();
    return 0;
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── C++ Templates ──
#include <iostream>
#include <vector>
#include <algorithm>
#include <stdexcept>
using namespace std;

// Function template
template<typename T>
T maxOf(T a, T b) { return a > b ? a : b; }

// Variadic template
template<typename T>
T sum(T val) { return val; }

template<typename T, typename... Args>
T sum(T first, Args... rest) { return first + sum(rest...); }

// Class template
template<typename T, size_t N>
class StaticArray {
    T data[N];
    size_t count = 0;
public:
    void push(const T& val) {
        if (count >= N) throw out_of_range("Array full");
        data[count++] = val;
    }
    T& operator[](size_t i) {
        if (i >= count) throw out_of_range("Index OOB");
        return data[i];
    }
    size_t size() const { return count; }

    // Iterator support
    T* begin() { return data; }
    T* end() { return data + count; }
};

// Concepts (C++20)
#include <concepts>
template<typename T>
concept Numeric = integral<T> || floating_point<T>;

template<Numeric T>
T square(T x) { return x * x; }

int main() {
    cout << maxOf(3, 7) << endl;       // 7
    cout << maxOf(3.14, 2.71) << endl; // 3.14
    cout << maxOf(string("a"), string("z")) << endl; // z

    cout << sum(1, 2, 3, 4, 5) << endl;  // 15

    StaticArray<int, 5> arr;
    arr.push(10); arr.push(20); arr.push(30);
    for (auto x : arr) cout << x << " ";

    cout << square(4) << endl;   // 16
    cout << square(3.14) << endl; // 9.8596
    return 0;
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── C++ STL (Standard Template Library) ──
#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <queue>
#include <stack>
#include <algorithm>
#include <numeric>
#include <string>
using namespace std;

int main() {
    // Vector
    vector<int> v = {5, 2, 8, 1, 9, 3};
    sort(v.begin(), v.end());           // {1,2,3,5,8,9}
    v.push_back(7);
    auto it = find(v.begin(), v.end(), 5);
    cout << "Found 5 at: " << (it - v.begin()) << endl;

    // Algorithms
    int total = accumulate(v.begin(), v.end(), 0);
    int maxVal = *max_element(v.begin(), v.end());
    reverse(v.begin(), v.end());
    cout << "Sum=" << total << " Max=" << maxVal << endl;

    // Map (sorted key-value)
    map<string, int> scores;
    scores["Alice"] = 95;
    scores["Bob"] = 78;
    scores["Carol"] = 92;
    for (const auto& [name, score] : scores) {
        cout << name << ": " << score << endl;
    }

    // Set (unique sorted elements)
    set<int> unique = {3, 1, 4, 1, 5, 9, 2, 6, 5};
    for (int x : unique) cout << x << " ";  // 1 2 3 4 5 6 9

    // Priority Queue (max-heap by default)
    priority_queue<int> pq;
    for (int x : {3, 1, 4, 1, 5, 9, 2, 6}) pq.push(x);
    while (!pq.empty()) { cout << pq.top() << " "; pq.pop(); }

    // Lambda with STL
    vector<int> nums = {1,2,3,4,5,6,7,8,9,10};
    vector<int> evens;
    copy_if(nums.begin(), nums.end(), back_inserter(evens),
            [](int x){ return x % 2 == 0; });
    transform(evens.begin(), evens.end(), evens.begin(),
              [](int x){ return x * x; });
    return 0;
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── C++ Memory Management ──
#include <iostream>
#include <memory>
#include <string>
using namespace std;

// Raw pointer (old style — avoid in modern C++)
void rawPointers() {
    int* p = new int(42);
    cout << *p << endl;      // dereference
    *p = 100;
    delete p;                // MUST delete manually!
    p = nullptr;             // avoid dangling pointer

    int* arr = new int[5]{1,2,3,4,5};
    arr[2] = 99;
    delete[] arr;            // array delete!
}

// unique_ptr — exclusive ownership
void uniquePtr() {
    auto p = make_unique<string>("CodeVault");
    cout << *p << " " << p->size() << endl;
    // No delete needed — auto cleaned up when out of scope

    // Transfer ownership
    auto p2 = move(p);
    // p is now nullptr
    cout << *p2 << endl;
}

// shared_ptr — shared ownership (reference counted)
struct Node {
    int val;
    shared_ptr<Node> next;
    explicit Node(int v) : val(v) {}
    ~Node() { cout << "Node " << val << " destroyed\n"; }
};

void sharedPtr() {
    auto n1 = make_shared<Node>(1);
    auto n2 = make_shared<Node>(2);
    n1->next = n2;

    cout << "n1 use_count: " << n1.use_count() << endl; // 1
    auto n1_copy = n1;
    cout << "n1 use_count: " << n1.use_count() << endl; // 2
} // both destroyed here automatically

// weak_ptr — breaks cycles
struct Person {
    string name;
    weak_ptr<Person> friend_;  // weak to avoid cycle!
    Person(string n) : name(n) {}
};

int main() {
    rawPointers();
    uniquePtr();
    sharedPtr();
    return 0;
}`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[["Boost", "Peer-reviewed portable C++ libraries — algorithms, regex, filesystem, graph, math.", "Utility"],["Qt", "Cross-platform GUI framework. Used in KDE, VirtualBox, Autodesk Maya.", "GUI"],["OpenCV", "Computer vision library — image processing, object detection, video analysis.", "Vision"],["Eigen", "Linear algebra, matrix operations, numerical solvers. Used in robotics.", "Math"],["SFML", "Simple multimedia library for games — graphics, audio, networking.", "Game"],["gRPC", "High-performance RPC framework using Protocol Buffers. Microservices.", "Network"],["Catch2", "Modern, header-only C++ testing framework. Simple and powerful.", "Testing"],["fmt", "Fast, safe string formatting. Now part of C++20 standard (std::format).", "Utility"]].map(([name, desc, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-blue-600/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-600/10 text-blue-300 border border-blue-500/20">{use}</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🎮", title: "Game Engines", desc: "Unreal Engine, id Tech, CryEngine — all written in C++. AAA games require the performance only C++ delivers.", companies: ["Epic Games", "id Software", "Valve"] },
                { icon: "🖥️", title: "Operating Systems", desc: "Windows kernel, macOS (parts), and system-level tools are written in C/C++.", companies: ["Microsoft", "Apple", "Linux"] },
                { icon: "🌐", title: "Browsers & Engines", desc: "Google Chrome (V8 engine), Firefox (SpiderMonkey), Safari (WebKit) — all C++.", companies: ["Google", "Mozilla", "Apple"] },
                { icon: "🗄️", title: "Databases", desc: "MySQL, PostgreSQL, MongoDB, RocksDB — high-performance databases demand C++.", companies: ["Oracle", "Meta", "MongoDB"] },
                { icon: "🤖", title: "Robotics & Embedded", desc: "ROS (Robot Operating System), firmware for IoT, automotive ECUs, medical devices.", companies: ["Tesla", "Boston Dynamics", "ABB"] },
                { icon: "💹", title: "High-Frequency Trading", desc: "Microsecond-level financial trading systems where latency is everything.", companies: ["Jane Street", "Jump Trading", "Citadel"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-600/30 transition-all">
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