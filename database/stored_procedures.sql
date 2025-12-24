USE mealdrop_order;

DELIMITER $$
CREATE PROCEDURE update_status(IN oid INT, IN st VARCHAR(50))
BEGIN
  UPDATE orders SET status = st WHERE id = oid;
END$$
DELIMITER ;
