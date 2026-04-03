import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck, Terminal, Zap } from "lucide-react";

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
      <code className="text-green-400">{cmd}</code><CopyBtn text={cmd} />
    </div>
  );
}
function CodeBlock({ code, lang = "java" }) {
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
function LibCard({ name, desc, use, maven }) {
  return (
    <div className="bg-gray-800/60 border border-gray-700 hover:border-orange-400/50 rounded-xl p-4 transition-all">
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-bold text-white text-sm">{name}</h4>
        <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">{use}</span>
      </div>
      <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
      {maven && <div className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 font-mono text-xs text-green-400">{maven}</div>}
    </div>
  );
}
const selCls = "bg-orange-400 text-gray-900 px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function JavaDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-orange-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://www.bing.com/th/id/OIP.utDhNe56dbCfBZc30_8qpwHaHk" alt="Java" className="w-14 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Java</h1>
              <span className="px-3 py-1 rounded-full bg-orange-400/10 text-orange-400 border border-orange-400/30 text-xs font-bold">JDK 21 LTS</span>
            </div>
            <p className="text-gray-400 text-lg">Write Once, Run Anywhere. Enterprise-grade, battle-tested.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Compiled + Interpreted", "Statically Typed", "OOP", "Platform Independent", "Garbage Collected"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">☕ What is Java?</h2>
                <p className="text-gray-300 leading-relaxed">Java was created by <span className="text-orange-400 font-semibold">James Gosling at Sun Microsystems</span> in 1995. Its motto — <em className="text-orange-400">"Write Once, Run Anywhere"</em> — refers to Java's bytecode compiling to JVM (Java Virtual Machine) which runs identically on any platform. Java is strictly object-oriented, statically typed, and one of the most widely deployed enterprise languages worldwide.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Java powers Android development, large-scale enterprise backends (banking, fintech, telecom), big data (Hadoop, Kafka, Spark are Java/JVM), and is used by companies like Amazon, Google, LinkedIn, and Netflix.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-orange-400 mb-3">✦ Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Platform independent — runs on JVM", "Strongly & statically typed", "Pure OOP — everything is a class", "Automatic garbage collection", "Multi-threading built-in", "Rich standard library (Java SE API)", "Backward compatible — old code still runs", "Huge ecosystem (Maven, Gradle)"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-orange-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-orange-400 mb-3">📊 Java Editions</h3>
                  <div className="space-y-3 text-sm">
                    {[["Java SE", "Standard Edition — core language, desktop", "text-orange-300"],["Java EE / Jakarta EE", "Enterprise — web, distributed apps", "text-red-300"],["Java ME", "Micro Edition — embedded, mobile devices", "text-yellow-300"],["Android SDK", "Java-based Android development", "text-green-300"],["Spring Boot", "Most popular Java framework for APIs", "text-blue-300"]].map(([n, d, c]) => (
                      <div key={n} className="flex items-start gap-3">
                        <span className={`${c} font-semibold w-28 shrink-0 text-xs`}>{n}</span>
                        <span className="text-gray-400 text-xs">{d}</span>
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
                <h3 className="font-bold text-white mb-4 flex items-center gap-2"><Terminal size={16} className="text-orange-400" /> Install JDK</h3>
                <Tabs>
                  <TabList className="flex gap-2 mb-4">
                    {["Windows", "macOS", "Linux"].map((t, i) => <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>)}
                  </TabList>
                  <TabPanel>
                    <ol className="space-y-3 text-sm text-gray-300 mb-4">
                      {["Go to adoptium.net (Eclipse Temurin OpenJDK)", "Download JDK 21 LTS (.msi for Windows)", "Run installer, keep defaults", "Set JAVA_HOME environment variable", "Add %JAVA_HOME%\\bin to PATH", "Verify in Command Prompt"].map((s, i) => (
                        <li key={i} className="flex items-start gap-3"><span className="w-6 h-6 rounded-full bg-orange-400/20 text-orange-400 text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>{s}</li>
                      ))}
                    </ol>
                    <CmdBox cmd="java --version" />
                    <CmdBox cmd="javac --version" />
                  </TabPanel>
                  <TabPanel>
                    <CmdBox cmd="brew install openjdk@21" />
                    <CmdBox cmd='echo "export PATH=/opt/homebrew/opt/openjdk@21/bin:$PATH" >> ~/.zshrc' />
                    <CmdBox cmd="java --version" />
                  </TabPanel>
                  <TabPanel>
                    <CmdBox cmd="sudo apt update && sudo apt install openjdk-21-jdk -y" />
                    <CmdBox cmd="java --version" />
                    <CmdBox cmd='export JAVA_HOME=$(dirname $(dirname $(readlink -f $(which java))))' />
                  </TabPanel>
                </Tabs>
                <div className="mt-4 space-y-2">
                  <h4 className="text-orange-400 font-semibold text-sm">Compile & Run Java</h4>
                  <CmdBox cmd="javac HelloWorld.java" />
                  <CmdBox cmd="java HelloWorld" />
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "OOP & Interfaces", "Collections", "Streams", "Multithreading"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── Java Basics ──
public class Basics {
    public static void main(String[] args) {

        // Primitive types
        int age = 25;
        double pi = 3.14159;
        boolean isActive = true;
        char grade = 'A';
        String name = "CodeVault";

        // String operations
        System.out.println(name.toUpperCase());
        System.out.println(name.length());
        System.out.println(name.contains("Code"));
        System.out.printf("Hello %s, age %d%n", name, age);

        // Arrays
        int[] nums = {1, 2, 3, 4, 5};
        System.out.println(nums.length);

        // for-each loop
        for (int n : nums) {
            System.out.print(n + " ");
        }

        // Conditional
        if (age >= 18) {
            System.out.println("Adult");
        } else {
            System.out.println("Minor");
        }

        // Switch expression (Java 14+)
        String day = "MON";
        String type = switch (day) {
            case "SAT", "SUN" -> "Weekend";
            default -> "Weekday";
        };
        System.out.println(type);

        // var (Java 10+)
        var greeting = "Hello Java!";
        System.out.println(greeting);
    }
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── OOP, Interfaces & Abstract Classes ──

// Interface
interface Drawable {
    void draw();
    default String getColor() { return "Black"; }
}

interface Resizable {
    void resize(double factor);
}

// Abstract class
abstract class Shape implements Drawable {
    protected String name;
    protected double x, y;

    public Shape(String name, double x, double y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    abstract double area();

    @Override
    public String toString() {
        return String.format("%s at (%.1f, %.1f)", name, x, y);
    }
}

// Concrete class
class Circle extends Shape implements Resizable {
    private double radius;

    public Circle(double x, double y, double radius) {
        super("Circle", x, y);
        this.radius = radius;
    }

    @Override
    public double area() {
        return Math.PI * radius * radius;
    }

    @Override
    public void draw() {
        System.out.printf("Drawing %s with r=%.1f%n", name, radius);
    }

    @Override
    public void resize(double factor) {
        radius *= factor;
    }
}

// Record (Java 16+) — immutable data class
record Point(double x, double y) {
    double distanceTo(Point other) {
        return Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
    }
}

// Usage
class Main {
    public static void main(String[] args) {
        Circle c = new Circle(0, 0, 5);
        c.draw();
        System.out.printf("Area: %.2f%n", c.area());
        c.resize(2.0);
        System.out.printf("New area: %.2f%n", c.area());

        Point p1 = new Point(0, 0);
        Point p2 = new Point(3, 4);
        System.out.printf("Distance: %.1f%n", p1.distanceTo(p2)); // 5.0
    }
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Java Collections Framework ──
import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {

        // ArrayList — dynamic array
        List<String> langs = new ArrayList<>();
        langs.add("Java"); langs.add("Python"); langs.add("Go");
        langs.add(1, "Kotlin"); // Insert at index
        langs.remove("Go");
        System.out.println(langs);
        System.out.println("Size: " + langs.size());
        Collections.sort(langs);

        // LinkedList — as Queue
        Queue<String> queue = new LinkedList<>();
        queue.offer("First"); queue.offer("Second"); queue.offer("Third");
        System.out.println(queue.poll()); // "First"

        // Stack
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(1); stack.push(2); stack.push(3);
        System.out.println(stack.pop()); // 3

        // HashMap
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 95); scores.put("Bob", 87); scores.put("Carol", 92);
        scores.getOrDefault("Dave", 0);

        // Iterate map
        scores.forEach((name, score) ->
            System.out.printf("%s: %d%n", name, score));

        // TreeMap — sorted keys
        Map<String, Integer> sorted = new TreeMap<>(scores);

        // HashSet — unique elements
        Set<String> unique = new HashSet<>(Arrays.asList("a","b","a","c","b"));
        System.out.println(unique); // [a, b, c]

        // List.of() — immutable (Java 9+)
        List<Integer> immutable = List.of(1, 2, 3, 4, 5);

        // Collections utility
        System.out.println(Collections.max(List.of(3,1,4,1,5,9))); // 9
    }
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Java Streams API (Java 8+) ──
import java.util.*;
import java.util.stream.*;

public class StreamsDemo {
    record Student(String name, int grade, String dept) {}

    public static void main(String[] args) {
        List<Student> students = List.of(
            new Student("Alice", 92, "CS"),
            new Student("Bob", 78, "Math"),
            new Student("Carol", 95, "CS"),
            new Student("Dave", 65, "Physics"),
            new Student("Eve", 88, "CS")
        );

        // Filter + Map + Collect
        List<String> csToppers = students.stream()
            .filter(s -> s.dept().equals("CS"))
            .filter(s -> s.grade() >= 90)
            .map(Student::name)
            .sorted()
            .collect(Collectors.toList());
        System.out.println(csToppers); // [Alice, Carol]

        // Average
        OptionalDouble avg = students.stream()
            .mapToInt(Student::grade)
            .average();
        System.out.printf("Avg grade: %.1f%n", avg.orElse(0));

        // Group by department
        Map<String, List<Student>> byDept = students.stream()
            .collect(Collectors.groupingBy(Student::dept));
        byDept.forEach((dept, list) ->
            System.out.printf("%s: %d students%n", dept, list.size()));

        // Max grade
        students.stream()
            .max(Comparator.comparingInt(Student::grade))
            .ifPresent(s -> System.out.println("Top: " + s.name()));

        // String joining
        String names = students.stream()
            .map(Student::name)
            .collect(Collectors.joining(", ", "[", "]"));
        System.out.println(names);
    }
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Java Multithreading ──
import java.util.concurrent.*;
import java.util.concurrent.atomic.*;

public class ThreadingDemo {

    // Runnable — no return value
    static class PrintTask implements Runnable {
        private final String message;
        PrintTask(String message) { this.message = message; }

        @Override
        public void run() {
            for (int i = 0; i < 3; i++) {
                System.out.println(Thread.currentThread().getName() + ": " + message);
                try { Thread.sleep(100); } catch (InterruptedException e) { break; }
            }
        }
    }

    // Callable — returns value
    static class FibTask implements Callable<Long> {
        private final int n;
        FibTask(int n) { this.n = n; }

        @Override
        public Long call() {
            if (n <= 1) return (long) n;
            long a = 0, b = 1;
            for (int i = 2; i <= n; i++) { long c = a + b; a = b; b = c; }
            return b;
        }
    }

    public static void main(String[] args) throws Exception {

        // Basic thread
        Thread t1 = new Thread(new PrintTask("Hello"));
        Thread t2 = new Thread(new PrintTask("World"));
        t1.start(); t2.start();
        t1.join(); t2.join();

        // ExecutorService — thread pool
        ExecutorService pool = Executors.newFixedThreadPool(4);
        List<Future<Long>> futures = new ArrayList<>();
        for (int i = 0; i <= 10; i++) {
            futures.add(pool.submit(new FibTask(i)));
        }
        for (Future<Long> f : futures) {
            System.out.print(f.get() + " ");
        }
        pool.shutdown();

        // AtomicInteger — thread-safe counter
        AtomicInteger counter = new AtomicInteger(0);
        ExecutorService pool2 = Executors.newFixedThreadPool(10);
        for (int i = 0; i < 1000; i++) {
            pool2.submit(() -> counter.incrementAndGet());
        }
        pool2.shutdown();
        pool2.awaitTermination(5, TimeUnit.SECONDS);
        System.out.println("\nCounter: " + counter.get()); // 1000
    }
}`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Spring Boot", desc: "Most popular Java framework for building production-ready REST APIs and microservices. Auto-configuration magic.", use: "Framework", maven: "<artifactId>spring-boot-starter-web</artifactId>" },
                { name: "Hibernate", desc: "ORM framework for Java. Maps Java classes to DB tables. JPA standard implementation.", use: "ORM", maven: "<artifactId>hibernate-core</artifactId>" },
                { name: "Maven", desc: "Build automation and dependency management tool. XML-based pom.xml configuration.", use: "Build", maven: "mvn clean install" },
                { name: "Gradle", desc: "Flexible build tool. Groovy/Kotlin DSL. Faster than Maven with incremental builds.", use: "Build", maven: "gradle build" },
                { name: "JUnit 5", desc: "Testing framework for Java. Annotations, assertions, parameterized tests.", use: "Testing", maven: "<artifactId>junit-jupiter</artifactId>" },
                { name: "Lombok", desc: "Reduce boilerplate. @Getter, @Setter, @Builder, @Data auto-generate code.", use: "Utility", maven: "<artifactId>lombok</artifactId>" },
                { name: "Jackson", desc: "JSON serialization/deserialization. Convert Java objects to/from JSON.", use: "JSON", maven: "<artifactId>jackson-databind</artifactId>" },
                { name: "Kafka Client", desc: "Java client for Apache Kafka message streaming platform.", use: "Messaging", maven: "<artifactId>kafka-clients</artifactId>" },
              ].map(l => <LibCard key={l.name} {...l} />)}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🏢", title: "Enterprise Backend", desc: "Spring Boot powers the backend of banks, fintech, and large corporations. Microservices, REST APIs, messaging.", companies: ["Goldman Sachs", "JPMorgan", "Netflix"] },
                { icon: "📱", title: "Android Development", desc: "Java was the original Android language (now shares with Kotlin). Billions of Android apps are written in Java.", companies: ["Google", "Samsung", "Amazon"] },
                { icon: "📦", title: "Big Data", desc: "Hadoop, Apache Kafka, Apache Spark (JVM) — big data infrastructure runs on Java/JVM.", companies: ["LinkedIn", "Uber", "Airbnb"] },
                { icon: "🌐", title: "Web Applications", desc: "Servlet-based web apps, Spring MVC, JSF — Java has powered web backends for 25+ years.", companies: ["eBay", "Amazon", "Twitter"] },
                { icon: "🎮", title: "Game Development", desc: "Minecraft (original) is written in Java. LibGDX game framework enables cross-platform game development.", companies: ["Mojang", "LibGDX"] },
                { icon: "☁️", title: "Cloud & Microservices", desc: "Spring Cloud, Quarkus, Micronaut — Java microservices deployed on AWS, GCP, Azure at massive scale.", companies: ["AWS", "Google Cloud", "Azure"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-orange-400/30 transition-all">
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