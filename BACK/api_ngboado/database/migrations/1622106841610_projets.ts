import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Projets extends BaseSchema {
  protected tableName = 'projets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable()
      table.string('slug').nullable()
      table.json('images').nullable()
      table.string('slogan').nullable()
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
