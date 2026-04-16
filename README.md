# 🕉️ Hanuman Chalisa

A premium, mobile-first web application for reading and learning the Hanuman Chalisa. Designed with high attention to detail, motion, and accessibility, supporting multiple Indian languages with beautiful typography.

![Hanuman Chalisa App](app-icon.png)

## ✨ Features

- **🌍 Multi-language Support**: Fully localized in 9 languages:
  - English, Hindi (हिन्दी), Marathi (मराठी), Gujarati (ગુજરાતી), Tamil (தமிழ்), Telugu (తెలుగు), Kannada (ಕನ್ನಡ), Bengali (বাংলা), and Bhojpuri (भोजपुरी).
- **📱 Mobile-First Design**: Optimized for a stunning handheld experience with glassmorphism and smooth transitions.
- **✨ Scroll-Based Highlight**: Intelligent verse highlighting using `IntersectionObserver`. As you scroll, the current verse illuminates automatically—no tapping required.
- **🌙 Theme Support**: Dynamic theme switching with support for premium dark and light modes.
- **📖 Integrated Learning**: Dedicated routes for reading and learning each verse.
- **⚡ High Performance**: Built with Svelte 5 and SvelteKit for near-instant load times and buttery smooth interactions.

## 🛠️ Technology Stack

- **Framework**: [Svelte 5](https://svelte.dev) + [SvelteKit](https://kit.svelte.dev)
- **Styling**: [DaisyUI](https://daisyui.com) + Vanilla CSS (Custom tokens)
- **Internationalization**: [Paraglide JS](https://inlang.com/m/gerre34r/library-inlang-paraglideJs) (URL-based strategy)
- **Icons**: [@phosphor-icons/web](https://phosphoricons.com)
- **Typography**: Diverse Noto Sans families for perfect script rendering across Indian languages.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- pnpm (recommended) or npm

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

3. Start the development server:
   ```sh
   pnpm dev
   ```

4. Build for production:
   ```sh
   pnpm build
   ```

## 📂 Project Structure

- `src/routes`: Handles application routing and page logic.
- `messages/`: Localization JSON files managed by Paraglide/Inlang.
- `static/`: Public assets including app icons.
- `src/lib/paraglide`: Generated runtime for internationalization.

## 📜 License

Distributed under the MIT License. Created with ❤️ for spiritual connection. Jai Shree Ram!
