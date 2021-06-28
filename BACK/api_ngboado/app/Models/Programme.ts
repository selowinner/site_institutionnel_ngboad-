import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bureau from './Bureau'

/**
 * @swagger
 * components:
 *  schemas:
 *    Programme:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        images:
 *          type: array
 *          items:
 *            type: string
 *        slogan:
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
 *    ProgrammeDto:
 *      type: object
 *      properties:
 *        title:
 *          type: string
 *        images:
 *          type: array
 *          items:
 *            type: string
 *        slogan:
 *          type: string
 *        description:
 *          type: string
 *        bureau_id:
 *          type: integer
 *    ProgrammeSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        images:
 *          type: array
 *          items:
 *            type: string
 *        slogan:
 *          type: string
 *        description:
 *          type: string
 *        bureau_id:
 *          type: integer
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *    ProgrammeSimples:
 *      type: object
 *      properties:
 *        programmes:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/ProgrammeSimple'
 *    Programmes:
 *      type: object
 *      properties:
 *        programmes:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/Programme'
 */
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
    localKey: "bureau_id"
  })
  public bureau: BelongsTo<typeof Bureau>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
