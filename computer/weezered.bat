@echo off
set weezer=GET WEEZERED LOL
set /A "index = 1"
set /A "count = 5"
:while
if %index% leq %count% (
    echo %weezer%
   set weezer = %weezer% + %weezer%
   goto :while
)
