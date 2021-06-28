import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    Echelon:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        parent_id:
 *          type: integer
 *        parent:
 *          type: Echelon
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
 *    EchelonDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        parent_id:
 *          type: integer
 *      required:
 *        - title
 *    EchelonSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        parent_id:
 *          type: integer
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
 *    EchelonSimples:
 *      type: object
 *      properties:
 *        echelons:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/EchelonSimple'
 *    Echelons:
 *      type: object
 *      properties:
 *        echelons:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/Echelon'
 */
export default class Echelon extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public parent_id: number|null

  @belongsTo(() => Echelon, {
    localKey: 'parent_id'
  })
  public parent: BelongsTo<typeof Echelon>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
