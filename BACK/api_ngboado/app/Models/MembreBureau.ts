import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Bureau from './Bureau'
import Membre from './Membre'

/**
 * @swagger
 * components:
 *  schemas:
 *    MembreBureau:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        membre_id:
 *          type: integer
 *        bureau_id:
 *          type: integer
 *        membre:
 *          "$ref": '#/components/schemas/MembreSimple'
 *        bureau:
 *          "$ref": '#/components/schemas/BureauSimple'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - membre_id
 *        - bureau_id
 *    MembreBureauDto:
 *      type: object
 *      properties:
 *        membre_id:
 *          type: integer
 *        bureau_id:
 *          type: integer
 *      required:
 *        - membre_id
 *        - bureau_id
 *    MembreBureauSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        membre_id:
 *          type: integer
 *        bureau_id:
 *          type: integer
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - membre_id
 *        - bureau_id
 *    MembreBureauSimples:
 *      type: object
 *      properties:
 *        membre_bureaux:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/MembreBureauSimple'
 *    MembreBureaux:
 *      type: object
 *      properties:
 *        membre_bureaux:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/MembreBureau'
 */
export default class MembreBureau extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public bureau_id: number

  @column()
  public membre_id: number

  @belongsTo(() => Bureau, {
    localKey: "bureau_id"
  })
  public bureau: BelongsTo<typeof Bureau>

  @belongsTo(() => Membre, {
    localKey: "membre_id"
  })
  public membre: BelongsTo<typeof Membre>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
