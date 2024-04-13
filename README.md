![Screenshot from 2024-04-14 00-31-12](https://github.com/zaselalk/animal-inspired-ai-quote/assets/43272744/cadfb823-b2a5-4f34-9be3-99197f183f71)

# AI Animal Quote generator with image
 simple cloudfare worker application that randomly generated quote with nice looking image for background base on openchat-3.5-0106 and dreamshaper-8-lcm models.
 
## Demo
https://cloudfareworkers.infoaselalk.workers.dev

## Run locally

## Trying this on your own machine

This guide will walk you through setting up and running the code on your local machine.

### Prerequisites

* Downloaded code (or access to git)

### Steps

1. **Get the code:**
    * Download the code directly, or
    * Clone the code using git (instructions not covered here).

2. **Locate the code:**
    * Open the folder where you saved the downloaded code.

3. **Install Wrangler :**
    * If you don't have Wrangler installed yet, install it following.

      ```
      npm install wrangler --save-dev
      ```

4. **Create a new project:**
    * Open a terminal and navigate to your folder with the downloaded code.
    * Run the following command to create a new project for Cloudflare Workers, choosing TypeScript if prompted:
        ```bash
        npm create cloudflare@latest
        ```

5. **Copy the code:**
    * Copy the code from the downloaded `/src` folder into the newly created project's `/src` folder.

6. **Run the code:**
    * In your terminal, run the following command to start the development server and open the project in your browser:
        ```bash
        npx wrangler dev
        ```

        or
      ```
      npm run dev
      ```

7. **Open in browser:**
    * A local web address will be displayed in your terminal. Open this address in your browser to see the code running.

8. **Deploy online (optional):**
    ```
    npm run deploy
    ```

