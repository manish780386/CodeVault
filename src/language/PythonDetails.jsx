import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Copy } from "lucide-react";
import "./PythonDetails.css";

export default function PythonDetails() {

  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  return (
    <div className="py-wrapper">
      <h1 className="py-title">🐍 Python Details</h1>

      <Tabs>
        {/* ---------- MAIN TABS ---------- */}
        <TabList>
          <Tab>Introduction</Tab>
          <Tab>Installation</Tab>
          <Tab>Example</Tab>
          <Tab>Libraries</Tab>
        </TabList>

        {/* ---------- INTRO ---------- */}
        <TabPanel>
          <div className="py-card">
            <h2>What is Python?</h2>
            <p>
              Python is a high-level, interpreted, and general-purpose programming
              language. It is known for its simple syntax, readability, and huge
              collection of libraries.
            </p>

            <h3>Key Features</h3>
            <ul>
              <li>Easy to learn and write</li>
              <li>Free & Open Source</li>
              <li>Huge community support</li>
              <li>Used in AI, ML, Web, Data Science, Automation</li>
            </ul>
          </div>
        </TabPanel>

        {/* ---------- INSTALLATION ---------- */}
        <TabPanel>
          <div className="py-card">
            <h2>Python Installation (Step-by-Step)</h2>

            <h3> Windows</h3>
            <ol>
              <li>Go to <b>python.org</b> → Downloads</li>
              <li>Download latest Python version</li>
              <li>Run installer</li>
              <li><b> Check "Add Python to PATH"</b></li>
              <li>Click Install Now</li>
            </ol>

            <div className="cmd-box">
              <code>python --version</code>
              <button onClick={() => copyText("python --version")}>
                <Copy size={16} />
              </button>
            </div>

            <h3> macOS</h3>
            <div className="cmd-box">
              <code>brew install python</code>
              <button onClick={() => copyText("brew install python")}>
                <Copy size={16} />
              </button>
            </div>

            <h3> Linux (Ubuntu)</h3>
            <div className="cmd-box">
              <code>sudo apt install python3 python3-pip</code>
              <button onClick={() => copyText("sudo apt install python3 python3-pip")}>
                <Copy size={16} />
              </button>
            </div>

            <h3> Verify Installation</h3>
            <div className="cmd-box">
              <code>python --version</code>
              <button onClick={() => copyText("python --version")}>
                <Copy size={16} />
              </button>
            </div>
          </div>
        </TabPanel>

        {/* ---------- EXAMPLE ---------- */}
        <TabPanel>
          <div className="py-card">
            <h2>Python Example</h2>
            <pre className="py-code">
print("Hello, Python!")

            </pre>
            <button
              className="copy-btn"
              onClick={() =>
                copyText(
`print("Hello, Python!")
`
                )
              }
            >
              <Copy size={16} /> Copy Code
            </button>
          </div>
        </TabPanel>

        {/* ---------- LIBRARIES ---------- */}
        <TabPanel>
          <Tabs>
            <TabList>
              <Tab>Pandas</Tab>
              <Tab>NumPy</Tab>
              <Tab>Flask</Tab>
              <Tab>Django</Tab>
            </TabList>

            <TabPanel>
              <div className="py-card">
                <h2> Pandas</h2>
                <p>Used for data analysis and data manipulation.</p>
                <div className="cmd-box">
                  <code>pip install pandas</code>
                  <button onClick={() => copyText("pip install pandas")}>
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="py-card">
                <h2> NumPy</h2>
                <p>Used for numerical computing and arrays.</p>
                <div className="cmd-box">
                  <code>pip install numpy</code>
                  <button onClick={() => copyText("pip install numpy")}>
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="py-card">
                <h2> Flask</h2>
                <p>Lightweight web framework for Python.</p>
                <div className="cmd-box">
                  <code>pip install flask</code>
                  <button onClick={() => copyText("pip install flask")}>
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="py-card">
                <h2> Django</h2>
                <p>Full-stack web framework.</p>
                <div className="cmd-box">
                  <code>pip install django</code>
                  <button onClick={() => copyText("pip install django")}>
                    <Copy size={16} />
                  </button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </TabPanel>
      </Tabs>
    </div>
  );
}
