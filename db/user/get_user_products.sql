SELECT * from order_items
JOIN orders on orders.order_id = order_items.order_id
WHERE orders.user_id = $1;