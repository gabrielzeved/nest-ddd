import {MigrationInterface, QueryRunner} from "typeorm";

export class CategoryUrl1652612048752 implements MigrationInterface {
    name = 'CategoryUrl1652612048752'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" ADD "url" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "created_at"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "url"`);
    }

}
