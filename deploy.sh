#!/bin/bash
echo "[1/3] Adding changes..."
git add .

echo "[2/3] Committing changes..."
read -p "Enter commit message (default: Update): " commit_msg
commit_msg=${commit_msg:-Update}
git commit -m "$commit_msg"

echo "[3/3] Pushing to GitHub..."
git push

echo "============================"
echo " Deployment Success! 🚀"
echo "============================"