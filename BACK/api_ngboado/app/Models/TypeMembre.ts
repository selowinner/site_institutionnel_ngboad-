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
 *          type: integer
 *        role:
 *          type: string
 *        role_priority:
 *          type: integer
 *        slug:
 *          type: string
 *        membres:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/MembreSimple'
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - role
 *        - role_priority
 *    TypeMembreDto:
 *      type: object
 *      properties:
 *        role:
 *          type: string
 *        role_priority:
 *          type: integer
 *      required:
 *        - role
 *        - role_priority
 *    TypeMembreSimple:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *        role:
 *          type: string
 *        role_priority:
 *          type: integer
 *        slug:
 *          type: string
 *        createdAt: 
 *          type: string
 *        updatedAt: 
 *          type: string
 *      required:
 *        - role
 *        - role_priority
 *    TypeMembreSimples:
 *      type: object
 *      properties:
 *        type_membres:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/TypeMembreSimple'
 *    TypeMembres:
 *      type: object
 *      properties:
 *        type_membres:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/TypeMembre'
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
    foreignKey: 'type_membre_id',
    localKey: 'id'
  })
  public membres: HasMany<typeof Membre>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
