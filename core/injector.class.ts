export class BeanFactory {
  private readonly beanMap: Map<string, any> = new Map();
  private readonly beanFunctionMap: Map<string, any> = new Map();

  public setBeanMap(mappingClass: Function, beanFunction: any) {
    if (!this.beanMap.get(mappingClass.name))
      this.beanMap.set(mappingClass.name, beanFunction);
  }

  public getBeanMap(mappingClass: Function) {
    return this.beanMap.get(mappingClass.name) || null;
  }

  public setBeanFunctionMap(mappingFunction: Function, beanFunction: any) {
    if (!this.beanFunctionMap.get(mappingFunction.name))
      this.beanFunctionMap.set(mappingFunction.name, beanFunction);
  }

  public getBeanFunctionMap(mappingFunction: Function) {
    return this.beanFunctionMap.get(mappingFunction.name) || null;
  }
}

export const beanFactory = new BeanFactory();
