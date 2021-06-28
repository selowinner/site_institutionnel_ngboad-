import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

/**
 * @swagger
 * components:
 *  schemas:
 *    Accordion:
 *      type: object
 *      properties:
 *        id:
 *          readonly: true
 *          title: "Identifiant en base de donnée"
 *          type: integer
 *        title:
 *          readonly: true
 *          type: string
 *          title: "Titre de L'accordion"
 *          minLength: 2
 *        slug:
 *          type: string
 *          title: "Slug auto générer à partir du titre de l'accordion"
 *        description:
 *          type: string
 *          nullable: true
 *          title: "Description de l'accordion"
 *        image:
 *          type: string
 *          nullable: true
 *          title: "image pour l'accordion"
 *        has_button:
 *          type: boolean
 *        button_text:
 *          type: string
 *        has_link:
 *          type: boolean
 *        uri_path:
 *          type: string
 *        has_button_link:
 *          type: boolean
 *        button_link:
 *          type: string
 *        tags:
 *          type: array
 *          items:
 *            type: string
 *        createdAt:
 *          type: string
 *        updatedAt:
 *          type: string
 *      required:
 *        - title
 *        - description
 *        - tags
 *        - image
 *    AccordionDto:
 *      type: object
 *      properties:
 *        title:
 *          readonly: true
 *          type: string
 *          title: "Titre de L'accordion"
 *          minLength: 2
 *        description:
 *          type: string
 *          nullable: true
 *          title: "Description de l'accordion"
 *        image:
 *          type: string
 *          nullable: true
 *          title: "image pour l'accordion"
 *        has_button:
 *          type: boolean
 *        button_text:
 *          type: string
 *        has_link:
 *          type: boolean
 *        uri_path:
 *          type: string
 *        has_button_link:
 *          type: boolean
 *        button_link:
 *          type: string
 *        tags:
 *          type: array
 *          items:
 *            type: string
 *      required:
 *        - title
 *        - description
 *        - tags
 *        - image
 *    Accordions:
 *      type: object
 *      properties:
 *        accordions:
 *          type: array
 *          items:
 *            "$ref": '#/components/schemas/Accordion'
 */
export default class Accordion extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: String|null
  
  @column()
  public slug: String
  
  @column()
  public description: String|null

  @column()
  public image: String|null

  @column()
  public has_link: Boolean

  @column()
  public uri_path: String|null

  @column()
  public has_button: Boolean

  @column()
  public button_text: String|null

  @column()
  public has_button_link: Boolean

  @column()
  public button_link: String|null

  @column()
  public tags: JSON

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
