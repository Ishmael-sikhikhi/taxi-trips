create table region (
    id int primary key not null,
    name text not null
);

create table routes (
    id int primary key not null,
    name text not null,
    amount float
);

create table taxi (
    id int primary key not null,
    name text not null,
    region_id int not null,
    foreign key (region_id) references region(id)
);

create table trip (
    id int primary key not null,
    route_id int not null,
    taxi_id int not null,
    foreign key (route_id) references routes(id),
    foreign key (taxi_id) references taxi(id)
);

