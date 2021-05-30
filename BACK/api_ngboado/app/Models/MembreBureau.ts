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
 *          type: uint
 *        membre_id:
 *          type: uint
 *        bureau_id:
 *          type: uint
 *        membre:
 *          "$ref": '#/components/schemas/Membre'
 *        bureau:
 *          "$ref": '#/components/schemas/Bureau'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - membre_id
 *        - bureau_id
 */
export default class MembreBureau extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public bureau_id: number

  @column()
  public membre_id: number

  @belongsTo(() => Bureau, {
    foreignKey: "bureau_id"
  })
  public bureau: BelongsTo<typeof Bureau>

  @belongsTo(() => Membre, {
    foreignKey: "membre_id"
  })
  public membre: BelongsTo<typeof Membre>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
