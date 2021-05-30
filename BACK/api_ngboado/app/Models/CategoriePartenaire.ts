import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    CategoriePartenaire:
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
 *          type: CategoriePartenaire
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - title
 */
export default class CategoriePartenaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public parent_id: number|null

  @belongsTo(() => CategoriePartenaire, {
    foreignKey: 'parent_id'
  })
  public parent: BelongsTo<typeof CategoriePartenaire>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
