import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bureau from './Bureau'
import { BelongsTo } from '@ioc:Adonis/Lucid/Relations'

export default class Fond extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public description: String|null

  @column()
  public bureau_id: String|null

  @belongsTo(() => Bureau, {
    foreignKey: 'bureau_id'
  })
  public bureau: BelongsTo<typeof Bureau>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
