// JS

/**
 * viewModel 创建数据模型
 * dt1 创建的数据集
 * f1 创建数据集中的字段
 * type:指定数据对应的类型
 */
var app, viewModel;
viewModel = {
    dt1: new u.DataTable({
        meta: {
            f1: {type:'datetime'}
        }
    }),
};

/**
 * app 创建框架服务
 * el 指定服务对应的顶层DOM
 * model 指定服务对应的数据模型
 */
app = u.createApp({
    el: 'body',
    model: viewModel
});

// 数据集dt1创建空行，并为字符f1赋值
var r = viewModel.dt1.createEmptyRow();
r.setValue('f1', "2016-2-7 12:32:34");
viewModel.dt1.setRowSelect(0);

