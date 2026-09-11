@echo off
title Krishna Kumar - Developer Portfolio Launcher
echo =========================================================
echo       Starting Krishna Kumar Developer Portfolio...
echo =========================================================
echo.

if not exist node_modules (
    echo Installing dependencies first, please wait...
    call npm.cmd install
)

echo Launching local server and opening your browser...
call npm.cmd run dev
