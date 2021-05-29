import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SectionSuggestions extends BaseSchema {
  protected tableName = 'section_suggestions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('slug').nullable()
      table.string('title').nullable()
      table.text('description').nullable()
      table.boolean('has_button').defaultTo(false)
      table.string('button_text').nullable()
      table.boolean('has_button_link').defaultTo(false)
      table.string('button_link').nullable()
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
