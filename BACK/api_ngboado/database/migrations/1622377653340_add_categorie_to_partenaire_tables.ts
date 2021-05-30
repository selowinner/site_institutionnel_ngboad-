import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Partenaires extends BaseSchema {
  protected tableName = 'partenaires'

  public async up () {
    this.schema.table(this.tableName, (table) => {
        table.integer('categorie_id').nullable()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
        table.dropColumn('categorie_id')
    })
  }
}
