import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Slide extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public subtitle: String|null

  @column()
  public description: String|null
  
  @column()
  public image: String|null

  @column()
  public has_link: Boolean

  @column()
  public uri_path: String|null
  
  @column()
  public has_button: Boolean

  @column()
  public button_text: String|null

  @column()
  public has_button_link: Boolean

  @column()
  public button_link: String|null

  @column()
  public tags: Array<String>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
