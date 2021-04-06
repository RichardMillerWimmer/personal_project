-- Remove existing tables
DROP TABLE products;
DROP TABLE users;
DROP TABLE cart;
DROP TABLE orders;
DROP TABLE order_items;

CREATE TABLE users(
  user_id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  first_name VARCHAR(255) NOT NULL, 
  last_name VARCHAR(255) NOT NULL,
  hash VARCHAR(1000) NOT NULL,
  admin BOOLEAN
);

CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(2000) NOT NULL, 
  price FLOAT NOT NULL,
  image_one TEXT NOT NULL,
  image_two TEXT NOT NULL,
  image_three TEXT NOT NULL,
  download_link VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  order_id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(order_id),
  product_id INTEGER REFERENCES products(product_id)
);

CREATE TABLE cart (
  user_id INTEGER REFERENCES users(user_id),
  product_id INTEGER REFERENCES products(product_id)
);