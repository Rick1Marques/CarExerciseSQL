ALTER TABLE car
DROP
COLUMN number_of_previous_of_owners;

ALTER TABLE car
    ADD number_of_previous_of_owners INTEGER NOT NULL;