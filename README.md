# 🚀 CryptoHub

A modern, real-time cryptocurrency market dashboard and currency converter built with Next.js 15, TypeScript, and Tailwind CSS.

<img width="1279" height="678" alt="image" src="https://github.com/user-attachments/assets/20e58fa0-3a2a-48a6-8f67-1d5a82b9bbde" />


## ✨ Features

- **📊 Market Dashboard**: Live cryptocurrency prices with 24h change indicators
- **🔄 Currency Converter**: Real-time crypto-to-fiat conversion with live rates
- **📈 Trending Coins**: Discover trending cryptocurrencies with market data
- **🎨 Modern UI**: Beautiful, responsive design with glassmorphism effects
- **⚡ Real-time Data**: Powered by CoinGecko API for accurate market information
- **📱 Mobile-First**: Fully responsive design optimized for all devices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: Redux Toolkit with RTK Query
- **API**: CoinGecko API
- **Animations**: Lottie React
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Matthew3dg/crypto-statistic.git
cd crypto-statistic
```

2. Install dependencies:

```bash
yarn install
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── market/            # Market dashboard page
│   ├── converter/         # Currency converter page
│   └── providers/         # Redux store provider
├── shared/                # Shared utilities and components
│   ├── api/              # API configuration (CoinGecko)
│   ├── lib/              # Utility functions
│   └── ui/               # Reusable UI components
└── widgets/              # Feature-specific components
    ├── crypto-prices/    # Market prices widget
    ├── converter/        # Currency converter widget
    └── news/             # Trending coins widget
```

## 🌐 Live Demo

Visit the live application: [crypto-statistic-bqan.vercel.app](https://crypto-statistic-bqan.vercel.app/)

## 📱 Pages

- **Home**: Landing page with navigation to main features
- **Market Dashboard**: Real-time crypto prices and trending coins
- **Converter**: Cryptocurrency to fiat currency converter

## 🔧 Available Scripts

- `yarn dev` - Start development server with Turbopack
- `yarn build` - Build for production with Turbopack
- `yarn start` - Start production server
- `yarn lint` - Run ESLint

## 🚀 Deployment

This project is optimized for deployment on Vercel. See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

## 📊 API Integration

The app integrates with CoinGecko API to provide:

- Real-time cryptocurrency prices
- Market cap and volume data
- 24-hour price change percentages
- Trending coins data
- Currency conversion rates

## 🎨 Design Features

- **Glassmorphism UI**: Modern glass-like design elements
- **Responsive Layout**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Lottie animations for enhanced UX
- **Dark Theme**: Elegant dark color scheme
- **Loading States**: Proper loading and error handling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
