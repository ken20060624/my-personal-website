@echo off
echo ==========================================
echo   Deploying to GitHub...
echo ==========================================

:: Add changes
echo [1/3] Adding changes...
git add .

:: Commit changes
set /p commit_msg="Enter commit message (default: Update): "
if "%commit_msg%"=="" set commit_msg=Update
echo [2/3] Committing with message: "%commit_msg%"
git commit -m "%commit_msg%"

:: Push changes
echo [3/3] Pushing to GitHub...
git push

echo ==========================================
echo   Deployment Success!
echo ==========================================
pause
