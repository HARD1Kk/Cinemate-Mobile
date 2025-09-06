# Cinemate Mobile

A mobile application for browsing, searching, and saving movies, built with React Native and Expo.

## Features

- User authentication (login/logout)
- Browse movies
- Search for movies
- Save favorite movies
- User profile management

## Screenshots

<table>
  <tr>
    <td><h3>Home Screen</h3><img src="assets/screenshots/home.jpg" style="width: 250px; max-width: 100%; height: auto;" alt="Home Screen"></td>
    <td><h3>Login Screen</h3><img src="assets/screenshots/login.jpg" style="width: 250px; max-width: 100%; height: auto;" alt="Login Screen"></td>
    <td><h3>Movie Details Screen</h3><img src="assets/screenshots/movieInfo.jpg" style="width: 250px; max-width: 100%; height: auto;" alt="Movie Details Screen"></td>
  </tr>
  
  <tr>
    <td><h3>Saved Movies Screen</h3><img src="assets/screenshots/saved.jpg" style="width: 250px; max-width: 100%; height: auto;" alt="Saved Screen"></td>
    <td><h3>Search Screen</h3><img src="assets/screenshots/search.jpg" style="width: 250px; max-width: 100%; height: auto;" alt="Search Screen"></td>
    <td><h3>Profile Screen</h3><img src="assets/screenshots/profile.jpg" style="width: 250px; max_width: 100%; height: auto;" alt="Profile Screen"></td>
  </tr>
</table>

## Installation

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/HARD1Kk/Cinemate-Mobile.git
    cd Cinemate-Mobile
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or yarn install
    ```

3.  **Start the Expo development server:**

    ```bash
    npx expo start --tunnel
    ```

    This will open a new tab in your browser with Expo Dev Tools. You can then run the app on an iOS simulator, Android emulator, or your physical device.

4.  **Install Expo Go on your mobile device and scan the QR code:**

    - Download the **Expo Go** app from the [App Store (iOS)](https://apps.apple.com/us/app/expo-go/id1397950279) or [Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US).
    - After running `npx expo start --tunnel` (as described in step 3), a QR code will be displayed in your terminal or browser.
    - Open the Expo Go app on your phone and scan the QR code to open the app on your device.

## TMDB API Key Setup

This application uses The Movie Database (TMDB) API. To use the application, you need to obtain an API key from TMDB and set it up as an environment variable.

1.  **Get a TMDB API Key:**

    - Go to the [TMDB website](https://www.themoviedb.org/).
    - Sign up for an account if you don't have one.
    - Navigate to your account settings and then to the API section.
    - Request a new API key (Developer or Production).

2.  **Set the Environment Variable:**

    - Create a new file named `.env` in the root directory of your project (where `package.json` is located).
    - Add your TMDB API key to this file in the following format:

      ```
      EXPO_PUBLIC_MOVIE_APP_API_KEY=YOUR_API_KEY_HERE
      ```

      Replace `YOUR_API_KEY_HERE` with the actual API key you obtained from TMDB.

3.  **Restart the Development Server:**

    - If your Expo development server is already running, stop it and restart it to load the new environment variable:

      ```bash
      npx expo start --tunnel
      ```

## Usage

- **Login/Register:** log in to access the app's features.
- **Browse:** Explore a wide range of movies.
- **Search:** Use the search bar to find specific movies.
- **Save:** Mark movies as favorites to easily access them later.
- **Profile:** Manage your user profile.

## Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [NativeWind](https://www.nativewind.dev/) (for Tailwind CSS)
- [React Navigation](https://reactnavigation.org/)
- React Context API

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

## Contact

If you have any questions or suggestions, feel free to reach out:

- Name : [Hardik](mailto:hardik216730@example.com)
- Project Link: [Project Link](https://github.com/HARD1Kk/Cinemate-Mobile)
