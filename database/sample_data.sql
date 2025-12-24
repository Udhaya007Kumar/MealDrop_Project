USE mealdrop_user;
INSERT INTO users VALUES
(1,'Arun','arun@mail.com','123'),
(2,'Bala','bala@mail.com','123');

USE mealdrop_restaurant;
INSERT INTO restaurants VALUES
(1,'Pizza Hut','pizza@mail.com','999','123');

USE mealdrop_delivery;
INSERT INTO delivery_partners VALUES
(1,'Ravi','ravi@mail.com','888','Bike');

USE mealdrop_order;
INSERT INTO orders VALUES
(1,1,1,1,'PLACED');

