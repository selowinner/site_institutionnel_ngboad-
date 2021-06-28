import geoip from 'geoip-lite'
import { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  
  constructor (protected app: ApplicationContract) {
  }

  public register () {
    // Register your own bindings
  }

  public async boot () {
    // IoC container is ready
    // const HttpContext = this.app.container.use('Adonis/Core/HttpContext')

    // HttpContext.getter('location', function location() {
    //   return geoip.lookup(this.request.ip())
    // })
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
