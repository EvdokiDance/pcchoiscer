import React from 'react';


import './App.css';
import LinkTag from './components/LinkTag/LinkTag';


function App()  {
  const parts = [
    {
      "name": "DDR2 2GB Оперативная память KINGSTON",
      "img": "https://avatars.mds.yandex.net/get-mpic/11004988/2a0000018ab4582ff31c87f51a628fbb75ae/200x200",
      "price": "969 ₽",
      "link": "https://market.yandex.ru/product--ddr2-2gb-operativnaia-pamiat-kingston/1921681178?nid=26912790&show-uid=16989587189911801600116005&context=search&uniqueId=82487323&own-cards=82487323%3A102342243858&sku=102342243858&cpc=U8ps35ralnyfcMg7h2oAeRyB7bHFelwMh127szT5_UVBFUxcgM67BHuBlhs3SxBNV8hRfKr9NdTRDR-50sgOwO6YnoGgU9gQKtGtGjJ0FBK5Apy8dvaGn4wsAU2qxPCucvhAjLon48QwoKCRd8d3fNsiZ4A9SNfiBcISX4XRl8F5XIMDX_afYmWdqdEeQZDhPoR9bju23XRhZf5sp7SiybiZDTJTTJ6OV-xPdlgvDDHkQu4WxRfNOsp0z2yBaNvjWBnzmzBAn9X0xXZFkAyYDQ%2C%2C&do-waremd5=lUHyZQ0iQppyAGa-Zy5VZw&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Тип": "Модуль памяти",
        "Объем одного модуля": "2 ГБ",
        "Тактовая частота": "800 МГц",
        "Форм-фактор": "DIMM",
        "Количество модулей в комплекте": "2 шт."
      }
    },
    {
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
    },
    {
      "name": "Модуль памяти AMD Radeon 4GB AMD Radeon™ DDR3 1600 SO DIMM R5 Entertainment Series Black",
      "img": "https://avatars.mds.yandex.net/get-mpic/96484/img_id8091770945621915564/200x200",
      "price": "700 ₽",
      "link": "https://market.yandex.ru/product--operativnaia-pamiat-amd-4-gb-ddr3-1600-mgts-sodimm-r534g1601s1s-uo/1780087648?nid=26912790&show-uid=16989587189911801600116007&context=search&uniqueId=750154&own-cards=750154%3A10860352&sku=10860352&cpc=U8ps35ralnyANRJDHrNxueT4Qa-DQGw7pn0SOHNFWYP7AHPJRXkPexY_cuJUzgKVkjQ3Z2Nw9aS97S-jxwMj0PDptTQt0RGlYT6FHoe6ZQSI4DvFVsjmyJmB7wgbn06c9CD3BEl8IRGDFpXdbWTELN4TEGe4LIcVV2XL8Af0nRMwUd0c4sCCwUfCWSxcFYNWZY1zziZmRni4uPZDW06WDF6WhiNLL62pMnGKWv9MKrj9208ly_4Hnz5kjfXmlcZ2AWTWPWVz5m0HJhAFTkk7vg%2C%2C&do-waremd5=cVHmavPV0-LDaMXJ4UHv3A&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Количество модулей в комплекте": "1 шт.",
        "Объем одного модуля": "4 ГБ",
        "Тип": "DDR3 SODIMM 204-pin",
        "Тактовая частота": "1600 МГц",
        "Напряжение питания": "1.5 В"
      }
    }
  ]

  return (
    <>
    <div className='parts'>
      <div className='partsWrapper'>
        <div className='headerComponent'>Компонент</div>
        <div className='headerChoice'>Выбор</div>
        <div className='headerPrice'>Цена</div>
      </div>
      <div className='partsWrapper'>
        <div className='title'>Процессор</div>
        <LinkTag path='/' className='partBtn'><><span>+</span>Выбор</></LinkTag>
      </div>
      <div className='partsWrapper'>
        <div className='title'>Процессор Процессор Процессор</div>
        <LinkTag path='test' className='partBtn'><><span>+</span>Выбор</></LinkTag>
      </div>
      
    </div>
    </>
  );
}

export default App;
