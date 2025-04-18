import { MigrationInterface, QueryRunner } from "typeorm";

export class RenameDatabase1744460402306 implements MigrationInterface {
    name = 'RenameDatabase1744460402306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`place\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` text NULL, \`latitude\` double NOT NULL, \`longitude\` double NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_493d5e591af774a1587d363fb8\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_493d5e591af774a1587d363fb8\` ON \`place\``);
        await queryRunner.query(`DROP TABLE \`place\``);
    }

}
