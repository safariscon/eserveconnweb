# Eserveconn Ltd Website

Production-ready React/Vite website for Eserveconn Ltd with a small Node backend contact endpoint.

## Contact Email Backend

The contact form posts to:

```txt
POST /api/contact
```

The backend sends form messages to the email configured in `CONTACT_TO`.

## Environment Variables

Create your own local environment variables using `.env.example` as a guide:

```txt
PORT=4174
SERVER_NAME=your_server_name
CONTACT_TO=eserveconne@gmail.com
MAIL_FROM=eserveconne@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=eserveconne@gmail.com
SMTP_PASS=your_gmail_app_password
```

For Gmail, use an App Password, not your normal Gmail password.

## Local Development

Run the backend in one terminal:

```bash
npm.cmd run server
```

Run the frontend in another terminal:

```bash
npm.cmd run dev
```

Vite proxies `/api` requests to the backend on `http://localhost:4174`.

## Production

Build the frontend:

```bash
npm.cmd run build
```

Start the backend, which also serves the built `dist` folder:

```bash
npm.cmd start
```

Set all email environment variables on your hosting provider before deployment.

## Docker

Build and run the production container:

```bash
docker compose up --build
```

The app will be available on `http://localhost:4174` by default. Set `SERVER_NAME`, `SMTP_PASS`, and the other mail values in your environment or deployment secrets before running in production.

## GitHub Actions

CI runs on pushes and pull requests to `main` or `master`. It installs dependencies, runs linting, builds the Vite app, and verifies that the Docker image builds successfully.

Add these repository secrets before deployment automation is added:

```txt
SERVER_NAME
CONTACT_TO
MAIL_FROM
SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
```
