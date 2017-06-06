/**
 * Created by xkfeng on 2017/4/21.
 * 表格分页接口配置项
 */
export class TableListConfig{
  public defaultColums:any;
  public defaultColumsHeaderMap:any;
  constructor(
    public url:string,/*查询数据接口如cities/list.json*/
    public colums?:[any],/*表格的列对象数组*/
    public operator?:[any],/*每行数据最右侧操作按钮配置 数组类型*/
    public query?:any,/*查询对象包括两个部分 queryBefore用于查询前的必填必选校验接口 方法支持多个 主要校验结果通过记得返回true queryElements是查询配置和查询的按钮 比如批量操作按钮 搜索按钮是自动出现的不需要配置*/
    public httpMethod:string='post',/*请求数据的方法 post get 你可以任意扩展 如put head delete 等 你要对应的把service写好久ok*/
    public listAdapter?:any,/*数据接口适配器*/
    public baseUrl?:string,/*请求数据的基础接口 如https://www.goodaa.com.cn/*/
    public pager:any={
      pageSizeProp:"rowsPerPage",/*分页大小*/
      pageSizeQueryProp:"pageSize",/*分页大小请求参数*/
      pageNumProp:"currentPage",/*当前页请求参数 你也许会使用currentPageNo*/
      pageNumQueryProp:"pageNum",
      totalRowsProp:"totalRows",/*接口返回记录总条数的属性*/
      pageSize:3/*默认分页大小 15条请写15*/
    },
  ){

  }
}
