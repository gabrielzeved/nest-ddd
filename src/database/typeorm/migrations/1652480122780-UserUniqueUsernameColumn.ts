import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UserUniqueUsernameColumn1652480122780 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.changeColumn('users', 'username', new TableColumn({
        name: 'username',
        type: 'varchar',
        isNullable: false,
        isUnique: true
      }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.changeColumn('users', 'username', new TableColumn({
        name: 'username',
        type: 'varchar',
        isNullable: false,
        isUnique: false
      }))
    }

}
