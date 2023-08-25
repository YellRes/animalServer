import "reflect-metadata";
import walkSync from "walk-sync";
import { BeanFactory, beanFactory } from "../core/injector.class";

export const app = <T extends { new (...args: any[]): {} }>(constructor: T) => {
  const decoratorDir = process.cwd() + "/decorator";
  const decoratorFiles = walkSync(decoratorDir, { globs: ["**/*.ts"] });

  (async function () {
    // try {
    //   for (let p of decoratorFiles) {
    //     let moduleName = p.replace(".d.ts", "").replace(".ts", "");
    //     await import(decoratorDir + "/" + moduleName);
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    // const main: any = new constructor();
    // main["main"]();
  })();

  const main: any = new constructor();
  main["main"]();
};

export const bean = (
  target: any,
  propertyName: string,
  descriptor: PropertyDecorator
) => {
  let returnType = Reflect.getMetadata(
    "design:returntype",
    target,
    propertyName
  );
  beanFactory.setBeanMap(returnType, target[propertyName]);
};

export const autoware = (target: any, propertyKey: string) => {
  let type = Reflect.getMetadata("design:type", target, propertyKey);
  Object.defineProperty(target, propertyKey, {
    get: function myProperty() {
      const beanObject = beanFactory.getBeanMap(type);
      return beanObject();
    },
  });
};
