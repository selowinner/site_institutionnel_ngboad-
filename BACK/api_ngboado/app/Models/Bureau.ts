import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Echelon from './Echelon'
import MembreBureau from './MembreBureau'
import Fond from './Fond'
import Programme from './Programme'
import Projet from './Projet'

export default class Bureau extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null

  @column()
  public slug: String|null

  @column()
  public description: String|null

  @column()
  public echelon_id: number|null

  @column()
  public lat: number|null
  
  @column()
  public lon: number|null

  @belongsTo(() => Echelon, {
    foreignKey:  'echelon_id'
  })
  public echelon: BelongsTo<typeof Echelon>

  @hasMany(() => MembreBureau, {
    foreignKey: 'bureau_id'
  })
  public membres: HasMany<typeof MembreBureau>


  @hasMany(() => Fond, {
    foreignKey: 'bureau_id'
  })
  public fonds: HasMany<typeof Fond>

  @hasMany(() => Programme, {
    foreignKey: 'bureau_id'
  })
  public programmes: HasMany<typeof Programme>

  @hasMany(() => Projet, {
    foreignKey: 'bureau_id'
  })
  public projets: HasMany<typeof Projet>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
