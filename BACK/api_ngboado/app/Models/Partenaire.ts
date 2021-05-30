import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import CategoriePartenaire from './CategoriePartenaire'
import { BelongsTo } from '@ioc:Adonis/Lucid/Relations'

/**
 * @swagger
 * components:
 *  schemas:
 *    Partenaire:
 *      type: object
 *      properties:
 *        id:
 *          type: uint
 *        title:
 *          type: string
 *        slug:
 *          type: string
 *        image:
 *          type: string
 *        has_link:
 *          type: boolean
 *        link:
 *          type: string
 *        slogan:
 *          type: string
 *        description:
 *          type: string
 *        categorie_id:
 *          type: uint
 *        categorie:
 *          "$ref": '#/components/schemas/CategoriePartenaire'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - categorie_id
 *        - title
 *        - image
 */
export default class Partenaire extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public slug: String|null
  
  @column()
  public title: String|null
  
  @column()
  public image: String|null
  
  @column()
  public has_link: Boolean

  @column()
  public link: String|null
  
  @column()
  public slogan: String|null

  @column()
  public description: String|null

  @column()
  public categorie_id: number

  @belongsTo(() => CategoriePartenaire, {
    foreignKey: 'categorie_id'
  })
  public categorie: BelongsTo<typeof CategoriePartenaire> 
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
