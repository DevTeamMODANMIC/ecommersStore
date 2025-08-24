@echo off
:: Quick push script for frequent updates
echo Quick pushing to GitHub...

:: Add all changes
git add .

:: Use timestamp as commit message if no argument provided
if "%~1"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value') do set "dt=%%a"
    set "YY=%dt:~2,2%" & set "YYYY=%dt:~0,4%" & set "MM=%dt:~4,2%" & set "DD=%dt:~6,2%"
    set "HH=%dt:~8,2%" & set "Min=%dt:~10,2%" & set "Sec=%dt:~12,2%"
    set "commit_msg=Update %YYYY%-%MM%-%DD% %HH%:%Min%:%Sec%"
) else (
    set "commit_msg=%~1"
)

:: Commit and push
git commit -m "%commit_msg%"
git push

if errorlevel 1 (
    echo Push failed. Run push-to-github.bat for detailed setup.
    pause
) else (
    echo Successfully pushed to GitHub!
)

timeout /t 3