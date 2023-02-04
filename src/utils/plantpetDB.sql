CREATE TABLE "rols" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "permissions" (
  "id" serial PRIMARY KEY,
  "idRol" int NOT NULL,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "idRol" int NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "phone" varchar,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "products" (
  "id" serial PRIMARY KEY,
  "idCategory" int NOT NULL,
  "codigo" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "description" varchar NOT NULL,
  "stock" int NOT NULL,
  "purchase_price" decimal NOT NULL,
  "sale_price" decimal NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "providers" (
  "id" serial PRIMARY KEY,
  "codigo" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "customers" (
  "id" serial PRIMARY KEY,
  "codigo" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "provider_info" (
  "id" serial PRIMARY KEY,
  "idProvider" int NOT NULL,
  "email" varchar UNIQUE,
  "phone" varchar,
  "acount" varchar,
  "tax_certificate" varchar
);

CREATE TABLE "customer_info" (
  "id" serial PRIMARY KEY,
  "idCustomer" int NOT NULL,
  "email" varchar UNIQUE,
  "phone" varchar,
  "acount" varchar,
  "tax_certificate" varchar
);

CREATE TABLE "purchases" (
  "id" serial PRIMARY KEY,
  "idProvider" int NOT NULL,
  "idUser" int NOT NULL,
  "invoice" varchar DEFAULT 'N/A',
  "total_amount" decimal,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "sales" (
  "id" serial PRIMARY KEY,
  "idUser" int NOT NULL,
  "idCustomer" int NOT NULL,
  "invoice" varchar DEFAULT 'N/A',
  "total_amount" decimal NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

CREATE TABLE "purchases_detail" (
  "id" serial PRIMARY KEY,
  "idPurchase" int NOT NULL,
  "idProduct" int NOT NULL,
  "sub_total" decimal NOT NULL,
-- Aqui podria ir un quantity
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);



CREATE TABLE "sales_details" (
  "id" serial PRIMARY KEY,
  "idSale" int NOT NULL,
  "idProduct" int NOT NULL,
  "sub_total" decimal NOT NULL,
  "state" bool DEFAULT true,
  "fecha_creacion" date NOT NULL
);

ALTER TABLE "users" ADD FOREIGN KEY ("idRol") REFERENCES "rols" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("idCategory") REFERENCES "categories" ("id");

ALTER TABLE "sales_details" ADD FOREIGN KEY ("idSale") REFERENCES "sales" ("id");

ALTER TABLE "purchases_detail" ADD FOREIGN KEY ("idPurchase") REFERENCES "purchases" ("id");

ALTER TABLE "sales_details" ADD FOREIGN KEY ("idProduct") REFERENCES "products" ("id");

ALTER TABLE "purchases_detail" ADD FOREIGN KEY ("idProduct") REFERENCES "products" ("id");

ALTER TABLE "purchases" ADD FOREIGN KEY ("idUser") REFERENCES "users" ("id");

ALTER TABLE "sales" ADD FOREIGN KEY ("idUser") REFERENCES "users" ("id");

ALTER TABLE "permissions" ADD FOREIGN KEY ("idRol") REFERENCES "rols" ("id");

ALTER TABLE "sales" ADD FOREIGN KEY ("idCustomer") REFERENCES "customers" ("id");

ALTER TABLE "purchases" ADD FOREIGN KEY ("idProvider") REFERENCES "providers" ("id");

ALTER TABLE "provider_info" ADD FOREIGN KEY ("idProvider") REFERENCES "providers" ("id");

ALTER TABLE "customer_info" ADD FOREIGN KEY ("idCustomer") REFERENCES "customers" ("id");
