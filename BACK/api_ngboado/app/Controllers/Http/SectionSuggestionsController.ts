import Application from '@ioc:Adonis/Core/Application'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { slugify } from 'App/Models/Helpers/helpers'
import SectionSuggestion from 'App/Models/SectionSuggestion'
import SectionSuggestionCreateValidator from 'App/Validators/SectionSuggestionCreateValidator'

export default class SectionSuggestionsController {
  /**
   * @swagger
   * paths:
   *  /api/section_suggestion:
   *    get:
   *      tags:
   *        - SectionSuggestion
   *      summary: Get All section suggestion
   *      operationId: GetSectionSuggestion
   *      responses:
   *        '200':
   *          description: Show single item
   *          content:
   *            application/json:
   *              schema:
   *                "$ref": '#/components/schemas/SectionSuggestions'
   */
  public async index ({response}: HttpContextContract) {
    return response.status(200).json({
      section_suggestions: await SectionSuggestion.all()
     })
  }

  /**
   * @swagger
   * paths:
   *  /api/section_suggestions:
   *    post:
   *      tags:
   *        - SectionSuggestion
   *      summary: Register a new SectionSuggestion into database
   *      operationId: PostSectionSuggestion
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              "$ref": '#/components/schemas/SectionSuggestionDto'
   *      responses:
   *        '201':
   *          description: Created
   *          content:
   *            application/json:
   *              schema:
   *                type:  object
   */
  public async store ({response, request}: HttpContextContract) {
    try {
      await request.validate(SectionSuggestionCreateValidator)
    } catch (error) {
      return response.badRequest(error.messages)
    }
    
    let section_suggestion = new SectionSuggestion()

    section_suggestion.title = request.input('title')
    section_suggestion.slug = slugify(request.input('title'))
    section_suggestion.description = request.input('description') ?? ''
    section_suggestion.has_button = request.input('has_button') ?? false
    section_suggestion.has_button_link = request.input('has_button_link') ?? false
    section_suggestion.button_text = request.input('button_text') ?? ''
    section_suggestion.button_link = request.input('button_link') ?? ''

    if(request.file('image')){
      const image = request.file('image', {
        size: '18mb',
        extnames: ['jpg', 'png', 'gif'],
      })
      
      if (!image) {
        return response.badRequest("Erreur lors de l'upload de l'image");
      }
      
      if (!image.isValid) {
        return response.badRequest(image.errors)
      }
      const fileName = `${cuid()}.${image.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: fileName
      })

      section_suggestion.image = Application.tmpPath(`uploads/${fileName}`)
    }else{
      section_suggestion.image = ''
    }

    await section_suggestion.save()
    
    response.created
    return response.json({});
  }

  /**
   * @swagger
   *  paths:
   *  /api/section_suggestion/{id}:
   *    get:
   *      tags:
   *        - SectionSuggestion
   *      summary: show single section suggestion
   *      operationId: ShowSectionSuggestion
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *      responses:
   *        '200':
   *          description: Show single item
   *          content:
   *            application/json:
   *              schema:
   *                "$ref": '#/components/schemas/SectionSuggestion'
   */
  public async show ({response, params}: HttpContextContract) {
    return response.status(200).json(
      await SectionSuggestion
        .query()
        .where('id', params.id)
        .firstOrFail()
    )
  }

  /**
   * @swagger
   * paths:
   *  /api/section_suggestions/{id}:
   *    put:
   *      tags:
   *        - SectionSuggestion
   *      summary: Update single Section Suggestion
   *      operationId: UpdateSectionSuggestion
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              "$ref": '#/components/schemas/SectionSuggestionDto'
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *      responses:
   *        '200':
   *          description: Udapted
   *          content:
   *            application/json:
   *              schema:
   *                type:  object
   */
  public async update ({response, request, params}: HttpContextContract) {
    let section_suggestion = await SectionSuggestion.query().where('id', params.id).firstOrFail()

    try {
      await request.validate(SectionSuggestionCreateValidator)
    } catch (error) {
      return response.badRequest(error.messages)
    }

    section_suggestion.title = request.input('title') ?? section_suggestion.title
    section_suggestion.slug = slugify(request.input('title') ?? section_suggestion.title)
    section_suggestion.description = request.input('description') ?? section_suggestion.description ?? ''
    section_suggestion.has_button = request.input('has_button') ?? section_suggestion.has_button ?? false
    section_suggestion.has_button_link = request.input('has_button_link') ?? section_suggestion.has_button_link ?? false
    section_suggestion.button_text = request.input('button_text') ?? section_suggestion.button_text ?? ''
    section_suggestion.button_link = request.input('button_link') ?? section_suggestion.button_link ?? ''

    if(request.file('image')){
      const image = request.file('image', {
        size: '18mb',
        extnames: ['jpg', 'png', 'gif'],
      })
      
      if (!image) {
        return response.badRequest("Erreur lors de l'upload de l'image");
      }
      
      if (!image.isValid) {
        return response.badRequest(image.errors)
      }
      const fileName = `${cuid()}.${image.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: fileName
      })

      section_suggestion.image = Application.tmpPath(`uploads/${fileName}`)
    }

    await section_suggestion.save()
    
    response.ok
    return response.json({});
  }

  /**
   * @swagger
   * paths:
   *  /api/section_suggestion/{id}:
   *    delete:
   *      tags:
   *        - SectionSuggestion
   *      summary: Delete single SectionSuggestion
   *      operationId: DeleteSectionSuggestion
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *      responses:
   *        '200':
   *          description: Deleted
   *          content:
   *            application/json:
   *              schema:
   *                type:  object
   */
  public async destroy ({response, params}: HttpContextContract) {
    let section_suggestion = await SectionSuggestion.findOrFail(params.id)
    await section_suggestion.delete()
    response.noContent
    return response.json({})
  }
}
