import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Bureau from './Bureau'

/**
 * @swagger
 * components:
 *  schemas:
 *    Fond:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        description:
 *          type: string
 *        bureau_id:
 *          type: integer
 *        bureau:
 *          "$ref": '#/components/schemas/BureauSimple'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
 *        - bureau_id
 *    FondDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        description:
 *          type: string
 *        bureau_id:
 *          type: integer
 *      required:
 *        - title
 *        - bureau_id
 *    FondSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        description:
 *          type: string
 *        bureau_id:
 *          type: integer
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
 *        - bureau_id
 *    FondSimples:
 *      type: object
 *      properties:
 *        fonds:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/FondSimple'
 *    Fonds:
 *      type: object
 *      properties:
 *        fonds:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/Fond'
 */
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
    localKey: 'bureau_id'
  })
  public bureau: BelongsTo<typeof Bureau>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
