# GitHub Profile Searcher

This project uses the GitHub API to fetch and display user profiles, repository data, and recent events. It was developed as a challenge to enhance a base project by adding new features.

**[➡️ View the live project here!](https://amandameneghini.github.io/github-api-searcher/)**

![Final project demonstration GIF](./src/images/readme/demo/demo-final-II.gif)

## 📋 Table of Contents
- [🎯 About the Project](#-about-the-project)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Getting Started](#-getting-started)
- [💻 Usage](#-usage)

## 🎯 About the Project

The goal was to make 3 additional requests to the GitHub API on top of a [base project](https://github.com/AmandaMeneghini/projeto-inicial-fetch-github-api.git). The key features implemented are:

1.  **User Stats:** Adds the number of followers and following for the searched user.
    <br><img src="./src/images/readme/design/demo-following.png" style="max-width: 100px">

2.  **Recent Events:** Adds the user's latest events and their commit messages.
    <br><img src="./src/images/readme/design/demo-user-events.png">

3.  **Repository Details:** Adds the count of 🍴**forks**, ⭐**stars**, 👀**watchers**, and the primary 👨‍💻**language** for each repository.
    <br><img src="./src/images/readme/design/demo-datails-repositorie.png" style="max-width: 200px">


## 🛠️ Tech Stack

### Core Technologies
<div style="display: flex; align-items: center; gap: 10px;">
    <img src="./src/images/readme/icons/logo-html-5-1536.png" style="width: 50px" alt="HTML logo">
    <img src="./src/images/readme/icons/logo-css-3-2048.png" style="width: 50px" alt="CSS logo">
    <img src="./src/images/readme/icons/javascript_icon_130900.png" style="width: 50px" alt="JavaScript logo">
</div>

### Tools & Extensions
<div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">
    <img src="./src/images/readme/icons/responsive-viewer.png" style="width: 50px;" alt="Responsive Viewer">
    <img src="https://ritwickdey.gallerycdn.vsassets.io/extensions/ritwickdey/liveserver/5.7.9/1736542717282/Microsoft.VisualStudio.Services.Icons.Default" style="width: 50px;" alt="Live Server">
</div>

- **Responsive Viewer:** A Chrome extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb) used to assist in building a responsive design.
- **Live Server:** A VS Code extension for live reloading and local project visualization.

### Prerequisites
<img src="https://img.icons8.com/color/512/git.png" style="width: 50px;" alt="Git">

- Make sure you have [Git](https://git-scm.com/downloads) installed on your machine.


## 🚀 Getting Started

Follow these steps to get a local copy up and running.

1.  Create a folder where you want to clone the repository.

2.  Right-click and select "Git Bash Here" or "Open in Terminal".

3.  Clone the project:
    ```bash
    git clone https://github.com/AmandaMeneghini/github-api-searcher.git
    ```

4.  Navigate to the project folder:
    ```bash
    cd github-api-searcher
    ```

5.  Open the project in VS Code:
    ```bash
    code .
    ```

## 💻 Usage

This project uses the **Live Server** extension in VS Code to run.

1.  If you don't have it, go to the Extensions view (`Ctrl+Shift+X`) and install **"Live Server"**.

2.  Right-click the `index.html` file and select **"Open with Live Server"**.

3.  Alternatively, click the **"Go Live"** button in the bottom-right corner of your editor.

4.  Once the page opens, enter a valid GitHub username in the input field and click "Search" to see the results.
