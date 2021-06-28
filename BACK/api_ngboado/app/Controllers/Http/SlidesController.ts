import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Application from '@ioc:Adonis/Core/Application'
import { slugify } from 'App/Models/Helpers/helpers'
import { cuid } from '@ioc:Adonis/Core/Helpers'
import Slide from 'App/Models/Slide'
import SlideCreateValidator from 'App/Validators/SlideCreateValidator'


export default class SlidesController {

  /**
   * @swagger
   * paths:
   *  /api/slides:
   *    get:
   *      tags:
   *        - Slide
   *      summary: Get All slide Already register
   *      operationId: getSlide
   *      responses:
   *        '200':
   *          description: Successful operation
   *          content:
   *            application/json:
   *              schema:
   *                "$ref":  '#/components/schemas/Slides'
   */
  public async index ({response}: HttpContextContract) {
    return response.status(200).json({
     slides: await Slide.all()
    })
  }

  /**
   * @swagger
   * paths:
   *  /api/slides:
   *    post:
   *      tags:
   *        - Slide
   *      summary: Register a new Slide into database
   *      operationId: PostSlide
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              "$ref": '#/components/schemas/SlideDto'
   *      responses:
   *        '201':
   *          description: Created
   *          content:
   *            application/json:
   *              schema:
   *                type:  object
   */
  public async store ({request, response}: HttpContextContract) {
    try {
      await request.validate(SlideCreateValidator)
    } catch (error) {
      return response.badRequest(error.messages)
    }
    
    let slide = new Slide()

    slide.title = request.input('title')
    slide.slug = slugify(request.input('title'))
    slide.subtitle = request.input('subtitle') ?? ''
    slide.description = request.input('description') ?? ''
    slide.has_link = request.input('has_link') ?? false
    slide.has_button = request.input('has_button') ?? false
    slide.has_button_link = request.input('has_button_link') ?? false
    slide.uri_path = request.input('uri_path') ?? ''
    slide.button_text = request.input('button_text') ?? ''
    slide.button_link = request.input('button_link') ?? ''
    slide.tags = request.input('tags') ?? []

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

      slide.image = Application.tmpPath(`uploads/${fileName}`)
    }else{
      slide.image = ''
    }

    await slide.save()
    
    response.created
    return response.json({});
  }

  /**
   * @swagger
   * paths:
   *  /api/slides/{id}:
   *    get:
   *      tags:
   *        - Slide
   *      summary: show single slide
   *      operationId: ShowSlide
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *      responses:
   *        '200':
   *          description: Created
   *          content:
   *            application/json:
   *              schema:
   *                "$ref": '#/components/schemas/Slide'
   */
  public async show ({params, response}: HttpContextContract) {
    return response.status(200).json(
      await Slide
        .query()
        .where('id', params.id)
        .firstOrFail()
    )
  }

  /**
   * @swagger
   * paths:
   *  /api/slides/{id}:
   *    put:
   *      tags:
   *        - Slide
   *      summary: Register a new Slide into database
   *      operationId: UpdateSlide
   *      requestBody:
   *        content:
   *          application/json:
   *            schema:
   *              "$ref": '#/components/schemas/SlideDto'
   *      parameters:
   *        - in: path
   *          name: id
   *          required: true
   *          schema:
   *            type: integer
   *      responses:
   *        '201':
   *          description: Updated
   *          content:
   *            application/json:
   *              schema:
   *                type:  object
   */
  public async update ({request, response, params}: HttpContextContract) {
    let slide = await Slide.query().where('id', params.id).firstOrFail()

    try {
      await request.validate(SlideCreateValidator)
    } catch (error) {
      return response.badRequest(error.messages)
    }

    slide.title = request.input('title')
    slide.slug = slugify(request.input('title'))
    slide.subtitle = request.input('subtitle') ?? slide.subtitle ?? ''
    slide.description = request.input('description') ?? slide.description ?? ''
    slide.has_link = request.input('has_link') ?? slide.has_link ?? false
    slide.has_button = request.input('has_button') ?? slide.has_link ?? false
    slide.has_button_link = request.input('has_button_link') ?? slide.has_button_link ?? false
    slide.uri_path = request.input('uri_path') ?? slide.uri_path ?? ''
    slide.button_text = request.input('button_text') ?? slide.button_text ?? ''
    slide.button_link = request.input('button_link') ?? slide.button_link ?? ''
    slide.tags = request.input('tags') ?? slide.tags ?? []

    if(request.file('image')){
      let image = request.file('image', {
        size: '18mb',
        extnames: ['jpg', 'png', 'gif'],
      })
      
      if (!image) {
        return response.badRequest("Erreur lors de l'upload de l'image");
      }
      
      if (!image.isValid) {
        return response.badRequest(image.errors)
      }
      
      let fileName = `${cuid()}.${image.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: fileName
      })

      slide.image = Application.tmpPath(`uploads/${fileName}`)
    }

    await slide.save()
    
    response.ok
    return response.json({});
  }

  /**
   * @swagger
   * paths:
   *  /api/slides/{id}:
   *    delete:
   *      tags:
   *        - Slide
   *      summary: Delete single Slide
   *      operationId: DeleteSlide
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
    let slide = await Slide.findOrFail(params.id)
    await slide.delete()
    response.noContent
    return response.json({})
  }
}
