# stanislavpanchenko.de

Personal website built with Next.js, deployed on Google Cloud Run.

Live at: [www.stanislavpanchenko.de](https://www.stanislavpanchenko.de)

## Prerequisites

- Node.js 18+
- npm
- Docker (for container builds)
- Google Cloud CLI (for deployment)

## Development

```bash
npm install
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build for production |
| `npm run start` | Start production server on port 8080 |
| `npm run lint` | Run ESLint |

## Docker

Build and run locally:

```bash
docker build -t personal .
docker run -p 8080:8080 personal
```

## Deployment

The app is deployed to Google Cloud Run via GitHub.
