import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-indigo-500/20 border border-gray-600 hover:border-indigo-400 text-gray-300 hover:text-indigo-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "php" }) {
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

const selCls = "bg-indigo-500 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function PHPDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-indigo-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg" alt="PHP" className="w-20 h-12 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">PHP</h1>
              <span className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-400/30 text-xs font-bold">v8.3+</span>
            </div>
            <p className="text-gray-400 text-lg">The language that powers 80% of the web. Fast, flexible, mature.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Server-Side", "Open Source", "Dynamically Typed", "Web-Focused", "Embeds in HTML"].map(b => (
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

          {/* INTRO */}
          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">What is PHP?</h2>
                <p className="text-gray-300 leading-relaxed">PHP (Hypertext Preprocessor) was created by <span className="text-indigo-400 font-semibold">Rasmus Lerdorf in 1994</span>. It's a server-side scripting language designed for web development but also used as a general-purpose language. PHP code is executed on the server and the result is sent to the browser as plain HTML.</p>
                <p className="text-gray-300 leading-relaxed mt-3">PHP powers giants like <span className="text-indigo-400 font-semibold">WordPress (43% of all websites), Facebook (originally), Wikipedia</span>, and many more. PHP 8.x brought JIT compilation, named arguments, match expressions, fibers, and enums.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-indigo-400 mb-3">✦ Key Features (PHP 8.x)</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["JIT Compiler — faster execution", "Named Arguments — skip optional params", "Match Expression — strict switch", "Nullsafe Operator ?->", "Fibers — lightweight concurrency", "Enums — native enumeration type", "Union & Intersection Types", "First-class callable syntax"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-indigo-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-indigo-400 mb-3">✦ PHP vs Other Languages</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Easiest to deploy — works on any cheap hosting", "Built specifically for the web (HTTP, sessions, forms)", "Massive ecosystem — Composer has 300k+ packages", "WordPress, Laravel, Symfony, Drupal all PHP", "Can embed directly in HTML templates", "Free & open source, runs on Linux/Windows/Mac"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-indigo-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* INSTALLATION */}
          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing PHP</h3>
              <h4 className="text-indigo-400 font-semibold text-sm mt-4">Windows — XAMPP (Recommended for beginners)</h4>
              <div className="bg-indigo-500/10 border border-indigo-400/20 rounded-xl p-4 text-sm text-indigo-300">
                💡 Download <strong>XAMPP</strong> from apachefriends.org — includes PHP, Apache, MySQL, phpMyAdmin all in one.
              </div>
              <CmdBox cmd="php --version" />
              <h4 className="text-indigo-400 font-semibold text-sm">macOS</h4>
              <CmdBox cmd="brew install php" />
              <CmdBox cmd="php --version" />
              <h4 className="text-indigo-400 font-semibold text-sm">Linux (Ubuntu/Debian)</h4>
              <CmdBox cmd="sudo apt update && sudo apt install php php-cli php-fpm php-mysql php-zip php-curl" />
              <CmdBox cmd="php --version" />
              <h4 className="text-indigo-400 font-semibold text-sm">Install Composer (PHP Package Manager)</h4>
              <CmdBox cmd='curl -sS https://getcomposer.org/installer | php' />
              <CmdBox cmd="sudo mv composer.phar /usr/local/bin/composer" />
              <CmdBox cmd="composer --version" />
              <h4 className="text-indigo-400 font-semibold text-sm">Run a PHP file</h4>
              <CmdBox cmd="php hello.php" />
              <h4 className="text-indigo-400 font-semibold text-sm">Built-in development server</h4>
              <CmdBox cmd="php -S localhost:8000" />
            </div>
          </TabPanel>

          {/* EXAMPLES */}
          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "OOP", "PHP 8 Features", "Forms & Sessions", "Database (PDO)"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`<?php
// ── PHP Basics ──

// Variables (no declaration needed)
$name = "CodeVault";
$age = 25;
$price = 9.99;
$isActive = true;

// String operations
echo "Hello, $name!\\n";
echo "Length: " . strlen($name) . "\\n";
echo strtoupper($name) . "\\n";
echo str_replace("Code", "Dev", $name) . "\\n";

// Arrays
$fruits = ["apple", "banana", "cherry"];
$fruits[] = "mango";               // append
echo count($fruits) . "\\n";       // 4
echo implode(", ", $fruits) . "\\n";

// Associative array
$person = [
    "name" => "Alice",
    "age"  => 30,
    "role" => "Developer"
];
echo $person["name"] . "\\n";

// Loops
foreach ($fruits as $index => $fruit) {
    echo "$index: $fruit\\n";
}

// Functions
function greet(string $name, string $lang = "PHP"): string {
    return "Hello $name! Welcome to $lang!";
}
echo greet("Bob") . "\\n";
echo greet("Alice", "Laravel") . "\\n";

// Arrow function (PHP 7.4+)
$double = fn($x) => $x * 2;
echo $double(21) . "\\n";  // 42

// Array functions
$nums = [3, 1, 4, 1, 5, 9, 2, 6];
sort($nums);
$evens = array_filter($nums, fn($n) => $n % 2 === 0);
$squares = array_map(fn($n) => $n ** 2, $nums);
$sum = array_reduce($nums, fn($carry, $n) => $carry + $n, 0);
echo "Sum: $sum\\n";`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`<?php
// ── PHP OOP ──

// Abstract class
abstract class Shape {
    abstract public function area(): float;
    abstract public function perimeter(): float;

    public function describe(): string {
        return get_class($this) . " — Area: " . $this->area() . ", Perimeter: " . $this->perimeter();
    }
}

// Interface
interface Drawable {
    public function draw(): string;
}

class Circle extends Shape implements Drawable {
    public function __construct(private float $radius) {}

    public function area(): float {
        return M_PI * $this->radius ** 2;
    }

    public function perimeter(): float {
        return 2 * M_PI * $this->radius;
    }

    public function draw(): string {
        return "Drawing circle with radius {$this->radius}";
    }
}

class Rectangle extends Shape implements Drawable {
    public function __construct(
        private float $width,
        private float $height
    ) {}

    public function area(): float { return $this->width * $this->height; }
    public function perimeter(): float { return 2 * ($this->width + $this->height); }
    public function draw(): string { return "Drawing {$this->width}x{$this->height} rectangle"; }
}

// Trait
trait Loggable {
    private array $logs = [];

    public function log(string $message): void {
        $this->logs[] = date('H:i:s') . ": $message";
    }

    public function getLogs(): array {
        return $this->logs;
    }
}

class UserService {
    use Loggable;

    private array $users = [];

    public function create(string $name, string $email): array {
        $user = ["id" => count($this->users) + 1, "name" => $name, "email" => $email];
        $this->users[] = $user;
        $this->log("Created user: $name");
        return $user;
    }

    public function findAll(): array { return $this->users; }
}

$c = new Circle(5);
$r = new Rectangle(4, 6);
echo $c->describe() . "\\n";
echo $r->describe() . "\\n";
echo $c->draw() . "\\n";

$service = new UserService();
$service->create("Alice", "alice@example.com");
$service->create("Bob", "bob@example.com");
print_r($service->getLogs());`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`<?php
// ── PHP 8.x Modern Features ──

// Named arguments
function createUser(string $name, int $age = 0, string $role = "viewer"): array {
    return compact("name", "age", "role");
}
$user = createUser(name: "Alice", role: "admin", age: 28);

// Match expression (strict, no type coercion, returns value)
$status = 2;
$label = match($status) {
    1       => "Active",
    2       => "Pending",
    3, 4    => "Suspended",
    default => "Unknown",
};
echo $label . "\\n";  // Pending

// Nullsafe operator
class User {
    public function __construct(
        public readonly string $name,
        public ?Address $address = null
    ) {}
}
class Address {
    public function __construct(public string $city) {}
    public function getCity(): string { return $this->city; }
}

$user1 = new User("Alice", new Address("Mumbai"));
$user2 = new User("Bob");  // no address

echo $user1->address?->getCity() . "\\n";  // Mumbai
echo $user2->address?->getCity() . "\\n";  // (null, no error)

// Enums (PHP 8.1+)
enum Status: string {
    case Active   = "active";
    case Inactive = "inactive";
    case Banned   = "banned";

    public function label(): string {
        return match($this) {
            Status::Active   => "✅ Active",
            Status::Inactive => "⏸ Inactive",
            Status::Banned   => "🚫 Banned",
        };
    }
}

echo Status::Active->label() . "\\n";
echo Status::Banned->value . "\\n";  // banned

// First-class callable syntax (PHP 8.1+)
$strlen = strlen(...);
$arr = ["hello", "world", "php"];
$lengths = array_map($strlen, $arr);
print_r($lengths);

// Fibers (PHP 8.1+ — lightweight coroutines)
$fiber = new Fiber(function(): void {
    $value = Fiber::suspend("first suspend");
    echo "Resumed with: $value\\n";
});
$val = $fiber->start();
echo "Fiber yielded: $val\\n";
$fiber->resume("hello fiber");`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`<?php
// ── PHP Forms & Sessions ──

// sessions/login.php
session_start();

// CSRF token generation
function generateCSRF(): string {
    if (empty($_SESSION["csrf_token"])) {
        $_SESSION["csrf_token"] = bin2hex(random_bytes(32));
    }
    return $_SESSION["csrf_token"];
}

function validateCSRF(string $token): bool {
    return isset($_SESSION["csrf_token"]) &&
           hash_equals($_SESSION["csrf_token"], $token);
}

// Form processing
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // CSRF check
    if (!validateCSRF($_POST["csrf_token"] ?? "")) {
        die("CSRF validation failed");
    }

    // Input sanitization
    $username = htmlspecialchars(trim($_POST["username"] ?? ""));
    $password = $_POST["password"] ?? "";

    // Validation
    $errors = [];
    if (strlen($username) < 3) $errors[] = "Username too short";
    if (!filter_var($_POST["email"] ?? "", FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email";
    }
    if (strlen($password) < 8) $errors[] = "Password too short";

    if (empty($errors)) {
        // Store in session
        $_SESSION["user"] = ["username" => $username, "logged_in" => true];
        header("Location: dashboard.php");
        exit;
    }
}

// Cookies
setcookie("theme", "dark", time() + 86400 * 30, "/", "", true, true);
$theme = $_COOKIE["theme"] ?? "light";

// File upload
if (isset($_FILES["upload"])) {
    $allowed = ["image/jpeg", "image/png", "image/gif"];
    $file = $_FILES["upload"];

    if (!in_array($file["type"], $allowed)) {
        die("Invalid file type");
    }
    if ($file["size"] > 2 * 1024 * 1024) {
        die("File too large (max 2MB)");
    }

    $filename = uniqid() . "_" . basename($file["name"]);
    move_uploaded_file($file["tmp_name"], "uploads/" . $filename);
    echo "Uploaded: $filename";
}

// HTML form output
$csrf = generateCSRF();
echo <<<HTML
<form method="POST" enctype="multipart/form-data">
  <input type="hidden" name="csrf_token" value="$csrf">
  <input type="text" name="username" placeholder="Username">
  <input type="email" name="email" placeholder="Email">
  <input type="password" name="password" placeholder="Password">
  <input type="file" name="upload" accept="image/*">
  <button type="submit">Submit</button>
</form>
HTML;`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`<?php
// ── PHP PDO Database (MySQL/SQLite) ──

class Database {
    private static ?PDO $instance = null;

    public static function getInstance(): PDO {
        if (self::$instance === null) {
            $dsn = "mysql:host=localhost;dbname=myapp;charset=utf8mb4";
            self::$instance = new PDO($dsn, "root", "password", [
                PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                PDO::ATTR_EMULATE_PREPARES   => false,
            ]);
        }
        return self::$instance;
    }
}

class UserRepository {
    private PDO $db;

    public function __construct() {
        $this->db = Database::getInstance();
    }

    public function createTable(): void {
        $this->db->exec("
            CREATE TABLE IF NOT EXISTS users (
                id       INT AUTO_INCREMENT PRIMARY KEY,
                name     VARCHAR(100) NOT NULL,
                email    VARCHAR(150) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ");
    }

    public function create(string $name, string $email, string $password): int {
        $hashed = password_hash($password, PASSWORD_BCRYPT);
        $stmt = $this->db->prepare(
            "INSERT INTO users (name, email, password) VALUES (:name, :email, :password)"
        );
        $stmt->execute(compact("name", "email") + ["password" => $hashed]);
        return (int) $this->db->lastInsertId();
    }

    public function findByEmail(string $email): ?array {
        $stmt = $this->db->prepare("SELECT * FROM users WHERE email = :email LIMIT 1");
        $stmt->execute(["email" => $email]);
        return $stmt->fetch() ?: null;
    }

    public function findAll(int $limit = 20, int $offset = 0): array {
        $stmt = $this->db->prepare("SELECT id, name, email, created FROM users LIMIT :limit OFFSET :offset");
        $stmt->bindValue(":limit", $limit, PDO::PARAM_INT);
        $stmt->bindValue(":offset", $offset, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetchAll();
    }

    public function verifyPassword(string $email, string $password): bool {
        $user = $this->findByEmail($email);
        return $user && password_verify($password, $user["password"]);
    }
}

// Usage
$repo = new UserRepository();
$repo->createTable();
$id = $repo->create("Alice", "alice@example.com", "secret123");
echo "Created user ID: $id\\n";

$user = $repo->findByEmail("alice@example.com");
echo "Found: " . $user["name"] . "\\n";
echo "Password valid: " . ($repo->verifyPassword("alice@example.com", "secret123") ? "yes" : "no") . "\\n";`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          {/* LIBRARIES */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Laravel", "The most popular PHP framework. MVC, Eloquent ORM, Blade templates, queues.", "composer create-project laravel/laravel myapp", "Full-Stack"],
                ["Symfony", "Enterprise-grade framework. Highly modular — use individual components.", "composer create-project symfony/skeleton myapp", "Enterprise"],
                ["Composer", "PHP dependency manager. Like npm for PHP. Manages all packages.", "curl -sS https://getcomposer.org/installer | php", "Package Manager"],
                ["PHPUnit", "The standard unit testing framework for PHP.", "composer require --dev phpunit/phpunit", "Testing"],
                ["Guzzle", "HTTP client for making API requests. Supports async & middleware.", "composer require guzzlehttp/guzzle", "HTTP"],
                ["Carbon", "Date and time library. Human-readable date manipulation.", "composer require nesbot/carbon", "Utilities"],
                ["Monolog", "Logging library. PSR-3 compatible. Supports 50+ log handlers.", "composer require monolog/monolog", "Logging"],
                ["Doctrine ORM", "Object-relational mapper. Used by Symfony.", "composer require doctrine/orm", "ORM"],
              ].map(([name, desc, cmd, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-indigo-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">{use}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
                  <CmdBox cmd={cmd} />
                </div>
              ))}
            </div>
          </TabPanel>

          {/* USE CASES */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🌐", title: "Web Development", desc: "PHP is purpose-built for web. It handles HTTP natively, embeds in HTML, manages sessions, cookies, forms, file uploads out of the box.", companies: ["WordPress", "Laravel", "Drupal"] },
                { icon: "🛒", title: "E-Commerce", desc: "WooCommerce (WordPress plugin) powers 28% of all online stores. Magento and Shopify started in PHP.", companies: ["WooCommerce", "Magento", "PrestaShop"] },
                { icon: "📰", title: "Content Management", desc: "WordPress runs 43% of all websites on the internet. Joomla, Drupal, and TYPO3 are also PHP-based CMS platforms.", companies: ["WordPress", "Joomla", "Drupal"] },
                { icon: "🔌", title: "REST APIs", desc: "Laravel and Slim are excellent for building fast REST APIs. Laravel Sanctum/Passport for authentication.", companies: ["Laravel", "Slim", "Lumen"] },
                { icon: "📧", title: "Email & Notifications", desc: "PHP Mailer and Symfony Mailer handle SMTP, HTML emails. Used in newsletters, transactional email systems.", companies: ["PHPMailer", "Symfony Mailer"] },
                { icon: "🏢", title: "Enterprise Apps", desc: "Symfony powers enterprise applications at Spotify, BlaBlaCar, and other large-scale platforms.", companies: ["Symfony", "Doctrine", "API Platform"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-indigo-500/30 transition-all">
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