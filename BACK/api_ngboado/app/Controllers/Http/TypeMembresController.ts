import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { slugify } from 'App/Models/Helpers/helpers';
import TypeMembre from 'App/Models/TypeMembre';
import TypeMembreCreateValidator from 'App/Validators/TypeMembreCreateValidator';
import TypeMembreUpdateValidator from 'App/Validators/TypeMembreUpdateValidator';

export default class TypeMembresController {
  
  /**
   * @swagger
   * paths:
   *  /api/type_membres:
   *    get:
   *      tags:
   *        - TypeMembre
   *      summary: Get All type Membre Already register without relations
   *      operationId: getTypeMembre
   *      responses:
   *        '200':
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                "$ref":  '#/components/schemas/TypeMembreSimples'
   */
  public async index ({response}: HttpContextContract) {
    return response.status(200).json({
      type_membres: await TypeMembre.all()
    })
  }

  /**
   * @swagger
   * paths:
   *  /api/type_membres/indexWithRelations:
   *    get:
   *      tags:
   *        - TypeMembre
   *      summary: Get All type Membre Already register with relations
   *      operationId: getTypeMembreRelation
   *      responses:
   *        '200':
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                "$ref":  '#/components/schemas/TypeMembres'
   */
  public async indexWithRelations ({response}: HttpContextContract) {
    return response.status(200).json({
      type_membres: await TypeMembre.query().preload('membres')
    })
  }

  /**
   * @swagger
   * paths:
   *  /api/type_membres:
   *    post:
   *      tags:
   *        - TypeMembre
   *      summary: Register a new TypeMembre into database
   *      operationId: PostTypeMembre
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              "$ref": '#/components/schemas/TypeMembreDto'
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
      await request.validate(TypeMembreCreateValidator)
    } catch (error) {
      return response.badRequest(error.messages)
    }

    var body = request.all()
    Object.assign(body, {slug: slugify(body.role)})
    
    await TypeMembre.create(body)
    
    response.created
    return response.json({});
  }

   /**
   * @swagger
   * paths:
   *  /api/type_membres/{id}/showWithRelations:
   *    get:
   *      tags:
   *        - TypeMembre
   *      summary: show single type Membre
   *      operationId: ShowTypeMembreRelation
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *      responses:
   *        '200':
   *          description: Show single item with relation
   *          content:
   *            application/json:
   *              schema:
   *                "$ref": '#/components/schemas/TypeMembre'
   */
  public async showWithRelation ({response, params}: HttpContextContract) {
    return response.status(200).json(
      await TypeMembre
        .query()
        .where('id', params.id)
        .preload('membres')
        .firstOrFail()
    );
  }

  /**
   * @swagger
   * paths:
   *  /api/type_membres/{id}:
   *    get:
   *      tags:
   *        - TypeMembre
   *      summary: show single type Membre
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
   *                "$ref": '#/components/schemas/TypeMembreSimple'
   */
  public async show ({response, params}: HttpContextContract) {
    return response.status(200).json(
      await TypeMembre
        .query()
        .where('id', params.id)
        .firstOrFail()
    )
  }

  /**
   * @swagger
   * paths:
   *  /api/type_membres/{id}:
   *    put:
   *      tags:
   *        - TypeMembre
   *      summary: Update single Type Membre
   *      operationId: UpdateTypeMembre
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              "$ref": '#/components/schemas/TypeMembreDto'
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
  public async update ({request, response, params}: HttpContextContract) {
    const type_membre = await TypeMembre.findOrFail(params.id)
    try {
      await request.validate(TypeMembreUpdateValidator)
    } catch (error) {
      return response.badRequest(error.messages)
    }

    if(request.input('role') != type_membre.role){
      type_membre.role = request.input('role')
      type_membre.slug = slugify(request.input('role'))
    }

    if(request.input('role_priority') != type_membre.role_priority){
      type_membre.role_priority = request.input('role_priority')
    }

    type_membre.save()

    response.ok
    return response.json({});
  }

  /**
   * @swagger
   * paths:
   *  /api/type_membres/{id}:
   *    delete:
   *      tags:
   *        - TypeMembre
   *      summary: Delete single Type Membre
   *      operationId: DeleteTypeMembre
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
    let type_membre = await TypeMembre.findOrFail(params.id)
    await type_membre.delete()
    response.noContent
    return response.json({})
  }

}
