const fonts = [
    [import.meta.env.VITE_APP_FONT_FAMILY, '默认全局'],
    ['Microsoft YaHei', '微软雅黑'],
    // [字体名称, 显示名称, CSS文件地址]
    ['HarmonyOS_Regular', '鸿蒙字体', 'https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css'],
    ['yozai', '悠哉字体', '/fonts-css/Yozai-Regular.css'],
    ['寒蝉全圆体', '寒蝉全圆体', '/fonts-css/寒蝉全圆体.css'],
    ['Douyin Sans', '抖音美好体', '/fonts-css/抖音美好体.css'],
    ['MaokenZhuyuanTi', '猫啃珠圆体', '/fonts-css/MaoKenZhuYuanTi.css']
];

export const defaultConfig = {
    text: '柠檬星',       // 默认文本
    watermark: '', // 默认水印
    fontFamily: import.meta.env.VITE_APP_FONT_FAMILY,
    fontStyles: fonts.map(f => f[2]).filter(Boolean),
    fontOptions: fonts.map(([value, label]) => ({ value, label }))
};
