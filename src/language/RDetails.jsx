import React, { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Copy, CheckCheck } from "lucide-react";

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
      <code className="text-green-400 break-all">{cmd}</code><CopyBtn text={cmd} />
    </div>
  );
}
function CodeBlock({ code, lang = "r" }) {
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

const selCls = "bg-blue-600 text-white px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer outline-none";
const unselCls = "px-4 py-2 text-sm font-semibold rounded-lg cursor-pointer text-gray-400 hover:text-white hover:bg-gray-800 outline-none transition-all";

export default function RDetails() {
  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-blue-950/30 border-b border-gray-800 px-8 py-12">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto flex items-center gap-6">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/R_logo.svg" alt="R" className="w-16 h-16 object-contain" />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-black tracking-tight text-white">R Language</h1>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-400/30 text-xs font-bold">v4.3+</span>
            </div>
            <p className="text-gray-400 text-lg">The statistician's programming language. Built for data analysis and visualization.</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Statistical Computing", "Data Visualization", "Open Source", "CRAN Ecosystem", "Academic Standard"].map(b => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-gray-800 border border-gray-700 text-gray-300">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <Tabs>
          <TabList className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-900 rounded-2xl border border-gray-800">
            {["📖 Introduction", "⚙️ Installation", "💻 Examples", "📦 Packages", "🚀 Use Cases"].map((t, i) => (
              <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
            ))}
          </TabList>

          <TabPanel>
            <div className="space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
                <h2 className="text-xl font-bold mb-4">What is R?</h2>
                <p className="text-gray-300 leading-relaxed">R was created by <span className="text-blue-400 font-semibold">Ross Ihaka and Robert Gentleman</span> at the University of Auckland, New Zealand in 1993. It is an implementation of the S programming language. R is the <span className="text-blue-400 font-semibold">gold standard for statistical analysis</span>, bioinformatics, academic research, and data visualization.</p>
                <p className="text-gray-300 leading-relaxed mt-3">R has over <span className="text-blue-400 font-semibold">20,000+ packages on CRAN</span> (Comprehensive R Archive Network). The tidyverse ecosystem (ggplot2, dplyr, tidyr) made R accessible to non-programmers. R Markdown and Shiny enable reproducible research and interactive web dashboards.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-blue-400 mb-3">✦ R vs Python for Data Science</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["R: Built for statistics — Python: general purpose", "R ggplot2: most beautiful plots — Python matplotlib", "R: Academic/research standard — Python: industry ML", "R: Built-in statistical tests — Python: needs scipy", "R: Data frames native — Python: pandas equivalent", "R Shiny: easy dashboards — Python: Streamlit/Dash", "R: 20k CRAN packages — Python: 400k PyPI packages", "R: Matrix math built-in — Python: needs NumPy"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-blue-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
                  <h3 className="font-bold text-blue-400 mb-3">✦ Where R Excels</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {["Bioinformatics & genomics (Bioconductor)", "Clinical trials & pharmaceutical research", "Economic & financial modeling", "Survey analysis & social science", "Machine learning + interpretation", "Publication-quality graphics (ggplot2)", "Reproducible research (R Markdown)", "Interactive dashboards (Shiny)"].map(f => (
                      <li key={f} className="flex items-start gap-2"><span className="text-blue-400">▸</span>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white text-lg">Installing R</h3>
              <h4 className="text-blue-400 font-semibold text-sm">Windows / macOS / Linux</h4>
              <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-4 text-sm text-blue-300">
                💡 Download R from <strong>cran.r-project.org</strong> — available for all platforms. Also install RStudio IDE from posit.co for the best experience.
              </div>
              <h4 className="text-blue-400 font-semibold text-sm">macOS via Homebrew</h4>
              <CmdBox cmd="brew install r" />
              <h4 className="text-blue-400 font-semibold text-sm">Linux (Ubuntu)</h4>
              <CmdBox cmd="sudo apt update && sudo apt install r-base" />
              <CmdBox cmd="R --version" />
              <h4 className="text-blue-400 font-semibold text-sm">Install RStudio (IDE)</h4>
              <div className="bg-blue-500/10 border border-blue-400/20 rounded-xl p-4 text-sm text-blue-300">
                💡 Download <strong>RStudio Desktop</strong> from posit.co/products/open-source/rstudio/ — best IDE for R with notebook support.
              </div>
              <h4 className="text-blue-400 font-semibold text-sm">Install packages from CRAN</h4>
              <CmdBox cmd='install.packages("tidyverse")' />
              <CmdBox cmd='install.packages(c("ggplot2", "dplyr", "shiny"))' />
              <h4 className="text-blue-400 font-semibold text-sm">Run R script</h4>
              <CmdBox cmd="Rscript analysis.R" />
              <h4 className="text-blue-400 font-semibold text-sm">Interactive R console</h4>
              <CmdBox cmd="R" />
            </div>
          </TabPanel>

          <TabPanel>
            <Tabs>
              <TabList className="flex flex-wrap gap-2 mb-6">
                {["Basics", "Data Frames & Tidyverse", "ggplot2 Viz", "Statistics", "Shiny App"].map((t, i) => (
                  <Tab key={i} className={unselCls} selectedClassName={selCls}>{t}</Tab>
                ))}
              </TabList>
              <TabPanel>
                <CodeBlock code={`# ── R Basics ──

# Variables (no type declaration needed)
name <- "CodeVault"   # <- is preferred assignment
age  <- 25
pi_approx <- 3.14159
is_active <- TRUE

cat("Hello,", name, "! Age:", age, "\n")

# Vectors (fundamental data structure in R)
nums <- c(1, 2, 3, 4, 5)
fruits <- c("apple", "banana", "cherry")

cat("Sum:", sum(nums), "\n")
cat("Mean:", mean(nums), "\n")
cat("Length:", length(nums), "\n")

# Vector operations (vectorized — no loops needed!)
doubled <- nums * 2     # [2, 4, 6, 8, 10]
squared <- nums ^ 2     # [1, 4, 9, 16, 25]
above_3 <- nums[nums > 3]  # [4, 5]

cat("Doubled:", doubled, "\n")
cat("Above 3:", above_3, "\n")

# Sequences
seq1 <- 1:10          # 1 2 3 4 5 6 7 8 9 10
seq2 <- seq(0, 1, by = 0.1)  # 0.0 0.1 0.2 ... 1.0
rep1 <- rep("hello", 3)      # "hello" "hello" "hello"

# Lists (mixed types)
person <- list(name = "Alice", age = 30, scores = c(85, 92, 78))
cat("Name:", person$name, "\n")
cat("First score:", person$scores[1], "\n")

# Functions
greet <- function(name, lang = "R") {
  sprintf("Hello %s! Welcome to %s!", name, lang)
}
cat(greet("Bob"), "\n")
cat(greet("Alice", "tidyverse"), "\n")

# Apply family (vectorized loops)
squares <- sapply(1:10, function(x) x^2)
cat("Squares:", squares, "\n")`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── R Data Frames & Tidyverse ──
library(dplyr)
library(tidyr)
library(readr)

# Create data frame
employees <- data.frame(
  name       = c("Alice", "Bob", "Carol", "Dave", "Eve"),
  department = c("Engineering", "Marketing", "Engineering", "HR", "Marketing"),
  salary     = c(95000, 72000, 88000, 65000, 78000),
  years      = c(5, 3, 7, 2, 4),
  stringsAsFactors = FALSE
)

# Basic exploration
cat("Dimensions:", nrow(employees), "rows x", ncol(employees), "cols\n")
str(employees)     # structure
summary(employees) # statistical summary

# dplyr — data manipulation pipeline
result <- employees %>%
  filter(salary > 70000) %>%                    # filter rows
  select(name, department, salary) %>%          # select columns
  arrange(desc(salary)) %>%                     # sort
  mutate(salary_k = salary / 1000,              # add column
         senior = years >= 5)

print(result)

# Group by + summarise
dept_summary <- employees %>%
  group_by(department) %>%
  summarise(
    count      = n(),
    avg_salary = mean(salary),
    max_salary = max(salary),
    total_yrs  = sum(years)
  ) %>%
  arrange(desc(avg_salary))

print(dept_summary)

# tidyr — reshape data
# Wide to long
wide_data <- data.frame(
  name = c("Alice", "Bob"),
  q1   = c(100, 90),
  q2   = c(110, 95),
  q3   = c(108, 102)
)

long_data <- wide_data %>%
  pivot_longer(cols = c(q1, q2, q3),
               names_to = "quarter",
               values_to = "sales")
print(long_data)

# Long to wide
back_wide <- long_data %>%
  pivot_wider(names_from = quarter, values_from = sales)
print(back_wide)

# Join operations
managers <- data.frame(
  department = c("Engineering", "Marketing", "HR"),
  manager    = c("Frank", "Grace", "Henry")
)
with_mgr <- left_join(employees, managers, by = "department")
print(with_mgr)`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── ggplot2 Data Visualization ──
library(ggplot2)
library(dplyr)

# Sample data
set.seed(42)
data <- data.frame(
  x      = rnorm(200, mean = 50, sd = 10),
  y      = rnorm(200, mean = 50, sd = 10),
  group  = sample(c("A", "B", "C"), 200, replace = TRUE),
  value  = runif(200, 10, 100)
)

# 1. Scatter plot with color, size, smoothing
p1 <- ggplot(data, aes(x = x, y = y, color = group, size = value)) +
  geom_point(alpha = 0.6) +
  geom_smooth(method = "lm", se = TRUE, aes(group = group)) +
  scale_color_brewer(palette = "Set1") +
  labs(title    = "Scatter Plot by Group",
       subtitle = "With linear regression",
       x = "X Variable", y = "Y Variable",
       color = "Group", size = "Value") +
  theme_minimal(base_size = 13) +
  theme(legend.position = "bottom")

# 2. Bar chart
p2 <- data %>%
  group_by(group) %>%
  summarise(mean_val = mean(value), se = sd(value)/sqrt(n())) %>%
  ggplot(aes(x = group, y = mean_val, fill = group)) +
  geom_col(width = 0.6) +
  geom_errorbar(aes(ymin = mean_val - se, ymax = mean_val + se), width = 0.2) +
  scale_fill_brewer(palette = "Pastel1") +
  labs(title = "Mean Value by Group", x = "Group", y = "Mean Value") +
  theme_classic()

# 3. Histogram + density
p3 <- ggplot(data, aes(x = x, fill = group)) +
  geom_histogram(aes(y = ..density..), bins = 30, alpha = 0.5, position = "identity") +
  geom_density(aes(color = group), size = 1.2) +
  facet_wrap(~group) +
  labs(title = "Distribution by Group") +
  theme_bw()

# 4. Boxplot with jitter
p4 <- ggplot(data, aes(x = group, y = value, fill = group)) +
  geom_boxplot(outlier.shape = NA, alpha = 0.6) +
  geom_jitter(width = 0.15, alpha = 0.4, size = 1.5) +
  labs(title = "Boxplot: Value by Group") +
  theme_minimal()

# Save plots
ggsave("plot1.png", p1, width = 8, height = 6, dpi = 300)
ggsave("plot2.png", p2, width = 6, height = 5, dpi = 300)
print("Plots saved!")`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── R Statistical Analysis ──

# 1. Descriptive Statistics
set.seed(42)
scores <- c(72, 85, 91, 67, 88, 79, 93, 84, 76, 90, 83, 71, 88, 95, 82)

cat("=== Descriptive Stats ===\n")
cat("Mean:    ", mean(scores), "\n")
cat("Median:  ", median(scores), "\n")
cat("SD:      ", sd(scores), "\n")
cat("Variance:", var(scores), "\n")
cat("IQR:     ", IQR(scores), "\n")
cat("Range:   ", range(scores), "\n")
cat("Quantiles:\n"); print(quantile(scores, probs = c(0.25, 0.5, 0.75, 0.9)))

# 2. Hypothesis Testing
group_a <- c(78, 82, 88, 91, 85, 79, 84)
group_b <- c(65, 71, 74, 69, 72, 68, 76)

# t-test
t_result <- t.test(group_a, group_b, alternative = "two.sided")
cat("\n=== Independent t-test ===\n")
cat("t-statistic:", round(t_result$statistic, 4), "\n")
cat("p-value:    ", round(t_result$p.value, 4), "\n")
cat("Conclusion: ", ifelse(t_result$p.value < 0.05, "Significant difference (p<0.05)", "No significant difference"), "\n")

# Correlation
x <- c(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
y <- c(2.1, 3.9, 6.2, 8.1, 10.3, 11.8, 14.2, 16.1, 18.3, 20.1)
cor_result <- cor.test(x, y, method = "pearson")
cat("\n=== Pearson Correlation ===\n")
cat("r =", round(cor_result$estimate, 4), "\n")
cat("p =", round(cor_result$p.value, 6), "\n")

# 3. Linear Regression
model <- lm(y ~ x)
cat("\n=== Linear Regression: y ~ x ===\n")
print(summary(model))
cat("R-squared:", round(summary(model)$r.squared, 4), "\n")
cat("Predicted y at x=11:", predict(model, newdata = data.frame(x = 11)), "\n")

# ANOVA
g1 <- c(78, 82, 85, 80, 79)
g2 <- c(92, 88, 91, 90, 94)
g3 <- c(71, 74, 68, 75, 72)
anova_data <- data.frame(
  score = c(g1, g2, g3),
  group = factor(rep(c("A","B","C"), each = 5))
)
anova_result <- aov(score ~ group, data = anova_data)
cat("\n=== One-way ANOVA ===\n")
print(summary(anova_result))`} />
              </TabPanel>
              <TabPanel>
                <CodeBlock code={`# ── Shiny Dashboard App ──
# Install: install.packages("shiny")
library(shiny)
library(ggplot2)

ui <- fluidPage(
  titlePanel("📊 CodeVault — Data Explorer"),
  
  sidebarLayout(
    sidebarPanel(
      selectInput("dataset", "Choose Dataset:",
                  choices = c("iris", "mtcars", "diamonds")),
      
      uiOutput("var_select"),
      
      sliderInput("bins", "Histogram Bins:",
                  min = 5, max = 50, value = 20),
      
      checkboxInput("show_density", "Show Density Curve", TRUE),
      
      hr(),
      
      selectInput("plot_type", "Plot Type:",
                  choices = c("Histogram", "Boxplot", "Scatter", "Violin"))
    ),
    
    mainPanel(
      tabsetPanel(
        tabPanel("📈 Plot", plotOutput("main_plot", height = "400px")),
        tabPanel("📋 Data", tableOutput("data_table")),
        tabPanel("📊 Summary", verbatimTextOutput("summary_output"))
      )
    )
  )
)

server <- function(input, output, session) {
  
  data <- reactive({
    switch(input$dataset,
      "iris"     = iris,
      "mtcars"   = mtcars,
      "diamonds" = diamonds[sample(nrow(diamonds), 1000), ]
    )
  })
  
  output$var_select <- renderUI({
    num_vars <- names(Filter(is.numeric, data()))
    selectInput("xvar", "Select Variable:", choices = num_vars)
  })
  
  output$main_plot <- renderPlot({
    req(input$xvar)
    df <- data()
    
    p <- ggplot(df, aes_string(x = input$xvar))
    
    if (input$plot_type == "Histogram") {
      p <- p + geom_histogram(bins = input$bins, fill = "#3b82f6", alpha = 0.7)
      if (input$show_density)
        p <- p + geom_density(aes(y = ..count.. * (max(df[[input$xvar]], na.rm=T) / input$bins)),
                              color = "red", size = 1.2)
    } else if (input$plot_type == "Boxplot") {
      p <- ggplot(df, aes_string(y = input$xvar)) + geom_boxplot(fill = "#3b82f6")
    } else if (input$plot_type == "Violin") {
      p <- ggplot(df, aes(x = "", y = df[[input$xvar]])) +
           geom_violin(fill = "#3b82f6", alpha = 0.6) + geom_boxplot(width = 0.1)
    }
    
    p + theme_minimal(base_size = 14) +
        labs(title = paste(input$plot_type, "of", input$xvar))
  })
  
  output$data_table <- renderTable({ head(data(), 20) })
  output$summary_output <- renderPrint({ summary(data()) })
}

shinyApp(ui, server)
# Run with: shiny::runApp("app.R")`} />
              </TabPanel>
            </Tabs>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ["tidyverse", "Collection of R packages for data science (ggplot2, dplyr, tidyr, readr, etc.).", 'install.packages("tidyverse")', "Data Science Suite"],
                ["ggplot2", "Grammar of graphics. The most powerful data visualization library.", 'install.packages("ggplot2")', "Visualization"],
                ["Shiny", "Build interactive web dashboards using only R.", 'install.packages("shiny")', "Web Apps"],
                ["caret", "Classification and Regression Training. ML workflow.", 'install.packages("caret")', "Machine Learning"],
                ["randomForest", "Random forest algorithm for classification and regression.", 'install.packages("randomForest")', "ML"],
                ["lme4", "Linear mixed-effects models for longitudinal/nested data.", 'install.packages("lme4")', "Statistics"],
                ["Bioconductor", "Genomics and bioinformatics tools. 2000+ biology packages.", 'BiocManager::install("GenomicRanges")', "Bioinformatics"],
                ["knitr/rmarkdown", "Reproducible research — mix R code with markdown text.", 'install.packages("rmarkdown")', "Reporting"],
              ].map(([name, desc, cmd, use]) => (
                <div key={name} className="bg-gray-800/60 border border-gray-700 hover:border-blue-500/50 rounded-xl p-4 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white text-sm">{name}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">{use}</span>
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
                { icon: "🧬", title: "Bioinformatics", desc: "Bioconductor provides 2000+ packages for genomics, proteomics, and clinical trial analysis. Standard in academic biology research.", companies: ["Bioconductor", "limma", "DESeq2"] },
                { icon: "📈", title: "Financial Analysis", desc: "R is used for quantitative finance, risk modeling, portfolio optimization, and time-series analysis of financial markets.", companies: ["quantmod", "PerformanceAnalytics", "xts"] },
                { icon: "🎓", title: "Academic Research", desc: "R is the standard language in statistics, social science, epidemiology, and psychology research. Most statistical papers include R code.", companies: ["CRAN", "Bioconductor", "rOpenSci"] },
                { icon: "🗺️", title: "Spatial Analysis & Maps", desc: "R has powerful GIS capabilities with sf, tmap, leaflet packages for geospatial analysis and map visualization.", companies: ["sf", "tmap", "leaflet"] },
                { icon: "🤖", title: "Machine Learning", desc: "caret, tidymodels, mlr3 provide unified ML workflows. R also has interfaces to TensorFlow and Keras via reticulate.", companies: ["caret", "tidymodels", "Keras"] },
                { icon: "📊", title: "Business Intelligence", desc: "R Shiny dashboards and R Markdown reports are used in enterprise BI. Integrates with Tableau, Power BI as data source.", companies: ["Shiny", "flexdashboard", "plotly"] },
              ].map(({ icon, title, desc, companies }) => (
                <div key={title} className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-blue-500/30 transition-all">
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