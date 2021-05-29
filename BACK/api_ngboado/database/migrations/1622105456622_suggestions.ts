import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Suggestions extends BaseSchema {
  protected tableName = 'suggestions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('anonymous').defaultTo(false)
      table.string('name').nullable()
      table.string('objet').nullable()
      table.text('suggestion').nullable()
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
