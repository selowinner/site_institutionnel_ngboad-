import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    Suggestion:
 *      type: object
 *      properties:
 *        id:
 *          type: uint
 *        anonymous:
 *          type: string
 *        name:
 *          type: string
 *        objet:
 *          type: string
 *        suggestion:
 *          type: string
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - anonymous
 *        - suggestion
 */
export default class Suggestion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public anonymous: Boolean

  @column()
  public name: String|null

  @column()
  public objet: String|null

  @column()
  public suggestion: String|null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
