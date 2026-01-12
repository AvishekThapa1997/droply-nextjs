ALTER TABLE "user"
ALTER COLUMN "emailVerified" TYPE boolean
USING false;

ALTER TABLE "user"
ALTER COLUMN "emailVerified" SET DEFAULT false;

ALTER TABLE "user"
ALTER COLUMN "emailVerified" SET NOT NULL;
