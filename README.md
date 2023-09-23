# Android Dice Roller WebApp

This repository contains an Android application that integrates a WebView to present a dice rolling game. The application allows the user to roll a specified number of dice, rendering the outcome in the WebView. 

## 🚀 Setup & Installation

1. **Clone the Repository**

2. **Open with Android Studio**
Ensure you have Android Studio installed. Open the project and run it on an emulator or a connected Android device.

## 📁 Project Structure

### Java
- **MainActivity.java**: Contains the main Android activity for the app. It initializes a WebView and loads the `dicegame.html` file from the `assets` directory. Any JavaScript alert in the WebView is captured and presented as an Android AlertDialog.

### HTML
- **dicegame.html**: The main HTML page which presents the user interface for the dice game. 

### CSS
- **mystyle.css**: Contains styles to format the dice game HTML page.

### JavaScript
- **rolling.js**: Contains the main logic for the dice game.

## 📝 Note
Ensure the necessary files (e.g., dice images) and directories (e.g., `assets`) are properly set up in your project to ensure smooth functionality.
