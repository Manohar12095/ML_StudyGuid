# CS2303 Machine Learning — Interactive Study Notebook & Lab Guide 🧠📊

A comprehensive, self-contained, offline-first interactive study guide and algorithm laboratory notebook for **CS2303: Machine Learning**. 

Designed for both academic exam preparation (theory, derivations, formula sheets, question bank) and practical laboratory implementations (complete Python source code, step-by-step mathematical calculations, and embedded output visualisations).

---

## 🌟 Key Features

- **⚡ 100% Self-Contained & Offline-Ready**: Everything—including KaTeX math rendering fonts (WOFF2), stylesheets, interactive scripts, and base64-encoded dataset plot visualisations—is bundled into a single file ([`ML_Study_Notebook.html`](./ML_Study_Notebook.html)). No external CDNs or internet connection required.
- **📐 Mathematical Precision with KaTeX**: In-depth theoretical derivations, gradient descent formulations, backpropagation delta rules, entropy / information gain equations, distance matrices, and classification metrics.
- **🧪 Algorithm Lab (16-Mark University Exam Answers)**: Complete reference solutions structured for 16-mark university exam questions, pairing theoretical definitions, formal algorithms, formulas, hand-solved examples, and Python implementation code with output plots.
- **🧮 Interactive Calculators**: Built-in interactive tools (e.g., Simple Linear Regression calculator $y = mx + c$) allowing real-time parameter computation on custom datasets.
- **📑 Quick Formula Sheet & 15-Card Exam Bank**: Instant reference sheet covering regression, classification, clustering, neural networks, and ensembles, alongside curated high-yield exam questions.
- **🚩 Transcription & Calculation Verification Flags**: Clear verification tags denoting source-verified calculations and cautionary notes on ambiguous handwritten source steps.

---

## 📚 Curriculum & Chapter Outline

The notebook covers **27 comprehensive chapters** grouped across course units:

### Unit 1 · Class Notes (CS2303)
1. **Introduction, Datasets & Regression**: Supervised vs. unsupervised paradigms, continuous vs. discrete targets, simple linear regression on sales data.
2. **Confusion Matrix & Classifiers**: Structure of confusion matrices, True/False Positives/Negatives, classifier comparison.
3. **K-Nearest Neighbour (Numerical)**: Distance-based classification, step-by-step distance calculation on numerical instances.
4. **Multiple Linear Regression**: Multivariable regression, matrix formulation, product sales estimation.
5. **Decision Tree, Entropy & Information Gain**: Shannon entropy, information gain, attribute split decision mechanics.
6. **Unit 2 Exam Topic List**: High-level checklist of core examination topics.

### Unit 2 · Assignment & Worked Problems
7. **Error Metrics & Classification Metrics**:
   - Regression: Mean Absolute Error (MAE), Mean Squared Error (MSE), Root Mean Squared Error (RMSE), and Coefficient of Determination ($R^2$).
   - Classification: Precision, Recall, Specificity, F1-Score, and Accuracy calculations.
8. **Simple Linear Regression Problems**:
   - Worked problem 1: Weekly study hours vs. performance.
   - Worked problem 2: Height vs. weight correlation.
   - Worked problem 3: Hours studied vs. exam scores.
9. **Multiple Linear Regression Problems**:
   - Worked problem 1: Multivariate dataset with variables $X$, $Y$, and $Z$.
   - Worked problem 2: Multi-attribute house price prediction.

### Unit 3 · Neural Networks & Deep Learning
10. **Artificial Neural Networks (ANN)**: Biological motivation, structure of an artificial neuron, 9 standard activation functions, perceptron representation power, XOR problem, and limitations.
11. **ANN & Backpropagation Derivation**:
   - ALVINN autonomous vehicle case study.
   - Gradient descent and the delta learning rule.
   - Batch vs. stochastic (incremental) gradient descent.
   - Sigmoid unit and complete mathematical derivation of the backpropagation error rule.
12. **Perceptron Algorithm & Multi-Class Learning**: Multi-class perceptron training and step-by-step bipolar input/target learning for the logical AND gate.

### Unit 4 · Ensemble Learning, Random Forest & Support Vector Machines
13. **Ensemble Learning Methods**: Bagging vs. Boosting, voting classifiers, Out-Of-Bag (OOB) error estimation.
14. **Random Forest Algorithm**: Forest generation mechanics, CART algorithm, Gini impurity, worked book-back problems.
15. **Support Vector Machines (SVM)**: Maximum-margin hyperplanes, support vectors, hard vs. soft margins, linear and non-linear kernel transformations.

### Additional Concepts & Foundations
16. **Machine Learning Foundations**:
   - 8-mark standard Machine Learning pipeline and workflow.
   - Bias-Variance tradeoff with bullseye diagrams.
   - Curse of Dimensionality.
   - Taxonomy of Machine Learning paradigms.

---

## 🔬 Algorithm Lab (16-Mark Answers & Visualizations)

Each lab module includes the formal algorithm, step-by-step derivation, Python code, and pre-rendered visual output:

| Module | Algorithm | Dataset / Problem | Visualization / Output |
| :--- | :--- | :--- | :--- |
| **Lab 1** | **K-Nearest Neighbors (KNN)** | Iris Dataset ($k=5$) | Decision boundaries & class predictions |
| **Lab 2** | **Naive Bayes Classifier** | Iris Dataset / Continuous features | Class posterior probabilities |
| **Lab 3** | **K-Means Clustering** | Unlabeled cluster points | Elbow method curve & cluster centers |
| **Lab 4** | **Perceptron Learning Rule** | Linearly separable AND gate | Convergence plot & hyperplanes |
| **Lab 5** | **Decision Tree (ID3 / CART)** | Play-Tennis & Iris | Rendered tree graph & feature importance |
| **Lab 6** | **Ensemble Voting** | Breast Cancer Wisconsin Data | Model comparison & ensemble accuracy |
| **Lab 7** | **AdaBoost** | Synthetic Moons dataset | Sequential decision stump boundary evolution |
| **Lab 8** | **Single Linkage Hierarchical Clustering** | Numerical distance matrix | Dendrogram & step-by-step cluster merge matrix |
| **Lab 9** | **Complete Linkage Hierarchical Clustering** | Numerical distance matrix | Dendrogram & step-by-step cluster merge matrix |

---

## 📖 Reference & Exam Preparation

- **Chapter 26: Formula Cheat Sheet**
  - Instant lookup formulas for linear regression, error metrics ($MAE, MSE, RMSE, R^2$), classification metrics ($Precision, Recall, F_1$), entropy ($H(S)$), information gain ($IG$), distance metrics (Euclidean, Manhattan, Minkowski), perceptron update rules, and backpropagation gradients.
- **Chapter 27: 15-Card Exam Bank**
  - High-frequency exam questions spanning concepts, architectural comparisons, numerical problems, and algorithm explanations with model answers.

---

## 🚀 How to Use / View

### Option 1: Open Locally (Recommended)
Because [`ML_Study_Notebook.html`](./ML_Study_Notebook.html) is completely self-contained:
1. Clone or download this repository:
   ```bash
   git clone https://github.com/Manohar12095/ML_StudyGuid.git
   ```
2. Double-click or open `ML_Study_Notebook.html` in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera).
3. No web server, Node.js, Python server, or internet connection is required!

### Option 2: Deploy to Vercel (Instant 1-Click)
1. Import this repository [`Manohar12095/ML_StudyGuid`](https://github.com/Manohar12095/ML_StudyGuid) on [Vercel](https://vercel.com).
2. Leave all build and output settings as default (Framework Preset: Other / None).
3. Click **Deploy**. Vercel will automatically serve [`index.html`](./index.html) at your root domain (`https://<project-name>.vercel.app`).

### Option 3: Deploy to GitHub Pages
1. Go to your repository settings on GitHub (`Settings` > `Pages`).
2. Under **Build and deployment** > **Branch**, select `main` branch and `/ (root)` folder.
3. Save, and your site will be live at `https://manohar12095.github.io/ML_StudyGuid/`.

---

## 🛠️ Technology Stack

- **Markup & Styling**: Pure HTML5, modern CSS3 (responsive grid, sidebar navigation, dark/light contrast elements).
- **Mathematics Rendering**: [KaTeX](https://katex.org/) with bundled inline WOFF2 web fonts.
- **Interactive Computation**: Pure client-side vanilla JavaScript.
- **Visualizations**: Pre-rendered base64 graphical outputs generated with Matplotlib & Seaborn.

---

## 👤 Author & Course Details

- **Course**: CS2303 Machine Learning
- **Repository**: [Manohar12095/ML_StudyGuid](https://github.com/Manohar12095/ML_StudyGuid)
- **Maintainer**: Manohar S ([@Manohar12095](https://github.com/Manohar12095))

