-- SELECT download_link FROM products
-- JOIN order_items on order_items.product_id = product_id
-- JOIN orders on orders.order_id = order_items.order_id
-- JOIN users on user.user_id = orders.user_id 
-- WHERE product_id = $1 AND user.user_id = $2;

SELECT name, download_link FROM products
WHERE product_id = $1;  