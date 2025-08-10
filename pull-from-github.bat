@echo off
echo ========================================
echo   ModernStore - GitHub Pull Script
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
    echo ERROR: This is not a Git repository.
    echo Please run push-to-github.bat first to initialize.
    pause
    exit /b 1
)

:: Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo ERROR: No remote repository configured.
    echo Please run push-to-github.bat first to set up remote.
    pause
    exit /b 1
)

:: Show current status
echo Current Git Status:
echo -------------------
git status --short
echo.

:: Check for uncommitted changes
git diff-index --quiet HEAD --
if errorlevel 1 (
    echo WARNING: You have uncommitted changes!
    echo.
    echo Your local changes:
    git status --short
    echo.
    choice /c YN /m "Do you want to stash your changes before pulling? (Y/N)"
    if errorlevel 2 (
        echo Continuing without stashing...
        echo.
    ) else (
        echo Stashing your changes...
        git stash push -m "Auto-stash before pull - %date% %time%"
        echo Changes stashed. You can restore them later with: git stash pop
        echo.
    )
)

:: Get current branch
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
if "%current_branch%"=="" set current_branch=main

echo Pulling from GitHub (branch: %current_branch%)...
echo.

:: Fetch latest changes
echo Fetching latest changes...
git fetch origin
if errorlevel 1 (
    echo Failed to fetch from remote repository.
    echo Check your internet connection and GitHub access.
    pause
    exit /b 1
)

:: Show what will be pulled
echo.
echo Changes to be pulled:
git log HEAD..origin/%current_branch% --oneline --graph
if errorlevel 1 (
    echo No new changes to pull.
) else (
    echo.
)

:: Pull changes
echo Pulling changes...
git pull origin %current_branch%
if errorlevel 1 (
    echo.
    echo Pull failed. This might be because:
    echo 1. Merge conflicts need to be resolved
    echo 2. Authentication issues
    echo 3. Network connectivity problems
    echo.
    echo To resolve merge conflicts:
    echo 1. Edit the conflicted files
    echo 2. Run: git add .
    echo 3. Run: git commit -m "Resolve merge conflicts"
    echo.
    pause
    exit /b 1
) else (
    echo.
    echo ========================================
    echo   SUCCESS! Project updated from GitHub
    echo ========================================
    echo.
    echo Your ModernStore project is now up to date!
    echo.
    
    :: Show updated status
    echo Current status:
    git status --short
    echo.
    
    :: Show recent commits
    echo Recent commits:
    git log --oneline -5
    echo.
)

pause