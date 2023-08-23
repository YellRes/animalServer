import { app, autoware } from "./decorator/main";
import Server from "./core/factory/server.class";

@app
class Main {
  @autoware
  public server: Server;

  public main() {
    console.log(this.server, "server");
  }
}
