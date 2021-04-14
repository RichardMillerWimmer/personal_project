UPDATE products 
SET name = $2, description = $3, price = $4, image_one = $5, image_two = $6, download_link = $7
WHERE product_id = $1;