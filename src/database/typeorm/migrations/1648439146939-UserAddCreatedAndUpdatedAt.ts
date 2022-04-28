import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';
//a
export class UserAddCreatedAndUpdatedAt1648437865925
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'created_at',
        type: 'timestamptz',
        default: 'CURRENT_TIMESTAMP(6)',
      }),
    );

    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamptz',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
        default: 'CURRENT_TIMESTAMP(6)',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'created_at');
    await queryRunner.dropColumn('users', 'updated_at');
  }
}
