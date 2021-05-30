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
 *          type: uint
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        parent_id:
 *          type: uint
 *        parent:
 *          type: Echelon
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
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
    foreignKey: 'parent_id'
  })
  public parent: BelongsTo<typeof Echelon>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
