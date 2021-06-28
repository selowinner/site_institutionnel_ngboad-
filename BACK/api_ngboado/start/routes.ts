/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.group(() => {
  Route.get('/type_membres/indexWithRelations', 'TypeMembresController.indexWithRelations')
  Route.get('/type_membres/:id/showWithRelation', 'TypeMembresController.showWithRelation')
  Route.resource('/type_membres', 'TypeMembresController')
  Route.resource('/suggestions', 'SuggestionsController')
  Route.resource('/slides', 'MembresController')
  Route.resource('/section_suggestions', 'MembresController')
  Route.get('/projets/indexWithRelations', 'ProjetsController.indexWithRelations')
  Route.get('/projets/showWithRelation', 'ProjetsController.showWithRelation')
  Route.resource('/projets', 'ProjetsController')
}).prefix('/api')
// Route.get('/api/docs', 'SwaggerController.index')