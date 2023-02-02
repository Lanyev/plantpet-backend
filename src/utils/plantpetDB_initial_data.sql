insert into rols 
	( "name", "fecha_creacion")
values
	('Administrador', '01/31/2023'),
	('Contabilidad', '01/31/2023'),
	('Produccion', '01/31/2023'),
	('Almacen', '01/31/2023'),
	('Vendedor', '01/31/2023');
	
insert into permissions  
	(  "idRol", "name", "fecha_creacion")
values
	--Administrador
	( 1, 'categories', '01/31/2023'),
	( 1, 'customer_info', '01/31/2023'),
	( 1, 'customers', '01/31/2023'),
	( 1, 'permissions', '01/31/2023'),
	( 1, 'products', '01/31/2023'),
	( 1, 'provider_info', '01/31/2023'),
	( 1, 'providers', '01/31/2023'),
	( 1, 'purchases', '01/31/2023'),
	( 1, 'purchases_detail', '01/31/2023'),
	( 1, 'rols', '01/31/2023'),
	( 1, 'sales', '01/31/2023'),
	( 1, 'sales_details', '01/31/2023'),
	( 1, 'users', '01/31/2023'),
	--Contabilidad
	( 2, 'customer_info', '01/31/2023'),
	( 2, 'customers', '01/31/2023'),
	( 2, 'products', '01/31/2023'),
	( 2, 'provider_info', '01/31/2023'),
	( 2, 'providers', '01/31/2023'),
	( 2, 'purchases', '01/31/2023'),
	( 2, 'purchases_detail', '01/31/2023'),
	( 2, 'sales', '01/31/2023'),
	( 2, 'sales_details', '01/31/2023'),
	--Produccion
	( 3, 'categories', '01/31/2023'),
	( 3, 'products', '01/31/2023'),
	( 3, 'purchases', '01/31/2023'),
	--Almacen
	( 4, 'categories', '01/31/2023'),
	( 4, 'products', '01/31/2023'),
	( 4, 'provider_info', '01/31/2023'),
	( 4, 'providers', '01/31/2023'),
	( 4, 'purchases', '01/31/2023'),
	( 4, 'purchases_detail', '01/31/2023'),	
	--Ventas
	( 5, 'categories', '01/31/2023'),
	( 5, 'products', '01/31/2023'),
	( 5, 'sales', '01/31/2023'),
	( 5, 'sales_details', '01/31/2023');
	
insert into users 
	( "idRol", first_name, last_name, email, "password", phone, "fecha_creacion")
values
	( 1, 'Julio Cesar', 'Sanchez Marquez', 'julio930911@gmail.com', 'julio_11231a', '+526731032406', '01/31/2023'),
	( 2, 'Irving Adrian', 'Urias', 'guerorolloficial@hotmail.com', '1234567890', '+526731166867', '01/31/2023'),
	( 2, 'Oswaldo Emanuel', 'Soto Lopez', 'veosoto@hotmail.com', '1234567890','+526731068786', '01/31/2023'),
	( 2, 'Jose Arturo', 'Bojorquez Campos', 'arturobc01@gmail.com', '1234567890','+526731066990', '01/31/2023');

insert into categories 
	( "name", fecha_creacion )
values
	( 'Botellas', '01/31/2023' );

insert into products 
	( "idCategory", codigo, "name", description, stock, purchase_price, sale_price, fecha_creacion )
values
	( 1, 'BT-28-400-0250-000', '250 ml', 'Bulto de 0 botellas de 250 ml', 0, 0, 0, '02/01/2023' ),
	( 1, 'BT-28-400-0600-000', '600 ml', 'Bulto de 0 botellas de 600 ml', 0, 0, 0, '02/01/2023' ),
	( 1, 'BT-28-400-0500-030', '500 ml', 'Bulto de 30 botellas de 500 ml', 0, 50.00, 290.00, '02/01/2023' ),
	( 1, 'BT-28-400-0500-060', '500 ml', 'Bulto de 60 botellas de 500 ml', 37, 100.00, 290.00, '02/01/2023' ),
	( 1, 'BT-28-400-0500-150', '500 ml', 'Bulto de 150 botellas de 500 ml', 43, 248.50, 290.00, '02/01/2023' ),
	( 1, 'BT-28-400-1000-104', '1000 ml', 'Bulto de 104 botellas de 1000 ml', 70, 248.50, 290.00, '02/01/2023' ),
	( 1, 'BT-28-400-1500-000', '1500 ml', 'Bulto de 0 botellas de 1500 ml', 0, 0, 0, '02/01/2023' );

insert into providers 
	( codigo, "name", fecha_creacion )
values
	( 'PRE-1', 'KIM PET', '02/01/2023' ),
	( 'ENV-1', 'TINY PACK', '02/01/2023' ),
	( 'BOL-1', 'PLASTICOS Y RESINAS', '02/01/2023' ),
	( 'TAP-1', 'INYECCION PLASTICA', '02/01/2023' ),
	( 'TAP-2', 'TAPANOSA', '02/01/2023' ),
	( 'TAP-3', 'PLASTIMAS', '02/01/2023' );

insert into customers 
	( codigo, "name",fecha_creacion )
values
	( 'ND-1', 'New Delhi', '02/01/2023' ),
	( 'GR-1', 'Güero Roll', '02/01/2023' ),
	( 'FS-1', 'Food Service', '02/01/2023' );

--insert into provider_info 
--	( "idProvider", email, phone, acount, tax_certificate )
--values
--	(  );

--insert into customer_info  
--	( "idCustomer" , email, phone, acount, tax_certificate )
--values
--	(  );

--insert into purchases 
--	( "idProvider", "idUser", invoice, total_amount, fecha_creacion )
--values
--	( 1, 1, 'N/A', 50.00 '02/01/2023' );

--insert  into sales 
--	( "idUser", "idCustomer", invoice, total_amount, fecha_creacion )
--values
--	( 1, 1, 'N/A', 50.00 '02/01/2023' );

--insert into purchases_detail 
--	( "idPurchase", "idProduct", sub_total, fecha_creacion )
--values
--	( 1, 1, 50.00, '02/01/2023' );

--insert into sales_details  
--	( "idSale" , "idProduct" , sub_total, fecha_creacion )
--values
--	( 1, 1, 50.00, '02/01/2023' )
	


