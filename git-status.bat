@echo off
echo ========================================
echo   ModernStore - Git Status Overview
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
    echo This is not a Git repository.
    echo Run push-to-github.bat to initialize.
    pause
    exit /b 1
)

:: Show repository information
echo Repository Information:
echo ----------------------
echo Current directory: %CD%
echo.

:: Show remote information
echo Remote Repository:
git remote -v
echo.

:: Show current branch
echo Current Branch:
git branch --show-current
echo.

:: Show all branches
echo All Branches:
git branch -a
echo.

:: Show current status
echo Working Directory Status:
echo -------------------------
git status
echo.

:: Show recent commits
echo Recent Commits (last 10):
echo -------------------------
git log --oneline -10 --graph --decorate
echo.

:: Show uncommitted changes
echo Uncommitted Changes:
echo -------------------
git diff --stat
if errorlevel 1 (
    echo No uncommitted changes.
) else (
    echo.
    choice /c YN /m "Do you want to see detailed changes? (Y/N)"
    if not errorlevel 2 (
        echo.
        git diff
    )
)
echo.

:: Show stashed changes
echo Stashed Changes:
echo ---------------
git stash list
if errorlevel 1 (
    echo No stashed changes.
)
echo.

:: Show ahead/behind status
echo Sync Status with Remote:
echo -----------------------
git fetch origin >nul 2>&1
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
git rev-list --count HEAD..origin/%current_branch% >nul 2>&1 && (
    for /f %%j in ('git rev-list --count HEAD..origin/%current_branch%') do set behind=%%j
) || set behind=0

git rev-list --count origin/%current_branch%..HEAD >nul 2>&1 && (
    for /f %%k in ('git rev-list --count origin/%current_branch%..HEAD') do set ahead=%%k
) || set ahead=0

if %ahead% GTR 0 (
    echo You are %ahead% commit(s) ahead of remote
)
if %behind% GTR 0 (
    echo You are %behind% commit(s) behind remote
)
if %ahead% EQU 0 if %behind% EQU 0 (
    echo Your branch is up to date with remote
)
echo.

echo ========================================
echo Available Git Scripts:
echo ========================================
echo push-to-github.bat  - Initial setup and push
echo quick-push.bat      - Fast push for updates
echo pull-from-github.bat - Pull latest changes
echo sync-github.bat     - Full synchronization
echo git-status.bat     - This status overview
echo ========================================

pause