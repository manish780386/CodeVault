import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-red-500/20 border border-gray-600 hover:border-red-400 text-gray-300 hover:text-red-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "ruby" }) {
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

const selCls = "bg-red-500 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function RubyDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-red-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg" alt="Ruby" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Ruby</h1>
              <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-400/30 text-xs font-bold">v3.3+</span>
            </div>
            <p className="text-gray-400 text-lg">A language designed for developer happiness. Elegant, expressive, fun.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Interpreted", "Dynamically Typed", "Pure OOP", "Duck Typing", "Metaprogramming"].map(b => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs>
          <TabList className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-2xl border border-gray-800">
            {["📖 Introduction", "⚙️ Installation", "💻 Examples", "📦 Gems", "🚀 Use Cases"].map((t, i) => (
              <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">What is Ruby?</h2>
                <p className="text-gray-300 leading-relaxed">Ruby was created by <span className="text-red-400 font-semibold">Yukihiro "Matz" Matsumoto</span> in Japan and released in 1995. Matz designed Ruby to make programming <span className="text-red-400 font-semibold">"fun and productive"</span> — he blended ideas from Perl, Smalltalk, Eiffel, Ada, and Lisp. Ruby has a philosophy: <em>"least surprise"</em> — the language should behave in a way developers expect.</p>
                <p className="text-gray-300 leading-relaxed mt-3">Everything in Ruby is an object — even numbers and nil. Ruby on Rails, built by David Heinemeier Hansson in 2004, made Ruby world-famous and pioneered the concept of <span className="text-red-400 font-semibold">convention over configuration</span> in web frameworks.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-red-400 mb-3">✦ Ruby Philosophy</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Everything is an object (even nil, true, false)", "Blocks, Procs, Lambdas — first-class functions", "Mixins via modules — multiple inheritance alternative", "Open classes — extend any class anytime", "Metaprogramming — code that writes code", "Symbol vs String distinction", "Duck typing — if it walks like a duck...", "Gems — rich package ecosystem via RubyGems"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-red-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-red-400 mb-3">✦ Famous Uses</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["GitHub — built on Ruby on Rails", "Shopify — world's largest Rails app", "Airbnb — started on Rails", "Twitch — originally Ruby/Rails", "Basecamp — invented Rails", "Hulu — media streaming", "SoundCloud — audio platform", "Zendesk — customer support"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-red-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing Ruby</h3>
              <h4 className="text-red-400 font-semibold text-sm">macOS</h4>
              <CmdBox cmd="brew install rbenv ruby-build" />
              <CmdBox cmd="rbenv install 3.3.0" />
              <CmdBox cmd="rbenv global 3.3.0" />
              <CmdBox cmd="ruby --version" />
              <h4 className="text-red-400 font-semibold text-sm">Linux (Ubuntu)</h4>
              <CmdBox cmd="sudo apt install ruby-full" />
              <CmdBox cmd="ruby --version" />
              <h4 className="text-red-400 font-semibold text-sm">Windows — Use RubyInstaller</h4>
              <div className="bg-red-500/10 border border-red-400/20 rounded-xl p-4 text-sm text-red-300">
                💡 Download <strong>RubyInstaller</strong> from rubyinstaller.org — includes DevKit for native gems.
              </div>
              <h4 className="text-red-400 font-semibold text-sm">Install Bundler & Rails</h4>
              <CmdBox cmd="gem install bundler" />
              <CmdBox cmd="gem install rails" />
              <CmdBox cmd="rails new myapp" />
              <CmdBox cmd="cd myapp && rails server" />
              <h4 className="text-red-400 font-semibold text-sm">Run Ruby file</h4>
              <CmdBox cmd="ruby hello.rb" />
              <h4 className="text-red-400 font-semibold text-sm">Interactive Ruby shell</h4>
              <CmdBox cmd="irb" />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "Blocks & Procs", "OOP & Modules", "Metaprogramming", "Ruby on Rails"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`# ── Ruby Basics ──

# Variables & types
name = "Alice"
age = 25
pi = 3.14159
is_dev = true

# String interpolation
puts "Hello, #{name}! Age: #{age}"
puts name.upcase
puts name.reverse
puts "CodeVault".chars.sort.join

# Symbols (immutable, memory-efficient strings)
status = :active
puts status.class  # Symbol

# Arrays
fruits = ["apple", "banana", "cherry"]
fruits << "mango"           # append
puts fruits.length          # 4
puts fruits.first           # apple
puts fruits.last            # mango
puts fruits.include?("kiwi")  # false

# Array methods (functional)
nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens  = nums.select { |n| n.even? }
odds   = nums.reject { |n| n.even? }
doubled = nums.map { |n| n * 2 }
total  = nums.reduce(:+)
puts "Evens: #{evens}"
puts "Total: #{total}"

# Hash (dictionary)
person = { name: "Bob", age: 30, role: :admin }
person[:email] = "bob@example.com"
person.each { |key, val| puts "#{key}: #{val}" }

# Ranges
(1..5).each { |i| print "#{i} " }
puts
puts (1..100).sum     # 5050
puts ("a".."e").to_a.inspect

# Multiple assignment
a, b, *rest = [1, 2, 3, 4, 5]
puts "a=#{a} b=#{b} rest=#{rest}"

# Conditional
score = 85
grade = case score
  when 90..100 then "A"
  when 80..89  then "B"
  when 70..79  then "C"
  else "F"
end
puts grade  # B`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── Ruby Blocks, Procs & Lambdas ──

# Block — anonymous code chunk passed to method
[1, 2, 3].each do |n|
  puts n * 2
end

# One-liner block with {}
[1, 2, 3].each { |n| puts n * 2 }

# yield — calls the block from inside a method
def repeat(n)
  n.times { yield }
end
repeat(3) { puts "Hello!" }

# Block with return value
def transform(arr)
  arr.map { |x| yield x }
end
result = transform([1, 2, 3]) { |n| n ** 2 }
puts result.inspect  # [1, 4, 9]

# Proc — saved block (not strict about args)
square = Proc.new { |x| x ** 2 }
puts square.call(5)   # 25
puts square.(6)       # 36 (alternative syntax)

# Lambda — strict about args, own return scope
greet = lambda { |name| "Hello, #{name}!" }
greet2 = ->(name) { "Hi #{name}!" }  # stabby lambda
puts greet.call("Alice")
puts greet2.("Bob")

# Difference: Proc vs Lambda
def test_proc
  p = Proc.new { return "from proc" }
  p.call
  "after proc"  # never reached
end

def test_lambda
  l = lambda { return "from lambda" }
  l.call
  "after lambda"  # this IS reached
end

puts test_lambda  # "after lambda"

# &method — convert method to proc
puts [1, -2, 3, -4].map(&method(:puts))
puts ["1","2","3"].map(&method(:Integer)).inspect  # [1, 2, 3]

# Closure — captures surrounding variables
def make_counter(start = 0)
  count = start
  {
    increment: -> { count += 1 },
    decrement: -> { count -= 1 },
    value:     -> { count }
  }
end

counter = make_counter(10)
counter[:increment].call
counter[:increment].call
counter[:decrement].call
puts counter[:value].call  # 11`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── Ruby OOP & Modules ──

module Describable
  def describe
    vars = instance_variables.map { |v| "#{v}=#{instance_variable_get(v)}" }.join(", ")
    "#<#{self.class} #{vars}>"
  end
end

module Comparable2
  def >(other) = (self <=> other) > 0
  def <(other) = (self <=> other) < 0
  def ==(other) = (self <=> other) == 0
end

class Animal
  include Describable

  attr_accessor :name, :sound
  attr_reader :id

  @@count = 0

  def initialize(name, sound)
    @name  = name
    @sound = sound
    @@count += 1
    @id = @@count
  end

  def speak = "#{@name} says #{@sound}!"
  def self.count = @@count   # class method

  def to_s = @name
  def inspect = describe
end

class Dog < Animal
  def initialize(name)
    super(name, "Woof")
    @tricks = []
  end

  def learn(trick)
    @tricks << trick
    self
  end

  def perform
    @tricks.map { |t| "#{@name} performs #{t}!" }
  end
end

dog = Dog.new("Rex")
dog.learn("sit").learn("shake").learn("roll over")
puts dog.perform

puts Animal.count  # 1

# Comparable
class Temperature
  include Comparable
  include Describable
  attr_reader :degrees

  def initialize(degrees) = @degrees = degrees
  def <=>(other) = @degrees <=> other.degrees
  def to_s = "#{@degrees}°"
end

temps = [Temperature.new(30), Temperature.new(15), Temperature.new(25)]
puts temps.sort.map(&:to_s).inspect
puts temps.min
puts temps.max`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── Ruby Metaprogramming ──

# method_missing — catch undefined method calls
class DynamicProxy
  def initialize(target)
    @target = target
  end

  def method_missing(name, *args, &block)
    if @target.respond_to?(name)
      puts "[Proxy] Calling #{name} with #{args.inspect}"
      @target.send(name, *args, &block)
    else
      super
    end
  end

  def respond_to_missing?(name, include_private = false)
    @target.respond_to?(name) || super
  end
end

proxy = DynamicProxy.new([1, 2, 3])
proxy.push(4)
puts proxy.length   # [Proxy] Calling length...

# define_method — dynamically define methods
class API
  %w[get post put patch delete].each do |verb|
    define_method(verb) do |path, **opts|
      puts "#{verb.upcase} #{path} #{opts}"
    end
  end
end

api = API.new
api.get "/users"
api.post "/users", body: { name: "Alice" }

# open class (monkey patching)
class Integer
  def factorial
    return 1 if self <= 1
    self * (self - 1).factorial
  end

  def times_do
    i = 0
    while i < self
      yield i
      i += 1
    end
  end
end

puts 5.factorial    # 120
puts 10.factorial   # 3628800

# DSL via instance_eval
class Config
  attr_reader :settings

  def initialize(&block)
    @settings = {}
    instance_eval(&block) if block
  end

  def method_missing(key, value = nil)
    value ? @settings[key] = value : @settings[key]
  end
end

config = Config.new do
  host "localhost"
  port 3000
  debug true
  database "myapp_development"
end
puts config.settings.inspect`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── Ruby on Rails Quick Reference ──

# Generate new Rails app
# rails new myapp --database=postgresql

# Generate MVC components
# rails generate model User name:string email:string:uniq
# rails generate controller Users index show
# rails generate scaffold Post title:string body:text user:references

# ── Model (app/models/user.rb) ──
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, through: :posts

  validates :name, presence: true, length: { minimum: 2 }
  validates :email, presence: true, uniqueness: true,
                    format: { with: URI::MailTo::EMAIL_REGEXP }

  before_create :set_default_role
  after_create  :send_welcome_email

  scope :active, -> { where(active: true) }
  scope :recent, -> { order(created_at: :desc).limit(10) }

  def full_name = "#{first_name} #{last_name}"

  private

  def set_default_role = self.role ||= "viewer"
  def send_welcome_email = UserMailer.welcome(self).deliver_later
end

# ── Controller (app/controllers/users_controller.rb) ──
class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.active.recent.page(params[:page])
    render json: @users
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
  def set_user = @user = User.find(params[:id])
  def user_params = params.require(:user).permit(:name, :email, :role)
end

# ── Routes (config/routes.rb) ──
# Rails.application.routes.draw do
#   resources :users do
#     resources :posts, shallow: true
#   end
#   namespace :api do
#     namespace :v1 do
#       resources :users, only: [:index, :show, :create]
#     end
#   end
# end

# ── ActiveRecord queries ──
# User.all
# User.find(1)
# User.where(role: "admin").order(:name)
# User.joins(:posts).includes(:comments)
# User.count, User.average(:age), User.sum(:points)`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["Rails", "The legendary full-stack web framework. Convention over configuration.", "gem install rails", "Web Framework"],
                ["Sinatra", "Lightweight DSL for web apps. Like Flask for Ruby.", "gem install sinatra", "Micro Web"],
                ["RSpec", "Behavior-driven development testing framework for Ruby.", "gem install rspec", "Testing"],
                ["Devise", "Authentication solution for Rails — login, registration, sessions.", "gem 'devise'", "Auth"],
                ["Sidekiq", "Background job processing using Redis. Multi-threaded.", "gem 'sidekiq'", "Jobs"],
                ["Pundit", "Authorization via plain Ruby objects. Policy-based access control.", "gem 'pundit'", "Authorization"],
                ["Faraday", "HTTP client library with middleware stack. Like Axios for Ruby.", "gem install faraday", "HTTP"],
                ["Sequel", "Database toolkit for Ruby. More powerful than ActiveRecord for complex SQL.", "gem install sequel", "ORM"],
              ].map(([name, desc, cmd, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-red-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-300 border border-red-500/20">{use}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 leading-relaxed">{desc}</p>
                  <CmdBox cmd={cmd} />
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🌐", title: "Web Apps with Rails", desc: "Ruby on Rails powers Shopify, GitHub, Airbnb, Twitch. Convention over configuration makes full-stack development extremely fast.", companies: ["Shopify", "GitHub", "Airbnb"] },
                { icon: "🤖", title: "Scripting & Automation", desc: "Ruby's elegant syntax makes it great for automation scripts, rake tasks, data processing, and CLI tools.", companies: ["Rake", "Thor", "TTY Toolkit"] },
                { icon: "🧪", title: "Testing & BDD", desc: "Ruby and RSpec popularized BDD (Behavior Driven Development). Cucumber acceptance tests read like English sentences.", companies: ["RSpec", "Minitest", "Cucumber"] },
                { icon: "🔧", title: "DevOps & Config", desc: "Chef and Puppet — two major configuration management tools — are written in Ruby. Vagrant uses a Ruby DSL.", companies: ["Chef", "Puppet", "Vagrant"] },
                { icon: "🎮", title: "Game Dev (RPG Maker)", desc: "RPG Maker uses Ruby Script (RGSS) for game logic. A huge indie game community built on Ruby scripting.", companies: ["RPG Maker", "Gosu"] },
                { icon: "💎", title: "Gem Development", desc: "RubyGems.org hosts 170k+ gems. Creating and publishing gems is easy — the ecosystem is rich and mature.", companies: ["RubyGems", "Bundler"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-red-500/30 transition-all">
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