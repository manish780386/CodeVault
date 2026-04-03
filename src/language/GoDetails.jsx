import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck, Terminal } from "lucide-react";

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
      <code className="text-green-400">{cmd}</code><CopyBtn text={cmd} />
    </div>
  );
}
function CodeBlock({ code, lang = "go" }) {
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
const selCls = "bg-cyan-500 text-gray-900 px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function GoDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-cyan-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg" alt="Go" className="w-24 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Go (Golang)</h1>
              <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/30 text-xs font-bold">Go 1.22+</span>
            </div>
            <p className="text-gray-400 text-lg">Simple, fast, concurrent. Built for the cloud era by Google.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Compiled", "Statically Typed", "Garbage Collected", "Concurrency First", "Fast Compile"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">🐹 What is Go?</h2>
                <p className="text-gray-300 leading-relaxed">Go (also known as Golang) was created at <span className="text-cyan-400 font-semibold">Google in 2007</span> by <span className="text-cyan-400 font-semibold">Robert Griesemer, Rob Pike, and Ken Thompson</span> (co-creator of Unix). It was released publicly in 2009. Go was designed to solve frustrations with C++ and Java at scale — slow compile times, complex code, and poor concurrency support.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Go's signature features are <span className="text-cyan-400 font-semibold">goroutines</span> (lightweight threads) and <span className="text-cyan-400 font-semibold">channels</span> for communication — making concurrent programming simple, safe, and efficient. Go compiles to a <span className="text-cyan-400 font-semibold">single native binary</span> with no runtime dependencies. Docker, Kubernetes, Terraform, and CockroachDB are all written in Go.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-cyan-400 mb-3">✦ Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Goroutines — 2KB stack, 100k+ concurrent", "Channels — safe concurrent communication", "Compiled to single static binary", "Garbage collected — no manual memory", "Fast compilation — seconds for large projects", "Built-in testing framework (go test)", "gofmt — single official code style", "No exceptions — explicit error handling"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-cyan-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-cyan-400 mb-3">🏗️ Famous Go Projects</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {[["Docker", "Containerization platform"],["Kubernetes", "Container orchestration (k8s)"],["Terraform", "Infrastructure as Code"],["CockroachDB", "Distributed SQL database"],["Prometheus", "Monitoring & alerting"],["Hugo", "Fastest static site generator"],["Caddy", "Automatic HTTPS web server"],["Gitea", "Self-hosted Git service"]].map(([n, d]) => (
                      <li key={n} className="flex items-start gap-2"><span className="text-cyan-400 shrink-0">▸</span><span><strong className="text-white">{n}</strong> — {d}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white flex items-center gap-2"><Terminal size={16} className="text-cyan-400" /> Install Go</h3>
              <Tabs>
                <TabList className="flex gap-2 mb-4">
                  {["Windows", "macOS", "Linux"].map((t, i) => <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>)}
                </TabList>
                <TabPanel>
                  <ol className="space-y-3 text-sm text-gray-300 mb-4">
                    {["Visit go.dev/dl/", "Download Windows installer (.msi)", "Run installer — adds Go to PATH automatically", "Open new terminal and verify"].map((s, i) => (
                      <li key={i} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>{s}</li>
                    ))}
                  </ol>
                  <CmdBox cmd="go version" />
                </TabPanel>
                <TabPanel>
                  <CmdBox cmd="brew install go" />
                  <CmdBox cmd="go version" />
                </TabPanel>
                <TabPanel>
                  <CmdBox cmd="wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz" />
                  <CmdBox cmd="sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz" />
                  <CmdBox cmd='echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.bashrc && source ~/.bashrc' />
                  <CmdBox cmd="go version" />
                </TabPanel>
              </Tabs>
              <h4 className="text-cyan-400 font-semibold text-sm mt-4">Create & Run a Go Project</h4>
              <CmdBox cmd="mkdir myapp && cd myapp" />
              <CmdBox cmd="go mod init myapp" />
              <CmdBox cmd="go run main.go" />
              <CmdBox cmd="go build -o myapp && ./myapp" />
              <CmdBox cmd="go test ./..." />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "Goroutines", "Interfaces", "Error Handling", "HTTP Server"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── Go Basics ──
package main

import (
    "fmt"
    "math"
    "strings"
)

func main() {
    // Variables
    name := "CodeVault"        // short declaration
    var age int = 25
    var pi float64 = math.Pi
    active := true

    fmt.Printf("Name: %s, Age: %d, Pi: %.2f\\n", name, age, pi)

    // Multiple return values
    q, r := divide(17, 5)
    fmt.Printf("17/5 = %d remainder %d\\n", q, r)

    // Arrays and slices
    arr := [5]int{1, 2, 3, 4, 5}  // fixed array
    slice := []string{"Go", "Python", "Rust"}
    slice = append(slice, "TypeScript")

    for i, v := range slice {
        fmt.Printf("%d: %s\\n", i, v)
    }

    // Maps
    scores := map[string]int{
        "Alice": 95,
        "Bob":   78,
        "Carol": 92,
    }
    scores["Dave"] = 88

    if score, ok := scores["Eve"]; ok {
        fmt.Println("Eve:", score)
    } else {
        fmt.Println("Eve not found")
    }

    // Strings
    fmt.Println(strings.ToUpper(name))
    fmt.Println(strings.Contains(name, "Vault"))
    fmt.Println(strings.Split("a,b,c", ","))

    // Defer — runs at function end
    defer fmt.Println("Deferred: function done!")
    fmt.Println("Main running...")
    _ = active // suppress unused warning
}

func divide(a, b int) (int, int) {
    return a / b, a % b
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Go Goroutines & Channels ──
package main

import (
    "fmt"
    "sync"
    "time"
)

// Basic goroutine
func printNumbers(id int, wg *sync.WaitGroup) {
    defer wg.Done()
    for i := 1; i <= 5; i++ {
        fmt.Printf("Goroutine %d: %d\\n", id, i)
        time.Sleep(10 * time.Millisecond)
    }
}

// Channels for communication
func producer(ch chan<- int) {
    for i := 1; i <= 5; i++ {
        ch <- i * i  // send square
        time.Sleep(50 * time.Millisecond)
    }
    close(ch)
}

func consumer(ch <-chan int, results chan<- int) {
    sum := 0
    for v := range ch {
        sum += v
    }
    results <- sum
}

// Worker pool pattern
func worker(id int, jobs <-chan int, results chan<- int, wg *sync.WaitGroup) {
    defer wg.Done()
    for j := range jobs {
        result := j * j  // compute square
        fmt.Printf("Worker %d processed job %d -> %d\\n", id, j, result)
        results <- result
    }
}

func main() {
    // Basic goroutines
    var wg sync.WaitGroup
    for i := 1; i <= 3; i++ {
        wg.Add(1)
        go printNumbers(i, &wg)
    }
    wg.Wait()

    // Channels
    ch := make(chan int, 5)
    results := make(chan int, 1)
    go producer(ch)
    go consumer(ch, results)
    fmt.Println("Sum of squares:", <-results)

    // Worker pool
    jobs := make(chan int, 10)
    out := make(chan int, 10)
    var wg2 sync.WaitGroup
    for w := 1; w <= 3; w++ {
        wg2.Add(1)
        go worker(w, jobs, out, &wg2)
    }
    for j := 1; j <= 9; j++ { jobs <- j }
    close(jobs)
    wg2.Wait()
    close(out)

    total := 0
    for r := range out { total += r }
    fmt.Println("Total:", total)
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Go Interfaces & Structs ──
package main

import (
    "fmt"
    "math"
)

// Interface
type Shape interface {
    Area() float64
    Perimeter() float64
    Name() string
}

// Stringer interface (like toString)
type Stringer interface {
    String() string
}

// Structs with methods
type Circle struct {
    X, Y, Radius float64
}

func (c Circle) Area() float64      { return math.Pi * c.Radius * c.Radius }
func (c Circle) Perimeter() float64 { return 2 * math.Pi * c.Radius }
func (c Circle) Name() string       { return "Circle" }
func (c Circle) String() string {
    return fmt.Sprintf("Circle(r=%.2f) at (%.1f,%.1f)", c.Radius, c.X, c.Y)
}

type Rectangle struct {
    Width, Height float64
}

func (r Rectangle) Area() float64      { return r.Width * r.Height }
func (r Rectangle) Perimeter() float64 { return 2 * (r.Width + r.Height) }
func (r Rectangle) Name() string       { return "Rectangle" }

// Embedding (Go's composition over inheritance)
type Animal struct {
    Name string
}

func (a Animal) Breathe() string { return a.Name + " breathes" }

type Dog struct {
    Animal           // embedded
    Breed string
}

func (d Dog) Bark() string { return d.Name + " says: Woof!" }

// Generic function (Go 1.18+)
func Max[T int | float64 | string](a, b T) T {
    if a > b { return a }
    return b
}

func printShapeInfo(s Shape) {
    fmt.Printf("%s: area=%.2f, perimeter=%.2f\\n", s.Name(), s.Area(), s.Perimeter())
}

func main() {
    shapes := []Shape{
        Circle{0, 0, 5},
        Rectangle{4, 6},
        Circle{1, 2, 3},
    }
    for _, s := range shapes {
        printShapeInfo(s)
    }

    dog := Dog{Animal: Animal{"Rex"}, Breed: "Labrador"}
    fmt.Println(dog.Breathe())  // promoted method
    fmt.Println(dog.Bark())

    fmt.Println(Max(3, 7))
    fmt.Println(Max(3.14, 2.71))
    fmt.Println(Max("apple", "zebra"))
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Go Error Handling ──
package main

import (
    "errors"
    "fmt"
    "strconv"
)

// Custom error type
type ValidationError struct {
    Field   string
    Message string
}

func (e *ValidationError) Error() string {
    return fmt.Sprintf("validation error: %s — %s", e.Field, e.Message)
}

// Sentinel errors
var (
    ErrNotFound   = errors.New("not found")
    ErrPermission = errors.New("permission denied")
    ErrTimeout    = errors.New("operation timed out")
)

// Function with multiple error types
func parseAge(s string) (int, error) {
    age, err := strconv.Atoi(s)
    if err != nil {
        return 0, fmt.Errorf("invalid age format %q: %w", s, err)
    }
    if age < 0 {
        return 0, &ValidationError{Field: "age", Message: "must be non-negative"}
    }
    if age > 150 {
        return 0, &ValidationError{Field: "age", Message: "unrealistic age"}
    }
    return age, nil
}

func findUser(id int) (string, error) {
    users := map[int]string{1: "Alice", 2: "Bob"}
    name, ok := users[id]
    if !ok {
        return "", fmt.Errorf("user %d: %w", id, ErrNotFound)
    }
    return name, nil
}

func main() {
    // Standard error handling
    if age, err := parseAge("25"); err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Age:", age)
    }

    // Error type checking with errors.As
    if _, err := parseAge("-5"); err != nil {
        var valErr *ValidationError
        if errors.As(err, &valErr) {
            fmt.Printf("Field '%s': %s\\n", valErr.Field, valErr.Message)
        }
    }

    // errors.Is for sentinel errors
    if _, err := findUser(99); err != nil {
        if errors.Is(err, ErrNotFound) {
            fmt.Println("User not found — redirect to 404")
        }
    }

    // Panic and recover
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered from panic:", r)
        }
    }()
    panic("something went wrong!")
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Go HTTP Server ──
package main

import (
    "encoding/json"
    "fmt"
    "log"
    "net/http"
    "strconv"
    "strings"
)

type User struct {
    ID    int    \`json:"id"\`
    Name  string \`json:"name"\`
    Email string \`json:"email"\`
}

var users = []User{
    {1, "Alice", "alice@example.com"},
    {2, "Bob", "bob@example.com"},
}

func writeJSON(w http.ResponseWriter, status int, data any) {
    w.Header().Set("Content-Type", "application/json")
    w.WriteHeader(status)
    json.NewEncoder(w).Encode(data)
}

func usersHandler(w http.ResponseWriter, r *http.Request) {
    switch r.Method {
    case http.MethodGet:
        writeJSON(w, http.StatusOK, users)

    case http.MethodPost:
        var u User
        if err := json.NewDecoder(r.Body).Decode(&u); err != nil {
            writeJSON(w, http.StatusBadRequest, map[string]string{"error": err.Error()})
            return
        }
        u.ID = len(users) + 1
        users = append(users, u)
        writeJSON(w, http.StatusCreated, u)

    default:
        writeJSON(w, http.StatusMethodNotAllowed, map[string]string{"error": "method not allowed"})
    }
}

func userHandler(w http.ResponseWriter, r *http.Request) {
    idStr := strings.TrimPrefix(r.URL.Path, "/users/")
    id, err := strconv.Atoi(idStr)
    if err != nil {
        writeJSON(w, http.StatusBadRequest, map[string]string{"error": "invalid id"})
        return
    }
    for _, u := range users {
        if u.ID == id {
            writeJSON(w, http.StatusOK, u)
            return
        }
    }
    writeJSON(w, http.StatusNotFound, map[string]string{"error": "user not found"})
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/users", usersHandler)
    mux.HandleFunc("/users/", userHandler)
    mux.HandleFunc("/health", func(w http.ResponseWriter, r *http.Request) {
        writeJSON(w, http.StatusOK, map[string]string{"status": "ok"})
    })

    fmt.Println("Server running on :8080")
    log.Fatal(http.ListenAndServe(":8080", mux))
}`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[["Gin", "HTTP web framework. Fast, minimal, good middleware support.", "gin-gonic/gin", "Web"],["Fiber", "Express-inspired web framework. Extremely fast (Fasthttp based).", "gofiber/fiber", "Web"],["GORM", "Full-featured ORM. Works with PostgreSQL, MySQL, SQLite, SQL Server.", "go-gorm/gorm", "Database"],["sqlx", "Extensions on database/sql. Named queries, struct scanning.", "jmoiron/sqlx", "Database"],["Viper", "Complete configuration solution. JSON, TOML, YAML, env vars, flags.", "spf13/viper", "Config"],["Zap", "Blazing-fast structured logging by Uber. Zero-allocation where possible.", "uber-go/zap", "Logging"],["testify", "Testing toolkit: assertions, mocks, suites. Most popular Go test library.", "stretchr/testify", "Testing"],["cobra", "Powerful CLI library. Used by kubectl, hugo, GitHub CLI.", "spf13/cobra", "CLI"]].map(([name, desc, pkg, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-cyan-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">{use}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
                  <div className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 font-mono text-xs text-green-400">go get github.com/{pkg}</div>
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "☁️", title: "Cloud & DevOps Tools", desc: "Docker, Kubernetes, Terraform, Helm — the entire cloud-native ecosystem is built in Go.", companies: ["HashiCorp", "Docker Inc.", "CNCF"] },
                { icon: "🌐", title: "High-Performance APIs", desc: "Go handles thousands of concurrent requests with minimal resources. Perfect for REST/gRPC microservices.", companies: ["Uber", "Cloudflare", "Twitch"] },
                { icon: "🗄️", title: "Databases", desc: "CockroachDB, InfluxDB, etcd, TiDB — distributed databases leverage Go's concurrency.", companies: ["Cockroach Labs", "InfluxData", "PingCAP"] },
                { icon: "🔒", title: "Security Tools", desc: "Go's standard library has excellent crypto support. Many security tools and VPN software use Go.", companies: ["Tailscale", "WireGuard", "Cloudflare"] },
                { icon: "📡", title: "Networking", desc: "Go's net package and goroutines make it ideal for proxies, load balancers, and network tools.", companies: ["Caddy", "Traefik", "CoreDNS"] },
                { icon: "⛓️", title: "Blockchain", desc: "Ethereum's Geth client, Hyperledger Fabric, and many blockchain tools are written in Go.", companies: ["Ethereum", "IBM", "Tendermint"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-cyan-500/30 transition-all">
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