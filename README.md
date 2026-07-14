# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# SoniStore - Expo React Native App

SoniStore is a mobile e-commerce app built with **Expo**, **React Native**, and **Expo Router**.  
The app displays products, categories, product details, search functionality, and a side menu using a clean route-based structure.

---

## Tech Stack

- **React Native**: Framework used to build native mobile apps using React.
- **Expo**: Tooling/platform on top of React Native that simplifies development, testing, and deployment.
- **Expo Router**: File-based routing system for Expo apps.
- **TypeScript**: Used to add type safety.
- **React Context**: Used to share global state such as search text across screens and components.

Expo Router is a file-based router for React Native and web apps. Every file added inside the `app` directory can automatically become a navigation route. This makes routing easier to understand and maintain.  
Reference: Expo Router documentation.

---

## Project Structure

```txt
src/
│
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   │
│   ├── category/
│   │   └── [id]/
│   │       └── [slug].tsx
│   │
│   └── product/
│       └── [id].tsx
│
├── components/
│   ├── ProductList/
│   │   └── ProductList.tsx
│   │
│   ├── ProductItem/
│   │   └── ProductItem.tsx
│   │
│   ├── SearchModal/
│   │   └── SearchModal.tsx
│   │
│   ├── SearchResultsHeader/
│   │   └── SearchResultsHeader.tsx
│   │
│   └── SideMenu/
│       └── SideMenu.tsx
│
├── context/
│   └── SearchContext.tsx
│
├── hooks/
│   └── useCategories.tsx
│   └── useProducts.tsx
│
├── services/
│   └── categoryService.tsx
│   └── productsService.tsx
│
└── types/
    └── products.types.tsx
```
## React Native vs Expo Go

This project was built using **Expo** on top of **React Native**.

### What is React Native?

React Native is a framework created by Meta that allows developers to build native Android and iOS applications using JavaScript/TypeScript and React.

#### Advantages

- Full access to native Android and iOS code
- Ability to integrate any native SDK or library
- Greater flexibility for complex applications
- Maximum customization and control

#### Disadvantages

- More complex setup and configuration
- Requires knowledge of Android Studio and Xcode
- More maintenance of native dependencies

---

### What is Expo Go?

Expo Go is a mobile application that allows developers to run Expo projects instantly on a physical device by scanning a QR code.

It provides a preconfigured development environment with many commonly used native modules already included.

#### Advantages

- Fast project setup
- No native Android or iOS configuration required
- Instant testing on physical devices via QR code
- Excellent developer experience with Fast Refresh
- Includes many APIs out of the box (Camera, Notifications, Location, File System, etc.)

#### Disadvantages

- Limited to the native modules included in Expo Go
- Some third-party native libraries are not supported
- Cannot directly modify native Android/iOS code while using Expo Go

---

### When to Use Each One

#### Use Expo Go when:

- Learning React Native
- Building prototypes or MVPs
- Developing applications that use standard Expo SDK features
- Prioritizing development speed and simplicity

#### Use React Native (or Expo Development Builds) when:

- Native customizations are required
- Third-party SDKs need native integration
- The project requires access to Android or iOS native code
- Specialized hardware or platform-specific features are needed

---

### Why Expo Was Chosen for This Project

Expo was selected because it provides:

- Faster development and testing
- Simplified project configuration
- Built-in routing through Expo Router
- Cross-platform support (Android, iOS, and Web)
- Easy deployment and maintenance

For the requirements of this product catalog application (product listing, categories, search, navigation, API integration, and responsive UI), Expo provides all the necessary functionality while significantly reducing development complexity.

---

### Relationship Between React Native and Expo

```txt
React Native
└── Expo
    └── Expo Go
```

React Native is the framework, while Expo and Expo Go are tools built on top of React Native to simplify development and improve the developer experience.

<a href="https://drive.google.com/file/d/1NUBaNsMY3gMEZuPcQ3fO98wI7lKVuSHN/view?usp=sharing">App video</a>

<img width="489" height="1031" alt="image" src="https://github.com/user-attachments/assets/c46c7a88-d072-4d57-a699-85c48bb9b798" />
<img width="488" height="1060" alt="image" src="https://github.com/user-attachments/assets/45a55d64-af86-48e7-9bb8-09cc31ecb1a4" />
<img width="487" height="1060" alt="image" src="https://github.com/user-attachments/assets/25177f21-5f34-4d55-acde-c428265f4e83" />
<img width="490" height="1046" alt="image" src="https://github.com/user-attachments/assets/82230b4f-483f-40a7-977b-4fae6cc82bc8" />
<img width="487" height="1052" alt="image" src="https://github.com/user-attachments/assets/e3293efd-597a-4758-b628-f26cb3def2f5" />
<img width="488" height="1049" alt="image" src="https://github.com/user-attachments/assets/e9a2d389-9611-4b83-afc5-c27b00d3dac6" />




