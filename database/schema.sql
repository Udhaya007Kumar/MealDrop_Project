-- USER DB
CREATE DATABASE IF NOT EXISTS mealdrop_user;
USE mealdrop_user;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

-- RESTAURANT DB
CREATE DATABASE IF NOT EXISTS mealdrop_restaurant;
USE mealdrop_restaurant;

CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  password VARCHAR(255)
);

CREATE TABLE menu (
  id INT AUTO_INCREMENT PRIMARY KEY,
  restaurant_id INT,
  item_name VARCHAR(100),
  price DECIMAL(10,2)
);

-- DELIVERY DB
CREATE DATABASE IF NOT EXISTS mealdrop_delivery;
USE mealdrop_delivery;

CREATE TABLE delivery_partners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  phone VARCHAR(20),
  vehicle_type VARCHAR(50)
);

-- ORDER DB
CREATE DATABASE IF NOT EXISTS mealdrop_order;
USE mealdrop_order;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  restaurant_id INT,
  delivery_partner_id INT,
  status VARCHAR(50)
);
