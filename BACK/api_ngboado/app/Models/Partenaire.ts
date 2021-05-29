import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Partenaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: String|null
  
  @column()
  public title: String|null
  
  @column()
  public image: String|null
  
  @column()
  public has_link: Boolean

  @column()
  public link: String|null
  
  @column()
  public slogan: String|null

  @column()
  public description: String|null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
