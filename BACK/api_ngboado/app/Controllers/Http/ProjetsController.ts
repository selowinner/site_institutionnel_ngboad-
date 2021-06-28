import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Projet from 'App/Models/Projet'

export default class ProjetsController {

  /**
   * @swagger
   * paths:
   *  /api/projets:
   *    get:
   *      tags:
   *        - Projet
   *      summary: Get All Projet register without relations
   *      operationId: getProjet
   *      responses:
   *        '200':
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                "$ref":  '#/components/schemas/ProjetSimples'
   */
  public async index ({response}: HttpContextContract) {
    return response.status(200).json({
      projets: await Projet.all()
    })
  }

  /**
   * @swagger
   * paths:
   *  /api/projets/indexWithRelations:
   *    get:
   *      tags:
   *        - Projet
   *      summary: Get All Projet register with relations
   *      operationId: getProjetRelations
   *      responses:
   *        '200':
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                "$ref":  '#/components/schemas/Projets'
   */
  public async indexWithRelations ({response}: HttpContextContract) {
    return response.status(200).json({
      projets: await Projet.query().preload('bureau')
    })
  }

  public async store ({}: HttpContextContract) {
  }

   /**
   * @swagger
   * paths:
   *  /api/projets/{id}:
   *    get:
   *      tags:
   *        - Projet
   *      summary: show single Projet
   *      operationId: ShowProjetRelation
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
   *                "$ref": '#/components/schemas/ProjetSimple'
   */
  public async show ({params, response}: HttpContextContract) {
    return response.status(200).json(
      await Projet
        .query()
        .where('id', params.id)
        .firstOrFail()
    );
  }
  
   /**
   * @swagger
   * paths:
   *  /api/projets/{id}/showWithRelations:
   *    get:
   *      tags:
   *        - Projet
   *      summary: show single Projet
   *      operationId: ShowProjetRelation
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
   *                "$ref": '#/components/schemas/Projet'
   */
  public async showWithRelation ({params, response}: HttpContextContract) {
    return response.status(200).json(
      await Projet
        .query()
        .where('id', params.id)
        .preload('bureau')
        .firstOrFail()
    );
  }

  public async update ({}: HttpContextContract) {
  }

  /**
   * @swagger
   * paths:
   *  /api/projets/{id}:
   *    delete:
   *      tags:
   *        - Projet
   *      summary: Delete single Projet
   *      operationId: DeleteProjet
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
    let projet = await Projet.findOrFail(params.id)
    await projet.delete()
    response.noContent
    return response.json({})
  }
}
