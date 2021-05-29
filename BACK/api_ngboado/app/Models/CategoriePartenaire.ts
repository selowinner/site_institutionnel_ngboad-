import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'

export default class CategoriePartenaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public parent_id: number|null

  @belongsTo(() => CategoriePartenaire, {
    foreignKey: 'parent_id'
  })
  public parent: BelongsTo<typeof CategoriePartenaire>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
