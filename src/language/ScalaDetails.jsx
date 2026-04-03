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
function CodeBlock({ code, lang = "scala" }) {
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

const selCls = "bg-orange-500 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function ScalaDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-orange-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/39/Scala-full-color.svg" alt="Scala" className="w-20 h-12 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Scala</h1>
              <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-400/30 text-xs font-bold">v3.4+</span>
            </div>
            <p className="text-gray-400 text-lg">Scalable Language. Fuses OOP and Functional Programming on the JVM.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["JVM Language", "Statically Typed", "Functional + OOP", "Type Inference", "Pattern Matching", "Akka / Spark"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">What is Scala?</h2>
                <p className="text-gray-300 leading-relaxed">Scala was created by <span className="text-orange-400 font-semibold">Martin Odersky</span> at EPFL (Switzerland) and released in 2004. The name stands for <span className="text-orange-400 font-semibold">"Scalable Language"</span>. Scala runs on the JVM and is 100% interoperable with Java — you can use any Java library. Scala 3 (Dotty) is a major redesign with cleaner syntax and more powerful type system.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Scala uniquely combines <span className="text-orange-400 font-semibold">object-oriented and functional programming</span> in a single language. It's the language of <span className="text-orange-400 font-semibold">Apache Spark</span> (big data processing), Akka (actor model concurrency), and Kafka (originally). Twitter, LinkedIn, Netflix use Scala heavily.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-orange-400 mb-3">✦ Scala vs Java</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Concise — typically 3x less code than Java", "Immutability first — val vs var", "Case classes — data classes with pattern matching", "Pattern matching — far superior to Java switch", "Higher-order functions built-in", "Option type — no NullPointerException", "Traits — more powerful than Java interfaces", "Type inference — less boilerplate"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-orange-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-orange-400 mb-3">✦ Famous Scala Systems</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Apache Spark — world's most popular big data engine", "Apache Kafka — written partly in Scala", "Twitter — large part of backend in Scala", "LinkedIn — many services in Scala/Akka", "Netflix — Mantis streaming platform", "Airbnb — data pipeline infrastructure", "Guardian — UK newspaper backend", "Zalando — e-commerce platform"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-orange-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing Scala</h3>
              <h4 className="text-orange-400 font-semibold text-sm">Install via Coursier (recommended)</h4>
              <CmdBox cmd='curl -fL https://github.com/coursier/coursier/releases/latest/download/cs-x86_64-pc-linux.gz | gzip -d > cs && chmod +x cs && ./cs setup' />
              <CmdBox cmd="scala --version" />
              <h4 className="text-orange-400 font-semibold text-sm">macOS via Homebrew</h4>
              <CmdBox cmd="brew install scala" />
              <CmdBox cmd="brew install sbt" />
              <h4 className="text-orange-400 font-semibold text-sm">Install SBT (Scala Build Tool)</h4>
              <CmdBox cmd="brew install sbt" />
              <h4 className="text-orange-400 font-semibold text-sm">Create new SBT project</h4>
              <CmdBox cmd="sbt new scala/scala3.g8" />
              <CmdBox cmd="cd myproject && sbt run" />
              <h4 className="text-orange-400 font-semibold text-sm">Scala REPL</h4>
              <CmdBox cmd="scala" />
              <h4 className="text-orange-400 font-semibold text-sm">Run a Scala script directly</h4>
              <CmdBox cmd="scala hello.scala" />
              <div className="bg-orange-500/10 border border-orange-400/20 rounded-xl p-4 text-sm text-orange-300">
                💡 Use <strong>IntelliJ IDEA</strong> with the Scala plugin or <strong>VS Code</strong> with Metals extension for the best development experience.
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "Case Classes & Pattern Matching", "Functional", "Futures & Async", "Akka Actors"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── Scala 3 Basics ──
@main def basics(): Unit =

  // val = immutable, var = mutable
  val name: String = "CodeVault"
  var age: Int = 25
  val pi = 3.14159  // type inferred

  // String interpolation
  println(s"Hello, $name! Age: $age")
  println(f"Pi is approximately $pi%.4f")
  println(raw"Literal backslash: \\n")

  // if-expression (returns value)
  val grade = if age >= 18 then "adult" else "minor"
  println(grade)

  // for expression
  val squares = for i <- 1 to 5 yield i * i
  println(squares)   // Vector(1, 4, 9, 16, 25)

  // for with guards
  val evenSquares = for
    i <- 1 to 10
    if i % 2 == 0
  yield i * i
  println(evenSquares)

  // Tuples
  val pair = (1, "hello", true)
  val (n, s, b) = pair   // destructure
  println(s"$n, $s, $b")

  // Option — safe null alternative
  val maybeName: Option[String] = Some("Alice")
  val noName: Option[String] = None

  println(maybeName.getOrElse("Unknown"))   // Alice
  println(noName.getOrElse("Unknown"))      // Unknown
  println(maybeName.map(_.toUpperCase))     // Some(ALICE)

  // Collections
  val nums = List(1, 2, 3, 4, 5)
  val doubled = nums.map(_ * 2)
  val evens = nums.filter(_ % 2 == 0)
  val sum = nums.reduce(_ + _)
  val total = nums.foldLeft(0)(_ + _)

  println(doubled)
  println(evens)
  println(s"Sum: $sum, Total: $total")

  // Ranges
  (1 to 5).foreach(i => print(s"$i "))
  println()

  // String operations
  println("hello".capitalize)
  println("Scala".reverse)
  println(List("a", "b", "c").mkString(", "))`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Scala Case Classes & Pattern Matching ──

// Sealed trait — exhaustive pattern matching
sealed trait Shape
case class Circle(radius: Double) extends Shape
case class Rectangle(width: Double, height: Double) extends Shape
case class Triangle(base: Double, height: Double) extends Shape

def area(shape: Shape): Double = shape match
  case Circle(r)         => Math.PI * r * r
  case Rectangle(w, h)  => w * h
  case Triangle(b, h)   => 0.5 * b * h

def describe(shape: Shape): String = shape match
  case Circle(r) if r > 10  => s"Large circle (r=$r)"
  case Circle(r)             => s"Small circle (r=$r)"
  case Rectangle(w, h) if w == h => s"Square ($w x $h)"
  case Rectangle(w, h)       => s"Rectangle ($w x $h)"
  case Triangle(b, h)        => s"Triangle (b=$b, h=$h)"

// Case class features — equals, hashCode, copy, toString built-in
case class User(
  id: Int,
  name: String,
  email: String,
  role: Role = Role.Viewer
)

enum Role:
  case Admin, Editor, Viewer

// Case classes are immutable — use copy for changes
val alice = User(1, "Alice", "alice@example.com", Role.Admin)
val bob   = alice.copy(id = 2, name = "Bob", role = Role.Editor)

println(alice)  // User(1,Alice,alice@example.com,Admin)
println(alice == alice.copy())  // true — structural equality

// Pattern matching on collections
def describeList(xs: List[Int]): String = xs match
  case Nil          => "empty list"
  case x :: Nil     => s"one element: $x"
  case x :: y :: Nil => s"two elements: $x and $y"
  case head :: tail  => s"starts with $head, ${tail.length} more"

println(describeList(Nil))
println(describeList(List(42)))
println(describeList(List(1, 2, 3, 4)))

@main def matchDemo(): Unit =
  val shapes: List[Shape] = List(Circle(5), Rectangle(4, 6), Circle(15), Triangle(3, 4))
  shapes.foreach(s => println(s"${describe(s)} — area: ${area(s).formatted("%.2f")}"))

  val users = List(alice, bob, User(3, "Carol", "carol@test.com"))
  users.filter(_.role == Role.Admin).foreach(println)

  // Guard patterns
  val numbers = List(-3, -1, 0, 2, 4, 7, 9)
  numbers.foreach {
    case n if n < 0  => println(s"$n is negative")
    case 0           => println("zero")
    case n if n % 2 == 0 => println(s"$n is even")
    case n           => println(s"$n is odd")
  }`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Scala Functional Programming ──

@main def functional(): Unit =

  // Higher-order functions
  def applyTwice[A](f: A => A, x: A): A = f(f(x))
  println(applyTwice(_ * 2, 5))    // 20
  println(applyTwice(_.toUpperCase, "hi"))  // HI

  // Function composition
  val double: Int => Int = _ * 2
  val addTen: Int => Int = _ + 10
  val squareIt: Int => Int = x => x * x

  val transform = double andThen addTen andThen squareIt
  println(transform(5))   // ((5*2)+10)^2 = 400

  // Currying
  def multiply(a: Int)(b: Int): Int = a * b
  val triple = multiply(3)    // partially applied
  val times5 = multiply(5)
  println(triple(7))   // 21
  println(times5(8))   // 40

  val nums = List(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

  // Comprehensive collection ops
  val result = nums
    .filter(_ % 2 == 0)
    .map(n => n * n)
    .takeWhile(_ < 50)
  println(result)  // List(4, 16, 36)

  // groupBy
  val byParity = nums.groupBy(_ % 2 == 0)
  println(byParity)

  // partition
  val (evens, odds) = nums.partition(_ % 2 == 0)
  println(s"Evens: $evens, Odds: $odds")

  // flatMap
  val nested = List(List(1,2), List(3,4), List(5,6))
  val flat = nested.flatMap(identity)
  println(flat)

  // zip & zipWithIndex
  val letters = List("a", "b", "c")
  val zipped = nums.zip(letters)
  println(zipped)
  letters.zipWithIndex.foreach { (ch, i) => println(s"$i: $ch") }

  // scanLeft (running total)
  val runningSum = nums.scanLeft(0)(_ + _)
  println(runningSum)  // List(0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55)

  // Either — error handling without exceptions
  def parseAge(s: String): Either[String, Int] =
    s.toIntOption
      .filter(n => n >= 0 && n <= 150)
      .toRight(s"Invalid age: '$s'")

  println(parseAge("25"))      // Right(25)
  println(parseAge("-5"))      // Left(Invalid age: '-5')
  println(parseAge("abc"))     // Left(Invalid age: 'abc')

  val ages = List("25", "abc", "30", "-1", "100")
  val (errors, validAges) = ages.partitionMap(parseAge)
  println(s"Valid: $validAges")
  println(s"Errors: $errors")`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Scala Futures & Async ──
import scala.concurrent._
import scala.concurrent.duration._
import scala.util.{Success, Failure}
import ExecutionContext.Implicits.global

def fetchUser(id: Int): Future[String] = Future {
  Thread.sleep(100)  // simulate network
  if id <= 0 then throw new Exception(s"Invalid ID: $id")
  s"User #$id: Alice"
}

def fetchPosts(userId: Int): Future[List[String]] = Future {
  Thread.sleep(200)
  List(s"Post 1 by $userId", s"Post 2 by $userId")
}

@main def asyncDemo(): Unit =

  // Map & flatMap on Future
  val userFuture: Future[String] = fetchUser(1)
  val upperFuture: Future[String] = userFuture.map(_.toUpperCase)

  // Chained async operations
  val pipeline: Future[String] = for
    user  <- fetchUser(1)
    posts <- fetchPosts(1)
  yield s"$user has ${posts.length} posts: ${posts.mkString(", ")}"

  pipeline.onComplete {
    case Success(result) => println(s"Result: $result")
    case Failure(err)    => println(s"Error: ${err.getMessage}")
  }

  // Parallel execution
  val f1 = fetchUser(1)
  val f2 = fetchUser(2)
  val f3 = fetchUser(3)

  val allUsers: Future[List[String]] = Future.sequence(List(f1, f2, f3))
  allUsers.foreach(users => println(s"Users: $users"))

  // Error handling
  val safe: Future[String] = fetchUser(-1).recover {
    case ex: Exception => s"Fallback: ${ex.getMessage}"
  }
  safe.foreach(println)

  val withFallback = fetchUser(-1).recoverWith {
    case _ => fetchUser(1)   // retry with different ID
  }

  // Await for demo (don't use in production code!)
  val finalResult = Await.result(pipeline, 5.seconds)
  println(s"Final: $finalResult")

  Thread.sleep(1000)   // wait for async callbacks
  println("Done")`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Akka Actors (Classic) ──
// build.sbt: libraryDependencies += "com.typesafe.akka" %% "akka-actor-typed" % "2.8.5"

import akka.actor.typed._
import akka.actor.typed.scaladsl._
import scala.concurrent.duration._

// Define messages as sealed traits
sealed trait CounterMsg
case class Increment(by: Int = 1) extends CounterMsg
case class Decrement(by: Int = 1) extends CounterMsg
case object Reset extends CounterMsg
case class GetValue(replyTo: ActorRef[Int]) extends CounterMsg

// Define actor behavior
object Counter:
  def apply(initial: Int = 0): Behavior[CounterMsg] =
    active(initial)

  private def active(count: Int): Behavior[CounterMsg] =
    Behaviors.receive { (ctx, msg) =>
      msg match
        case Increment(by) =>
          ctx.log.info(s"Counter: $count -> ${count + by}")
          active(count + by)
        case Decrement(by) =>
          ctx.log.info(s"Counter: $count -> ${count - by}")
          active(count - by)
        case Reset =>
          ctx.log.info("Counter reset to 0")
          active(0)
        case GetValue(replyTo) =>
          replyTo ! count
          Behaviors.same
    }

// Parent actor that creates and supervises children
object Guardian:
  def apply(): Behavior[Nothing] =
    Behaviors.setup[Nothing] { ctx =>
      val counter = ctx.spawn(Counter(0), "counter")

      counter ! Increment(10)
      counter ! Increment(5)
      counter ! Decrement(3)

      ctx.log.info("Guardian started")
      Behaviors.empty
    }

@main def akkaDemo(): Unit =
  val system = ActorSystem(Guardian(), "CodeVaultSystem")
  Thread.sleep(500)
  system.terminate()`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Apache Spark", "Big data distributed computing. Scala is its native language.", '"org.apache.spark" %% "spark-core" % "3.5.1"', "Big Data"],
                ["Akka", "Actor model concurrency. Akka Streams, Akka HTTP, Akka Cluster.", '"com.typesafe.akka" %% "akka-actor-typed" % "2.8.5"', "Concurrency"],
                ["Cats", "Functional programming abstractions. Monad, Functor, Effect types.", '"org.typelevel" %% "cats-core" % "2.10.0"', "FP"],
                ["ZIO", "Type-safe async and concurrent programming. Functional effect system.", '"dev.zio" %% "zio" % "2.0.21"', "Async/FP"],
                ["Play Framework", "Reactive web framework. REST APIs, WebSockets, non-blocking.", '"com.typesafe.play" %% "play" % "3.0.2"', "Web"],
                ["Slick", "Functional database access layer. Type-safe SQL queries.", '"com.typesafe.slick" %% "slick" % "3.5.1"', "Database"],
                ["circe", "JSON encoding/decoding. Automatic derivation via generics.", '"io.circe" %% "circe-core" % "0.14.6"', "JSON"],
                ["ScalaTest", "Testing framework with multiple testing styles.", '"org.scalatest" %% "scalatest" % "3.2.18"', "Testing"],
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
                { icon: "📊", title: "Big Data with Spark", desc: "Apache Spark is the world's most popular big data engine. Written in Scala. Process petabytes of data. Used by Netflix, Airbnb, Uber.", companies: ["Apache Spark", "Databricks", "Netflix"] },
                { icon: "🔄", title: "Reactive Systems / Akka", desc: "Akka implements the Actor model for highly concurrent, distributed, fault-tolerant systems. Powers telco and financial systems.", companies: ["Akka", "Lightbend", "Twitter"] },
                { icon: "🌐", title: "Web APIs with Play", desc: "Play Framework builds reactive, non-blocking web services. Used by LinkedIn, Gilt, Verizon for high-throughput APIs.", companies: ["Play", "LinkedIn", "Gilt"] },
                { icon: "💰", title: "Financial Systems", desc: "Scala's strong type system and functional purity make it ideal for banking, trading, and risk management systems.", companies: ["Goldman Sachs", "Morgan Stanley", "UBS"] },
                { icon: "🤖", title: "Machine Learning", desc: "Breeze provides numerical processing like NumPy. Spark MLlib provides distributed ML. Deeplearning4j runs on JVM.", companies: ["Breeze", "Spark MLlib", "DL4J"] },
                { icon: "🎮", title: "Functional Domain Modeling", desc: "Scala's ADTs (case classes + sealed traits) enable precise domain modeling. Popular in DDD and event sourcing.", companies: ["ZIO", "Cats Effect", "http4s"] },
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