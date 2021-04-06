SELECT * FROM products
WHERE description ILIKE '%' || $1 || '%';