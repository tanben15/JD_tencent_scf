/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=AAJhLg1hADDmz39RB6ZgBgWXi8LvJb0BlRVXCjBGLFOcP18F-gvqN307ATPmyH5wTY_VStsDDK0; pt_pin=tanben117;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhMg6bADDYickCZdEugQ0TrJhKQ7MLryTUopeLsa2QdnZEYMrFwRWh-24cmP8NTrRvIGZbHS0; pt_pin=jd_5a2ee9240e8f2;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhMg9fADBCRsOg-ofmkGtoSg_tJihSrmN8mdIKTurfBEAyB1gZl6Olies3wt3vfCWD1j0V324; pt_pin=jd_6245947f92d0a;',//账号三ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhLixrADCH6wTQtnOsw_jTJGdHL95xAeoLl0C9XAkN9BkC5z_vZKbk0RZdrRASRl7kS9YHROI; pt_pin=157316-83139169;',//账号四ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhJlPbADA1go7jvAZrl1GHvvjJEpSzs8KinlcI56Is4zWs9XTOKEPuZxcOZJub9AUMTCuqI1Y; pt_pin=303041182-346709;',//账号五ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhLsjOADAI_xsnno-BkgTrO7b5jNJbNbLuelzAEXOyx7iZyZNSVQMmX1zp0Q80UgT3Sf6uZ5c; pt_pin=jd_6b95ab59f33bc;',//账号六ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhLslhADCOsU3PuBsX5ZtWKWN-ni-GSo-5Tafz6z7BrlRZwrxFS8nsiqwfRiBmVs6WEcxJI1E; pt_pin=80272529-417959;',//账号七ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhLsf_ADDPUw5a_Rs5Yyi86xVjIvbfDKP7WbI4-3-wDqAyh98jyBEdorjOxj0wUTIdo2lLd0Q; pt_pin=zhanglianf_mru;',//账号八ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhLsdqADAy3vCDioWLDcOICo8OndOj-7exxghbLkOJ2iW5gV7Bkqe7dFpwrsPYg3LsTD9p564; pt_pin=jd_FBxosKoLCPaC;',//账号九ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhLshzADBWw8SjYQSlc0Hf97QGtp7Zvwi8dJm8VwyvPRNmQV9AH_ebmYkNlgHY920H-z6aJI8; pt_pin=fan_1023;',//账号十ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhLg30ADBummB-Ngkn9LyiQrPJl406sKXSjtGN0DbK9kKVx5xzEsOw-R4W13VodZens_9bT9E; pt_pin=jd_yEQhGVQczrbb;',//账号十一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhFQ5NADB7cRY3QO7A_ZD3FCdKe4y9c9iCOEteN2Y7TyjuUQLvP3vJkyu5DVbYAFw18lU05Ao; pt_pin=jd_4ab847068b14c;',//账号十二ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhGyloADCRROTyvJKvXZaxb2RqHHop_RWTeEanWWpQlXrBuIZTGDcvB3OmwLEJf_3y-2VYbD4; pt_pin=diannaobai_m;',//账号十三ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhFQjpADBw7lzMqHFL9DYCjLwr2namtQTBYQsLkmp_qG-YDO0STdD0CoheF2d2qnJeNS1Mwks; pt_pin=jd_526d52a9b9b47;',//账号十四ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhMHvKADCjIJTs1DHZBb4sw9VGJcbTWIczzD9NpfCzULsaEEqu2VLW5ou3YNt8XFvy4X1m0xo; pt_pin=jd_XzTZqoNXlxjL;',//账号十四ck,例:pt_key=XXX;pt_pin=XXX;'',//账号十五ck,例:pt_key=XXX;pt_pin=XXX;'',  如有更多,依次类推
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
