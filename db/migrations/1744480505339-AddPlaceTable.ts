import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPlaceTable1744480505339 implements MigrationInterface {
    name = 'AddPlaceTable1744480505339'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`place\` CHANGE \`description\` \`description\` text NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`place\` CHANGE \`description\` \`description\` text NULL DEFAULT 'NULL'`);
    }

}
