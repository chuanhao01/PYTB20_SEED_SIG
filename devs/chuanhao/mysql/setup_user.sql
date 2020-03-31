CREATE USER 'pytb_admin'@'localhost' IDENTIFIED BY 'password';
CREATE DATABASE `PYTB_SEED_SIG`;
GRANT ALL PRIVILEGES ON `PYTB_SEED_SIG`.* TO "pytb_admin"@"localhost";
