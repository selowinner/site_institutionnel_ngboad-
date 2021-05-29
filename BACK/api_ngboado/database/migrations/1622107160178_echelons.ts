import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Echelons extends BaseSchema {
  protected tableName = 'echelons'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('parent_id').nullable()
      table.string('title').nullable()
      table.string('slug').nullable()
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
