@echo off
echo ========================================
echo    ModernStore - GitHub Push Script
echo ========================================
echo.

:: Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from https://git-scm.com/
    pause
    exit /b 1
)

:: Check if we're in a git repository
if not exist ".git" (
    echo This is not a Git repository. Initializing...
    git init
    echo Git repository initialized.
    echo.
)

:: Show current status
echo Current Git Status:
echo -------------------
git status --short
echo.

:: Add all files
echo Adding all files to staging...
git add .
echo Files added to staging area.
echo.

:: Get commit message from user
set /p commit_message="Enter commit message (or press Enter for default): "
if "%commit_message%"=="" set commit_message="Update ModernStore project"

:: Commit changes
echo Committing changes...
git commit -m "%commit_message%"
if errorlevel 1 (
    echo No changes to commit or commit failed.
    echo.
) else (
    echo Changes committed successfully.
    echo.
)

:: Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo No remote repository configured.
    echo.
    set /p repo_url="Enter your GitHub repository URL (https://github.com/username/repo.git): "
    if not "!repo_url!"=="" (
        git remote add origin !repo_url!
        echo Remote origin added: !repo_url!
        echo.
    ) else (
        echo No repository URL provided. Skipping push.
        pause
        exit /b 1
    )
)

:: Get current branch
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
if "%current_branch%"=="" set current_branch=main

echo Current branch: %current_branch%
echo.

:: Push to GitHub
echo Pushing to GitHub...
git push -u origin %current_branch%
if errorlevel 1 (
    echo.
    echo Push failed. This might be because:
    echo 1. You need to authenticate with GitHub
    echo 2. The repository doesn't exist on GitHub
    echo 3. You don't have push permissions
    echo.
    echo To fix authentication issues:
    echo - Use: git config --global user.name "Your Name"
    echo - Use: git config --global user.email "your.email@example.com"
    echo - Or set up SSH keys or personal access tokens
    echo.
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo   SUCCESS! Project pushed to GitHub
    echo ========================================
    echo.
    echo Your ModernStore project is now on GitHub!
    echo Repository: 
    git remote get-url origin
    echo.
    echo Next steps:
    echo 1. Visit your GitHub repository
    echo 2. Set up GitHub Pages for free hosting
    echo 3. Configure branch protection rules
    echo 4. Add collaborators if needed
    echo.
)

pause