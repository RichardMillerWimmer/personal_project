INSERT INTO order_items (order_id, product_id)
VALUES (
    SELECT MAX(order_id) FROM orders,
    $1
);