@echo off
cd c:\Users\randy\Documents\programming\pgi-compro

REM Create src directories
mkdir src\types 2>nul
mkdir src\lib\data 2>nul
mkdir src\components\ui 2>nul
mkdir src\components\layout 2>nul
mkdir src\components\features 2>nul
mkdir src\components\animations 2>nul

REM Create public directories
mkdir public\images\hero 2>nul
mkdir public\images\logo 2>nul
mkdir public\images\business-units 2>nul
mkdir public\images\projects 2>nul
mkdir public\images\team 2>nul
mkdir public\images\clients 2>nul
mkdir public\images\about 2>nul

echo.
echo ✓ Directory structure created successfully!
echo.
echo Created directories:
echo   src/types
echo   src/lib/data
echo   src/components/ui
echo   src/components/layout
echo   src/components/features
echo   src/components/animations
echo   public/images/hero
echo   public/images/logo
echo   public/images/business-units
echo   public/images/projects
echo   public/images/team
echo   public/images/clients
echo   public/images/about
pause
