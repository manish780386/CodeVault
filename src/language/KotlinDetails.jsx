// ── KotlinDetails.jsx ──
import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-purple-500/20 border border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "kotlin" }) {
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
const selCls = "bg-purple-500 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function KotlinDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-purple-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Kotlin_Icon.png" alt="Kotlin" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Kotlin</h1>
              <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-400/30 text-xs font-bold">v2.0+</span>
            </div>
            <p className="text-gray-400 text-lg">Modern, concise, safe. The preferred language for Android by Google.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["JVM Language", "Null Safe", "Coroutines", "Interoperable with Java", "Multiplatform"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">What is Kotlin?</h2>
                <p className="text-gray-300 leading-relaxed">Kotlin was developed by <span className="text-purple-400 font-semibold">JetBrains</span> (makers of IntelliJ IDEA) and released in 2016. Google made it the <span className="text-purple-400 font-semibold">official first-class language for Android</span> in 2017. Kotlin runs on JVM, compiles to JavaScript, and can compile natively via Kotlin/Native. It is 100% interoperable with Java — you can use any Java library in Kotlin.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Key selling points over Java: null safety built into the type system (eliminates NullPointerException), concise syntax (up to 40% less code), coroutines for async programming, extension functions, data classes, sealed classes, and smart casts.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-purple-400 mb-3">✦ Kotlin vs Java</h3>
                  <div className="space-y-3 text-xs">
                    <div><p className="text-gray-400 mb-1">Java — verbose data class:</p>
                      <div className="bg-gray-950 rounded p-2 font-mono text-red-300">{`public class User {
  private String name;
  private int age;
  // + constructor, getters, setters,
  // equals, hashCode, toString...
}`}</div>
                    </div>
                    <div><p className="text-gray-400 mb-1">Kotlin — one line:</p>
                      <div className="bg-gray-950 rounded p-2 font-mono text-green-300">{`data class User(val name: String, val age: Int)`}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-purple-400 mb-3">✦ Key Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Null safety — ? operator prevents NPE", "Data classes — auto equals/hashCode/copy", "Extension functions — extend any class", "Coroutines — async without callbacks", "Sealed classes — exhaustive when expressions", "Smart casts — no redundant type casting", "Destructuring declarations", "Kotlin Multiplatform — share code across platforms"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-purple-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white">Install Kotlin</h3>
              <p className="text-gray-400 text-sm">Kotlin requires JDK. Install IntelliJ IDEA (comes with Kotlin) or use command line:</p>
              <h4 className="text-purple-400 font-semibold text-sm">Install via SDKMAN (Linux/Mac)</h4>
              <CmdBox cmd='curl -s "https://get.sdkman.io" | bash' />
              <CmdBox cmd="sdk install kotlin" />
              <CmdBox cmd="kotlin -version" />
              <h4 className="text-purple-400 font-semibold text-sm">Install via Homebrew (Mac)</h4>
              <CmdBox cmd="brew install kotlin" />
              <h4 className="text-purple-400 font-semibold text-sm">Compile & Run</h4>
              <CmdBox cmd="kotlinc main.kt -include-runtime -d main.jar" />
              <CmdBox cmd="java -jar main.jar" />
              <h4 className="text-purple-400 font-semibold text-sm">Android — Use Android Studio (includes Kotlin)</h4>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-sm text-purple-300">
                💡 For Android development, download <strong>Android Studio</strong> from developer.android.com — it includes Kotlin, JDK, and the full Android SDK.
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics & Null Safety", "Data Classes", "Coroutines", "Collections", "Extensions"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── Kotlin Basics & Null Safety ──
fun main() {
    // val = immutable, var = mutable
    val name: String = "CodeVault"
    var age: Int = 25
    val pi = 3.14159  // type inferred

    // String templates
    println("Hello $name! Age: $age")
    println("Pi = $pi")

    // Null safety
    var nullableStr: String? = "Hello"
    println(nullableStr?.length)     // safe call
    nullableStr = null
    println(nullableStr?.length ?: 0)  // Elvis operator: default 0

    // Smart cast
    val obj: Any = "I am a string"
    if (obj is String) {
        println(obj.uppercase())     // auto cast to String
    }

    // When expression (switch on steroids)
    val score = 85
    val grade = when {
        score >= 90 -> "A"
        score >= 80 -> "B"
        score >= 70 -> "C"
        else -> "F"
    }
    println("Grade: $grade")

    // Ranges
    for (i in 1..5) print("$i ")
    for (i in 10 downTo 1 step 2) print("$i ")

    // Destructuring
    val (x, y) = Pair(10, 20)
    println("x=$x y=$y")

    // let, run, apply, also
    val result = nullableStr?.let {
        "Length: \${it.length}"
    } ?: "Was null"
    println(result)
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Kotlin Data Classes, Sealed Classes ──

// Data class — auto-generates equals, hashCode, toString, copy
data class User(
    val id: Int,
    val name: String,
    val email: String,
    val role: Role = Role.VIEWER
)

enum class Role { ADMIN, EDITOR, VIEWER }

// Sealed class — exhaustive when branches
sealed class Result<out T> {
    data class Success<T>(val data: T) : Result<T>()
    data class Error(val message: String, val code: Int) : Result<Nothing>()
    object Loading : Result<Nothing>()
}

fun handleResult(result: Result<User>): String = when (result) {
    is Result.Success -> "Welcome \${result.data.name}!"
    is Result.Error   -> "Error \${result.code}: \${result.message}"
    is Result.Loading -> "Loading..."
}

// Object (singleton)
object UserRepository {
    private val users = mutableListOf<User>()

    fun add(user: User) { users.add(user) }
    fun findById(id: Int) = users.find { it.id == id }
    fun all(): List<User> = users.toList()
}

fun main() {
    val u1 = User(1, "Alice", "alice@example.com", Role.ADMIN)
    val u2 = u1.copy(id = 2, name = "Bob", role = Role.EDITOR)

    println(u1)   // User(id=1, name=Alice, ...)
    println(u1 == u2)  // false (structural equality)

    UserRepository.add(u1)
    UserRepository.add(u2)
    println(UserRepository.findById(1))

    // Sealed class usage
    println(handleResult(Result.Success(u1)))
    println(handleResult(Result.Error("Not found", 404)))
    println(handleResult(Result.Loading))
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Kotlin Coroutines ──
import kotlinx.coroutines.*
import kotlinx.coroutines.flow.*

// suspend function — like async/await
suspend fun fetchUser(id: Int): String {
    delay(100)  // non-blocking delay (simulates network)
    return "User #$id: Alice"
}

suspend fun fetchPosts(userId: Int): List<String> {
    delay(200)
    return listOf("Post 1", "Post 2", "Post 3")
}

fun main() = runBlocking {

    // Sequential
    val time1 = System.currentTimeMillis()
    val user = fetchUser(1)
    val posts = fetchPosts(1)
    println("Sequential: \${System.currentTimeMillis() - time1}ms")

    // Parallel with async
    val time2 = System.currentTimeMillis()
    val userDeferred = async { fetchUser(1) }
    val postsDeferred = async { fetchPosts(1) }
    val (u, p) = Pair(userDeferred.await(), postsDeferred.await())
    println("Parallel: \${System.currentTimeMillis() - time2}ms")
    println(u)
    println(p)

    // Launch — fire and forget
    val job = launch {
        repeat(5) {
            println("Working: $it")
            delay(50)
        }
    }
    job.join()

    // Flow — cold async stream
    val numberFlow = flow {
        for (i in 1..5) {
            emit(i)
            delay(50)
        }
    }

    numberFlow
        .filter { it % 2 == 0 }
        .map { it * it }
        .collect { println("Flow value: $it") }

    // withContext — change dispatcher
    val result = withContext(Dispatchers.IO) {
        "Result from IO thread"
    }
    println(result)
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Kotlin Collections & Functional ──
fun main() {
    val nums = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    // Filter, map, reduce
    val result = nums
        .filter { it % 2 == 0 }
        .map { it * it }
        .reduce { acc, n -> acc + n }
    println("Sum of even squares: $result")  // 220

    // groupBy
    val words = listOf("apple", "banana", "avocado", "blueberry", "cherry")
    val byFirst = words.groupBy { it.first() }
    byFirst.forEach { (char, group) -> println("$char: $group") }

    // partition
    val (evens, odds) = nums.partition { it % 2 == 0 }
    println("Evens: $evens")
    println("Odds: $odds")

    // flatMap
    val nested = listOf(listOf(1,2), listOf(3,4), listOf(5,6))
    val flat = nested.flatMap { it }
    println(flat)

    // associate / associateBy
    data class User(val id: Int, val name: String)
    val users = listOf(User(1,"Alice"), User(2,"Bob"), User(3,"Carol"))
    val userMap = users.associateBy { it.id }
    println(userMap[2])  // User(id=2, name=Bob)

    // Mutable collections
    val mutable = mutableListOf(1, 2, 3)
    mutable.add(4)
    mutable.removeIf { it % 2 == 0 }
    println(mutable)  // [1, 3]

    // Sequence — lazy evaluation
    val lazyResult = (1..1_000_000).asSequence()
        .filter { it % 2 == 0 }
        .map { it * it }
        .take(5)
        .toList()
    println(lazyResult)  // [4, 16, 36, 64, 100]
}`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Kotlin Extension Functions ──
fun String.isPalindrome(): Boolean {
    val clean = this.lowercase().filter { it.isLetter() }
    return clean == clean.reversed()
}

fun String.truncate(maxLen: Int, ellipsis: String = "..."): String =
    if (length <= maxLen) this else take(maxLen - ellipsis.length) + ellipsis

fun Int.isEven() = this % 2 == 0
fun Int.isPrime(): Boolean {
    if (this < 2) return false
    return (2..Math.sqrt(toDouble()).toInt()).none { this % it == 0 }
}

fun <T> List<T>.second(): T? = if (size >= 2) this[1] else null
fun <T> List<T>.chunkedBy(size: Int) = chunked(size)

// Extension with generic
fun <T : Comparable<T>> List<T>.median(): T? {
    val sorted = sorted()
    return if (sorted.isEmpty()) null else sorted[sorted.size / 2]
}

// Infix functions
infix fun Int.pow(exp: Int): Int = Math.pow(toDouble(), exp.toDouble()).toInt()
infix fun <T> T.shouldBe(expected: T) {
    require(this == expected) { "Expected $expected but was $this" }
}

fun main() {
    println("racecar".isPalindrome())  // true
    println("hello world".isPalindrome())  // false

    println("Hello World from CodeVault!".truncate(20))

    println(7.isPrime())    // true
    println(9.isPrime())    // false
    println(4.isEven())     // true

    val nums = listOf(3, 1, 4, 1, 5, 9, 2, 6)
    println(nums.median())  // 4
    println(nums.second())  // 1

    println(2 pow 10)  // 1024

    val result = 2 pow 3
    result shouldBe 8
    println("All assertions passed!")
}`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[["Ktor", "Asynchronous web framework. Coroutine-based HTTP client & server by JetBrains.", "implementation(\"io.ktor:ktor-server-core:2.3.9\")", "Web"],["Exposed", "Kotlin SQL framework by JetBrains. Type-safe SQL DSL and DAO.", "implementation(\"org.jetbrains.exposed:exposed-core:0.47.0\")", "ORM"],["Hilt/Dagger", "Dependency injection for Android and JVM apps.", "implementation(\"com.google.dagger:hilt-android:2.51\")", "DI"],["Room", "SQLite ORM for Android. Compile-time verified SQL queries.", "implementation(\"androidx.room:room-runtime:2.6.1\")", "Android DB"],["Retrofit", "Type-safe HTTP client for Android and Java/Kotlin.", "implementation(\"com.squareup.retrofit2:retrofit:2.9.0\")", "HTTP"],["Compose", "Modern declarative UI for Android (and Desktop/Web).", "implementation(\"androidx.compose.ui:ui:1.6.2\")", "UI"],["Kotlinx.serialization", "Multiplatform JSON/XML/Protobuf serialization.", "implementation(\"org.jetbrains.kotlinx:kotlinx-serialization-json:1.6.3\")", "Serialization"],["Arrow", "Functional programming library for Kotlin. Either, Option, Validated types.", "implementation(\"io.arrow-kt:arrow-core:1.2.3\")", "FP"]].map(([name, desc, dep, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-purple-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">{use}</span>
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
                { icon: "📱", title: "Android Development", desc: "Google's #1 recommended language for Android. Jetpack Compose uses Kotlin. 95% of new Android apps.", companies: ["Google", "Square", "Grab"] },
                { icon: "🖥️", title: "Backend with Ktor", desc: "Coroutine-based server framework — fast, lightweight, async APIs built with Kotlin.", companies: ["JetBrains", "Adobe", "Philips"] },
                { icon: "🌐", title: "Kotlin Multiplatform", desc: "Share business logic between Android, iOS, Web, Desktop from a single Kotlin codebase.", companies: ["JetBrains", "Touchlab", "Netflix"] },
                { icon: "🧪", title: "Testing", desc: "Kotest + MockK provide powerful Kotlin-idiomatic testing. DSL-style test writing.", companies: ["JetBrains"] },
                { icon: "📊", title: "Spring Boot + Kotlin", desc: "Spring Framework has first-class Kotlin support. Concise Spring controllers and beans.", companies: ["Pivotal", "JetBrains"] },
                { icon: "🎮", title: "Game Dev (LibKTX)", desc: "LibKTX provides Kotlin extensions for LibGDX game development framework.", companies: ["LibGDX", "LibKTX"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-purple-500/30 transition-all">
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