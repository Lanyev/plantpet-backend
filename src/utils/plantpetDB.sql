CREATE TABLE "rols" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "permissions" (
  "id" serial PRIMARY KEY,
  "id_rol" int NOT NULL,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "id_rol" int NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "password" varchar NOT NULL,
  "phone" varchar,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "products" (
  "id" serial PRIMARY KEY,
  "id_category" int NOT NULL,
  "codigo" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "description" varchar NOT NULL,
  "stock" int NOT NULL,
  "purchase_price" decimal NOT NULL,
  "sale_price" decimal NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "providers" (
  "id" serial PRIMARY KEY,
  "codigo" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "customers" (
  "id" serial PRIMARY KEY,
  "codigo" varchar UNIQUE NOT NULL,
  "name" varchar NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "providers_info" (
  "id" serial PRIMARY KEY,
  "id_provider" int NOT NULL,
  "email" varchar UNIQUE,
  "phone" varchar,
  "acount" varchar,
  "tax_certificate" varchar,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "customers_info" (
  "id" serial PRIMARY KEY,
  "id_customer" int NOT NULL,
  "email" varchar UNIQUE,
  "phone" varchar,
  "acount" varchar,
  "tax_certificate" varchar,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "purchases" (
  "id" serial PRIMARY KEY,
  "id_provider" int NOT NULL,
  "id_user" int NOT NULL,
  "invoice" varchar DEFAULT 'N/A',
  "total_amount" decimal,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "sales" (
  "id" serial PRIMARY KEY,
  "id_user" int NOT NULL,
  "id_customer" int NOT NULL,
  "invoice" varchar DEFAULT 'N/A',
  "total_amount" decimal NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "purchases_detail" (
  "id" serial PRIMARY KEY,
  "id_purchase" int NOT NULL,
  "id_product" int NOT NULL,
  "quantity" int not null,
  "sub_total" decimal NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

CREATE TABLE "sales_detail" (
  "id" serial PRIMARY KEY,
  "id_sale" int NOT NULL,
  "id_product" int NOT NULL,
  "quantity" int not null,
  "sub_total" decimal NOT NULL,
  "state" bool DEFAULT true,
  "created_at" date NOT NULL,
  "updated_at" date NOT NULL
);

ALTER TABLE "users" ADD FOREIGN KEY ("id_rol") REFERENCES "rols" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("id_category") REFERENCES "categories" ("id");

ALTER TABLE "sales_details" ADD FOREIGN KEY ("id_sale") REFERENCES "sales" ("id");

ALTER TABLE "purchases_detail" ADD FOREIGN KEY ("id_purchase") REFERENCES "purchases" ("id");

ALTER TABLE "sales_details" ADD FOREIGN KEY ("id_product") REFERENCES "products" ("id");

ALTER TABLE "purchases_detail" ADD FOREIGN KEY ("id_product") REFERENCES "products" ("id");

ALTER TABLE "purchases" ADD FOREIGN KEY ("id_user") REFERENCES "users" ("id");

ALTER TABLE "sales" ADD FOREIGN KEY ("id_user") REFERENCES "users" ("id");

ALTER TABLE "permissions" ADD FOREIGN KEY ("id_rol") REFERENCES "rols" ("id");

ALTER TABLE "sales" ADD FOREIGN KEY ("id_customer") REFERENCES "customers" ("id");

ALTER TABLE "purchases" ADD FOREIGN KEY ("id_provider") REFERENCES "providers" ("id");

ALTER TABLE "provider_info" ADD FOREIGN KEY ("id_provider") REFERENCES "providers" ("id");

ALTER TABLE "customer_info" ADD FOREIGN KEY ("id_customer") REFERENCES "customers" ("id");