import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Accordions extends BaseSchema {
  protected tableName = 'accordions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable()
      table.string('slug').nullable()
      table.text('description').nullable()
      table.string('image').nullable()
      table.boolean('has_link').defaultTo(false)
      table.string('uri_path').nullable()
      table.boolean('has_button').defaultTo(false)
      table.string('button_text').nullable()
      table.boolean('has_button_link').defaultTo(false)
      table.string('button_link').nullable()
      table.json('tags').nullable()
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
