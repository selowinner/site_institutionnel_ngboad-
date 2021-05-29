import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import BlogCategorie from './BlogCategorie'

export default class BlogArticle extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public categorie_id: number|null

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public image: String|null

  @column()
  public has_link: Boolean

  @column()
  public link: String|null

  @column()
  public description: String|null

  @belongsTo(() => BlogCategorie, {
    foreignKey: 'categorie_id'
  })
  public categorie: BelongsTo<typeof BlogCategorie>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
