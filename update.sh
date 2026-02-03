 
 #!/bin/bash

# Stop script on error
set -e

echo "=========================================="
echo "  Updating Project from GitHub..."
echo "=========================================="

# 1. Pull latest code
echo "[1/4] Pulling latest changes..."
git pull

# 2. Install dependencies
echo "[2/4] Installing dependencies..."
npm install

# 3. Build project
echo "[3/4] Building for production..."
npm run build

# 4. Restart Nginx
echo "[4/4] Restarting Nginx..."
sudo systemctl restart nginx

echo "=========================================="
echo "  Update Complete!"
echo "=========================================="
