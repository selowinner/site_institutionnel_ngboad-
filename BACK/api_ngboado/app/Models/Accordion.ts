import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * definitions:
 *  Accordion:
 *    type: object
 *    properties:
 *      id:
 *        type: uint
 *      title:
 *        type: string
 *      slug:
 *        type: string
 *      description:
 *        type: string
 *      image:
 *        type: string
 */
export default class Accordion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null
  
  @column()
  public slug: String
  
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
  public tags: JSON

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
