ALTER TABLE car
    ADD air_bags VARCHAR(255);

ALTER TABLE car
    ADD category VARCHAR(255);

ALTER TABLE car
    ADD color VARCHAR(255);

ALTER TABLE car
    ADD description VARCHAR(255);

ALTER TABLE car
    ADD fuel_consumption VARCHAR(255);

ALTER TABLE car
    ADD fuel_type VARCHAR(255);

ALTER TABLE car
    ADD image_url VARCHAR(255);

ALTER TABLE car
    ADD mileage VARCHAR(255);

ALTER TABLE car
    ADD number_of_doors VARCHAR(255);

ALTER TABLE car
    ADD number_of_previous_of_owners VARCHAR(255);

ALTER TABLE car
    ADD number_of_seats VARCHAR(255);

ALTER TABLE car
    ADD power VARCHAR(255);

ALTER TABLE car
    ADD price DECIMAL;

ALTER TABLE car
    ADD transmission VARCHAR(255);

ALTER TABLE car
    ADD year VARCHAR(255);

ALTER TABLE car
    ALTER COLUMN air_bags SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN category SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN color SET NOT NULL;

ALTER TABLE "user"
    ADD credits DECIMAL;

ALTER TABLE "user"
    ADD profile_image_url VARCHAR(255);

ALTER TABLE "user"
    ADD username VARCHAR(255);

ALTER TABLE "user"
    ALTER COLUMN credits SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN description SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN fuel_consumption SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN fuel_type SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN image_url SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN mileage SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN number_of_doors SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN number_of_previous_of_owners SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN number_of_seats SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN power SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN price SET NOT NULL;

ALTER TABLE "user"
    ALTER COLUMN profile_image_url SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN transmission SET NOT NULL;

ALTER TABLE "user"
    ALTER COLUMN username SET NOT NULL;

ALTER TABLE car
    ALTER COLUMN year SET NOT NULL;

ALTER TABLE "user"
DROP
COLUMN fist_name;

ALTER TABLE "user"
DROP
COLUMN last_name;