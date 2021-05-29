import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class BlogArticles extends BaseSchema {
  protected tableName = 'blog_articles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('categorie_id')
      table.string('title').nullable()
      table.string('slug').nullable()
      table.string('image').nullable()
      table.boolean('has_link').defaultTo(false)
      table.string('link').nullable()
      table.text('description').nullable()
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
