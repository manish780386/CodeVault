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
function CodeBlock({ code, lang = "csharp" }) {
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

const selCls = "bg-violet-600 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

// All code stored as const strings — avoids Babel parsing ${} as JS template expressions
const BASICS = `// -- C# Basics (Modern C# 12) --
using System;
using System.Collections.Generic;

// Top-level statements (no class/Main needed in C# 9+)
string name = "CodeVault";
int age = 25;
double pi = 3.14159;
bool isActive = true;

// String interpolation
Console.WriteLine("Hello, " + name + "! Age: " + age);
Console.WriteLine("Pi = " + pi.ToString("F4"));

// var -- type inference
var message = "Hello from C#!";
var number = 42;

// Nullable types
string? nullableName = null;
Console.WriteLine(nullableName ?? "No name");       // null coalescing
Console.WriteLine(nullableName?.Length ?? 0);       // null-safe member access

// Null-coalescing assignment
nullableName ??= "Default Name";
Console.WriteLine(nullableName);   // Default Name

// String methods
Console.WriteLine(name.ToUpper());
Console.WriteLine(name.ToLower());
Console.WriteLine(name.Contains("Vault"));
Console.WriteLine(name.Replace("Code", "Dev"));
Console.WriteLine(name.Length);
Console.WriteLine(string.Join(", ", new[] { "a", "b", "c" }));

// Arrays & Lists
int[] arr = { 1, 2, 3, 4, 5 };
List<string> fruits = ["apple", "banana", "cherry"];  // C# 12 collection expression
fruits.Add("mango");
Console.WriteLine(fruits.Count);
Console.WriteLine(fruits[0]);

// Dictionary
var person = new Dictionary<string, object>
{
    ["name"] = "Alice",
    ["age"]  = 30,
    ["role"] = "developer"
};
Console.WriteLine(person["name"]);

// Tuples
var (x, y) = (10, 20);
Console.WriteLine("x=" + x + ", y=" + y);

var point = (X: 3.5, Y: 7.2);
Console.WriteLine("Point: (" + point.X + ", " + point.Y + ")");

// Pattern matching with is
object obj = "Hello";
if (obj is string s && s.Length > 3)
    Console.WriteLine("String of length " + s.Length + ": " + s);

// Switch expression (C# 8+)
int score = 85;
string grade = score switch
{
    >= 90 => "A",
    >= 80 => "B",
    >= 70 => "C",
    >= 60 => "D",
    _     => "F"
};
Console.WriteLine("Grade: " + grade);`;

const OOP = `// -- C# OOP: Classes, Interfaces, Records --
using System;
using System.Collections.Generic;

// Interface
public interface IShape
{
    double Area { get; }
    double Perimeter { get; }
    string Describe();
}

// Abstract class
public abstract class Shape : IShape
{
    public abstract double Area { get; }
    public abstract double Perimeter { get; }
    public virtual string Describe() =>
        GetType().Name + ": Area=" + Area.ToString("F2") + ", Perimeter=" + Perimeter.ToString("F2");
}

// Concrete class with primary constructor (C# 12)
public class Circle(double radius) : Shape
{
    public double Radius { get; } = radius;
    public override double Area => Math.PI * Radius * Radius;
    public override double Perimeter => 2 * Math.PI * Radius;
}

public class Rectangle(double width, double height) : Shape
{
    public override double Area => width * height;
    public override double Perimeter => 2 * (width + height);
    public override string Describe() =>
        "Rectangle(" + width + "x" + height + "): Area=" + Area.ToString("F2");
}

// Record -- immutable value type with equality (C# 9+)
public record User(int Id, string Name, string Email, Role Role = Role.Viewer)
{
    // Records get: constructor, Equals, GetHashCode, ToString, with-expression
    public string DisplayName => Name + " (" + Role + ")";
}

public enum Role { Admin, Editor, Viewer }

// Generic class
public class Repository<T> where T : class
{
    private readonly List<T> _items = [];

    public void Add(T item) => _items.Add(item);
    public IReadOnlyList<T> GetAll() => _items.AsReadOnly();
    public int Count => _items.Count;
}

// Extension methods
public static class StringExtensions
{
    public static bool IsPalindrome(this string s)
    {
        var clean = s.ToLower().Replace(" ", "");
        return clean == new string(clean.Reverse().ToArray());
    }
    public static string Truncate(this string s, int max) =>
        s.Length <= max ? s : s[..max] + "...";
}

// Usage
var c = new Circle(5);
var r = new Rectangle(4, 6);
Console.WriteLine(c.Describe());
Console.WriteLine(r.Describe());

var alice = new User(1, "Alice", "alice@test.com", Role.Admin);
var bob = alice with { Id = 2, Name = "Bob", Role = Role.Editor };
Console.WriteLine(alice);
Console.WriteLine(bob.DisplayName);
Console.WriteLine(alice == alice with { });   // true -- record equality

var repo = new Repository<User>();
repo.Add(alice);
repo.Add(bob);
Console.WriteLine("Users: " + repo.Count);

Console.WriteLine("racecar".IsPalindrome());    // True
Console.WriteLine("Hello World from C#!".Truncate(15));`;

const LINQ = `// -- C# LINQ -- Language Integrated Query --
using System;
using System.Collections.Generic;
using System.Linq;

var numbers = Enumerable.Range(1, 20).ToList();

// LINQ query syntax
var evenSquares =
    from n in numbers
    where n % 2 == 0
    select n * n;

Console.WriteLine(string.Join(", ", evenSquares));

// LINQ method syntax (more common)
var result = numbers
    .Where(n => n % 2 == 0)
    .Select(n => n * n)
    .Where(n => n < 100)
    .OrderByDescending(n => n)
    .ToList();

Console.WriteLine(string.Join(", ", result));

// Aggregates
Console.WriteLine("Sum: " + numbers.Sum());
Console.WriteLine("Average: " + numbers.Average().ToString("F1"));
Console.WriteLine("Max: " + numbers.Max());
Console.WriteLine("Min: " + numbers.Min());

// GroupBy
var words = new[] { "apple", "ant", "banana", "bat", "cherry", "cat" };
var byFirstChar = words
    .GroupBy(w => w[0])
    .Select(g => new { Letter = g.Key, Words = g.ToList(), Count = g.Count() })
    .OrderBy(g => g.Letter);

foreach (var group in byFirstChar)
    Console.WriteLine("  " + group.Letter + ": [" + string.Join(", ", group.Words) + "] (" + group.Count + ")");

// Join
var users = new List<(int Id, string Name)>
{
    (1, "Alice"), (2, "Bob"), (3, "Carol")
};
var orders = new List<(int UserId, string Product, decimal Price)>
{
    (1, "Laptop", 999m), (2, "Phone", 699m), (1, "Keyboard", 129m)
};

var userOrders =
    from u in users
    join o in orders on u.Id equals o.UserId
    select new { u.Name, o.Product, o.Price };

foreach (var uo in userOrders)
    Console.WriteLine("  " + uo.Name + " bought " + uo.Product + " for $" + uo.Price);

// Distinct, Take, Skip, Zip
var nums = new[] { 1, 2, 2, 3, 3, 3, 4 };
Console.WriteLine(string.Join(", ", nums.Distinct()));
Console.WriteLine(string.Join(", ", nums.Take(3)));
Console.WriteLine(string.Join(", ", nums.Skip(2).Take(3)));

var zipped = numbers.Take(5).Zip(words, (n, w) => n + ":" + w);
Console.WriteLine(string.Join(", ", zipped));

// Any, All, Contains, First, Single
Console.WriteLine(numbers.Any(n => n > 15));       // True
Console.WriteLine(numbers.All(n => n > 0));        // True
Console.WriteLine(numbers.First(n => n > 10));     // 11
Console.WriteLine(numbers.FirstOrDefault(n => n > 100));  // 0 (default)`;

const ASYNC = `// -- C# Async/Await & Task Parallel Library --
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

// async method
static async Task<string> FetchUserAsync(int id, CancellationToken ct = default)
{
    await Task.Delay(100, ct);   // simulate network
    if (id <= 0) throw new ArgumentException("Invalid ID: " + id);
    return "User #" + id + ": Alice";
}

static async Task<List<string>> FetchPostsAsync(int userId)
{
    await Task.Delay(200);
    return ["Post 1 by " + userId, "Post 2 by " + userId, "Post 3 by " + userId];
}

// Sequential
static async Task SequentialAsync()
{
    var user  = await FetchUserAsync(1);
    var posts = await FetchPostsAsync(1);
    Console.WriteLine(user + " has " + posts.Count + " posts");
}

// Parallel with Task.WhenAll
static async Task ParallelAsync()
{
    var t1 = FetchUserAsync(1);
    var t2 = FetchUserAsync(2);
    var t3 = FetchUserAsync(3);

    string[] users = await Task.WhenAll(t1, t2, t3);
    Console.WriteLine("Fetched: " + string.Join(", ", users));
}

// Cancellation token
static async Task WithCancellationAsync()
{
    using var cts = new CancellationTokenSource(TimeSpan.FromSeconds(0.05));
    try
    {
        var user = await FetchUserAsync(1, cts.Token);
        Console.WriteLine(user);
    }
    catch (OperationCanceledException)
    {
        Console.WriteLine("Operation was cancelled!");
    }
}

// IAsyncEnumerable -- async stream
static async IAsyncEnumerable<int> GenerateNumbersAsync(int count)
{
    for (int i = 1; i <= count; i++)
    {
        await Task.Delay(50);
        yield return i;
    }
}

// Parallel.ForEachAsync (C# 6 / .NET 6+)
static async Task ParallelForEachAsync()
{
    var ids = Enumerable.Range(1, 10).ToList();
    await Parallel.ForEachAsync(ids,
        new ParallelOptions { MaxDegreeOfParallelism = 4 },
        async (id, ct) =>
        {
            var user = await FetchUserAsync(id, ct);
            Console.WriteLine("  Got: " + user);
        });
}

// Run all examples
await SequentialAsync();
await ParallelAsync();
await WithCancellationAsync();

await foreach (var n in GenerateNumbersAsync(5))
    Console.Write(n + " ");
Console.WriteLine();

await ParallelForEachAsync();
Console.WriteLine("All done!");`;

const PATTERNS = `// -- C# Modern Features: Records, Pattern Matching, Channels --
using System;
using System.Collections.Generic;
using System.Threading.Channels;
using System.Threading.Tasks;

// Discriminated unions via abstract records (C# 9+)
public abstract record Shape;
public record Circle(double Radius) : Shape;
public record Rectangle(double Width, double Height) : Shape;
public record Triangle(double Base, double Height) : Shape;

static double CalculateArea(Shape shape) => shape switch
{
    Circle c                         => Math.PI * c.Radius * c.Radius,
    Rectangle r                      => r.Width * r.Height,
    Triangle t                       => 0.5 * t.Base * t.Height,
    _                                => throw new ArgumentException("Unknown shape")
};

static string DescribeShape(Shape shape) => shape switch
{
    Circle { Radius: > 10 } c        => "Large circle, r=" + c.Radius,
    Circle c                         => "Small circle, r=" + c.Radius,
    Rectangle r when r.Width == r.Height => "Square, side=" + r.Width,
    Rectangle r                      => "Rectangle " + r.Width + "x" + r.Height,
    Triangle t                       => "Triangle b=" + t.Base + " h=" + t.Height,
    _                                => "Unknown"
};

// Channel -- producer/consumer (like Go channels)
static async Task ChannelDemo()
{
    var channel = Channel.CreateBounded<string>(capacity: 5);

    // Producer
    var producer = Task.Run(async () =>
    {
        string[] items = ["apple", "banana", "cherry", "mango", "kiwi"];
        foreach (var item in items)
        {
            await channel.Writer.WriteAsync(item);
            Console.WriteLine("Produced: " + item);
            await Task.Delay(50);
        }
        channel.Writer.Complete();
    });

    // Consumer
    var consumer = Task.Run(async () =>
    {
        await foreach (var item in channel.Reader.ReadAllAsync())
            Console.WriteLine("  Consumed: " + item.ToUpper());
    });

    await Task.WhenAll(producer, consumer);
}

// Span<T> -- zero-allocation slices
static void SpanDemo()
{
    int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    Span<int> slice = arr.AsSpan(2, 5);   // [3,4,5,6,7] -- no copy!
    int sum = 0;
    foreach (var n in slice) sum += n;
    Console.WriteLine("Span sum: " + sum);   // 25
}

// Usage
Shape[] shapes = [new Circle(5), new Rectangle(4, 6), new Circle(15), new Triangle(3, 8)];
foreach (var s in shapes)
    Console.WriteLine(DescribeShape(s) + ": area=" + CalculateArea(s).ToString("F2"));

SpanDemo();
await ChannelDemo();`;

const ASPNET = `// -- ASP.NET Core -- Web API (Minimal API style) --
// Program.cs

using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddDbContext<AppDbContext>(opt =>
    opt.UseInMemoryDatabase("CodeVaultDb"));
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Middleware pipeline
app.UseSwagger();
app.UseSwaggerUI();

// Minimal API endpoints
var users = app.MapGroup("/api/users").WithTags("Users");

users.MapGet("/", async (IUserService svc) =>
    Results.Ok(await svc.GetAllAsync()));

users.MapGet("/{id:int}", async (int id, IUserService svc) =>
    await svc.GetByIdAsync(id) is User u
        ? Results.Ok(u)
        : Results.NotFound(new { message = "User " + id + " not found" }));

users.MapPost("/", async (CreateUserDto dto, IUserService svc) =>
{
    var user = await svc.CreateAsync(dto);
    return Results.Created("/api/users/" + user.Id, user);
});

users.MapPut("/{id:int}", async (int id, UpdateUserDto dto, IUserService svc) =>
    await svc.UpdateAsync(id, dto) is User u
        ? Results.Ok(u)
        : Results.NotFound());

users.MapDelete("/{id:int}", async (int id, IUserService svc) =>
    await svc.DeleteAsync(id)
        ? Results.NoContent()
        : Results.NotFound());

app.Run();

// -- Models --
public record User(int Id, string Name, string Email, string Role = "viewer");
public record CreateUserDto([Required] string Name, [EmailAddress] string Email, string Role = "viewer");
public record UpdateUserDto(string? Name, string? Email, string? Role);

// -- DbContext --
public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<UserEntity> Users => Set<UserEntity>();
}
public class UserEntity { public int Id { get; set; } public string Name { get; set; } = ""; public string Email { get; set; } = ""; public string Role { get; set; } = "viewer"; }

// -- Service --
public interface IUserService
{
    Task<IEnumerable<User>> GetAllAsync();
    Task<User?> GetByIdAsync(int id);
    Task<User> CreateAsync(CreateUserDto dto);
    Task<User?> UpdateAsync(int id, UpdateUserDto dto);
    Task<bool> DeleteAsync(int id);
}
public class UserService(AppDbContext db) : IUserService
{
    public async Task<IEnumerable<User>> GetAllAsync() =>
        (await db.Users.ToListAsync()).Select(e => new User(e.Id, e.Name, e.Email, e.Role));
    public async Task<User?> GetByIdAsync(int id) =>
        await db.Users.FindAsync(id) is UserEntity e ? new User(e.Id, e.Name, e.Email) : null;
    public async Task<User> CreateAsync(CreateUserDto dto)
    {
        var e = new UserEntity { Name = dto.Name, Email = dto.Email, Role = dto.Role };
        db.Users.Add(e); await db.SaveChangesAsync();
        return new User(e.Id, e.Name, e.Email, e.Role);
    }
    public async Task<User?> UpdateAsync(int id, UpdateUserDto dto)
    {
        var e = await db.Users.FindAsync(id);
        if (e is null) return null;
        if (dto.Name is not null) e.Name = dto.Name;
        if (dto.Email is not null) e.Email = dto.Email;
        await db.SaveChangesAsync();
        return new User(e.Id, e.Name, e.Email, e.Role);
    }
    public async Task<bool> DeleteAsync(int id)
    {
        var e = await db.Users.FindAsync(id);
        if (e is null) return false;
        db.Users.Remove(e); await db.SaveChangesAsync(); return true;
    }
}`;

export default function CSharpDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-violet-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg" alt="C#" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight">C#</h1>
              <span className="px-3 py-1 rounded-full bg-violet-500/10 text-violet-400 border border-violet-400/30 text-xs font-bold">v12 / .NET 8</span>
            </div>
            <p className="text-gray-400 text-lg">Microsoft's elegant, modern, multi-paradigm language for the .NET ecosystem.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Strongly Typed", "OOP + Functional", "LINQ", "Async/Await", "Cross-Platform", "Garbage Collected"].map(b => (
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
                <h2 className="text-xl font-bold mb-4">What is C#?</h2>
                <p className="text-gray-300 leading-relaxed">C# (pronounced "C Sharp") was designed by <span className="text-violet-400 font-semibold">Anders Hejlsberg at Microsoft</span> and first released in 2002 with .NET Framework. It's a modern, statically typed, multi-paradigm language combining OOP, functional, and imperative styles. .NET (formerly .NET Core) made C# <span className="text-violet-400 font-semibold">cross-platform</span> — runs on Windows, macOS, and Linux.</p>
                <p className="text-gray-300 leading-relaxed mt-3">C# 12 with .NET 8 brings <span className="text-violet-400 font-semibold">primary constructors, collection expressions, inline arrays, records, pattern matching, async streams, nullable reference types, and default interface implementations</span>. LINQ (Language Integrated Query) lets you query any data source using C# syntax. The ecosystem includes ASP.NET Core, Entity Framework, Blazor, MAUI, Unity, and Azure.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-violet-400 mb-3">✦ C# vs Java</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Properties — get/set accessors built in", "LINQ — query data in language syntax", "async/await — simpler than Java CompletableFuture", "Records — immutable value types (Java 14+)", "Pattern matching — more powerful switch", "Nullable reference types — safer than Java", "Extension methods — add methods to any type", "Delegates & Events — first-class event handling"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-violet-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-violet-400 mb-3">✦ C# 12 Modern Features</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Primary constructors for any class/struct", "Collection expressions: [1, 2, 3]", "Inline arrays — fixed-size array in struct", "Interceptors — compile-time method replacement", "Default lambda parameters", "Experimental: ref readonly parameters", "Pattern matching: list patterns [1, 2, ..]", "Required members — enforce initialization"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-violet-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* INSTALLATION */}
          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing .NET SDK (includes C#)</h3>
              <h4 className="text-violet-400 font-semibold text-sm">Windows</h4>
              <div className="bg-violet-500/10 border border-violet-400/20 rounded-xl p-4 text-sm text-violet-300">
                💡 Download <strong>.NET 8 SDK</strong> from <strong>dotnet.microsoft.com</strong> — or use Visual Studio installer which includes .NET automatically.
              </div>
              <CmdBox cmd="winget install Microsoft.DotNet.SDK.8" />
              <h4 className="text-violet-400 font-semibold text-sm">macOS</h4>
              <CmdBox cmd="brew install dotnet" />
              <CmdBox cmd="dotnet --version" />
              <h4 className="text-violet-400 font-semibold text-sm">Linux (Ubuntu)</h4>
              <CmdBox cmd="sudo apt-get update && sudo apt-get install -y dotnet-sdk-8.0" />
              <CmdBox cmd="dotnet --version" />
              <h4 className="text-violet-400 font-semibold text-sm">Create new projects</h4>
              <CmdBox cmd="dotnet new console -n MyApp" />
              <CmdBox cmd="dotnet new webapi -n MyApi" />
              <CmdBox cmd="dotnet new blazorwasm -n MyBlazor" />
              <CmdBox cmd="dotnet new maui -n MyMobileApp" />
              <h4 className="text-violet-400 font-semibold text-sm">Run & Build</h4>
              <CmdBox cmd="dotnet run" />
              <CmdBox cmd="dotnet build" />
              <CmdBox cmd="dotnet publish -c Release" />
              <h4 className="text-violet-400 font-semibold text-sm">Add NuGet packages</h4>
              <CmdBox cmd="dotnet add package Newtonsoft.Json" />
              <CmdBox cmd="dotnet add package Microsoft.EntityFrameworkCore.SqlServer" />
              <h4 className="text-violet-400 font-semibold text-sm">IDE Options</h4>
              <div className="bg-violet-500/10 border border-violet-400/20 rounded-xl p-4 text-sm text-violet-300">
                💡 <strong>Visual Studio 2022</strong> (Windows/Mac) — most powerful. <strong>VS Code</strong> with C# Dev Kit extension — lightweight, cross-platform. <strong>Rider</strong> by JetBrains — excellent cross-platform alternative.
              </div>
            </div>
          </TabPanel>

          {/* EXAMPLES */}
          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "OOP & Records", "LINQ", "Async & Tasks", "Modern Patterns"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel><CodeBlock code={BASICS} /></TabPanel>
              <TabPanel><CodeBlock code={OOP} /></TabPanel>
              <TabPanel><CodeBlock code={LINQ} /></TabPanel>
              <TabPanel><CodeBlock code={ASYNC} /></TabPanel>
              <TabPanel><CodeBlock code={PATTERNS} /></TabPanel>
            </Tabs>
          </TabPanel>

          {/* LIBRARIES */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["ASP.NET Core", "High-performance web framework for APIs, MVC, Razor Pages, SignalR, gRPC.", "dotnet new webapi", "Web Framework"],
                ["Entity Framework Core", "ORM for SQL Server, SQLite, PostgreSQL, MySQL. Code-first migrations.", "dotnet add package Microsoft.EntityFrameworkCore", "ORM"],
                ["Blazor", "Build interactive web UIs using C# instead of JavaScript. WASM or Server.", "dotnet new blazorwasm", "Web UI"],
                ["MAUI", ".NET Multi-platform App UI — one codebase for iOS, Android, macOS, Windows.", "dotnet new maui", "Cross-Platform UI"],
                ["SignalR", "Real-time web functionality — WebSockets, long polling. Chat, live dashboards.", "dotnet add package Microsoft.AspNetCore.SignalR", "Real-time"],
                ["Serilog", "Structured logging. Writes to files, databases, cloud, 80+ sinks.", "dotnet add package Serilog", "Logging"],
                ["AutoMapper", "Object-to-object mapping. DTO ↔ Entity conversion automatically.", "dotnet add package AutoMapper", "Mapping"],
                ["xUnit / NUnit", "Testing frameworks. xUnit is modern standard, NUnit is feature-rich.", "dotnet add package xunit", "Testing"],
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

          {/* USE CASES */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🌐", title: "Web APIs & Microservices", desc: "ASP.NET Core is one of the fastest web frameworks. Used at Microsoft, Stack Overflow (the whole site!), and enterprise backends worldwide.", companies: ["ASP.NET Core", "gRPC", "SignalR"] },
                { icon: "🎮", title: "Game Development (Unity)", desc: "Unity — the world's most popular game engine — uses C# for all game scripting. Powers games on mobile, PC, console, AR/VR.", companies: ["Unity", "MonoGame", "Stride"] },
                { icon: "📱", title: "Mobile & Desktop (.NET MAUI)", desc: "One C# codebase targets iOS, Android, macOS, and Windows desktop. Successor to Xamarin.", companies: [".NET MAUI", "Xamarin", "Avalonia"] },
                { icon: "☁️", title: "Azure Cloud Services", desc: "C# is the primary language for Azure Functions, Azure SDKs, and cloud-native .NET applications on Microsoft Azure.", companies: ["Azure Functions", "Azure SDK", "Service Bus"] },
                { icon: "🤖", title: "ML.NET & AI", desc: "ML.NET brings machine learning to .NET. Microsoft Semantic Kernel uses C# for LLM orchestration and AI agents.", companies: ["ML.NET", "Semantic Kernel", "ONNX Runtime"] },
                { icon: "🏢", title: "Enterprise Applications", desc: "C# and .NET dominate enterprise Windows development. Used in banking, healthcare, ERP systems globally.", companies: ["WPF", "Windows Forms", "Entity Framework"] },
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

        {/* ASP.NET Bonus */}
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6">
          <h2 className="text-lg font-bold mb-1 text-violet-400">⚡ Bonus: Full ASP.NET Core Minimal API</h2>
          <p className="text-gray-400 text-sm mb-4">Complete CRUD REST API with EF Core, dependency injection, and validation:</p>
          <CodeBlock code={ASPNET} lang="csharp" />
        </div>
      </div>
    </div>
  );
}