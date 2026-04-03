import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck, Terminal } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-blue-500/20 border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-blue-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "typescript" }) {
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
const selCls = "bg-blue-500 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function TypeScriptDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950/40 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">TypeScript</h1>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/30 text-xs font-bold">v5.4+</span>
            </div>
            <p className="text-gray-400 text-lg">JavaScript with superpowers — static types, better tooling, fewer bugs.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Statically Typed", "Compiled to JS", "Open Source (Microsoft)", "Structural Typing", "Type Inference"].map(b => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs>
          <TabList className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-2xl border border-gray-800">
            {["📖 Introduction", "⚙️ Installation", "💻 Examples", "🔧 Config", "🚀 Use Cases"].map((t, i) => (
              <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">🔷 What is TypeScript?</h2>
                <p className="text-gray-300 leading-relaxed">TypeScript is a <span className="text-blue-400 font-semibold">strongly typed superset of JavaScript</span> developed by <span className="text-blue-400 font-semibold">Microsoft</span> and released in 2012. It compiles down to plain JavaScript, meaning it runs anywhere JavaScript runs. TypeScript adds optional static typing, classes, interfaces, generics, decorators, and more.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Every valid JavaScript file is also a valid TypeScript file. TypeScript's type system catches errors at <span className="text-blue-400 font-semibold">compile time</span> rather than runtime, making large codebases more maintainable and refactorable. It has excellent IDE support with autocomplete, type checking, and intelligent refactoring.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-blue-400 mb-3">✦ Why TypeScript?</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Catch bugs at compile time, not in production", "Excellent IntelliSense and autocomplete in IDEs", "Interfaces & types document your code automatically", "Generics for reusable, type-safe components", "Enums for named constant values", "Decorators for metadata annotation (Angular, NestJS)", "Better refactoring — rename safely across codebase", "Used by Angular, NestJS, Deno, Next.js, Prisma"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-blue-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-blue-400 mb-3">JS vs TS comparison</h3>
                  <CodeBlock lang="diff" code={`// JavaScript (no type safety)
function add(a, b) {
  return a + b;
}
add("5", 3); // "53" — no error!

// TypeScript (type safe)
function add(a: number, b: number): number {
  return a + b;
}
add("5", 3); // ❌ Compile error!
add(5, 3);   // ✅ Returns 8`} />
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white mb-2 flex items-center gap-2"><Terminal size={16} className="text-blue-400" /> Setup TypeScript</h3>
              <h4 className="text-blue-400 font-semibold text-sm">1. Install Node.js first (nodejs.org)</h4>
              <h4 className="text-blue-400 font-semibold text-sm">2. Install TypeScript globally</h4>
              <CmdBox cmd="npm install -g typescript" />
              <CmdBox cmd="tsc --version" />
              <h4 className="text-blue-400 font-semibold text-sm">3. Initialize a project</h4>
              <CmdBox cmd="mkdir my-ts-app && cd my-ts-app" />
              <CmdBox cmd="npm init -y" />
              <CmdBox cmd="tsc --init" />
              <h4 className="text-blue-400 font-semibold text-sm">4. Compile & Run</h4>
              <CmdBox cmd="tsc index.ts" />
              <CmdBox cmd="node index.js" />
              <h4 className="text-blue-400 font-semibold text-sm">5. Auto compile (watch mode)</h4>
              <CmdBox cmd="tsc --watch" />
              <h4 className="text-blue-400 font-semibold text-sm">6. Run TS directly with ts-node</h4>
              <CmdBox cmd="npm install -g ts-node" />
              <CmdBox cmd="ts-node index.ts" />
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-sm text-blue-300">
                💡 For React + TypeScript: <code className="font-mono">npm create vite@latest my-app -- --template react-ts</code>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Types & Interfaces", "Generics", "Advanced Types", "Classes", "Utility Types"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`// ── TypeScript Types & Interfaces ──

// Primitive types
let name: string = "CodeVault";
let age: number = 25;
let active: boolean = true;
let nothing: null = null;
let idk: undefined = undefined;

// Arrays
let nums: number[] = [1, 2, 3];
let strs: Array<string> = ["a", "b", "c"];

// Tuple — fixed-length, fixed-type array
let coords: [number, number] = [10.5, 20.3];
let entry: [string, number, boolean] = ["Alice", 30, true];

// Union types
let id: string | number = "abc123";
id = 42; // also valid

// Literal types
type Direction = "north" | "south" | "east" | "west";
type Status = "active" | "inactive" | "pending";
let dir: Direction = "north";

// Interface
interface User {
  readonly id: number;          // can't be reassigned
  name: string;
  email: string;
  age?: number;                 // optional
  role: "admin" | "user";
  address: {
    city: string;
    country: string;
  };
}

// Type alias
type Point = { x: number; y: number };
type ID = string | number;

// Interface extension
interface Admin extends User {
  permissions: string[];
  createdAt: Date;
}

// Using the interface
const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  role: "admin",
  address: { city: "Delhi", country: "India" }
};

// Function types
type Callback = (error: Error | null, result?: string) => void;
const greet = (name: string, greeting: string = "Hello"): string => {
  return \`\${greeting}, \${name}!\`;
};`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── TypeScript Generics ──

// Generic function
function identity<T>(value: T): T {
  return value;
}
const str = identity<string>("hello");
const num = identity<number>(42);
const inferred = identity(true); // T = boolean inferred

// Generic with constraints
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user = { name: "Alice", age: 30, email: "alice@test.com" };
const name = getProperty(user, "name");  // string
const age = getProperty(user, "age");    // number
// getProperty(user, "xyz"); ❌ Error — xyz not in user

// Generic interface
interface Repository<T> {
  findById(id: number): T | undefined;
  findAll(): T[];
  create(item: T): T;
  update(id: number, item: Partial<T>): T | undefined;
  delete(id: number): boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// Generic class
class InMemoryRepo<T extends { id: number }> implements Repository<T> {
  private items: T[] = [];

  findById(id: number) { return this.items.find(i => i.id === id); }
  findAll() { return [...this.items]; }
  create(item: T) { this.items.push(item); return item; }
  update(id: number, updates: Partial<T>) {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return undefined;
    this.items[idx] = { ...this.items[idx], ...updates };
    return this.items[idx];
  }
  delete(id: number) {
    const idx = this.items.findIndex(i => i.id === id);
    if (idx === -1) return false;
    this.items.splice(idx, 1);
    return true;
  }
}

const productRepo = new InMemoryRepo<Product>();
productRepo.create({ id: 1, name: "Laptop", price: 999, inStock: true });
productRepo.update(1, { price: 899, inStock: false });
console.log(productRepo.findAll());`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Advanced TypeScript Types ──

// Intersection types
type Admin = { role: "admin"; permissions: string[] };
type User = { name: string; email: string };
type AdminUser = Admin & User;

// Mapped types
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
type Optional<T> = { [K in keyof T]?: T[K] };
type Nullable<T> = { [K in keyof T]: T[K] | null };

// Conditional types
type IsString<T> = T extends string ? "yes" : "no";
type A = IsString<string>;    // "yes"
type B = IsString<number>;    // "no"

type NonNullable<T> = T extends null | undefined ? never : T;

// Template literal types
type EventName = "click" | "focus" | "blur";
type Handler = \`on\${Capitalize<EventName>}\`;  // "onClick" | "onFocus" | "onBlur"

// Discriminated unions
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "rectangle": return shape.width * shape.height;
    case "triangle": return 0.5 * shape.base * shape.height;
  }
}

// Utility types (built-in)
interface Config {
  host: string;
  port: number;
  debug: boolean;
  apiKey: string;
}

type PartialConfig = Partial<Config>;       // all optional
type RequiredConfig = Required<Config>;     // all required
type ReadonlyConfig = Readonly<Config>;     // all readonly
type PickConfig = Pick<Config, "host" | "port">;  // subset
type OmitConfig = Omit<Config, "apiKey">;   // exclude
type RecordMap = Record<string, Config>;    // key-value map`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── TypeScript Classes ──

// Access modifiers & parameter shorthand
class Person {
  constructor(
    public readonly id: number,
    public name: string,
    protected age: number,
    private _email: string
  ) {}

  get email(): string { return this._email; }
  set email(value: string) {
    if (!value.includes("@")) throw new Error("Invalid email");
    this._email = value;
  }

  greet(): string { return \`Hi, I'm \${this.name}!\`; }
  toString(): string { return \`Person(\${this.name}, \${this.age})\`; }
}

// Abstract class
abstract class Animal {
  constructor(protected name: string) {}
  abstract makeSound(): string;
  move(distance: number = 0): void {
    console.log(\`\${this.name} moved \${distance}m\`);
  }
}

// Implements multiple interfaces
interface Serializable { serialize(): string; }
interface Loggable { log(): void; }

class Dog extends Animal implements Serializable, Loggable {
  constructor(name: string, private breed: string) {
    super(name);
  }
  makeSound() { return "Woof!"; }
  serialize() { return JSON.stringify({ name: this.name, breed: this.breed }); }
  log() { console.log(\`[Dog] \${this.name} (\${this.breed})\`); }
}

// Static members
class MathUtils {
  static readonly PI = 3.14159;
  private constructor() {} // prevent instantiation

  static circleArea(r: number): number { return MathUtils.PI * r * r; }
  static clamp(val: number, min: number, max: number): number {
    return Math.min(Math.max(val, min), max);
  }
}

const dog = new Dog("Rex", "Labrador");
dog.move(10);
console.log(dog.makeSound());
dog.log();
console.log(MathUtils.circleArea(5));`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`// ── Built-in Utility Types ──

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  role: "admin" | "user";
  createdAt: Date;
}

// Partial — all fields optional
type UpdateUserDTO = Partial<User>;

// Required — all fields required
type CompleteUser = Required<User>;

// Readonly — all fields immutable
type ImmutableUser = Readonly<User>;

// Pick — select fields
type PublicUser = Pick<User, "id" | "name" | "role">;
type LoginCredentials = Pick<User, "email" | "password">;

// Omit — exclude fields
type SafeUser = Omit<User, "password">;
type CreateUserDTO = Omit<User, "id" | "createdAt">;

// Record — key-value map
type UserMap = Record<number, User>;
type Config = Record<string, string | number | boolean>;

// Exclude / Extract
type Roles = "admin" | "user" | "moderator" | "guest";
type AdminRoles = Extract<Roles, "admin" | "moderator">;   // "admin" | "moderator"
type NonAdmin = Exclude<Roles, "admin">;                    // "user" | "moderator" | "guest"

// ReturnType / Parameters
function fetchUser(id: number, token: string): Promise<User> {
  return fetch(\`/api/users/\${id}\`).then(r => r.json());
}
type FetchReturn = ReturnType<typeof fetchUser>;     // Promise<User>
type FetchParams = Parameters<typeof fetchUser>;     // [number, string]

// NonNullable
type MaybeUser = User | null | undefined;
type DefiniteUser = NonNullable<MaybeUser>;          // User`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white">tsconfig.json — Key Options</h3>
              <CodeBlock lang="json" code={`{
  "compilerOptions": {
    "target": "ES2022",          // Output JS version
    "module": "ESNext",          // Module system
    "lib": ["ES2022", "DOM"],    // Type libraries
    "outDir": "./dist",          // Output directory
    "rootDir": "./src",          // Source directory
    "strict": true,              // Enable ALL strict checks
    "noImplicitAny": true,       // No implicit any type
    "strictNullChecks": true,    // Null/undefined safety
    "noUnusedLocals": true,      // Error on unused vars
    "noUnusedParameters": true,  // Error on unused params
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,   // All paths must return
    "skipLibCheck": true,        // Skip .d.ts checks
    "esModuleInterop": true,     // CommonJS compatibility
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]         // Path aliases
    }
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules", "dist"]
}`} />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "⚛️", title: "React & Next.js", desc: "TypeScript is the standard for React development. Props typing, hooks, and component contracts are all type-safe.", companies: ["Vercel", "Meta", "Airbnb"] },
                { icon: "🖥️", title: "Backend APIs (NestJS)", desc: "NestJS is a TypeScript-first Node.js framework using decorators and DI. Enterprise-grade backend.", companies: ["Adidas", "Roche", "Decathlon"] },
                { icon: "📱", title: "Mobile (React Native)", desc: "TypeScript for React Native adds type safety to iOS and Android app development.", companies: ["Microsoft", "Shopify", "Coinbase"] },
                { icon: "🗄️", title: "Database ORMs", desc: "Prisma and TypeORM provide fully typed database queries. Know the shape of your DB at compile time.", companies: ["Prisma", "TypeORM"] },
                { icon: "🧩", title: "Design Systems", desc: "Component libraries like Chakra UI, Radix, shadcn/ui are fully TypeScript-typed for safe usage.", companies: ["Vercel", "Radix UI", "shadcn"] },
                { icon: "🏗️", title: "Monorepos", desc: "Nx, Turborepo — TypeScript enables large monorepos with shared types across frontend, backend, mobile.", companies: ["Nrwl", "Vercel", "Microsoft"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-400/30 transition-all">
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