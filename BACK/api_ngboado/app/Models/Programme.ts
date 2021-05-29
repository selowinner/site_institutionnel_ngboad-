import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bureau from './Bureau'

export default class Programme extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public images: JSON
  
  @column()
  public slogan: String|null

  @column()
  public description: String|null

  @column()
  public bureau_id: number

  @belongsTo(() => Bureau, {
    foreignKey: "bureau_id"
  })
  public bureau: BelongsTo<typeof Bureau>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
