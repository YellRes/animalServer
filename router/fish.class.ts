import { GetMapping } from "../decorator/router";
import koa from "koa";
export default class Fish {
  @GetMapping("/fish")
  public index(ctx: koa.Context, next: koa.Next) {
    ctx.body = "welcome, there will be lots of fish here";
    next();
  }
}
