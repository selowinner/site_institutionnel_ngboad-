import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Suggestion from 'App/Models/Suggestion'
import SuggestionCreateValidator from 'App/Validators/SuggestionCreateValidator'

export default class SuggestionsController {

   /**
   * @swagger
   * paths:
   *  /api/suggestions:
   *    get:
   *      tags:
   *        - Suggestion
   *      summary: Get All suggestion Already register
   *      operationId: getSuggestion
   *      responses:
   *        '200':
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                "$ref":  '#/components/schemas/Suggestions'
   */
  public async index ({response}: HttpContextContract) {
    return response.status(200).json({
      suggestions: await Suggestion.all()
    })
  }

  /**
   * @swagger
   * paths:
   *  /api/suggestions:
   *    post:
   *      tags:
   *        - Suggestion
   *      summary: Register a new Suggestion into database
   *      operationId: PostSuggestion
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              "$ref": '#/components/schemas/SuggestionDto'
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
      await request.validate(SuggestionCreateValidator)
    } catch (error) {
      return response.badRequest(error.messages)
    }
    
    await Suggestion.create(request.all())
    
    response.created
    return {};
  }

  /**
   * @swagger
   * paths:
   *  /api/suggestions/{id}:
   *    get:
   *      tags:
   *        - Suggestion
   *      summary: show single suggestion
   *      operationId: ShowTypeMembre
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
   *                "$ref": '#/components/schemas/Suggestion'
   */
  public async show ({response, params}: HttpContextContract) {
    return response.status(200).json(
      await Suggestion
        .query()
        .where('id', params.id)
        .firstOrFail()
    )
  }

  /**
   * @swagger
   * paths:
   *  /api/suggestions/{id}:
   *    delete:
   *      tags:
   *        - Suggestion
   *      summary: Delete single Suggestion
   *      operationId: DeleteSuggestion
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
  public async destroy ({params, response}: HttpContextContract) {
    let suggestion = await Suggestion.findOrFail(params.id)
    await suggestion.delete()
    response.noContent
    return response.json({})
  }
}
