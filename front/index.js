const testObj = {
    "name": "Модуль памяти Samsung SODIMM DDR3, 4ГБ, 1600МГц, PC3-12800",
    "img": "https://avatars.mds.yandex.net/get-mpic/1687058/img_id1863597318032259229.png/200x200",
    "price": "804 ₽",
    "link": "https://market.yandex.ru/product--modul-pamiati-samsung-sodimm-ddr3-4gb-1600mgts-pc3-12800/1777226058?nid=26912790&show-uid=16989587189911801600116006&context=search&uniqueId=965480&own-cards=965480%3A101810137158&sku=101810137158&cpc=U8ps35ralnwebJdWofkT3dlYP1B_h1uWYLWsHuQAWUMdnvzUadQf8PC4NF3dL0jbWC6KvB9U_Mj0xocbN4PY3Eym5oXJL6pCy2SS7ON8g9FjLZjKUOdVTV7K2c6LshGxXh-c69VJfQ9PZbmntmISh11Fr2N_5p_SlRPbmSaZyvKMvDOjfYnVUACzNFEwYnPfxz-Hi26IeGzLf4N8V14ojUQPu7En2PM5v2N7g1mSzck44NIB_cbkaYTwxtnp0OPurpAwQpJzq7BbOkNXmkgDBQ%2C%2C&do-waremd5=SCwJEICc2Wlc3zD4zfyB3g&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
    "features": {
      "Тип": "DDR3",
      "Объем одного модуля": "4 ГБ",
      "Тактовая частота": "1600 МГц",
      "Форм-фактор": "SODIMM",
      "Количество модулей в комплекте": "1 шт."
    }
}

console.log(Object.values(testObj.features));
console.log(Object.keys(testObj.features));
console.log(testObj.features['Тип']);