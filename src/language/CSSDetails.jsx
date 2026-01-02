import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

export default function CSSDetails() {
  return (
    <div className="p-10 font-sans">

      <h1 className="text-4xl font-bold mb-6 text-blue-600">CSS (Cascading Style Sheets)</h1>

      <Tabs>
        {/* TAB HEADERS */}
        <TabList className="flex gap-4 border-b pb-2">
          <Tab className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
            Introduction
          </Tab>

          <Tab className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
            CSS Syntax
          </Tab>

          <Tab className="px-4 py-2 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300">
            Types & Example
          </Tab>
        </TabList>

        {/* ================= TAB PANELS ================= */}

        {/* INTRO TAB */}
        <TabPanel>
          <h2 className="text-2xl font-semibold mt-6 mb-3">What is CSS?</h2>

          <p className="text-lg leading-relaxed">
            CSS (Cascading Style Sheets) is a stylesheet language used to style
            and design websites.  
            It controls colors, spacing, layout, fonts, animations, and much more.
          </p>

          <ul className="list-disc ml-6 mt-4 text-lg">
            <li>CSS adds beauty to HTML pages</li>
            <li>Controls layout & responsiveness</li>
            <li>Makes websites attractive</li>
          </ul>
        </TabPanel>

        {/* SYNTAX TAB */}
        <TabPanel>
          <h2 className="text-2xl font-semibold mt-6 mb-3">CSS Syntax</h2>

          <pre className="bg-gray-900 text-green-400 p-5 rounded-lg text-lg overflow-auto">
{`selector {
  property: value;
}`}
          </pre>

          <p className="text-lg mt-4">
            <strong>selector</strong> → Element to style (e.g., h1, p, div)  
            <br />
            <strong>property</strong> → Feature of that element (color, font-size)  
            <br />
            <strong>value</strong> → How it should look (blue, 20px)
          </p>
        </TabPanel>

        {/* TYPES & EXAMPLE */}
        <TabPanel>
          <h2 className="text-2xl font-semibold mt-6 mb-3">CSS Types</h2>

          <ul className="list-disc ml-6 text-lg">
            <li>Inline CSS</li>
            <li>Internal CSS</li>
            <li>External CSS (recommended)</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6 mb-3">CSS Example</h2>

          <pre className="bg-gray-900 text-green-400 p-5 rounded-lg text-lg overflow-auto">
{`h1 {
  color: blue;
  font-size: 24px;
}

p {
  color: gray;
  line-height: 1.5;
}`}
          </pre>
        </TabPanel>

      </Tabs>
    </div>
  );
}
