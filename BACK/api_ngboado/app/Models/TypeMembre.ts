import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Membre from './Membre'

/**
 * @swagger
 * components:
 *  schemas:
 *    TypeMembre:
 *      type: object
 *      properties:
 *        id:
 *          type: uint
 *        role:
 *          type: string
 *        role_priority:
 *          type: uint
 *        slug:
 *          type: string
 *        membres:
 *          "$ref": '#/components/schemas/Membre'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - role
 *        - role_priority
 */
export default class TypeMembre extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public role: String|null

  @column()
  public slug: String|null

  @column()
  public role_priority: number

  @hasMany(() => Membre, {
    'foreignKey': 'type_membre'
  })
  public membres: HasMany<typeof Membre>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
