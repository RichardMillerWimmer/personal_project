CREATE TABLE products(
  product_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(2000) NOT NULL, 
  price FLOAT NOT NULL,
  image_one TEXT NOT NULL,
  image_two TEXT NOT NULL,
  download_link VARCHAR(255) NOT NULL
);

INSERT INTO products (name, description, price, image_one, image_two, download_link)
VALUES ('Metal Texture Pack',
'Complete package with different metal surfaces for Cinema4D. Includes 235 4K meterials.',
49.00,
'https://i.imgur.com/EcOnEZW.png',
'https://i.imgur.com/PGDV2qC.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_8_Metal.jpg'),
('Plaster Texture Pack',
'Complete package with different plaster surfaces for Cinema4D. Includes 202 4K meterials.',
39.00,
'https://i.imgur.com/d6thk10.png',
'https://i.imgur.com/yUfTuau.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_9_Plaster.jpg'),
('Brick Texture Pack',
'Complete package with different brick surfaces for Cinema4D. Includes 190 4K meterials.',
39.00,
'https://i.imgur.com/kYixLeo.png',
'https://i.imgur.com/LslsDGv.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_3_Bricks.jpg'),
('Gold Texture Pack',
'Complete package with different fabric surfaces for Cinema4D. Includes 148 4K meterials.',
25.00,
'https://i.imgur.com/UjPsicR.png',
'https://i.imgur.com/vuCYdP9.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_6_Gold.jpg'),
('Fabric Texture Pack',
'Complete package with different fabric surfaces for Cinema4D. Includes 255 4K meterials.',
49.00,
'https://i.imgur.com/TZWg0sf.png',
'https://i.imgur.com/IwhnjWl.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_5_Fabric.jpg'),
('Marble Texture Pack',
'Complete package with different marble surfaces for Cinema4D. Includes 188 4K meterials.',
39.00,
'https://i.imgur.com/73tz8Pi.png',
'https://i.imgur.com/JMEMwAt.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_7_Marble.jpg'),
('Wood Texture Pack',
'Complete package with different wood surfaces for Cinema4D. Includes 243 4K meterials.',
49.00,
'https://i.imgur.com/aMn6BcJ.png',
'https://i.imgur.com/PkL4uOk.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_2_Wood.jpg'),
('Cardboard Texture Pack',
'Complete package with different cardboard surfaces for Cinema4D. Includes 135 4K meterials.',
25.00,
'https://i.imgur.com/RuAs3UC.png',
'https://i.imgur.com/63J58nX.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_4_Cardboard.jpg'),
('Concrete Texture Pack',
'Complete package with different concrete surfaces for Cinema4D. Includes 225 4K meterials.',
49.00,
'https://i.imgur.com/A73yAFD.png',
'https://i.imgur.com/xfqrZQt.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_1_Concrete.jpg'),
('Pottery Texture Pack',
'Complete package with different pottery surfaces for Cinema4D. Includes 171 4K meterials.',
39.00,
'https://i.imgur.com/BEvBomH.png',
'https://i.imgur.com/YNmOZUO.jpg',
'https://polymathtest.s3.us-east-2.amazonaws.com/Product_10_Pottery.jpg');