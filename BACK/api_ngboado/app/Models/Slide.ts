import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    Slide:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        subtitle:
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        description:
 *          type: string
 *        has_link:
 *          type: boolean
 *        uri_path:
 *          type: string
 *        has_button:
 *          type: boolean
 *        button_text:
 *          type: string
 *        has_button_link:
 *          type: boolean
 *        button_link:
 *          type: string
 *        tags:
 *          type: array
 *          items:
 *            type: string
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
 *    SlideDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        subtitle:
 *          type: string
 *        image:
 *          type: string
 *        description:
 *          type: string
 *        has_link:
 *          type: boolean
 *        uri_path:
 *          type: string
 *        has_button:
 *          type: boolean
 *        button_text:
 *          type: string
 *        has_button_link:
 *          type: boolean
 *        button_link:
 *          type: string
 *        tags:
 *          type: array
 *          items:
 *            type: string
 *      required:
 *        - title
 *    Slides:
 *      type: object
 *      properties:
 *        slides:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/Slide'
 */
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
