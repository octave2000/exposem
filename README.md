# exposem

Share your local development server with other devices on the same network.

## Problem

When developing web applications, you often run a local development server (e.g., `localhost:3000`). If you want to test your application on other devices (like a mobile phone or another computer) on the same network, you can't directly access `localhost:3000` from those devices. `exposem` solves this by exposing your local server to your network.

## Installation

```bash
npm install -g exposem
```

## Usage

Let's say your local development server is running on port `3000`.

1.  **Run exposem:**
    Open a new terminal window and run:

    ```bash
    exposem -p 3000
    ```

2.  **Access from other devices:**
    `exposem` will output a URL (e.g., `http://192.168.1.100:3000`). You can use this URL to access your development server from any device on the same network.

That's it! Now you can easily test your local development server on multiple devices.
