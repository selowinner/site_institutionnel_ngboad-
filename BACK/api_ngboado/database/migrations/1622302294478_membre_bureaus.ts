import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MembreBureaus extends BaseSchema {
  protected tableName = 'membre_bureaux'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('membre_id').nullable()
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
