import request from '@/utils/request'
// 品牌列表接口
// /admin/product/baseTrademark/{page}/{limit}
export const reqTradeMarkList = (page,limit)=>request({url:`/admin/product/baseTrademark/${page}/${limit}`,method:'get'});
