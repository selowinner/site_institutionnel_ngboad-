import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Fonds extends BaseSchema {
  protected tableName = 'fonds'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable()
      table.string('slug').nullable()
      table.text('description').nullable()
      table.integer('bureau_id').nullable()
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
