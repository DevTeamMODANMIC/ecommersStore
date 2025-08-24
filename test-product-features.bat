@echo off
echo ========================================
echo   ModernStore Product Management Test
echo ========================================
echo.
echo Opening admin panel to test features:
echo.
echo 1. Add New Product - Click to add products
echo 2. Export Products - Download CSV with all data  
echo 3. Check Low Stock - Get detailed stock report
echo 4. Sync with Store - Update store displays
echo.
echo Instructions:
echo - Click "Generate Sample Data" first
echo - Then test each product feature
echo - Try adding a new product
echo - Check the export functionality
echo - Test the low stock alerts
echo.
start "" "src/pages/admin.html"
echo Admin panel opened! Test the product features.
pause