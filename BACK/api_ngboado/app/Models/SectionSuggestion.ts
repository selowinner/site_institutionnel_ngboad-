import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    SectionSuggestion:
 *      type: object
 *      properties:
 *        id:
 *          type: uint
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        description:
 *          type: string
 *        has_button:
 *          type: boolean
 *        button_text:
 *          type: string
 *        has_button_link:
 *          type: boolean
 *        button_link:
 *          type: string
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 */
export default class SectionSuggestion extends BaseModel {
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
  public has_button: Boolean

  @column()
  public button_text: String|null

  @column()
  public has_button_link: Boolean

  @column()
  public button_link: String|null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
