import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    BlogCategorie:
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
 *          type: BlogCategorie
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *      required:
 *        - title
 */
export default class BlogCategorie extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public parent_id: number|null

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @belongsTo(() => BlogCategorie, {
    foreignKey: 'parent_id'
  })
  public parent: BelongsTo<typeof BlogCategorie>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
