insert into region(id, name) values (1, 'Durban');
insert into region(id, name) values (2, 'Cape Town');
insert into region(id, name) values (3, 'Gauteng');


insert into taxi(id, reg_number, region_id) values (1, 'DN 92 ZN',1);
insert into taxi(id, reg_number, region_id) values (2, 'GI 12 NC ZN',1);
insert into taxi(id, reg_number, region_id) values (3, 'XA 12 WA ZN',1);
insert into taxi(id, reg_number, region_id) values (4, 'CA 123 456',2);
insert into taxi(id, reg_number, region_id) values (5, 'CAA 123 400',2);
insert into taxi(id, reg_number, region_id) values (6, 'CA 270 987',2);
insert into taxi(id, reg_number, region_id) values (7, 'ND 123 GP',3);
insert into taxi(id, reg_number, region_id) values (8, 'WK 12 DN GP',3);
insert into taxi(id, reg_number, region_id) values (9, 'WAS 123 GP',3);

-- Gauteng
insert into routes(id, name) values (1, 'Johannesburg-Soweto' 30);
insert into routes(id, name) values (2, 'Pretoria-Soweto', 45.50);
insert into routes(id, name) values (3, 'Johannesburg-Pretoria', 42);
-- Cape Town
insert into routes(id, name) values (4, 'Cape Town-Bellville', 17);
insert into routes(id, name) values (5, 'Cape Town-Langa', 17);
insert into routes(id, name) values (6, 'Nyanga-Bellville', 15);
-- Durban
insert into routes(id, name) values (7, 'Durban-Mhlanga', 110);
insert into routes(id, name) values (8, 'Durban-Mlazi', 50);
insert into routes(id, name) values (9, 'Port Shepstone-Durban', 85);

-- trips
insert into trip(id, route_id, taxi_id) values (1, 1,7);
insert into trip(id, route_id, taxi_id) values (2, 2,8);
insert into trip(id, route_id, taxi_id) values (3, 3,9);

insert into trip(id, route_id, taxi_id) values (4, 4,4);
insert into trip(id, route_id, taxi_id) values (5, 5,5);
insert into trip(id, route_id, taxi_id) values (6, 6,6);

insert into trip(id, route_id, taxi_id) values (7, 7,1);
insert into trip(id, route_id, taxi_id) values (8, 8,2);
insert into trip(id, route_id, taxi_id) values (9, 9,3);

insert into trip(id, route_id, taxi_id) values (10, 3,7);
insert into trip(id, route_id, taxi_id) values (11, 1,8);
insert into trip(id, route_id, taxi_id) values (12, 2,9);

insert into trip(id, route_id, taxi_id) values (13, 2,7);
insert into trip(id, route_id, taxi_id) values (14, 3,8);
insert into trip(id, route_id, taxi_id) values (15, 1,9);

insert into trip(id, route_id, taxi_id) values (16, 6,4);
insert into trip(id, route_id, taxi_id) values (17, 4,5);
insert into trip(id, route_id, taxi_id) values (18, 5,6);

insert into trip(id, route_id, taxi_id) values (19, 5,4);
insert into trip(id, route_id, taxi_id) values (20, 6,5);
insert into trip(id, route_id, taxi_id) values (21, 4,6);

insert into trip(id, route_id, taxi_id) values (22, 9,1);
insert into trip(id, route_id, taxi_id) values (23, 7,2);
insert into trip(id, route_id, taxi_id) values (24, 8,3);

insert into trip(id, route_id, taxi_id) values (25, 8,1);
insert into trip(id, route_id, taxi_id) values (26, 9,2);
insert into trip(id, route_id, taxi_id) values (27, 7,3);

