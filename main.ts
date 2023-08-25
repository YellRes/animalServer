import { app, autoware } from "./decorator/main";
import Server from "./core/factory/server.class";
import { router } from "./decorator/router";

@app
class Main {
  @autoware
  public server: Server;

  public main() {
    // 使用router
    this.server.setMiddleware(router);
    this.server.start(8888);
    console.log("start application");
  }
}
