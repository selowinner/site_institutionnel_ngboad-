import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Bureaus extends BaseSchema {
  protected tableName = 'bureaux'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable()
      table.string('slug').nullable()
      table.text('description').nullable()
      table.integer('echelon_id').nullable()
      table.float('lat').nullable()
      table.float('lon').nullable()
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
