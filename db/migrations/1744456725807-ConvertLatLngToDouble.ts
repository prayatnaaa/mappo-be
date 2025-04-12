import { MigrationInterface, QueryRunner } from "typeorm";

export class ConvertLatLngToDouble1744456725807 implements MigrationInterface {
    name = 'ConvertLatLngToDouble1744456725807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`latitude\``);
        await queryRunner.query(`ALTER TABLE \`place\` ADD \`latitude\` double NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`longitude\``);
        await queryRunner.query(`ALTER TABLE \`place\` ADD \`longitude\` double NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`longitude\``);
        await queryRunner.query(`ALTER TABLE \`place\` ADD \`longitude\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`latitude\``);
        await queryRunner.query(`ALTER TABLE \`place\` ADD \`latitude\` int NOT NULL`);
    }

}
