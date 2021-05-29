import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Membres extends BaseSchema {
  protected tableName = 'membres'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('type_membre_id').nullable()
      table.string('slug').nullable()
      table.string('job').nullable()
      table.string('fullname').nullable()
      table.string('image').nullable()
      table.string('biographie').nullable()
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
