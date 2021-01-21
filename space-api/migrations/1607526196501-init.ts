import { MigrationInterface, QueryRunner } from 'typeorm';

export class init1607526196501 implements MigrationInterface {
  name = 'init1607526196501';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "traveler" ("id" SERIAL NOT NULL, "nick_name" character varying(60) NOT NULL, "email" character varying(120) NOT NULL, "avatar" integer NOT NULL, "password" character varying(255) NOT NULL, "jwt" text, "id_planet" integer NOT NULL, CONSTRAINT "UQ_05243034dbf22e4ed21f5604390" UNIQUE ("nick_name"), CONSTRAINT "UQ_87505c53d27618fbf225b580cdf" UNIQUE ("email"), CONSTRAINT "PK_17be9195f4528e39046d352f3c6" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "planet" ("id" SERIAL NOT NULL, "name" character varying(60) NOT NULL, "id_galaxy" integer NOT NULL, CONSTRAINT "UQ_0c6595b668a276b8482611a20e0" UNIQUE ("name"), CONSTRAINT "PK_cb7506671ad0f19d6287ee4bfb7" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "galaxy" ("id" SERIAL NOT NULL, "name" character varying(60) NOT NULL, "ordination" integer NOT NULL, "image_link" text, CONSTRAINT "UQ_9beaf11aef12f1fba0850a486da" UNIQUE ("name"), CONSTRAINT "UQ_62318294d6615deeb10fb57ebbe" UNIQUE ("ordination"), CONSTRAINT "PK_58575ecf54ca22d898af3adf632" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "meeting" ("id" SERIAL NOT NULL, "link" character varying(255) NOT NULL, "id_traveler" integer, "id_planet" integer NOT NULL, CONSTRAINT "UQ_dc12cd633ba25d08dd030cc6835" UNIQUE ("id_traveler"), CONSTRAINT "PK_dccaf9e4c0e39067d82ccc7bb83" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "traveler" ADD CONSTRAINT "FK_3042c7245e74790fac98f03cc34" FOREIGN KEY ("id_planet") REFERENCES "planet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "planet" ADD CONSTRAINT "FK_fe94b46b6dd2f83925bed3342e0" FOREIGN KEY ("id_galaxy") REFERENCES "galaxy"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_dc12cd633ba25d08dd030cc6835" FOREIGN KEY ("id_traveler") REFERENCES "traveler"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" ADD CONSTRAINT "FK_fc176a533cc39032326952c13c0" FOREIGN KEY ("id_planet") REFERENCES "planet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "meeting" DROP CONSTRAINT "FK_fc176a533cc39032326952c13c0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "meeting" DROP CONSTRAINT "FK_dc12cd633ba25d08dd030cc6835"`,
    );
    await queryRunner.query(
      `ALTER TABLE "planet" DROP CONSTRAINT "FK_fe94b46b6dd2f83925bed3342e0"`,
    );
    await queryRunner.query(
      `ALTER TABLE "traveler" DROP CONSTRAINT "FK_3042c7245e74790fac98f03cc34"`,
    );
    await queryRunner.query(`DROP TABLE "meeting"`);
    await queryRunner.query(`DROP TABLE "galaxy"`);
    await queryRunner.query(`DROP TABLE "planet"`);
    await queryRunner.query(`DROP TABLE "traveler"`);
  }
}
