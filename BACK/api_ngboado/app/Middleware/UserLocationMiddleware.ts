import geoip from 'geoip-lite';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserLocationMiddleware {
  public async handle (ctx: HttpContextContract, next: () => Promise<void>) {
    // code for middleware goes here. ABOVE THE NEXT CALL
    ctx.location = geoip.lookup(ctx.request.ip())
    await next()
  }
}
