import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Bureau from './Bureau'

/**
 * @swagger
 * components:
 *  schemas:
 *    Projet:
 *      type: object
 *      properties:
 *        id:
 *          type: uint
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
 *          type: uint
 *        bureau:
 *          "$ref": '#/components/schemas/Bureau'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 */
export default class Projet extends BaseModel {
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
    foreignKey: "bureau_id"
  })
  public bureau: BelongsTo<typeof Bureau>


  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
