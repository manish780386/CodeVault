import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  const handle = () => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <button onClick={handle} className="flex items-center gap-1 px-3 py-1 rounded-lg bg-gray-700 hover:bg-emerald-500/20 border border-gray-600 hover:border-emerald-400 text-gray-300 hover:text-emerald-400 text-xs transition-all">
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
function CodeBlock({ code, lang = "bash" }) {
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

const selCls = "bg-emerald-600 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function ShellDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-emerald-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg" alt="Bash" className="w-20 h-14 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">Shell / Bash</h1>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-400/30 text-xs font-bold">Bash 5+</span>
            </div>
            <p className="text-gray-400 text-lg">The language of the terminal. Automate everything on Linux & macOS.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Scripting", "Automation", "DevOps", "System Admin", "POSIX Standard"].map(b => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs>
          <TabList className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-2xl border border-gray-800">
            {["📖 Introduction", "⚙️ Setup", "💻 Examples", "🔧 Scripting", "🚀 DevOps"].map((t, i) => (
              <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">What is Shell / Bash?</h2>
                <p className="text-gray-300 leading-relaxed">The <span className="text-emerald-400 font-semibold">Unix shell</span> is a command-line interpreter and scripting language. Bash (Bourne Again SHell) was written by <span className="text-emerald-400 font-semibold">Brian Fox in 1989</span> for the GNU Project as a free replacement for the Bourne Shell. Bash is the default shell on most Linux distributions and was the default on macOS until Catalina (now Zsh).</p>
                <p className="text-gray-300 leading-relaxed mt-3">Shell scripting is essential for <span className="text-emerald-400 font-semibold">DevOps, system administration, CI/CD pipelines, and automation</span>. Every Docker file, GitHub Actions workflow, and deployment script uses shell commands. Knowing Bash makes you dramatically more productive as a developer.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-emerald-400 mb-3">✦ Bash vs Other Shells</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["sh — Original POSIX shell, minimal", "bash — Most common, feature-rich", "zsh — macOS default, plugin ecosystem", "fish — User-friendly, auto-suggestions", "dash — Faster than bash, POSIX only", "ksh — Korn shell, professional Unix", "csh/tcsh — C-style syntax, BSD Unix", "PowerShell — Windows + cross-platform"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-emerald-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-emerald-400 mb-3">✦ Essential Use Cases</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["CI/CD pipelines (GitHub Actions, Jenkins)", "Docker build scripts & Dockerfiles", "Server provisioning & configuration", "Log monitoring & alerting", "File processing & data transformation", "Scheduled tasks via cron jobs", "Git hooks (pre-commit, post-merge)", "Database backup automation"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-emerald-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Setting Up Shell Environment</h3>
              <h4 className="text-emerald-400 font-semibold text-sm">Check your shell</h4>
              <CmdBox cmd="echo $SHELL" />
              <CmdBox cmd="bash --version" />
              <h4 className="text-emerald-400 font-semibold text-sm">macOS — Install latest Bash via Homebrew</h4>
              <CmdBox cmd="brew install bash" />
              <CmdBox cmd='echo "/opt/homebrew/bin/bash" | sudo tee -a /etc/shells' />
              <CmdBox cmd="chsh -s /opt/homebrew/bin/bash" />
              <h4 className="text-emerald-400 font-semibold text-sm">Linux — Bash is pre-installed</h4>
              <CmdBox cmd="sudo apt install bash-completion" />
              <h4 className="text-emerald-400 font-semibold text-sm">Windows — Git Bash or WSL</h4>
              <div className="bg-emerald-500/10 border border-emerald-400/20 rounded-xl p-4 text-sm text-emerald-300">
                💡 On Windows, use <strong>Git Bash</strong> (from git-scm.com) or <strong>WSL2</strong> (Windows Subsystem for Linux) for a full Linux shell environment.
              </div>
              <CmdBox cmd="wsl --install" />
              <h4 className="text-emerald-400 font-semibold text-sm">Make a script executable</h4>
              <CmdBox cmd="chmod +x script.sh" />
              <CmdBox cmd="./script.sh" />
              <h4 className="text-emerald-400 font-semibold text-sm">Run script with specific shell</h4>
              <CmdBox cmd="bash script.sh" />
              <CmdBox cmd="sh script.sh" />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "Variables & Arrays", "Functions", "File Operations", "Process & Jobs"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── Bash Basics ──
set -euo pipefail   # strict mode: exit on error, unset vars, pipe fails

# echo vs printf
echo "Hello, World!"
printf "Hello, %s! You are %d years old.\\n" "Alice" 25

# Comments
# This is a comment

# Reading input
read -p "Enter your name: " username
echo "Welcome, $username!"

# Conditionals
score=85
if [[ $score -ge 90 ]]; then
  echo "Grade: A"
elif [[ $score -ge 80 ]]; then
  echo "Grade: B"
elif [[ $score -ge 70 ]]; then
  echo "Grade: C"
else
  echo "Grade: F"
fi

# String comparison
lang="bash"
if [[ "$lang" == "bash" ]]; then
  echo "You chose bash!"
fi

# File tests
if [[ -f "/etc/hostname" ]]; then
  echo "File exists: $(cat /etc/hostname)"
fi
if [[ -d "/tmp" ]]; then
  echo "/tmp is a directory"
fi

# Loops
for i in {1..5}; do
  echo "Count: $i"
done

for fruit in apple banana cherry; do
  echo "Fruit: $fruit"
done

# C-style for loop
for ((i=0; i<5; i++)); do
  printf "%d " $i
done
echo

# While loop
count=0
while [[ $count -lt 5 ]]; do
  echo "While: $count"
  ((count++))
done

# Case statement
day="Monday"
case $day in
  Monday|Tuesday|Wednesday|Thursday|Friday)
    echo "Weekday";;
  Saturday|Sunday)
    echo "Weekend";;
  *)
    echo "Unknown";;
esac`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── Variables & Arrays ──

# Variables — no spaces around =
NAME="CodeVault"
AGE=25
PI=3.14

# Readonly
readonly VERSION="1.0.0"

# Command substitution
TODAY=$(date +%Y-%m-%d)
HOSTNAME=$(hostname)
FILE_COUNT=$(ls -1 | wc -l)

echo "Today: $TODAY"
echo "Host: $HOSTNAME"
echo "Files in current dir: $FILE_COUNT"

# String manipulation
STR="Hello, World!"
echo "\${#STR}"              # length: 13
echo "\${STR:7:5}"           # substring: World
echo "\${STR/World/Bash}"    # replace: Hello, Bash!
echo "\${STR,,}"             # lowercase: hello, world!
echo "\${STR^^}"             # uppercase: HELLO, WORLD!

# Default values
: "\${EDITOR:=nano}"         # set default if unset
echo "Editor: $EDITOR"

# Arithmetic
A=10; B=3
echo $((A + B))   # 13
echo $((A * B))   # 30
echo $((A / B))   # 3
echo $((A % B))   # 1
echo $((A ** B))  # 1000
let "C = A + B"   # another way

# Indexed arrays
fruits=("apple" "banana" "cherry" "mango")
echo "\${fruits[0]}"        # apple (0-indexed)
echo "\${fruits[-1]}"       # mango (last element)
echo "\${fruits[@]}"        # all elements
echo "\${#fruits[@]}"       # length: 4
fruits+=("kiwi")           # append
unset fruits[1]            # remove banana

for fruit in "\${fruits[@]}"; do
  echo "  - $fruit"
done

# Associative arrays (bash 4+)
declare -A person
person["name"]="Alice"
person["age"]=30
person["role"]="developer"

echo "\${person["name"]}"    # Alice
echo "\${!person[@]}"        # keys: name age role
echo "\${person[@]}"         # values

for key in "\${!person[@]}"; do
  printf "  %-10s = %s\\n" "$key" "\${person[$key]}"
done`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── Bash Functions ──

# Basic function
greet() {
  local name="$1"          # $1 = first argument, local = scoped
  local lang="\${2:-bash}"  # default value if not provided
  echo "Hello, $name! Welcome to $lang!"
}

greet "Alice"
greet "Bob" "Linux"

# Return values (exit codes 0=success, 1-255=error)
is_even() {
  [[ $(( $1 % 2 )) -eq 0 ]]  # implicit return of test exit code
}

if is_even 4; then echo "4 is even"; fi
if ! is_even 7; then echo "7 is odd"; fi

# Return string via echo
get_extension() {
  local file="$1"
  echo "\${file##*.}"   # strip longest match from start
}

ext=$(get_extension "script.sh")
echo "Extension: $ext"   # sh

# Recursive function
factorial() {
  local n=$1
  if [[ $n -le 1 ]]; then echo 1; return; fi
  echo $(( n * $(factorial $((n - 1))) ))
}
echo "5! = $(factorial 5)"   # 120

# Error handling function
die() {
  echo "ERROR: $*" >&2   # write to stderr
  exit 1
}

check_file() {
  local file="$1"
  [[ -f "$file" ]] || die "File not found: $file"
  [[ -r "$file" ]] || die "File not readable: $file"
  echo "File OK: $file"
}

# Usage: check_file "myfile.txt"

# Function with named parameters using getopts
create_user() {
  local name="" email="" role="viewer"
  while getopts "n:e:r:" opt; do
    case $opt in
      n) name="$OPTARG";;
      e) email="$OPTARG";;
      r) role="$OPTARG";;
    esac
  done
  echo "Creating user: name=$name email=$email role=$role"
}

create_user -n "Alice" -e "alice@example.com" -r "admin"

# Trap — cleanup on exit
cleanup() {
  echo "Cleaning up temp files..."
  rm -f /tmp/myscript_*
}
trap cleanup EXIT INT TERM`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── File Operations & Text Processing ──

# File reading
while IFS= read -r line; do
  echo "Line: $line"
done < "/etc/hostname"

# Read CSV
while IFS=',' read -r name age role; do
  printf "Name: %-10s Age: %-4s Role: %s\\n" "$name" "$age" "$role"
done < "users.csv"

# Writing files
cat > /tmp/output.txt << 'EOF'
Hello from bash heredoc!
This is line 2.
EOF

echo "More content" >> /tmp/output.txt   # append

# Find files
find . -name "*.sh" -type f -newer /tmp/ref
find /var/log -name "*.log" -mtime -7   # modified in last 7 days
find . -size +1M -type f               # files > 1MB

# grep — search text
grep -r "function" --include="*.sh" .
grep -n "TODO" *.py              # show line numbers
grep -c "error" logfile.txt      # count matches
grep -v "DEBUG" logfile.txt      # invert match

# sed — stream editor
sed 's/foo/bar/g' file.txt               # replace all
sed -n '5,10p' file.txt                  # print lines 5-10
sed '/^#/d' config.txt                   # delete comment lines
sed -i.bak 's/old/new/g' file.txt       # in-place with backup

# awk — column processing
awk '{print $1}' file.txt               # first column
awk -F',' '{print $2}' data.csv         # CSV second column
awk 'NR > 1 {sum += $3} END {print sum}' data.csv  # sum column 3

# File operations
cp -r source/ destination/
mv oldname.txt newname.txt
rm -rf /tmp/old_data/
mkdir -p /var/app/logs/2024

# Disk usage
du -sh /var/log/*   # human-readable sizes
df -h               # disk free

# Archives
tar -czf archive.tar.gz directory/    # create
tar -xzf archive.tar.gz               # extract
zip -r archive.zip directory/
unzip archive.zip -d output/`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── Process Management & Background Jobs ──

# Run in background
long_task() { sleep 5; echo "Done!"; }
long_task &
BG_PID=$!
echo "Started background task PID: $BG_PID"

# Wait for background job
wait $BG_PID
echo "Background task finished"

# Process substitution
diff <(ls dir1/) <(ls dir2/)

# Parallel execution
run_parallel() {
  local pids=()
  for i in {1..5}; do
    (sleep 1; echo "Worker $i done") &
    pids+=($!)
  done
  # Wait for all
  for pid in "\${pids[@]}"; do
    wait "$pid"
  done
  echo "All workers done"
}
run_parallel

# Check if process running
is_running() {
  pgrep -x "$1" > /dev/null 2>&1
}
if is_running "nginx"; then echo "Nginx is running"; fi

# Kill process
# kill -9 $PID
# pkill -f "python script.py"

# Pipe examples
ps aux | grep nginx | grep -v grep | awk '{print $2}'

# xargs — build command from stdin
find . -name "*.log" | xargs wc -l      # count lines in all logs
find . -name "*.tmp" | xargs rm -f      # delete all tmp files
cat urls.txt | xargs -P 4 -I{} curl -O {}  # parallel downloads

# Time a command
time find / -name "*.conf" 2>/dev/null

# Resource limits
ulimit -n 65536    # max open files
ulimit -u 1024     # max processes

# Environment
export MY_VAR="production"
printenv MY_VAR
env | grep MY_

# Signals
signal_handler() {
  echo "Caught SIGINT! Cleaning up..."
  exit 0
}
trap signal_handler SIGINT SIGTERM

echo "Script running. Press Ctrl+C to stop."
while true; do sleep 1; done`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Deployment Script", "CI/CD Pipeline", "Backup Script", "Log Monitor"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── Production Deployment Script ──
set -euo pipefail

APP_NAME="myapp"
APP_DIR="/var/www/$APP_NAME"
REPO_URL="git@github.com:org/$APP_NAME.git"
BRANCH="\${1:-main}"
RELEASE_DIR="$APP_DIR/releases/$(date +%Y%m%d%H%M%S)"
SHARED_DIR="$APP_DIR/shared"
CURRENT_LINK="$APP_DIR/current"
KEEP_RELEASES=5

log() { echo "[$(date '+%H:%M:%S')] $*"; }
die() { log "ERROR: $*" >&2; exit 1; }

log "Starting deployment of $APP_NAME ($BRANCH)"

# Pre-checks
[[ -d "$APP_DIR" ]] || die "App directory doesn't exist: $APP_DIR"
command -v git  > /dev/null || die "git not found"
command -v node > /dev/null || die "node not found"

# Clone release
log "Cloning release from $BRANCH..."
git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$RELEASE_DIR"

# Link shared dirs (persistent between deployments)
log "Linking shared directories..."
mkdir -p "$SHARED_DIR/uploads" "$SHARED_DIR/logs"
ln -sfn "$SHARED_DIR/uploads" "$RELEASE_DIR/public/uploads"
ln -sfn "$SHARED_DIR/logs"    "$RELEASE_DIR/logs"
ln -sfn "$SHARED_DIR/.env"    "$RELEASE_DIR/.env"

# Install dependencies
log "Installing dependencies..."
cd "$RELEASE_DIR"
npm ci --production

# Build
log "Building assets..."
npm run build

# Database migrations
log "Running migrations..."
npm run migrate

# Switch current symlink (atomic!)
log "Activating release..."
ln -sfn "$RELEASE_DIR" "$CURRENT_LINK"

# Reload (graceful — no downtime)
log "Reloading application..."
sudo systemctl reload nginx
pm2 reload "$APP_NAME" --update-env

# Cleanup old releases
log "Cleaning old releases..."
ls -1dt "$APP_DIR/releases"/*/ | tail -n "+$((KEEP_RELEASES + 1))" | xargs rm -rf

log "✅ Deployment complete! Release: $RELEASE_DIR"`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── CI/CD Pipeline Script (GitHub Actions style) ──
set -euo pipefail

STAGE="\${CI_STAGE:-test}"
NODE_ENV="\${NODE_ENV:-test}"

log()  { echo "▶ $*"; }
pass() { echo "✅ $*"; }
fail() { echo "❌ $*" >&2; exit 1; }
section() { echo; echo "══════════ $* ══════════"; }

section "Environment"
log "Stage: $STAGE"
log "Branch: \${GITHUB_REF_NAME:-local}"
log "Node: $(node --version)"
log "npm: $(npm --version)"

section "Install"
npm ci
pass "Dependencies installed"

section "Lint"
npm run lint || fail "Lint failed"
pass "Lint passed"

section "Type Check"
npx tsc --noEmit || fail "Type errors found"
pass "Types OK"

section "Test"
npm test -- --coverage --ci || fail "Tests failed"

# Parse coverage from output
COVERAGE=$(cat coverage/coverage-summary.json | python3 -c "
import json, sys
d = json.load(sys.stdin)
print(d['total']['lines']['pct'])
")
log "Line coverage: $COVERAGE%"

if (( $(echo "$COVERAGE < 80" | bc -l) )); then
  fail "Coverage $COVERAGE% below threshold 80%"
fi
pass "Coverage $COVERAGE% >= 80%"

section "Build"
npm run build || fail "Build failed"
BUNDLE_SIZE=$(du -sh dist/ | cut -f1)
log "Bundle size: $BUNDLE_SIZE"
pass "Build successful"

section "Security Audit"
npm audit --audit-level=high || fail "High severity vulnerabilities found"
pass "Security audit passed"

if [[ "$STAGE" == "deploy" ]]; then
  section "Deploy"
  bash scripts/deploy.sh "$GITHUB_REF_NAME"
  pass "Deployed to production"
fi

section "Summary"
pass "All checks passed! ✨"
log "Build time: \${SECONDS}s"`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── Automated Backup Script ──
set -euo pipefail

# Config
DB_NAME="\${DB_NAME:-myapp_prod}"
DB_USER="\${DB_USER:-postgres}"
BACKUP_DIR="/backups"
S3_BUCKET="\${S3_BUCKET:-my-backups-bucket}"
KEEP_LOCAL_DAYS=7
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/\${DB_NAME}_\${TIMESTAMP}.sql.gz"
LOG_FILE="/var/log/backup.log"

log() {
  local msg="[$(date '+%Y-%m-%d %H:%M:%S')] $*"
  echo "$msg"
  echo "$msg" >> "$LOG_FILE"
}

notify_slack() {
  local msg="$1"
  if [[ -n "\${SLACK_WEBHOOK:-}" ]]; then
    curl -s -X POST -H 'Content-type: application/json' \
      --data "{\"text\": \"$msg\"}" "$SLACK_WEBHOOK"
  fi
}

backup_database() {
  log "Starting PostgreSQL backup: $DB_NAME"
  mkdir -p "$BACKUP_DIR"

  pg_dump -U "$DB_USER" "$DB_NAME" | gzip > "$BACKUP_FILE"
  local size=$(du -sh "$BACKUP_FILE" | cut -f1)
  log "Database backup created: $BACKUP_FILE ($size)"
}

upload_to_s3() {
  log "Uploading to S3: s3://$S3_BUCKET/db/"
  aws s3 cp "$BACKUP_FILE" "s3://$S3_BUCKET/db/" \
    --storage-class STANDARD_IA \
    --metadata "db=$DB_NAME,timestamp=$TIMESTAMP"
  log "Upload complete"
}

backup_files() {
  local src="/var/www/myapp/shared/uploads"
  local dest="s3://$S3_BUCKET/uploads/"
  log "Syncing uploads to S3..."
  aws s3 sync "$src" "$dest" --delete
  log "Files synced"
}

cleanup_old_backups() {
  log "Removing local backups older than $KEEP_LOCAL_DAYS days..."
  find "$BACKUP_DIR" -name "*.sql.gz" -mtime "+$KEEP_LOCAL_DAYS" -delete
  log "Cleanup done"
}

verify_backup() {
  log "Verifying backup integrity..."
  gunzip -t "$BACKUP_FILE" || {
    log "ERROR: Backup file is corrupt!"
    notify_slack "⚠️ Backup FAILED for $DB_NAME at $TIMESTAMP"
    exit 1
  }
  log "Backup verified OK"
}

main() {
  log "=== Backup started ==="
  backup_database
  verify_backup
  upload_to_s3
  backup_files
  cleanup_old_backups
  notify_slack "✅ Backup successful: $DB_NAME ($TIMESTAMP)"
  log "=== Backup completed in \${SECONDS}s ==="
}

main "$@"`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`#!/usr/bin/env bash
# ── Real-Time Log Monitor & Alerter ──
set -euo pipefail

LOG_FILE="\${1:-/var/log/nginx/error.log}"
ALERT_THRESHOLD=10      # errors per minute before alerting
CHECK_INTERVAL=60       # seconds between checks
SLACK_WEBHOOK="\${SLACK_WEBHOOK:-}"
EMAIL_TO="\${ALERT_EMAIL:-admin@example.com}"

declare -A error_counts
declare -i total_alerts=0

log() { printf "[%s] %s\\n" "$(date '+%H:%M:%S')" "$*"; }

send_alert() {
  local severity="$1" message="$2"
  log "ALERT [$severity]: $message"

  # Slack notification
  if [[ -n "$SLACK_WEBHOOK" ]]; then
    local emoji="🔴"
    [[ "$severity" == "WARNING" ]] && emoji="🟡"
    curl -s -X POST "$SLACK_WEBHOOK" \
      -H 'Content-type: application/json' \
      -d "{\"text\": \"$emoji *[$severity]* $message\"}"
  fi

  # Email notification
  if command -v mail > /dev/null; then
    echo "$message" | mail -s "[$severity] Log Alert: $LOG_FILE" "$EMAIL_TO"
  fi

  ((total_alerts++))
}

analyze_errors() {
  local period_errors
  period_errors=$(tail -n 1000 "$LOG_FILE" | \
    awk -v threshold="$(date -d '1 minute ago' '+%Y/%m/%d %H:%M')" \
    '$0 >= threshold {count++} END {print count+0}')

  log "Errors in last minute: $period_errors"

  if (( period_errors >= ALERT_THRESHOLD )); then
    send_alert "CRITICAL" "High error rate: $period_errors errors/min in $LOG_FILE"
  fi
}

watch_patterns() {
  local line="$1"
  local patterns=(
    "FATAL:CRITICAL"
    "out of memory:CRITICAL"
    "disk full:CRITICAL"
    "connection refused:WARNING"
    "timeout:WARNING"
    "404:INFO"
  )

  for pattern_entry in "\${patterns[@]}"; do
    local pattern="\${pattern_entry%%:*}"
    local severity="\${pattern_entry##*:}"

    if echo "$line" | grep -qi "$pattern"; then
      if [[ "$severity" != "INFO" ]]; then
        send_alert "$severity" "Pattern '$pattern' detected: $(echo "$line" | head -c 200)"
      fi
    fi
  done
}

monitor() {
  log "Monitoring: $LOG_FILE"
  log "Alert threshold: $ALERT_THRESHOLD errors/min"

  [[ -f "$LOG_FILE" ]] || { log "ERROR: Log file not found: $LOG_FILE"; exit 1; }

  local last_check=$SECONDS

  tail -f "$LOG_FILE" | while IFS= read -r line; do
    watch_patterns "$line"

    if (( SECONDS - last_check >= CHECK_INTERVAL )); then
      analyze_errors
      last_check=$SECONDS
    fi
  done
}

monitor`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "🚀", title: "CI/CD Pipelines", desc: "Every CI/CD system (GitHub Actions, Jenkins, CircleCI, GitLab CI) uses shell scripts. Bash is the glue that holds pipelines together.", companies: ["GitHub Actions", "Jenkins", "GitLab CI"] },
                { icon: "🐳", title: "Docker & Containers", desc: "Dockerfiles use shell commands. Entrypoint scripts, healthchecks, and init containers are all shell scripts.", companies: ["Docker", "Kubernetes", "Podman"] },
                { icon: "🖥️", title: "Server Administration", desc: "Configure Linux servers, manage services, set up firewalls, monitor disk usage, automate user creation.", companies: ["systemd", "cron", "logrotate"] },
                { icon: "☁️", title: "Cloud Automation", desc: "AWS CLI, GCP SDK, Azure CLI are all driven by shell scripts. Infrastructure provisioning and management.", companies: ["AWS CLI", "Terraform", "Ansible"] },
                { icon: "🔄", title: "Data Processing", desc: "Process log files, transform CSVs, batch rename files, grep patterns across millions of lines.", companies: ["awk", "sed", "grep"] },
                { icon: "🔒", title: "Security & Auditing", desc: "Security scans, certificate renewal (certbot), SSH key management, audit log analysis.", companies: ["certbot", "fail2ban", "auditd"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
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