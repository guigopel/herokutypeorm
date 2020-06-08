import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CriaTabelas1591398821032 implements MigrationInterface {
  name = 'CriaTabelas1591398821032';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "content" ("id" SERIAL NOT NULL, "description" character varying(250) NOT NULL, "linkContent" character varying(100) NOT NULL, CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "student" ("id" SERIAL NOT NULL, "name" character varying(45) NOT NULL, "key" character varying(45) NOT NULL, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "student"`);
    await queryRunner.query(`DROP TABLE "content"`);
  }
}
