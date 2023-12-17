# Project Documentation

## Introduction

The project is a simple mobile application developed in React Native that leverages GitHub APIs to display users who have starred a particular repository.

## Getting Started

The app has been developed using `react-native-cli` and can be tested on both Android and iOS devices/emulators.

### Steps to Get Started:

1. **Clone the Project:**
   - Open a terminal and run the following command to clone the project:
     ```bash
     git clone [repository_url]
     ```
   - Replace `[repository_url]` with the actual URL of the project repository.

2. **Install Dependencies:**
   - Navigate to the project directory:
     ```bash
     cd rn-stargazers-view-app
     ```
   - Run the following command to install project dependencies:
     ```bash
     npm install
     ```


3. **For Android:**
   - Make sure you have Android Studio installed and properly configured.
   - Open a terminal and navigate to the project directory.
   - Run the following command to build and run the app on an Android emulator or connected device:
     ```bash
     npx react-native run-android
     ```


4. **Install iOS Dependencies (For iOS):**
   - Make sure you have Xcode installed and properly configured on your macOS.
   - Navigate to the project directory.
   - Run the following command to install iOS dependencies:
     ```bash
     cd ios && bundle install && pod install && cd ..
     ```

5. **For iOS:**
   - Make sure you have Xcode installed and properly configured on your macOS.
   - Navigate to the project directory.
   - Run the following command to build and run the app on an iOS simulator or connected device:
     ```bash
     npx react-native run-ios
     ```

   **Note:** If you encounter any issues during the setup or build process, refer to official documentation or open an issue.


## Project Structure

The project follows the following structure:
<details>
  <summary style="cursor: pointer; font-weight: bold;">Project Structure</summary>

- **assets/**
   - logo/
      - linkedin-logo.png

- **components/**
   - input/
      - ( Reusable input components)
   - list/
      - ( Reusable list components)
   - menu/
      - ( Reusable menu components)
   - modal/
      - ( Reusable modal components)
   - screen/
      - ( Screens representing different app pages)
   - snackbar/
      - ( Reusable snackbar components)
   - __test__/
      - ( Test cases for components)
   - translator/
      - ( Language translation components)

- **constants/**
   - api/
      - ( API-related constants)
   - route/
      - ( Navigation route constants)
   - socialLink.js
      - ( Constants related to social links)
   - translations/
      - ( Translation-related constants)

- **container/**
   - ( Containers for managing state logic)

- **hooks/**
   - ( Custom React hooks)

- **models/**
   - ( Data models)

- **navigation/**
   - ( Navigation configuration)

- **screens/**
   - ( Main app screens)

- **services/**
   - ( External services such as API calls)

- **store/**
   - reducers/
      - ( Redux reducers)

- **style/**
   - theme/
      - ( App theme)
</details>




## Dependencies

The project utilizes the following dependencies:

- [axios](https://github.com/axios/axios)
- [redux-toolkit](https://redux-toolkit.js.org/), [react-redux](https://react-redux.js.org/)
- [react-native-paper](https://callstack.github.io/react-native-paper/)
- [async-storage](https://react-native-async-storage.github.io/async-storage/)
- [i18next](https://www.i18next.com/), [react-i18next](https://react.i18next.com/), [react-native-localize](https://github.com/react-native-localize/react-native-localize)
- [react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo)
- [react-navigation](https://reactnavigation.org/)



## Usage Examples

The app includes three screens: Home, Settings, and Offline.

- **Home Screen:**
   - Users can input the owner's GitHub account name and repository name.
   - If the repository exists, a modal displays a list of users who have starred it, otherwise, a message suggests verifying the input parameters.
   - Users can load more if available; otherwise.

- **Settings Screen:**
   - Users can select the language, enable dark theme, and view app credits.
   - Choices are saved as preferences.

- **Offline Page:**
   - In case of no internet connection, users see a page suggesting checking their internet connection.

# Main Elements

## Interface
The primary interface elements have been implemented in the `models/` directory. Three key interfaces have been considered:

- **Stargazer:** Represents a user and their information obtained from the GitHub starred response.
- **Repository:** Represents the search parameter.
- **ErrorMessage:** Manages response errors.

## UI
The project utilizes `react-native-paper` to ensure a consistent theme throughout the application. This library provides ready-to-use components and facilitates theme management within the app.

## Components
Reusable components with basic logic have been implemented. The main components are located in the `list/` directory, representing the stargazers list. Menu components are used to display the top-right menu for navigation to the settings page, and a snackbar component handles notifications for both normal and error messages.

## Container
The `container` directory contains TypeScript (`.tsx`) files responsible for managing interactions between components and application logic.

### Custom Hook
The `useStargazers` custom hook is designed to handle interactions between components and API requests. Its role includes managing the fetching of stargazers, loading more if necessary, and interacting with the store.

### Store
`redux-toolkit` is employed to ensure data consistency in the application. Three main reducers have been created for stargazers, dark theme, and the context of the snackbar.

### Services
The application utilizes `axios` for managing API requests and responses, as specified in the `services/api.ts` file. The API configuration includes instance creation and the implementation of interceptors to manage requests and responses. In this project, responses are intercepted to handle error responses.


###

## API Documentation

The application interacts with the GitHub API. Refer to the [GitHub API documentation](https://docs.github.com/en/rest/activity/starring?apiVersion=2022-11-28#list-stargazers) for details on endpoints, request and response formats, and params.

## Troubleshooting and FAQ


## Testing


### MenuButton Component Snapshot Test

To maintain the visual correctness of the `MenuButton` component, a snapshot test has been implemented using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-native-testing-library/intro/). Snapshot testing captures a serialized version of the component's output and compares it against a stored reference snapshot.

### StargazersOwnerInput Component Test

Tests verify both the rendering and functional aspects of the StargazersOwnerInput component, ensuring that it renders correctly and correctly triggers the onChangeOwner prop when the input text changes.
### StargazerItem Component Snapshot Test

A test has been implemented for the `StargazerItem` component to ensure it renders correctly with a given set of props.


### useStargazers Hook Test

The `useStargazers` hook is tested to ensure that it correctly dispatches actions based on a response from the GitHub API.



## Changelog

V1

