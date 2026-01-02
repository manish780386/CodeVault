import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function HTMLDetails() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold mb-6 text-blue-600">HTML Language</h1>

      <Tabs>
        {/* ==== TAB HEADERS ==== */}
        <TabList className="flex gap-4 border-b pb-2">

          <Tab className="px-4 py-2 bg-green-200 rounded-md cursor-pointer hover:bg-green-300 focus:outline-none">
            Introduction
          </Tab>

          <Tab className="px-4 py-2 bg-green-200 rounded-md cursor-pointer hover:bg-green-300 focus:outline-none">
            Install
          </Tab>

          <Tab className="px-4 py-2 bg-green-200 rounded-md cursor-pointer hover:bg-green-300 focus:outline-none">
            Example
          </Tab>
        </TabList>

        {/* ==== INTRO TAB ==== */}
        <TabPanel>
          <h2 className="text-2xl font-semibold mt-6 mb-3">HTML Introduction</h2>

          <p className="text-lg leading-relaxed">
            HTML (HyperText Markup Language) is the standard language used to
            create and structure websites.  
            It uses a series of elements such as:
          </p>

          <ul className="list-disc ml-6 mt-3 text-lg">
            <li>Headings (h1–h6)</li>
            <li>Paragraphs (p)</li>
            <li>Images (img)</li>
            <li>Links (a)</li>
            <li>Forms (form)</li>
          </ul>
        </TabPanel>

        {/* ==== INSTALL TAB ==== */}
        <TabPanel>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Installation</h2>

          <p className="text-lg leading-relaxed">
            HTML does NOT need installation.  
            You only need:
          </p>

          <ul className="list-disc ml-6 mt-3 text-lg">
            <li>A browser (Chrome recommended)</li>
            <li>A code editor (VS Code recommended)</li>
            <li>Save your file as <span className="font-bold">index.html</span></li>
            <li>Open it directly in browser</li>
            <li>Only download VS Code in Live Server extension and Live Preview extension</li>
          </ul>
        </TabPanel>

        {/* ==== EXAMPLE TAB ==== */}
        <TabPanel>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Basic Example</h2>

          <pre className="bg-gray-900 text-green-400 p-5 rounded-lg overflow-x-auto text-lg">
{`<!DOCTYPE html>
<html>
  <head>
    <title>My First HTML Page</title>
  </head>

  <body>
    <h1>Hello World</h1>
    <p>This is my first webpage</p>
  </body>
</html>`}
          </pre>
        </TabPanel>
      </Tabs>
    </div>
  );
}
