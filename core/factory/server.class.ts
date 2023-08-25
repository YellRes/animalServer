import { bean } from "../../decorator/main";
import Koa from "koa";
class Server {
  public middlewareList: Array<any> = [];

  @bean
  public getServer(): Server {
    return new Server();
  }

  public setMiddleware(middleware: any) {
    this.middlewareList.push(middleware);
  }

  public start(port: number) {
    const app: Koa = new Koa();
    this.middlewareList.forEach((middleware: any) => {
      app.use(middleware);
    });

    app.listen(port, () => {
      console.log("server is on port: " + port);
    });
  }
}

export default Server;
