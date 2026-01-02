import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Copy } from "lucide-react";

import "./JavascriptDetails.css"; // ✅ NEW CSS FILE

export default function JavascriptDetails() {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied: " + text);
  };

  return (
    <div className="js-container">
      <h2 className="js-title">JavaScript Details</h2>

      <Tabs>
        <TabList>
          <Tab>Introduction</Tab>
          <Tab>Installation</Tab>
          <Tab>Examples</Tab>
        </TabList>

        {/* INTRO TAB */}
        <TabPanel>
          <p>.JavaScript is used to make web pages dynamic and interactive.</p>
          <p>.It allows you to create dynamically updating content, control multimedia, animate images, and more.</p>
          <p>.JavaScript is a versatile language that runs in browsers and on servers.</p>
        </TabPanel>

        {/* INSTALL TAB */}
        <TabPanel>
          <h2 className="step-title">Install JavaScript (Node.js)</h2>

          <div className="step-box">
            <h3>Step 1: Download Node.js</h3>
            <p>JavaScript runs in browser, but to run it on PC you need Node.js.</p>

            <a
              href="https://nodejs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="download-link"
            >
              https://nodejs.org
            </a>
          </div>

          <div className="step-box">
            <h3>Step 2: Install Node.js</h3>
            <ul>
              <li>Open the file (.msi for Windows / .pkg for Mac)</li>
              <li>Click <b>Next → Next</b></li>
              <li>Accept the terms</li>
              <li>Click <b>Install</b></li>
              <li>Click <b>Finish</b></li>
            </ul>
          </div>

          <div className="step-box">
            <h3>Step 3: Check Installation</h3>

            <div className="cmd-box">
              <code>node -v</code>
              <Copy className="copy-icon" onClick={() => copyText("node -v")} />
            </div>

            <div className="cmd-box">
              <code>npm -v</code>
              <Copy className="copy-icon" onClick={() => copyText("npm -v")} />
            </div>
          </div>

          <div className="step-box">
            <h3>Step 4: Create First JavaScript File</h3>

            <ul>
              <li>Create a folder (example: <b>JS</b>)</li>
              <li>Create a file <b>test.js</b></li>
              <li>Add this code:</li>
            </ul>

            <div className="code-box">
              <code>console.log("Hello JavaScript!")</code>
              <Copy
                className="copy-icon"
                onClick={() => copyText('console.log("Hello JavaScript!")')}
              />
            </div>
          </div>

          <div className="step-box">
            <h3>Step 5: Run JavaScript File</h3>

            <p>Go to folder:</p>

            <div className="cmd-box">
              <code>cd foldername</code>
              <Copy
                className="copy-icon"
                onClick={() => copyText("cd foldername")}
              />
            </div>

            <p>Run your JS file:</p>

            <div className="cmd-box">
              <code>node test.js</code>
              <Copy
                className="copy-icon"
                onClick={() => copyText("node test.js")}
              />
            </div>

            <p><b>Output:</b> Hello JavaScript!</p>
          </div>
        </TabPanel>

        {/* EXAMPLES TAB */}
        <TabPanel>
          <h3>Hello World Example</h3>

          <div className="code-box">
            <code>console.log("Hello World")</code>
            <Copy
              className="copy-icon"
              onClick={() => copyText('console.log("Hello World")')}
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
