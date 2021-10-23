/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=AAJhZjHFADB_3e3-sJQcQZbj9oUo6foEtommQBntT6TIYItNj4-umst0a_qKNQ-hg7mU8dPzofQ; pt_pin=tanben117;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhWbfJADDBKpRVvLtTAe1-XgD1wiphrz-6iux44d53yo3JdcyIje59NRQ3YzoZVKmfidfuswE; pt_pin=jd_5a2ee9240e8f2;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhWbktADDA6Fss3HRtG70wskW7YkWm2NXzsNa63VrcEhViHE1p0hLmbb4duEyCad44z9n9w_U; pt_pin=jd_6245947f92d0a;',//账号三ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhV-E6ADDBCKAqI7qX8YabEuH3CnWtCCgtHghL-tJEkFQorwWP8NeuJ1HhDUsByfCbXS_K34U; pt_pin=303041182-346709;',//账号四ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhV-E6ADDBCKAqI7qX8YabEuH3CnWtCCgtHghL-tJEkFQorwWP8NeuJ1HhDUsByfCbXS_K34U; pt_pin=303041182-346709;',//账号五ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhVp2IADAQ1i15WgBSLTDsWsyHVVluFh8DIaSPWuddfxcP6PmGXJuY-C9l6kcejZ220zer5r8; pt_pin=jd_6b95ab59f33bc;',//账号六ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhVnNLADAVrDJxzkIpoaBAtNMj9eYbxGgTk7u_6YNW0H5U9veihblkggHz9RpO7tydyi7ja9k; pt_pin=80272529-417959;',//账号七ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhTCd_ADCg613maxlNj6d_0yUep3eBVMlRg5QcV2TAqebZAGBH-ZrZG9JW4BTqlveDy0rVUPo; pt_pin=zhanglianf_mru;',//账号八ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhVl2qADA7Zk7emC0qucroRLmoYTMGAWj2LJUdxU7XNQ7rxqD1DlnrYBHb4Y2I8EUDVwUQROM; pt_pin=jd_FBxosKoLCPaC;',//账号九ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhX-IkADB9D1vcvpsay5mC1BDyEM3l0RbBxhec9ifiBZ0U_YX7zaDjQ0TfqzmA5mtQhRlumes; pt_pin=fan_1023;',//账号十ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhVlrqADD8EbB-uVzeY80oBRLAsbDicTbgJNsSLowfSanw2R_rb-n-_gqXyAJPaenj4WWPxN0; pt_pin=jd_yEQhGVQczrbb;',//账号十一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhbRzBADCik98tQHC6A7yTvWYXhFsWmU5u87fcMElQ36591dohS6hskrEReKvjiM2HfG3lrw0; pt_pin=jd_4ab847068b14c;',//账号十二ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhbfidADDYE39eK1PtFaK2F6y8_MJmIouiGx75lT5z1wEmTBZqOPa8L0MKxzDhkvNsSaDq7c0; pt_pin=diannaobai_m;',//账号十三ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhah3TADA9OS-KKTRf_U9dxvF4uTuTdIqZazi7zkvV4PKh9z09yeXeSLCLjzun5dX-Az6uBW4; pt_pin=jd_5bf9dca1358b0;',//账号十四ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhYBV5ADC9vspSaL-rlE1WXBVL8Brwa9hUDpn21zSzPFuMFsZCgJ7Yv0nhzMczcoTl06PPvz0; pt_pin=jd_XzTZqoNXlxjL;',//账号十四ck,例:pt_key=XXX;pt_pin=XXX;'',//账号十五ck,例:pt_key=XXX;pt_pin=XXX;'',  如有更多,依次类推
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
