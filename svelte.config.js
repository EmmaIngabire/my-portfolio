name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]

jobs:
  build_site:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Install Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build
        env:
          BASE_PATH: "/${{ github.event.repository.name }}"  # Set the base path for GitHub Pages
        run: |
          npm run build  # Ensure your build outputs to the correct folder

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: ".svelte-kit/output/client"  # Update this to your actual build output path

  deploy:
    needs: build_site
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write

    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    steps:
      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
