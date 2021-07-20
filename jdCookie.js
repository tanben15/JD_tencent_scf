/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=AAJg74zeADBY_Czx1rzd7IO_bXzi_vzJOAPDUcAfp8DaT7qs_zn2xZALpWUyeLyyL1CVZ9A0kyg; pt_pin=tanben117;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg4cVxADBvGkLbFa4o83FgeYjEJe-GzbfnmMcLLV7IvF81TRDhD6LQKgEfL1WasksoT3Qz66A; pt_pin=jd_5a2ee9240e8f2;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg4cXTADAYyt0z7HX2COllBc3m9xd2jedDkf1UScLSskJbWtmDktlzQ02FeNBrVdrnJnnW8pI; pt_pin=jd_6245947f92d0a;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg4oHwADDzTfCTd0J_GHjcBOF2hFDnlwgQSiuI_1DQFaq7_F2Ux9YLUOrY2E08nkATfaLG61Y; pt_pin=157316-83139169;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg9D8FADB1XH2dSZ3SNCFVyjKCfK97XiD9r3ePu1dtU5oGjuuj9YMibskxTb5xo7jpunSBj4E; pt_pin=303041182-346709;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg47fEADB4qpwxIsvV0bwqdFmOxcAAtOUIkiqWm6jr8gFJe9ujokPXu_4JQdk0twGjsL051m0; pt_pin=jd_6b95ab59f33bc;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg47bnADC0fBK8_7TTjupyP-cDIO8Ten27gpsCVg38_H8fm6GryO2MCxTRQ05-OVkR4-VujXU; pt_pin=80272529-417959;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg47nYADAM78fcDMDHABNahbxd_SvBDrZb5bnQrFZxdmYmK8SrCPerhVBfAu9ffYR7_Z5YzhQ; pt_pin=zhanglianf_mru;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg48EOADCxcu0PMqsw_zgWUK6zxHiIFW9mNfJrie3OuSLoKgWfhvY3bMKWaeRGPaR-avhwv0o; pt_pin=jd_FBxosKoLCPaC;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg4-3WADD5pr3nkC38FJcr6-EAJt4xhkV0O8mkLFDSG0OUxOWlsRQ6b8cLeULEIJISVAAIcP0; pt_pin=fan_1023;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg6vcsADDi2hxbPuyor6q26dwNaVOyPEis-SqNdQS7_mIqbJ32bTzV-ygxCtwIAP0XL-TRpS4; pt_pin=jd_yEQhGVQczrbb;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg6_XgADA7YbR-4LKdNlBA9l9aHAdzowQ01nxvz_g9mBc3IUnUU51YX0ywM3j4uxzHy7uQQJ4; pt_pin=jd_4ab847068b14c;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg8WQkADBf7I5MLPsjMeJ3VGLhWNpOJjHR7F3la6XG1lQnLblM3fFrhpdFbzdKzXI4b3GN80A; pt_pin=diannaobai_m;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;'',//账号二ck,例:pt_key=XXX;pt_pin=XXX;'',  如有更多,依次类推
]
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
}
if (JSON.stringify(process.env).indexOf('GITHUB11')>-1) {
  console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
  !(async () => {
    await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
    await process.exit(0);
  })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => item !== "" && item !== null && item !== undefined))]
console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i].trim();
}
