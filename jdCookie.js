/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
let CookieJDs = [
  'pt_key=AAJhFyMnADCDW7Q1qmjk-ROr8_d8LJ5_OpG-ND8m7O7yrdRi_wNCIWBRpePw1beZejDPFEGV1nQ; pt_pin=tanben117;',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhCe47ADD6pQqYCHlsafy8GIIkMqci_a1h7QlaV38AIngb5K0p7DzCXVJRjsayNgUxqaaSQVc; pt_pin=jd_5a2ee9240e8f2;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhCfC1ADAog05DG1_BarbAaGYBaJoOQPqshlzWwh0IwieIk7ZBjvxjeRV7g8ecxiaU6lUmnoM; pt_pin=jd_6245947f92d0a;',//账号三ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhCi5hADDecb8Ox5gpp75ptcI_H2-PWYco2Cwd0G-DiMI-pwxsSGn_d7QpyKHlcOcShFSzf7Q; pt_pin=157316-83139169;',//账号四ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg9D8FADB1XH2dSZ3SNCFVyjKCfK97XiD9r3ePu1dtU5oGjuuj9YMibskxTb5xo7jpunSBj4E; pt_pin=303041182-346709;',//账号五ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhC5nLADAe8EsWmOas8vG3E9TaVWzopKjfuZIfmTpmx9NPhHORv536yMN5yjBe7bIaWtim7a4; pt_pin=jd_6b95ab59f33bc;',//账号六ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhC5q4ADAGbh--1UpS7EmtWYmweO8XyH9FTHg7Ag1jF1WT2Ai070liUCai1ngj41iGdsfL5ys; pt_pin=80272529-417959;',//账号七ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhC5--ADBYfXaLyh8mteCLikk0XbJavk_K391ZUm4KoB92pWkNYKPgLMzsRBzL1AtrvzivsAc; pt_pin=zhanglianf_mru;',//账号八ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhC6TUADCZRaFw0vvjXBSgqNxriO7igGoNXzbwwkDhS8yc1E41lTNM6jVScKwfikKYKLxGPiM; pt_pin=jd_FBxosKoLCPaC;',//账号九ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhC5t1ADBFPA7QyDmraxbtyrpBrCLYb04iEGKhdXZx_tEHfgyP7oVlJ_uT4dLL3OTgGVVFmeY; pt_pin=fan_1023;',//账号十ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhFQrqADDvBS1Kx1OsFC8-pMOW48OLOge4VF9T3sAp896SQc7O6-DU_09v6JDyPZT-OyHWitg; pt_pin=jd_yEQhGVQczrbb;',//账号十一ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhFQ5NADB7cRY3QO7A_ZD3FCdKe4y9c9iCOEteN2Y7TyjuUQLvP3vJkyu5DVbYAFw18lU05Ao; pt_pin=jd_4ab847068b14c;',//账号十二ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJg8WQkADBf7I5MLPsjMeJ3VGLhWNpOJjHR7F3la6XG1lQnLblM3fFrhpdFbzdKzXI4b3GN80A; pt_pin=diannaobai_m;',//账号十三ck,例:pt_key=XXX;pt_pin=XXX;
  'pt_key=AAJhFQjpADBw7lzMqHFL9DYCjLwr2namtQTBYQsLkmp_qG-YDO0STdD0CoheF2d2qnJeNS1Mwks; pt_pin=jd_526d52a9b9b47;',//账号二ck,例:pt_key=XXX;pt_pin=XXX;'',//账号二ck,例:pt_key=XXX;pt_pin=XXX;'',  如有更多,依次类推
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
