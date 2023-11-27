export class BaseActions<T> {
  type: string | undefined;
  data: T | undefined;

  /**
   * 生成action
   * @param type 类型
   * @param data 数据
   */
  constructor(type: string, data: T | undefined) {
    this.type = type;
    this.data = data;
  }

  action(): { type?: string, data?: T } {
    return {
      type: this.type,
      data: this.data,
    };
  }
}
