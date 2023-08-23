export class BeanFactory {
  private readonly beanMap: Map<string, any> = new Map();
  private readonly beanInstanceMap: Map<string, any> = new Map();

  public setBeanMap(key: string, value: any) {
    if (!this.beanMap.get(key)) this.beanMap.set(key, value);
  }

  public getBeanMap(key: string) {
    return this.beanMap.get(key) || null;
  }

  public setBeanInstanceMap(key: string, value: any) {
    if (!this.beanInstanceMap.get(key)) this.beanInstanceMap.set(key, value);
  }

  public getBeanInstanceMap(key: string) {
    return this.beanInstanceMap.get(key) || null;
  }
}

export const beanFactory = new BeanFactory();
