# KYC Voice & Chat Verification Demo

Voice-first KYC verification system built with Next.js and Vapi AI.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Vapi credentials from https://vapi.ai

3. **Run development server:**
   ```bash
   npm run dev
   ```

## Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_VAPI_PUBLIC_KEY`
   - `NEXT_PUBLIC_VAPI_ASSISTANT_ID`
4. Deploy

## Features

- Voice-based KYC verification
- Text chat alternative mode
- Real-time transcript visualization
- Secure data handling
