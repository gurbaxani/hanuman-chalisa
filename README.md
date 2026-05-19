# 🕉️ Hanuman Chalisa

A modern, mobile-first web application for reading and learning the Hanuman Chalisa. Designed with high attention to detail, motion, and accessibility, supporting multiple Indian languages with beautiful typography.

🌐 **Web Version:** [hanumanji.ashwinig.com](https://hanumanji.ashwinig.com)  
📱 **Android App:** [Google Play Store](https://play.google.com/store/apps/details?id=com.ashwinig.hanumanji)

![Hanuman Chalisa App](app-icon.png)

## ✨ Features

- **🌍 Multi-language Support**: Fully localized in 9 languages:
  - English, Hindi (हिन्दी), Marathi (मराठी), Gujarati (ગુજરાતી), Tamil (தமிழ்), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Bengali (বাংলা), and Bhojpuri (भोजपुरी).
- **📱 Mobile-First Design**: Optimized for a great handheld experience with purposeful UI and smooth transitions.
- **✨ Scroll-Based Highlight**: Intelligent verse highlighting using `IntersectionObserver`. As you scroll, the current verse illuminates automatically—no tapping required.
- **🌙 Theme Support**: Dynamic theme switching with support for premium dark and light modes (Ivory/Sandalwood themed Cupcake and Indigo themed Dim).
- **📖 Integrated Learning**: Dedicated routes for reading and learning each verse.
- **🖥️ Cross-Platform Native Apps**: Runs as a lightweight native desktop/mobile application via **Tauri 2**.
- **⚡ High Performance**: Built with Svelte 5 (Runes) and SvelteKit for near-instant load times and buttery smooth interactions.

## 🛠️ Technology Stack

- **Framework**: [Svelte 5](https://svelte.dev) + [SvelteKit](https://kit.svelte.dev)
- **Styling**: [DaisyUI 5](https://daisyui.com) + Tailwind CSS v4 + Vanilla CSS (Custom tokens)
- **Native Wrapper**: [Tauri 2](https://tauri.app)
- **Internationalization**: [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) (URL-based strategy)
- **Icons**: [@phosphor-icons/web](https://phosphoricons.com)
- **Typography**: Diverse [Noto](https://fonts.google.com/noto) Sans families for perfect script rendering across Indian languages.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended) or npm
- [Rust](https://www.rust-lang.org/) & platform build tools (only if building the desktop/mobile app via Tauri)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/gurbaxani/hanuman-chalisa.git
   cd hanuman-chalisa
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Start the development server (web):
   ```sh
   pnpm dev
   ```

4. Run the desktop application (Tauri dev mode):
   ```sh
   pnpm tauri dev
   ```

### Building for Production

- Build the static web application:
  ```sh
  pnpm build
  ```

- Build the native application installers (Tauri production bundle):
  ```sh
  pnpm tauri build
  ```

## 📂 Project Structure

- `src/routes/`: Handles application routing, pages, and layout logic.
- `src-tauri/`: Tauri configuration, Rust source files, capabilities, and app icons.
- `messages/`: Localization JSON files managed by Paraglide/Inlang.
- `static/`: Public assets including app icons.
- `src/lib/paraglide/`: Generated runtime files for internationalization.

## 📜 License

Distributed under the MIT License. Created with ❤️ for spiritual connection. Jai Shree Ram!
