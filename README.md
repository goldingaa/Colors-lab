# Colors-lab
## A1 - Version Control with GitHub
Colors is a basic web application developed with the LAMP stack. It allows users to log in, create a collection of colors, and search for colors that users have saved.

## Technologies used
- LAMP stack: Linux, Apache, MySQL, and PHP
- HTML, CSS, JS
- Server: DigitalOcean
- IDE: VS Code
  
## High-level setup instructions
1. Clone this repository onto a Linux server running Apache.
2. Copy the project files into the Apache web directory: **/var/www/html/**
3. Create and configure the MySQL database to be used.
4. Update the application's database configuration with the appropriate database name, username, and password.
5. Install the required PHP extensions.
6. Insert a user in the database to access the program.
7. Set the appropriate permissions so that Apache can access the files.

## How to run and access the application
- Domain name: **http://your_server_IP/**

After the project has been installed and Apache is running, the Colors application should load in the browser. From there, users can log in, add colors to their profile, and search for colors stored in the application.

## Assumptions, limitations
- This application is intended to run on a Linux server using Apache, PHP, and SQL.
- Security measures are limited for this application.
