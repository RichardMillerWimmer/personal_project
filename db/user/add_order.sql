INSERT INTO orders (user_id)
VALUES $1
returning order_id;