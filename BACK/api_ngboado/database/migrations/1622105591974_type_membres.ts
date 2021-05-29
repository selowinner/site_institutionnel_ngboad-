import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class TypeMembres extends BaseSchema {
  protected tableName = 'type_membres'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('role').nullable()
      table.string('slug').nullable()
      table.integer('role_priority').nullable()
      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
