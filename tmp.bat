@echo off

:: Create React App
cd ..
npx create-react-app jxctno.github.io
cd jxctno.github.io

:: Create components directory
mkdir src/components

:: Create TopBar component and its files
cd src/components
echo. > TopBar.js
echo. > TopBar.css

:: Create Card component and its files
echo. > Card.js
echo. > Card.css

:: Create Footer component and its files
echo. > Footer.js
echo. > Footer.css

:: Edit content of the components
echo import React from 'react'; > TopBar.js
echo. >> TopBar.js
echo function TopBar() { >> TopBar.js
echo   return ( >> TopBar.js
echo     <div className="topbar"> >> TopBar.js
echo       <!-- Add your JSX content here --> >> TopBar.js
echo     </div> >> TopBar.js
echo   ); >> TopBar.js
echo } >> TopBar.js
echo. >> TopBar.js
echo export default TopBar; >> TopBar.js

echo import React from 'react'; > Card.js
echo. >> Card.js
echo function Card() { >> Card.js
echo   return ( >> Card.js
echo     <div className="card"> >> Card.js
echo       <!-- Add your JSX content here --> >> Card.js
echo     </div> >> Card.js
echo   ); >> Card.js
echo } >> Card.js
echo. >> Card.js
echo export default Card; >> Card.js

echo import React from 'react'; > Footer.js
echo. >> Footer.js
echo function Footer() { >> Footer.js
echo   return ( >> Footer.js
echo     <footer className="footer"> >> Footer.js
echo       <!-- Add your JSX content here --> >> Footer.js
echo     </footer> >> Footer.js
echo   ); >> Footer.js
echo } >> Footer.js
echo. >> Footer.js
echo export default Footer; >> Footer.js

:: Display success message
echo Components and files created successfully!

