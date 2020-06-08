import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationContentLesson1591399534433
  implements MigrationInterface {
  name = 'RelationContentLesson1591399534433';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "content" ADD "lessonIdAula" integer`);
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "UQ_c0d889414be01c54b92238d72cd" UNIQUE ("lessonIdAula")`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" ADD CONSTRAINT "FK_c0d889414be01c54b92238d72cd" FOREIGN KEY ("lessonIdAula") REFERENCES "lesson"("idAula") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "FK_c0d889414be01c54b92238d72cd"`,
    );
    await queryRunner.query(
      `ALTER TABLE "content" DROP CONSTRAINT "UQ_c0d889414be01c54b92238d72cd"`,
    );
    await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "lessonIdAula"`);
  }
}
