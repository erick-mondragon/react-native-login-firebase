# React Native Firebase Login

A basic Expo React Native application that implements user authentication using Firebase. This project provides a foundation for mobile applications requiring user registration and login functionality.

## Features

- User Registration
- User Login
- Firebase Authentication
- Email/Password Authentication
- Secure Session Management

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (v14 or later)
- Yarn package manager
- React Native development environment
- Firebase account and project

## Installation

1. Clone the repository:

```bash
git clone https://github.com/erick-mondragon/react-native-login-firebase.git
cd react-native-login-firebase
```

2. Install dependencies:

```bash
yarn install
```

3. Configure Firebase:

   - Create a Firebase project in the Firebase Console
   - Add your Firebase configuration in `constants/firebase.js`
   - Enable Email/Password authentication in Firebase Console

4. Start the application:

```bash
yarn start
```

5. Run on your device/emulator:

```bash
# For Android
yarn android

# For iOS
yarn ios
```

## Project Structure

```
react-native-login-firebase/
├── .expo/                  # Expo configuration files
├── app/                    # Main screens for the app
├── assets/                 # Static resources
│   └── images/            # Image assets
├── components/            # Reusable Screen components
│   └── ui/                # Reusable UI components
├── constants/             # Constants resources (firebase)
├── context/               # Provider
├── hooks/                 # Customizable Hooks
├── services/              # Customizable services or apis
├── package.json         # Dependencies
└── yarn.lock            # Yarn lock file
```
