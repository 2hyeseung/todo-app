show databases;
use kdt;
CREATE TABLE todo(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    title varchar(100) NOT NULL,
    done tinyint(1) NOT NUll default 0
);

insert into todo (title, done) VALUES
    ('todo1',1),
    ('todo2',0),
    ('todo3',0);

insert into todo VALUES
    (null, 'todo4',1),
    (null, 'todo5',0);