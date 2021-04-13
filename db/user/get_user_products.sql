SELECT * from products
JOIN order_items on products.product_id = order_items.product_id
JOIN orders on order_items.order_id = orders.order_id
WHERE orders.user_id = $1;