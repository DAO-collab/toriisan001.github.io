@echo off
if not "%1" == "1" (
    cd C:\xampp\htdocs\MyPortfolio
    start /min cmd /c reload -b 1
    exit
)
