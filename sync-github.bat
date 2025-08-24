@echo off
echo ========================================
echo   ModernStore - GitHub Sync Script
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

echo Step 1: Pulling latest changes from GitHub...
echo =============================================
echo.

:: Pull first to get latest changes
call pull-from-github.bat
if errorlevel 1 (
    echo Pull failed. Please resolve issues before pushing.
    pause
    exit /b 1
)

echo.
echo Step 2: Pushing local changes to GitHub...
echo ==========================================
echo.

:: Get commit message from user
set /p commit_message="Enter commit message for your changes (or press Enter for default): "
if "%commit_message%"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
    set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
    set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
    set "commit_message=Sync update %YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"
)

:: Add all changes
echo Adding all changes...
git add .

:: Check if there are changes to commit
git diff-index --quiet HEAD --
if not errorlevel 1 (
    echo No local changes to commit.
    echo Your project is already synchronized with GitHub.
    echo.
    pause
    exit /b 0
)

:: Commit changes
echo Committing changes...
git commit -m "%commit_message%"
if errorlevel 1 (
    echo Commit failed.
    pause
    exit /b 1
)

:: Push changes
echo Pushing to GitHub...
git push
if errorlevel 1 (
    echo Push failed. Please check your GitHub access.
    pause
    exit /b 1
)

echo.
echo ========================================
echo   SUCCESS! Project fully synchronized
echo ========================================
echo.
echo Your ModernStore project is now synchronized with GitHub!
echo - Latest changes pulled from GitHub
echo - Local changes pushed to GitHub
echo.
echo Repository status:
git status --short
echo.

pause