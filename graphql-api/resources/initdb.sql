BEGIN;

create user sa
    superuser
    createdb
    createrole
    replication
    bypassrls;

-- auto-generated definition
create database backend_db
    with owner sa;

-- auto-generated definition
create sequence if not exists item_item_id_seq
    as integer;

alter sequence item_item_id_seq owner to sa;

alter sequence item_item_id_seq owned by item.item_id;

-- auto-generated definition
create sequence if not exists item_user_id_seq
    as integer;

alter sequence item_user_id_seq owner to sa;

alter sequence item_user_id_seq owned by item.user_id;

-- auto-generated definition
create sequence if not exists user_id_seq
    as integer;

alter sequence user_id_seq owner to sa;

alter sequence user_id_seq owned by "user".user_id;


-- auto-generated definition
create table if not exists item
(
    item_id serial
        constraint item_pk
            primary key,
    name    text           not null,
    price   numeric(19, 2) not null,
    user_id serial
        constraint item_user_user_id_fk
            references "user"
);

comment on table item is 'item of the user';

alter table item
    owner to sa;


-- auto-generated definition
create table if not exists "user"
(
    user_id    integer default nextval('user_id_seq'::regclass) not null
        constraint user_pk
            primary key,
    first_name text                                             not null,
    last_name  text                                             not null,
    age        integer default 0
);

alter table "user"
    owner to sa;


-- end of generating schema


INSERT INTO "user" (first_name, last_name, age)
VALUES ('Alois', 'Jirásek', 120),
       ('Beatrix', 'Schrödinger', 69),
       ('Alexander', 'Kahn', 18),
       ('Miriam', 'Pawn', 40);

INSERT INTO "item" (name, price, user_id)
VALUES ('Item 1', 10, 1),
       ('Item 2', 45.12, 1),
       ('Item 3', 120.69, 1),
       ('Item 4', 40.10, 1),
       ('Item 5', 0.124, 1),
       ('Item 6', 1.25, 1),
       ('Item 7', 970.98, 1),
       ('Item 8', 14.50, 1),
       ('Item 9', 70, 2),
       ('Item 10', 102.10, 2),
       ('Item 11', 13.50, 3),
       ('Item 12', 57416, 3);


DO
$$
    DECLARE
        var_user_id bigint;
    BEGIN
        INSERT INTO "user" (first_name, last_name, age)
        VALUES ('Spammer', 'Spammable', 666)
        RETURNING user_id INTO var_user_id;

        for i in 100..300
            LOOP
                insert into item (name, price, user_id)
                values ('Item ' || i, round((random() * 100)::numeric, 2), var_user_id);
            end loop;


    END;

$$;

COMMIT;
