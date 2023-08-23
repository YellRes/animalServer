import "reflect-metadata";
import { beanFactory } from "../core/injector.class";

export const app = <T extends { new (...args: any[]): {} }>(constructor: T) => {
  const main: any = new constructor();
  main["main"]();
};

export const bean = (constructor: any) => {
  beanFactory.setBeanMap(constructor, constructor);
  return constructor;
};

export const autoware = (constructor: any, propertyName: string) => {
  const propertyType: any = Reflect.getMetadata(
    "design:type",
    constructor,
    propertyName
  );

  let beanInstance = beanFactory.getBeanInstanceMap(propertyType);

  if (!beanInstance) {
    const beanClass = beanFactory.getBeanMap(propertyType);
    beanFactory.setBeanInstanceMap(propertyType, new beanClass());
  }

  constructor[propertyName] = beanFactory.getBeanInstanceMap(propertyType);

  return constructor[propertyName];
};
