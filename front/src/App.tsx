import React, { useEffect, useState } from 'react';


import './App.css';
import LinkTag from './components/LinkTag/LinkTag';


function App()  {
  const parts = [
    {
      "name": "Процессор Intel Xeon E5 2630v3 OEM (без кулера)",
      "img": "https://avatars.mds.yandex.net/get-mpic/4441663/img_id8566205236272572048.jpeg/200x200",
      "price": "1 277 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2630v3-lga2011-3-8-x-2400-mgts/11056587?nid=26912730&show-uid=16989587190879118918416001&context=search&uniqueId=20541181&own-cards=20541181%3A101062893779&sku=101062893779&cpc=U8ps35ralnxNvCIjdKtkG55f6QYWUT3hiKv6JkbNe2a8_Irbxg_3SYApJaiWimVRLMqvaGOHDgLmZSwxsvpzVZXpfKELANIOdynUdnKter_xpb1PPRPM2pULxouvmSxqNE2UF5p-aCkt2buWGXna35mxAofnSpYIfJsHJKGEqUj60x0mDR6XSPy56oLG5HkMaPdIwcC1eEs2Ij2vSfFz7QGOe1cu93VMtZn6eQtyXxpEKWBWd19m3VYBLuQJv1vLdpG8vWxxxt842IRF40BtNA%2C%2C&do-waremd5=E1DS3idzDAfAjOjZhhj5uQ&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2670 v3 LGA2011-3, 12 x 2300 МГц, HP",
      "img": "https://avatars.mds.yandex.net/get-mpic/4377400/img_id542938560196391035.png/200x200",
      "price": "1 337 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2670-v3-lga2011-3-12-x-2300-mgts/11141643?nid=26912730&show-uid=16989587190879118918416002&context=search&uniqueId=61174863&own-cards=61174863%3A101759963188&sku=101759963188&cpc=U8ps35ralnxW5lsOQ7ysuNAyXaWPNTsTbKG0dkKQ5QdC4RVyWu5P_5p52F8jTjbqKN0VodsEiv-m9vk6JGT8c24L-dvcCvQDF0inW43YlzuXZDmgkD-GxTdjfpq8dEd6vKPBZoOlrsUxhg3MlDTnTcfINFWE9iyKIfJMAooHc0Y4TrG95qo26erkzuE1By3lg8cwYoIi-O4A7QuAzuvYqIRqosuDZ5cXwssGY_ehDkWfxGKVsEa9qVNy7RQ_Gmc5HL-iexjcaJpNFNDjRrWF7g%2C%2C&do-waremd5=K-jJ77mLK7BvZzZCUI6KFQ&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "HPE",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "12 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 X2 6000+ Brisbane AM2,  2 x 3100 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1614201/img_id1867573664708638127/200x200",
      "price": "839 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-x2-6000-brisbane-am2-2-x-3100-mgts/2410474?nid=26912730&show-uid=16989587190879118918416003&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101932974748&cpc=U8ps35ralnxVlgIYILDjuYlKNfZIpZ_V0wrFlhp3d3BnN-ot1r_vWecU5pOuAWqFrCzzln1H1NMMycI6vQsm8vP8UW-_DdSHvXU4qvLq9nJO2vm9XWcdl_9jnGxzrCW5qxY6BM2sKU_ks0yb_4UbYEvIQ5ymJRg8aUc7A4vH7pPqu4SkElXJCcCq0IMg07bA_oi2l8BQZH0%2C&do-waremd5=blVtM-XhHRzSzaCkLz6eag&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "3100 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon X4 840 (3,1 ГГц, FM2+, 4 Мб, 4 ядра) OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4519143/img_id3547181567743014689.jpeg/200x200",
      "price": "1 176 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-x4-840-fm2-4-x-3100-mgts/11150063?nid=26912730&show-uid=16989587190879118918416004&context=search&uniqueId=3844430&sku=100405238359&cpc=U8ps35ralnxRHf6MWP8KCUpARegAw265eKs1Spdgt67qcNc3x3ocLpsHq2cx2k4SennYQbb8cg33UwbePSnD7tI1npXxcW31k-kpiPAw7_h-H-qTD4IP8X5pNP4-X-OOunhhQenKO3jdu6iZDOGGuyIBur1malTmE8BTbiZOZgBXoLdSJCepieHB7KGBauSSX1bVto0zROU%2C&do-waremd5=GQTOu9kImGBTlfHCwI3kvw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2+",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "28 нм"
      }
    },
    {
      "name": "Процессор AMD FX-4300 AM3+, 4 x 3800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4080439/img_id1975573608178882392.jpeg/200x200",
      "price": "1 475 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-4300-am3-4-x-3800-mgts/8493633?nid=26912730&show-uid=16989587190879118918416005&context=search&uniqueId=49563636&sku=100334397885&cpc=U8ps35ralnwQkB2fRcPcpvVE-Zxk39922kAKqbcynXZXD47dN2JnUosMmwhG8CIDV0CC8ggR8jrkB9lHaNWGDBXf_yaQ6BdPM9pag_75ZSzOWFVDrVi3pCgfyYGtBQ4rWDAIQ7UOeXtVGWWvHnTrA2nnqf2p98Y1hTE7-ol6avXLywudH8e8zzxfuKznTFkXRKNFrawbRNc%2C&do-waremd5=hbVpQzAJBv7KCDC2unhnjw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5 2689 (2,6 ГГц, LGA 2011, 20 МБ, 8 ядер)",
      "img": "https://avatars.mds.yandex.net/get-mpic/4304254/img_id7236214952125479960.jpeg/200x200",
      "price": "1 227 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2689-lga2011-8-x-2600-mgts/1658982765?nid=26912730&show-uid=16989587190879118918416006&context=search&uniqueId=3844430&sku=101579550764&cpc=U8ps35ralnxshALPmb_KJcncps05X46Sp69HJ2y-bOHhVA2tUYiDCeTjmTPGER7dN38FIUMXNj5bTHPObdVpeN6g4Uz6b0Yzf1tG9Vzlb_ZNaiE6RuPdydCFy8VI9J8wMoBj_EmexlXdenUrWQ2Bd7i24ZCES-T6JWBuK2qa1SdgvPz-AFSTou7DN0m2SnXb6GsfSVp5wadyfZxSLuyiQaWP6uWgJ19oRipLIjmhyPuwXzbH9sdyIesqbrA5zIYfcaIOfFkmhPEp61LW06PsbQ%2C%2C&do-waremd5=mhKjxldEfziqTFzXy9nY2A&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Тип памяти": "DDR3",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon X4 950 (3,5 ГГц, AM4, 2 Мб, 4 ядра)",
      "img": "https://avatars.mds.yandex.net/get-mpic/5270077/img_id1966919173521090713.jpeg/200x200",
      "price": "1 138 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-x4-950-am4-4-x-3500-mgts/1733213840?nid=26912730&show-uid=16989587190879118918416007&context=search&uniqueId=3844430&sku=100404161956&cpc=U8ps35ralnz5trEcW-CgeM2UsLJrKZz1orL2fzmMypBeI6fP6RMsw5pS2SVQP3QFxFOM4_n39_KA3RCswIWx4KqxTniEJMji5_CiHiTgffpZnfEHdhMlxL_X3ZA-SvgVgvbAnwl3oSCxkIvbFLvRSOdOyg5mPK__b2uCszufMnABCyPVo31u3iEblS2MMGJLfUM_W8ttWyI%2C&do-waremd5=3n1fgublOQFDrsxIPP1gKQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM4",
        "Тип памяти": "DDR4",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "28 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 3000+ Venice S939,  1 x 1800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5042167/img_id1098564385741820545.jpeg/200x200",
      "price": "276 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-3000-venice-s939-1-x-1800-mgts/761912?nid=26912730&show-uid=16989587190879118918416008&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101508773515&cpc=U8ps35ralnyP_p3Km7TT-HZgUnuyXdn-aRbOJkFE9ElcSFO9PQm8JjuaVg5ViyR5rjR1iScNVNQZi7dgTrgMzbVUAv9lz8teZx15U9nY73nr-WGRUlUH5wObarYQx6xQudYLfZ2qZ7XbxWvbMuZvCHfqNKYrzbAnj-WI05N_VwtH8La8L4iYDahHnvqArRkzHurg1Mbp0_g%2C&do-waremd5=IiZ5YY8Pttn0gtZrOECe2A&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S939",
        "Тип памяти": "DDR2",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2670 v3 LGA2011-3, 12 x 2300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/3927509/2a0000018a3ad8990b30c4d4a060dbc9f610/200x200",
      "price": "1 337 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2670-v3-lga2011-3-12-x-2300-mgts/11141643?nid=26912730&show-uid=16989587190879118918416009&context=search&uniqueId=61174863&own-cards=61174863%3A101151878743&sku=101151878743&cpc=U8ps35ralnxJR4dDW1EtBDsakHMni8zdHlxNKAE8Im2maqI0TWvdhbfyBV5PCxX49CBU0_BhZA1sIhuf9GtzBQsoSVV6JzpW4RcoTYUj0JWLDrAYLkYVUAGp2prKfMQMycgLqEE-BA0hQtwFQUie4nSoMvQjf5Sm6ccLA7Vhq6CxKmZvLk-kZ1AKYVgVBV1iDIEw801osHoIwdkvBAcpfrXUabphZ0Gwapr4J43AxPlp9iT3fQpJVxr0nzkhKnR49bHo3YUNHClTA9h81Pee-A%2C%2C&do-waremd5=3V9x4InDrPY3XGoql_8e4g&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "12 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор AMD FX-8320 AM3+, 8 x 3500 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/10567286/2a0000018a2afa35b4618958852459ebaf1d/200x200",
      "price": "5 148 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-8320-am3-8-x-3500-mgts/8493627?nid=26912730&show-uid=16989587190879118918416010&context=search&uniqueId=49563636&sku=100341825041&cpc=U8ps35ralnw4eXHIwIT15faj966p2G1a4oaOPSoFx1wIt8xDk2usykXKgz5pJCWqQAW7WFjyL5orQwX99aZ-FQEm0ldp4kJTKrZpXGmCiUh3moICdpEFya22uGyrn1JrmWdQJD9IfkFH6gxbzFjxkAyDs07N30gpgAPbeYrWWgDZJX0lwD6hwKmfdpimRW8P2s6lbsfHZe8%2C&do-waremd5=uTiYD5bD5VN7QQuvL_pL8w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2690 v3 LGA2011-3, 12 x 2600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4615588/img_id8678645910721387741.jpeg/200x200",
      "price": "2 376 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2690-v3-lga2011-3-12-x-2600-mgts/11141653?nid=26912730&show-uid=16989587190879118918416011&context=search&uniqueId=61174863&own-cards=61174863%3A101151891729&sku=101151891729&cpc=U8ps35ralnxUuKFFc4qAZqZWMKFAPCF0GYgGehA0vtjUabYj8dSUOtWpToHA19E5OZyVAiXA42oBcW0wEJbdK34IORHDFCYBXnaZdTRTT4MW77ziOL61jjgX8PzD6UzCA9qRPKsbnaKUi4qouIG3dw6I4BZK0nHX2YC8Tgc4PxRg7XjywDL4G-T1dDuK7gzjGsU0yVl17Fll5jxCSaK1uIWIaI4jk9KpZnrkUO7a6TU2Q2B--vCB0j1IYwymGKk7Z0oy9nxuT4SuoCNLxTENzw%2C%2C&do-waremd5=BDs4Q6q9nsPiC9j2WXeHvg&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "12 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon X3450 LGA1156 TURBO 3200 MHz 4/8 L3 8 mb max ddr 32gb OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5220759/2a0000018b765593b218ee9ef449082714e7/200x200",
      "price": "1 970 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-x3450-lynnfield-lga1156-4-x-2667-mgts/4992749?nid=26912730&show-uid=16989587190879118918416012&context=search&uniqueId=71498824&own-cards=71498824%3A102260210756&sku=102260210756&cpc=U8ps35ralnzt7RP_LMJ6F2zmmj0PHwforh55SVyWHVr6RA5-XwKzdiLwP3vP8g1riYj0X_QSQ9BGgHSZL32Irh308-sWcmr5y6DuACxqA2xaWpYbiaaWLJPPEJkWimBhLfZ4RjEjRJAmHhIsat9JKvUHoXI-Irqc47sL1Ake7CApY-coAnv_xok0pwfI6X16Se7tdT8yZJYnCredfWJXd3_QdC9h94cZAl1XUxSHkaZEdPxkzzyUPQ5Ya2z7oX8gxMP-f3QgLpKSPtAP0ZOnDg%2C%2C&do-waremd5=ckZgjj8FdvQ5FZwwa3Yhmg&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1156",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD FX-4100 Zambezi AM3+, 4 x 3600 МГц",
      "img": "https://avatars.mds.yandex.net/get-mpic/10637301/2a0000018aed791660be1634be2dd2bc01dc/200x200",
      "price": "1 475 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-4100-zambezi-am3-4-x-3600-mgts/7752385?nid=26912730&show-uid=16989587190879118918416013&context=search&uniqueId=34571313&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101053748799&cpc=U8ps35ralnxsGTX65GVoI5gJAisLUfzpMs7k1UkJE80OuWn6okSt_mv3jA8OGV_CXK3EqI8n12GuK1kCnocbvH7CkCdfLQcJX5C9knSfB3AEVH1IKVRpSfxUtMch3Vj5kWCErkH3EqhSSq4LC0JdHIygYZIqlq3hvtPUpqWgPtviD5OcRm_UXeLGkTedJv8yH7Jq3nsBaXw%2C&do-waremd5=JvqQeLMEehkiX975oh3pWw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon L5640 Gulftown LGA1366,  6 x 2260 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5186016/img_id4848825319508436279.jpeg/200x200",
      "price": "347 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-l5640-gulftown-lga1366-6-x-2260-mgts/6133153?nid=26912730&show-uid=16989587190879118918416014&context=search&uniqueId=48222200&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101872319309&cpc=U8ps35ralnwznDdIqqnOYQ34ZW5oDvPtlGb3iId7OuZ-o42VCma39GYZiynbHpvfM03cXRkz_FnBq8cyDJ63nCSuCAVDhFZdIqG7vux7sMSY0SLHdHhKlQhqekXoTz0IqShcXHFr6sbqvC3VORpmbImR7Vq4mc4RsRY4SgaTP5Z_hKQXon0zZnToUvrufAj3cA2YXcSUvCe9i-LwnT_BU7NhxFjMjW7ylg30TZu87ZPxhSR_aKU3kWxV8WughOLIFpWOxnWdzaJ_8Zc53RrMRg%2C%2C&do-waremd5=KWWr5oiPVvrJPnhoRAkeWg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1366",
        "Тип памяти": "DDR3",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2666 v3 LGA2011-3, 10 x 2900 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/3925628/2a0000018ae5517907e04840ec475164d72c/200x200",
      "price": "2 970 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2666-v3-lga2011-3-10-x-2900-mgts/1756203481?nid=26912730&show-uid=16989587190879118918416015&context=search&uniqueId=20541181&own-cards=20541181%3A101770900737&sku=101770900737&cpc=U8ps35ralnxsN0njtJ37_m8E2O5XzixinZ_q_L3nLof6z5Fu5YIXvEHS29uwnIXN6HH8069yPT10CUcvvuTgGzPhUzz4x650L8GKgxyYclyKFbJzrX_C8hyuJM6ZDCMDskLD3ft0F3V2_dES1CVsLS3-ct9-GyPrPuhNORkLpRGIUjCSvEoxMc0fYQ71D_dvEXbEUrV4eL0gAiK0pCwT7qP0lRHo1OvFSRc5ppxv3FPwwmZQZlgSNfz-7z2SSLMeYzZ9l1ATcKPbvzzF3mXpBA%2C%2C&do-waremd5=52ysLj1IX4fxlA7sAU4FTw&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "10 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Celeron E1400 Allendale LGA775,  2 x 2000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/3986638/img_id8164271221972625904.jpeg/200x200",
      "price": "188 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-celeron-e1400-allendale-lga775-2-x-2000-mgts/2067473?nid=26912730&show-uid=16989587190879118918416016&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101191067127&cpc=U8ps35ralnwQ9BH3Hme8f2i1tiVNnMZoHyI7eT2TCx0NYEcSERDX3skXaz1XR8VnF4DtLJbGObOaqLEfo9jM09c13TAlAAbcjvJy6ZiDWsxXo8DNryddWlcIj1Q6nWzA7l3HERv_Ry2gAUvnWPY4-KsZS2Eh4TORcUDT4fqkyOZRuSQFyX5K2MoGm_pLY5NHubu89ymWF-M%2C&do-waremd5=fOeXR0Cx0ehUJAcFUdRI3g&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2000 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 X2 5000+ Brisbane AM2,  2 x 2600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4887676/img_id64928895372054214.jpeg/200x200",
      "price": "594 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-x2-5000-brisbane-am2-2-x-2600-mgts/1015911?nid=26912730&show-uid=16989587190879118918416017&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101746197834&cpc=U8ps35ralnxCsZFa17lp5dlePKKjr6-sK_dFtYH-NcNXwQuqdxzEcwyLBXrlaiiGn-9Wl3-EftAImPQV8Q-vtAJwTbwPZ6xQqz6i8HOY-Qd4krj4aBXYwMeLoHC8ZIHoXvrHZ-TiofFr_MuWnuf2pu-zAolZAbOBF2Rgqw-p-kx5igiCSqGRBmG4eV1sFuSEbLWa10HqmDg%2C&do-waremd5=mCIZeO-oPkxYJPZVhTTMuA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Тип памяти": "DDR2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X2 240 AM3,  2 x 2800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/6069165/img_id5423749628312087204.jpeg/200x200",
      "price": "257 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x2-240-am3-2-x-2800-mgts/4845327?nid=26912730&show-uid=16989587190879118918416018&context=search&uniqueId=59333164&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=100405234111&cpc=U8ps35ralnzgWMc6JzdlUhay1KUxR59jnY7tip75LUW1ugcJhv0WM8o9hSUkKyu50gvCdwcH7ZoRxlqTooPbz4kGogkqXJIIIiZr_yjXFMg5DKfhntC_fqqzW_qRbWtYljb2AmCpkUGgg2B5hMo8wV11FU-If9NfGTLNiVuk-ccOddsl9pmAJ1QZdEcgCdG4PBSdOeqk7XpNpHk9nXJ7WVokVVobCQai5iruCdUEGF8JIXd79DCSVrOYoLtvkFcl0PvcSoJQoPsw_Rheetb9uA%2C%2C&do-waremd5=Qjf11BlxcAeDqWh49IIQLw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2650V2 Ivy Bridge-EP LGA2011, 8 x 2600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id6940338941527108023/200x200",
      "price": "1 277 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2650v2-ivy-bridge-ep-lga2011-8-x-2600-mgts/10572705?nid=26912730&show-uid=16989587190879118918416019&context=search&uniqueId=44204555&sku=101326417917&cpc=U8ps35ralnw-NoaU5Fx2WQZoxGUYIfELhjeHhKp5e1X55cHm_Uh-2UMLteYgUWwYKGh1oCTFkDdpmBlHAYQhnXvlI6O5wMyV3kH3hDtOJ7ZRnAxMiaIp_--3VUffSuX09mVIrlGbzY6ncwhc2XU3M82UWjdKAZN0jRvGgZI2Hi3dTuImTuvFe8fqpsHLnyIQ_zPKl7Anr3Y%2C&do-waremd5=IIIn_gH4fde1uE2oLTvFGw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Тип памяти": "DDR3",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор AMD FX-6100 AM3+, 6 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1862933/2a0000018b1645094f36183248ec944b6789/200x200",
      "price": "2 342 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-6100-am3-6-x-3300-mgts/7747079?nid=26912730&show-uid=16989587190879118918416020&context=search&uniqueId=82427046&own-cards=82427046%3A101204198763&sku=101204198763&cpc=U8ps35ralnx2xehG1s7sp7NYqd3uh1N4vL4WnbCrqT1GHud510fApyirc82SGD6_tB3vlb6LambI8l1wQhFZoET0vRGkC0moOyaUDo_1LYbTkydk5nOZ2i8LW421igbuWMMt1AxOQlFA3NpM8s1wRFVo9q1h4n2gqbEUuTcq3COR1QqW5hd51rRRvXC_LsBC_1ApUoVX6fGzLhSwk8ZVckczLcak1NrquQsXpIIlFfJwgYyxHP1WuP5F72e1XaNfgmgHbKlCrSIMcAqsGgqsJQ%2C%2C&do-waremd5=v73S87YBSNxbo2b4xO5e1g&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Celeron G1610 Ivy Bridge LGA1155, 2 x 2600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5277040/img_id5045794407284691718.jpeg/200x200",
      "price": "353 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-celeron-g1610-ivy-bridge-lga1155-2-x-2600-mgts/8526006?nid=26912730&show-uid=16989587190879118918416021&context=search&uniqueId=49563636&sku=101508539967&cpc=U8ps35ralnwb-UfR5Do2Umaq5pYj0MGEPA-iHx4xLsOmVSAUtVOpe9EyWmTAUUBpN0t5ERHXgU5Jm5khGkXYy6mW92lUV_Y_ppxS919oF5to0nkPLg77uoCN2cWrQFHZfu8OkLmg8ToiIwDGaBcPpYOSE9txBzoSQWmka4kWXu7LUYq6rnY3peEig3YkbRj3q8f8ljjYno4%2C&do-waremd5=MeinS_rcY3s0VDRyqpxbyA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор CPU AMD A10-6800K (AD680KWOA44HL) 4.1GHz/4core/SVGA RADEON HD 8670D/ 100W/Socket FM2",
      "img": "https://avatars.mds.yandex.net/get-mpic/1985106/2a0000018a6642ed2560c1556f42da5dfe33/200x200",
      "price": "1 871 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-a10-6800k-richland-fm2-4-x-4100-mgts/10387700?nid=26912730&show-uid=16989587190879118918416022&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=101896386357&cpc=U8ps35ralnwVqtcSdw9cED6bow5V5OE6KbbiZaBV49YVxSbWPazaFj-Gafkt9WjKCK9qdbo4ODJ9E4VC7Jpyb33D5FIFry0xYl5dwWsnAc8ceoOuEAV56ULcacSf5XjsB_lVjP-ZP_Op9SPJMb4BenvO1XO_oEOTJVEME98sJLcJ-3F2_KWpEy6ZcxStbONjlOtCiyED4_s%2C&do-waremd5=hWZFJ7t94k0_vquVKir9-Q&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium 4 530 Prescott LGA775,  1 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/7650126/img_id6043971576025665183.jpeg/200x200",
      "price": "446 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-4-530-prescott-lga775-1-x-3000-mgts/658359?nid=26912730&show-uid=16989587190879118918416023&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101833523742&cpc=U8ps35ralnyMPVMd669dT7MwG7QKJ47zcROODgjBVBKW67_JiCCQGfa-7uFTz0-sQ0NGBDjvZop89klxHOtGJ09d98t8Ki_YU6DNEawpo0yUe3kXaWVMoZp5xk5zJ1hPLrIpOXhWFMvVhw5RIoPpZXB3P1YUcFKOin35AuNSvD2BkmqglNGSGAAk9jc7YAe9blnLYt30xaE%2C&do-waremd5=LxcIxQYHrqjd3Pgr9vP2Cw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "3000 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 X2 4400+ Brisbane AM2,  2 x 2300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/6425823/img_id8280147230889105303.jpeg/200x200",
      "price": "428 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-x2-4400-brisbane-am2-2-x-2300-mgts/1015882?nid=26912730&show-uid=16989587190879118918416024&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101864640854&cpc=U8ps35ralnzB2BxTSGfpy1titNYHgifVH9ADXc1ggLrfWmOnZbTLuzzwOf3pxML3VT5FyVeNEdXIWD7G06J8gGhR9omRbo9oWAY4RuT2hEbhoWPax8TQ1UifDamH9ScztlZGdeTkRKawbqQ3Xc6UFC9HxUDhsOHIZCV_xQOFSSkZYqwngC9160ii7xFou55fKn9JH1PRwTI%2C&do-waremd5=6EF1VQXSL69MqLqz9DpjHg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2300 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon X2 340 FM2,  2 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5235182/img_id7825328681803427196.jpeg/200x200",
      "price": "356 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-x2-340-fm2-2-x-3200-mgts/8544614?nid=26912730&show-uid=16989587190879118918416025&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101505445903&cpc=U8ps35ralnyMK_hnzk50QiaN9PVBiObdhTgvywkg5NowHG05vilpQHP-KnFW_o_28dZvOoPAEo9PsvBYELYI9gcpvttgBdAXuD1yIasX13M8EQaIhsXjlrqCJP5JrJ5-ctz7QvaezhP_Bls-Nz0uj3GbY374uzcrufTGqLjkdTitPUtgsqVHbFZE06pWu2irf_tTKmGuYRo%2C&do-waremd5=2orynDWTtcun8dvYWUA3AQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon X4 860K AD860K, 95w, Kaveri, 4 ядра, 4 потока, Socket FM2+",
      "img": "https://avatars.mds.yandex.net/get-mpic/10077879/2a0000018aeac7cf923d11d7661fddfaae17/200x200",
      "price": "1 781 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-x4-860k-fm2-4-x-3700-mgts/11150062?nid=26912730&show-uid=16989587190879118918416026&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101047265760&cpc=U8ps35ralnxep87kWwbYMJfplJxZP6fCQgUrDytpZuBmDSSuM5CXMOlARGNUwdUntjyCcDBdAKaoSnmM1mJV6-8SaubdiiQSUubMBGEyHZXoS93jrWsVxPKPyU_vmtTrBJmzSZDC25iu3jNWVkPYCFtpIgHEgaoN9kXcXg-eFrNlE0xn54Qwf7XlGxv9wjWDuPCE7CsMBNRH3RvJm50u1gOAz91qLpt2qAIogqmFrGEtAZ6SzAf0XQrfXKfp73KEo4-KCYdKXc1GIFsf9AW5Tw%2C%2C&do-waremd5=TFhTo71NN3bXDi96BvOONA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2+",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "28 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E3 1270v2 (3,5 ГГц, LGA 1155, 8 МБ, 4 ядра) OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/7937668/img_id8355603352594206873.jpeg/200x200",
      "price": "4 553 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e3-1270v2-ivy-bridge-h2-lga1155-4-x-3500-mgts/8334733?nid=26912730&show-uid=16989587190879118918416027&context=search&uniqueId=3844430&sku=101770839512&cpc=U8ps35ralny5KM4-Ur0IveMJbwia8ylIKs33SzE8vfGEiOSw67D7Sj3xnXk5T8FPhHcF2KoXB5_eBaqsg1EYiPa2PSIMcmlL3FNTZMuexWcUcdVYXAOhd87yVxiCLZj7QS9wZOdlj1uCno4Km115HpixBANFRKFva3yzSu4QKaVnHGz43fBVeif0dBQWe5A6WT8tEGTl9n4qtGn9eZojWP5tOlVwEU1ntE3K1QLz6qYUbF0SvgE4prOverdKV7PBS3eqPoe7mdA%2C&do-waremd5=I4r7nn61HWsPcCP1J8rgtQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2680 V4",
      "img": "https://avatars.mds.yandex.net/get-mpic/10567286/img_id4716034520462341242.jpeg/200x200",
      "price": "4 455 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2680-v4-lga2011-3-14-x-2400-mgts/13908595?nid=26912730&show-uid=16989587190879118918416028&context=search&uniqueId=79617058&sku=100924783781&cpc=U8ps35ralnwnCYrCc_yHYeU_7u5tlhyHMhOehEsGHntAsMfXVCJh0vdaiyYVSDBo2mF_PTKlbPTUU-Kgc7qriw1RuKoYJeKZqh-2Nkd85Y02lxVOqBJkd-b9nHR5vo-weELbleKoiatfslp5zWoFU5dqKzwAI3aWmYKpoqOlIw88JTYK02NnGzxrqWO8e0cg04x0BkJRnss%2C&do-waremd5=f7Jd4Vc4rsVF4pxJ0jvN7w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "14 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon X3430 Lynnfield LGA1156,  4 x 2400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1912364/img_id4568426837995277634/200x200",
      "price": "941 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-x3430-lynnfield-lga1156-4-x-2400-mgts/4992747?nid=26912730&show-uid=16989587190879118918416029&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=101076656766&cpc=U8ps35ralnzqGV1CY0JRebA9pwI_sZXx-hGN3xQO2_Ix4X6Uj-_Dzifd1o_CgCqnWkGFfILEFJYjk9VKuNMU3MyBg3sywXaPvaRgPSX3TXpC_BL9Ywsa3f9662FzbKt5kuSydb2VjHdJDRDkLDFeEsmrGXs2ctmU_toejsbZiTgZ8-uaGZ_oAF_BC4_EZwQgon8rnY_gbwU%2C&do-waremd5=mHJow9J_2oZzyQOETKgRVQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1156",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium G645 LGA1155,  2 x 2900 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/200316/img_id7120109323691950991/200x200",
      "price": "248 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-g645-lga1155-2-x-2900-mgts/8445294?nid=26912730&show-uid=16989587190879118918416030&context=search&uniqueId=59333164&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101762654150&cpc=U8ps35ralnyJ-QQZH4-Pxbhu2kpLbkumzcSoNz0QLyqACLUtBuAY-ACJlFx_7_BV84CiuyVT0qG5rC3K7keF1g3vihHvbUl786TvTYjRP4kwH5KTNxxYveiDiII_AXSWSi5BLnZ_vJFYYMDgqtCxbREsU6SxWOjPkZgGnzREJU6ho972DUx5MguhDQ5YdAjxM8RHQsTVS1AOA9mdsd2iIevjCFjaqEd2kbYvQ7J5wO_j2xJ_pRQ6aDRMKlE_QV-MNeET_Yud32zrgnSza0_RFg%2C%2C&do-waremd5=0M_6BzNn_vhoJ2GONSf2BA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Sempron 3000+ Palermo S754,  1 x 1800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5250150/img_id2971009977137787247.jpeg/200x200",
      "price": "396 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-sempron-3000-palermo-s754-1-x-1800-mgts/1264553?nid=26912730&show-uid=16989587190879118918416031&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101876557479&cpc=U8ps35ralnx2RzzcihYrd5d4xkAjCvdNQbbKCdoz6KfbQIFbM_3cDtFtelEnmTWSKERLfG50M45ICzTFbNlhraPENbk-CPqWCHnI3kCi_fuSH0kshF_EyndrjhDzdgQgWIMpz7HeVAF5_0PlLZTUaeOqtmgJNfudH2K6pTg82RG1GieUUd9EXSMGPsW2yjTs7lYlUMtv5_Q%2C&do-waremd5=mbT18cH70_8RIJ5-W6dZrA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S754",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "1800 МГц"
      }
    },
    {
      "name": "Процессор AMD A10-7800 FM2+,  4 x 3500 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1600461/img_id5254535653024378811.jpeg/200x200",
      "price": "1 881 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-a10-7800-fm2-4-x-3500-mgts/10674780?nid=26912730&show-uid=16989587190879118918416032&context=search&uniqueId=45086034&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=100676654767&cpc=U8ps35ralnySZ_ZqT0ZODwJ_YgKu0f1ld-dMG_NADtbtrSXqvvDsP43mgkDhDf2EJta5XBlztR30VDH1osclLhIF3tGulnJXsL5sYVYYD-L9S8ih0jSyy4AbniPmGeFIKTi1HapOOXf54i3TWYois4TLsXHISxiG7uE3-JEcMgUTEVGRadBCdQac13ErwQAFxVVxzSF0BO0%2C&do-waremd5=2UGMrVLgGW8umtrA37iaXA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2+",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "28 нм"
      }
    },
    {
      "name": "Процессор Intel Core i7-3820 LGA2011, 4 x 3600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1864685/img_id6467968261436614620.png/200x200",
      "price": "2 673 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i7-3820-lga2011-4-x-3600-mgts/7867589?nid=26912730&show-uid=16989587190879118918416033&context=search&uniqueId=59837019&sku=101853099970&cpc=U8ps35ralnwZ_gUkzfBkbhUyTKgq1u-jITxtHliy4XoiS8pDd3wbxSLeTDSxwOC6Y2UlCLnUZEMS9zgbpOQiiV50qwROpDGxGA1xd9S-I2hQswyWqcIUg39OwFbt3ZX5A4GGuafOTWejpbIIRUiZ8DQjiewwsUVYI6-OSeJvQfS4vGr4zjwFrKXoTxZXRdkZPor77v9wUU4%2C&do-waremd5=R1vwT4mX-Cs7I5voaaDIBQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "3600 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E6550 Conroe LGA775, 2 x 2333 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5306939/img_id852408307398833078.jpeg/200x200",
      "price": "644 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e6550-conroe-lga775-2-x-2333-mgts/1043617?nid=26912730&show-uid=16989587190879118918416034&context=search&uniqueId=669640&sku=101608537726&cpc=U8ps35ralnxY-urC7Pq0zX9NUCRN8n2CG8B6hiMOchzZAEntdyyrKKvoYkVcW5fT-Q4XXPsi55u254MINjLhaG6z_JHMmE0FJSzCOq3LdN6XAP67UP5G_BlzXrK_h3iDIpvC1imDeB_ZLNbPCRFcPMMJ_X7v1oh8p04UBUvCzu1N37Ob43NSFU5kVEhAdw2SZI784kc25rs%2C&do-waremd5=t3UrPglDXRVHy65IswsAiw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2333 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i5-2400 Sandy Bridge, LGA1155 OEM (без кулера)",
      "img": "https://avatars.mds.yandex.net/get-mpic/5232557/2a0000018b57d01ccb5fd6749020dfb43920/200x200",
      "price": "1 871 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-2400-sandy-bridge-lga1155-4-x-3100-mgts/6933477?nid=26912730&show-uid=16989587190879118918416035&context=search&uniqueId=66155111&own-cards=66155111%3A101353751797&sku=101353751797&cpc=U8ps35ralnxvHLVXNivfMQLirfLjugFb_3X6DjKe316NM0jWR1_1oiWtgyq17qFwXmSyqCV7qEj02Sn6EflnvXtnmB0wJ5eIkpTZK9DCjxa-NEDYDAlqCkNhPor5Ez4NhJLChEag1Wz5B5u_w4U_t4rwgZxrECPok6nDjTe9yZxqzdSodSgKrCiKmONmEu8olXhJAnFJk9LQeY9jyw9nhdETSn2ooC73qx3nmNaxadykQbiuNBw1dKKA9hSG9jurufLbiwD4uYY-_J1LJQN-aQ%2C%2C&do-waremd5=MWNZRMsFJMEuP984nw4Ksw&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Core i7-920 LGA1366,  4 x 2667 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/2009321/img_id6056368868808173599/200x200",
      "price": "871 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i7-920-lga1366-4-x-2667-mgts/3637566?nid=26912730&show-uid=16989587190879118918416036&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=101030446731&cpc=U8ps35ralnz8i27pBHE7vpCahg-oDrWeq1sVxs-C7ek1hPGXaR1UZGmUcxf7GXkF-_mh1XihY7GXXMcKUxG1COoaHfaiBLgtKTXesbt_yOGDf25VarHO8uBA7WOFRnmq0xVzBBB65CiUkL6hRGg5PX4LUYU8puiIiqIeVdlq-JMNlOOzR0c_IbhvRYwQui4YJolX0sp4fy0%2C&do-waremd5=Wcw1w-ZRepH4-dS0yBz7SQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1366",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2667 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Quad Q9500 (2,83 ГГц, LGA 775, 6 Мб, 4 ядра) OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/3689399/img_id583335001677502866.jpeg/200x200",
      "price": "1 413 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-quad-q9500-yorkfield-lga775-4-x-2833-mgts/6068905?nid=26912730&show-uid=16989587190879118918416037&context=search&uniqueId=3844430&sku=101510612591&cpc=U8ps35ralnx6edE4ASTxmdTOldOtqvsb9pgNlA48GzpqKjsb_wFIHnEhAjAOw8k6ZXHC4G2mAcmch2rlfIF7qVAtWlLt1DGvjo3UXwhAr-6JDx4UHX4JB3ES2dxLse00gCfumd9xm-CAd0tNyrWPbXvpDoLqO_-UdVnnuSL1pwroF9JkE036I8qC-3QDjNiPXWD2pBxRQghCNYz--4dSOLvE_rU7TVedFaFQ79w8rU_fT926jzprGJZMyZyXY_erg2b8OJqIPLw9BAMkKsj49g%2C%2C&do-waremd5=SPANVE5bTqdOIRx81_W0rQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Тип памяти": "DDR2",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор INTEL Celeron G4930 LGA1151v2 OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/3986581/img_id1858457510091547785.jpeg/200x200",
      "price": "4 638 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-celeron-g4930-lga1151-v2-2-x-3200-mgts/623103129?nid=26912730&show-uid=16989587190879118918416038&context=search&uniqueId=892410&own-cards=892410%3A100820144885&sku=100820144885&cpc=U8ps35ralnyVZbf3PuK-Ee_so1ILRPEPUuC_rD5s5TyZCHykdzN0c5zR1myruP55nl_4OYwshwCxKPQm1gpjlgCXcQc2kHbv6GFr-gaQIc-lOhAzMXpvSDEbbp9iUC8ULorCs3c46jQYuOHNKLsym91Q9Dv3p4Bsov4Y_LaorvCBoL_InByaoBR434u02NWgZP57QvCuiWhLswtQacKBJ1QtapWq7ZCMUeN-qX6BJT93UESZ8a7V68XTEs0tB9QvzLlVBhRTcVjgqhY1jOcLxw%2C%2C&do-waremd5=KCJbLSw2jlYwUH1vG_Tirw&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1151 v2",
        "Тип памяти": "DDR4",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E8500 x2 3,16 Ghz socket 775. Товар уцененный",
      "img": "https://avatars.mds.yandex.net/get-mpic/3907093/2a0000018a6e96a879cc5d2954b94419f73c/200x200",
      "price": "644 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e8500-wolfdale-lga775-2-x-3166-mgts/1584124?nid=26912730&show-uid=16989587190879118918416039&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101608494463&cpc=U8ps35ralnx8pJG-tCMDomx3IiHmD7_vPwqOkpW0qz6AvKS1qFKvPn8hlPAb0mCeUXv2shuNdOKrn2673udFjrE4HVE2QxpUKAiGQWlBjrKV_h8ND1qd9NSIDdDCH1jx9XRmwd8jUc5nIxhHRpFN1K4gZq27b7-CzFLihMIt3ZjRUHHJPVI73Yr0_KBnSguLSB6xCoWP7aU%2C&do-waremd5=HokJWveOxIG6yDqJ8D7VnQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3166 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Quad Q9550 Yorkfield LGA775,  4 x 2833 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id5210718286443252348/200x200",
      "price": "2 653 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-quad-q9550-yorkfield-lga775-4-x-2833-mgts/1777928473?nid=26912730&show-uid=16989587260788365796416049&context=search&uniqueId=20541181&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=1618521&cpc=BzaiqBX7d1Ez-MGbsci4mLV9yvl7ZRolaYqSTHti3tBXIjjQfBufdzwE9bBmWY7U5WrycwucGfAM_FtU3kIqkZjJiPwWx0hSS4LKr5WiI2RDb2m9LgGsi-XUsKgGg1P9QJ-YQfrs-VCG5zZX8u8zyhtuZ6gAPoGd_Bu4eSgqJ0fQXiLQ-uF1fdQCQ-NsFY09tCUV0GaOrHEZM05u_eZRL0q5F8pAWMmPdAuJgM2xQWlP7XiEtoPUUc-RYndQSlK7DqgAiDMW3G0%2C&do-waremd5=guj7NK-cQFp6YnyjNpA32Q&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор CPU Intel Pentium G2120 3.1 GHz/2core/SVGA HD Graphics/0.5+3Mb/55W/5 GT/s LGA1155",
      "img": "https://avatars.mds.yandex.net/get-mpic/4362876/2a0000018a68301c6dc5d6355ffe3efb3aec/200x200",
      "price": "386 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-g2120-ivy-bridge-lga1155-2-x-3100-mgts/8445276?nid=26912730&show-uid=16989587260788365796416050&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=101797680545&cpc=BzaiqBX7d1H4wlSZ0-6gYxc8HOLVGwU9CvcP3RtB3zqD_cViEqxcXsK1ZFU_PSWHS7pEgUrz3Vh6FWZjnaAp1fhDJpSiQjqBnXVLaBo9fDriGNGuNTCJTDGDEt8qyEZx3kxgBtFIOFx985aDuE9PLOQwhU7hj0wS9e7jrRP3oW5Av4XyBFfyAA-oQfc8TxhlgvFE_KFJpso%2C&do-waremd5=W-tID-DVGLaeJSHu0M9l0w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2670 V2 3,3ГГц в ТБ LGA 2011 10 ядер 20 потоков OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4362876/img_id7700963953267713518.jpeg/200x200",
      "price": "2 772 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2670v2-ivy-bridge-ep-lga2011-10-x-2500-mgts/10572765?nid=26912730&show-uid=16989587260788365796416051&context=search&uniqueId=6992502&own-cards=6992502%3A101171322208&sku=101171322208&cpc=BzaiqBX7d1Gh-K8xYdke7hNCKzBgocwEyIlEx4DcqfX3_RG2R42KKgDiE_vlDhkKxG39lbhXG3YM2FZ0SfVvCxjkA24Sttu8oFpu5cGrzENrA0OVXwS0p5Yao6E7NkOIH9VhWo_rrlWg1V6zd3agUUisSGPGgTVfdJ8lUzADkZ-_T-6pvdlMrFtWYbtY1iBBG64JP6l4fBp0JfH191xjgVPM1xohXhjo7T5AK-grVjdPRE0jiIRq2NrqxbkAKWwXdgP-EbVDrNxp6oma8gbwkQ%2C%2C&do-waremd5=TYrxlBuL4p3eWqhvyp10vA&sponsored=1&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Тип памяти": "DDR3",
        "Количество ядер": "10 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2643 v3",
      "img": "https://avatars.mds.yandex.net/get-mpic/11588019/2a0000018b65577c18a378dcf289c4ba0ca2/200x200",
      "price": "3 713 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2643-v3-lga2011-3-6-x-3400-mgts/11056561?nid=26912730&show-uid=16989587260788365796416052&context=search&uniqueId=79617058&sku=101151880729&cpc=BzaiqBX7d1F2xBG2XWoHWoCeMsgLZneZJogVp-hfxrdEW5HgSeg1SsMoVSMV1N1XOoR9z_vAVGuVJoGjkXuuJmVkVPd39tSjkiS4Fj_v6XD_l7c5iG6Mrgqx2gAryQ7d-43DIxh6yGas14TScLdFX-zyldAWPSqjlggWLKG0n572DksfsSNXQKMNFdL7gtoxYPLAgZ6tQ54%2C&do-waremd5=d_-gNnnXcGcwII0jDUU6iQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E6850 Conroe LGA775,  2 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id471272218670679428/200x200",
      "price": "1 089 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e6850-conroe-lga775-2-x-3000-mgts/1043619?nid=26912730&show-uid=16989587260788365796416053&context=search&uniqueId=45086034&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101833794945&cpc=BzaiqBX7d1F_qPUcjTlHO8WT2Y3xIbQHQWfp9RvkokSJy2lto02AcC5qiVN4f8sUNB9-wvlaL7sX-K6jTBfmHCLHJqojxFSeNsqXNJ7m67q72uabSZMNm8-D4DlqJTAs11NGiTVSz2CcnR0FvNMbDHEexbG5CNbinkfjXHQ198wASNL0cA0rVZZjtEWRCLlHb_Y8g9ZikIE%2C&do-waremd5=m36-80WpL35_HcaX6Rsyew&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "3000 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon II X3 460 AM3,  3 x 3400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4466428/img_id3501606438460302969.jpeg/200x200",
      "price": "1 274 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x3-460-am3-3-x-3400-mgts/7333278?nid=26912730&show-uid=16989587260788365796416054&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101876578467&cpc=BzaiqBX7d1Gi5aGOWQj9ZbF6xu8dQRrKQ26las8TVsl2WrRYq4bbxQkKZbPnrhylGAlfPQ4JiYO7Em3IsEKGxY3b8ysexjorVQ1nyoVEEO1gXwt50irSGrwpNJQIYDA8nlwJFmkgs0FJ2aKGRq5o4mlFZS5aoGoUXhmVjIlLD9vrlpV4G6O4ZfqVArRKE7sAdNcmmHZYnHQ%2C&do-waremd5=GhDwu-_hzXGtMT0sYRQJLQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "3 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3400 МГц"
      }
    },
    {
      "name": "Процессор Intel Xeon X3440 LGA1156,  4 x 2533 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4589539/img_id6722360369929290222.jpeg/200x200",
      "price": "1 139 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-x3440-lga1156-4-x-2533-mgts/4992748?nid=26912730&show-uid=16989587260788365796416055&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101030448729&cpc=BzaiqBX7d1GUZ3NMIkh-78BE9ooZiDlHLFFHgXiReeZylNFrGRwu_QRw_9we15hkSFC1HZMkos57JWkwmC0riNNMe-8hPygC8m7FzaJ_MCcN7IiK7ByNr1Vk3jIrMYcTiTTtMQMwpWsiA1TnTKpUNrGsa3Y7zFjtRLEi1Ea3nd8MD302_O6hoRkMfa3ZdGsxzd45v5qlKNE%2C&do-waremd5=MvFudbXWJDfjZIBdakQStg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1156",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор Intel Celeron G1840T Haswell LGA1150, 2 x 2500 МГц",
      "img": "https://avatars.mds.yandex.net/get-mpic/4314340/2a0000018a6505c03eb5b5b2254d73818ccc/200x200",
      "price": "891 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-celeron-g1840t-haswell-lga1150-2-x-2500-mgts/10816298?nid=26912730&show-uid=16989587260788365796416056&context=search&uniqueId=50700187&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101963553748&cpc=BzaiqBX7d1EwyRRey1L4Zmqet2QN3ftCz0uk9aOUSNGjwjB71lynYDqiLgOE4nz3yi3GiJo7VzEqavG7H1nd-lprDZhkwjiCcaRBHBt-W4UWOv8mAzNKiq8RpHj-dwr52XQw3kyiKWE2DhOVLeFP0gZ1naEB8_MGUp2a1OUz8pFBse1nMKWVj64lHKeAQ1uJqirZGdmUC8S7GeE098bxdGoPr5Ra4aT2qAZBCCf8-EghHX1bs87YDOSWMMIHJISfRH-c_PTmK9I%2C&do-waremd5=aqZijT-cf1X0gsUZd3jlDw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм",
        "Частота процессора": "2500 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon X4 740 (3,2 ГГц, FM2, 4 Мб, 4 ядра) OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5236458/img_id1352134724721339258.jpeg/200x200",
      "price": "1 484 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x4-740-trinity-fm2-4-x-3200-mgts/8509892?nid=26912730&show-uid=16989587260788365796416057&context=search&uniqueId=3844430&sku=101833799867&cpc=BzaiqBX7d1H0Ykvqdc9_gUERYWENj5J3rsiCn3T-1YJtZNmriAwSNv9yiqCujtrboRdODdrWBTVYBj3NAa_1m7OrrH9NZuA8BgjM1xXU5lT_mP2GmP4VD9SOitAWcZ4mm9OJ7KrPd6BOogF05HummsfKWjEBkA_NfpqKHcU5LHPr-M_R0nKfU1BxdHePIuvLB2NhiBHvmU8%2C&do-waremd5=oQQcyQt90egw6Q1uMABW4Q&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium 4 516 Prescott LGA775,  1 x 2933 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4705079/img_id871227997465071023.jpeg/200x200",
      "price": "545 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-4-516-prescott-lga775-1-x-2933-mgts/936314?nid=26912730&show-uid=16989587260788365796416058&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101884460912&cpc=BzaiqBX7d1FW1EfoaLjJuY82rPKYk6ogj_gvth3NkjbpOPGE0P_Fwf3-Uv41-Io7We36-SfOmq3TArieETx7gjsuwJHmnAoQJOPRg7lmMvyhVFx2CkbqXoVQTa0ppYUtg1xyNv7TajwqVoy4Xxz_Q9gjUQD1vK8HG0wOaEhCCOZ_r2NrzqVwHeEfaMBzcfisA4KcyuS3ZIU%2C&do-waremd5=mEmq4zTY7mqiZeY71oV1yQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2933 МГц"
      }
    },
    {
      "name": "Процессор Intel Xeon E3110 Wolfdale LGA775,  2 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5217165/img_id9054822786845854569.jpeg/200x200",
      "price": "980 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e3110-wolfdale-lga775-2-x-3000-mgts/1610739?nid=26912730&show-uid=16989587260788365796416059&context=search&uniqueId=34571313&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101882216090&cpc=BzaiqBX7d1GVWd4OOvphTZBIvFIAT6M1LPxCF0gp5Wclw_B5Rj8Clb-UUDCLvZooyDLRuM2ic-J4gMLLgcbbuhsPwBytozupsRvcxlndQ6ouFLlytWSqPOts6q9Bag-eKDiHsjOoKzs3Wm_cFAlAqumEA0nPW5WiREKRV1P2UI4FMl7PtGI0biaYdvoqypD3Z7D3wa-PE14%2C&do-waremd5=9bdk0-Eom67pPhdO9FcfWw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3000 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E8600 (3,33 ГГц, LGA 775, 6 Мб, 2 ядра) OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5209712/img_id8965853486328146316.jpeg/200x200",
      "price": "1 880 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e8600-wolfdale-lga775-2-x-3333-mgts/2486123?nid=26912730&show-uid=16989587260788365796416060&context=search&uniqueId=3844430&sku=101859810873&cpc=BzaiqBX7d1GQmIjkOEoLO0ouzqHYctTU3hWHRb-aakiGhQbv86544w6EYjr4-8QoZzZYr4qQ1QhElpvjNM6cujuOP0fqdEkaFe4J4p79BR9dmaFd-GnOpEBfv_Ee9H6ivFRHYbKnd62odrRgk14zSLxf3Mlfilw2H0FppqHWgMW69QsJEjNftkyXrY2B0x_OGM5Nu48JoSLPEiPVNXdSxFZF1Bo6cN4aQoK8gnibpCaPDE5RUlEsdNLSQOohXrZj499wiDDu1cF3_fE6WnO8eA%2C%2C&do-waremd5=DJEay97SX8_DX1ZmNO7g1w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3333 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i3 3220 (3,3 ГГц, LGA 1155, 3 Мб, 2 ядра)",
      "img": "https://avatars.mds.yandex.net/get-mpic/1925356/img_id5471069473339097421.jpeg/200x200",
      "price": "894 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-3220-lga1155-2-x-3300-mgts/7959328?nid=26912730&show-uid=16989587260788365796416061&context=search&uniqueId=3844430&sku=100405234197&cpc=BzaiqBX7d1HuryG5m1fE2OAjIKi0IRuMCR4i8tHTNq3ttapFuFWEbi9f7GCMEl_Q8r8IBqpL_GZV5e8PwN8uZu5AaqH7i0t8_kxYzmM8xQT8ihnpUSZ_WdT82lQI2eYk3e6H_zTzN4p_AX1phbMtmMShV2OkzyKWRHI6dHbGaT9Xj3EWIHZmYdL44gGL3oxX08Ac-z2jX-nLYMjxyNXdp6cla5b-DZbWSrnzza8JDmIXHTt1ztAZW4UHxqPAbxCmZhdgw3Ez3V3zt4zDZS6rmg%2C%2C&do-waremd5=1pOiHAEygZFTAd4F6y_ahA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X4 635 Propus AM3, 4 x 2900 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4375199/img_id6635895124712927547.png/200x200",
      "price": "1 782 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x4-635-propus-am3-4-x-2900-mgts/6059393?nid=26912730&show-uid=16989587296732004365216097&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101884456890&cpc=Kl0WAiXTnAlUltM8472fs9aNUHnyU-xmR3OI0jzOPU8eMaAD3VttHfKPW-kRL4cz3JhMkMR0-64_yL5Wix1X4C633cMRJKj1wdUoI_w6eAaF4BTjEAJQszwLtCIcCXxBZ2c6NRHCCMbg4jEqzwpoTANTJxJ7XJdm0_RbzpUZf8uFCglHZcaUGz2tlPwNUUXOFENBRpUaRtc%2C&do-waremd5=JXwSO6KhtXqvUf0L9RTjsw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2900 МГц"
      }
    },
    {
      "name": "Процессор AMD EPYC 7F32 SP3 LGA, 8 x 3700 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1591646/img_id2977341860494242151.jpeg/200x200",
      "price": "123 417 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-epyc-7f32-sp3-lga-8-x-3700-mgts/953784702?nid=26912730&show-uid=16989587296732004365216098&context=search&uniqueId=924574&sku=101313935190&cpc=Kl0WAiXTnAmgyzVr7VfZBULV_lWi4u1aDRuambYzekzfcja9P8wPC9-XAhM7Fz9OiygqSoL5jFOA8M0n4HS4LAP45wCCvauNYEB6NoAbJXtwzyckuMW2w0RtW3fBil6AkV4dPun2fKJt7ABP9TjQCzuNNwEPab4Yf1h7iWXOPhbnFIErBULBruluCLR1cydHs8ZO9vnZXDl3o29CKAGyCou2nekKRB3meSqeEX50piftON-G8cvPYA2hx9td-FOLBbly4fGufdM%2C&do-waremd5=Iaq7YiW76RavGcMGqM3Ywg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "SP3 LGA",
        "Тип памяти": "DDR4",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "7 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X2 250 AM3, 2 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1749547/img_id4556464319410923180/200x200",
      "price": "940 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x2-250-am3-2-x-3000-mgts/4738651?nid=26912730&show-uid=16989587296732004365216099&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405238266&cpc=Kl0WAiXTnAldMaEGOFS5bk1OZmq-V0dnDWpS16pduqWH_dWZR1MWxndBrnIsyfivdfGSMgXI_SnxOFM6g0DS6PTS8gT4K08UrpiqF1DfyWIV7mHIoMYI0CU8ihHgKnEA2KmGQPY3qGgjRdxLVAP0lfgyz62vCDFrqvnPqBwJ5PU6-WFUwDlSmJH5GG05DrxA5duu6ueRpNBtz34cOMoWAZvDptRDEjr3JG7r9dYn6Hzyc9XulZLDCaVNHER4pnapF07-ewAPXvk%2C&do-waremd5=O8ELFjBULYV4Ukig5hAFIQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD FX-8320E AM3+, 8 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4599566/img_id2627817512899420980.jpeg/200x200",
      "price": "4 633 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-8320e-am3-8-x-3200-mgts/11149981?nid=26912730&show-uid=16989587296732004365216100&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100399251450&cpc=Kl0WAiXTnAnqMd1Hm6r5sITFdVffsjH3tO4YbvHsCMyahg5wSq5M1GrnCT2u-YLJBT4peIfxuchwts-_GMwzv-49GOoafvj65dYLi-Y7gaXHVnPppbEWeccO2ROvE1iijCgZpFyGNKc4givloNsgtJxsnLLva-jw9St72ZLnh-VkZ9qAGJVTtfd4CMpB0qqilfobk-BMm1Y%2C&do-waremd5=zMCOisKpD2ImxECZqx968g&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Core i5-650 Clarkdale LGA1156, 2 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1554397/img_id8108208085510829368/200x200",
      "price": "743 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-650-clarkdale-lga1156-2-x-3200-mgts/6031501?nid=26912730&show-uid=16989587296732004365216101&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101840275737&cpc=Kl0WAiXTnAkbQ6pTVWsWPdjTE91qUTEl0STU3m4npMmTz7bPE3fu_SNSfp6nYSnA9OAqKLTtpJIeW8Ri5V47segD2LNGHrYHL83O3KSpvWaQnJPS-4M1V33l3PihhyAD5-hf6dZfwKPtBUn_OkAgxb3c7PRkciDkkzskTfe4riTVsprW7CKx25UFUnduvgyn_LASkyGmwSU%2C&do-waremd5=hea7GN4LkPo2UGcXiFpfwQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1156",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X4 730 Trinity FM2, 4 x 2800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4012371/img_id4048967062313566201.jpeg/200x200",
      "price": "1 112 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x4-730-trinity-fm2-4-x-2800-mgts/8509893?nid=26912730&show-uid=16989587296732004365216102&context=search&uniqueId=3844430&sku=101521080263&cpc=Kl0WAiXTnAleDQxlYqSHTEbn8_BfAO83lsg9-Lqc2pbJoqWkbTURF6s-vCihl-bl4I_Sp7nVOYesEfmxs1bGm6AYRtYX8hSfByAw1EB6ZHJ9pfHVSTBr7xztBxaMB9jMkPeOCmmj6gBHkeH5RIarRs19vHITbtUFGAQUVnblnwxUxshqluNQ3HUOsghnjHJRrDdbXoEWgCs%2C&do-waremd5=NJbfFxMf5IRcIfGZX1FLoA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Core i5-6500 LGA1151, 4 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1704691/img_id4524759554338550948.jpeg/200x200",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-6500-lga1151-4-x-3200-mgts/12873965?nid=26912730&show-uid=16989587296732004365216103&context=search&uniqueId=8101763&sku=100405225810&cpc=Kl0WAiXTnAltQ7rAyxsjMj8MrnjEhdc79yS6cGO0qA7gcm8JvpUA2JdD0CLRMsXu6AKM0dnV-qt_Ev0QinnjLPo0ybaHlJyE8B83OCGg61KQfZsA4JTeSVqJXOjR8h4qU4B-eJoMFWMc3kjNlyoOHFCHkYkxS8Ztvh5njEY3wdph37uq32QYau5uE23369UbEQeH4qPX5eGgAWyuF8W_sm3RWb5egXtfsImQ-mNS9UOnuwTIetFJcv5XK9H7fzyIhoC8BsDPDNNS8-aWXBsKqQ%2C%2C&do-waremd5=T9AIhnbyFwbig1cXxVThNQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1151",
        "Тип памяти": "DDR3L, DDR4",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon L5410 Harpertown LGA771, 4 x 2333 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4696638/img_id2387165267851434924.jpeg/200x200",
      "price": "1 277 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-l5410-harpertown-lga771-4-x-2333-mgts/1619088?nid=26912730&show-uid=16989587296732004365216104&context=search&uniqueId=45170721&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101864427729&cpc=Kl0WAiXTnAkpG15jS7VsgXnZCRGLem05s5BH_D3sXIHzJwQxcZrg1wncD4YeAM8h4Z4_tQbwvZ7xyBaa8He5xDskn0iPGB25hhKZ3HrDvRlpIGkZAoI6-UbA3aqFCIJIVSCyrLdQ72EbLBnw8R6iing9sGu8aX61WdpztZmYJEo6YsIpxPVjMkCQKazMYkiO_rmoChhUaJToYOyj1J4xtKTid19p3TwJkl01H7Ig3Hr-wwvuMMDGohgwjMYSI6ZRxWez0SchX_o%2C&do-waremd5=GlVxodEjtc0f0UIvMqY_bQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA771",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2333 МГц"
      }
    },
    {
      "name": "Процессор AMD A8-3500m OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4949903/2a0000018a7ef63108ccf9b540858dda8a88/200x200",
      "price": "1 485 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-a8-3500m-oem/1918382892?nid=26912730&show-uid=16989587296732004365216105&context=search&uniqueId=681499&sku=102307969520&cpc=Kl0WAiXTnAm4ao0Djr1Y5vEP8wo2SJpiULKH0PDMGvhwt8oGYZW2iHiqVPZADoojOv-5g3VysoL5hS-GWG-1dOlehAOYtBIGmS2AXNFOvOeCm2DzpWAt4fo08UqeW2n0StLmaK-1YnijTRnIkWC8TsGxBsS5fU_OBAXR9aqXg-6yQMqAk3L3w41ynDD_UsD8viQ3YRXelW0%2C&do-waremd5=RM6Xp_WznZtaCKmm27aRnw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Сокет": "FS1",
        "Тип памяти": "DDR3, DDR3L",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм",
        "Ядро": "Llano"
      }
    },
    {
      "name": "Процессор AMD Athlon X4 760K Richland FM2, 4 x 3800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/195452/img_id6036380243904064068/200x200",
      "price": "1 658 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-x4-760k-richland-fm2-4-x-3800-mgts/10492086?nid=26912730&show-uid=16989587296732004365216106&context=search&uniqueId=49563636&sku=101759965242&cpc=Kl0WAiXTnAmKgpEBYUoCKii-ssGFkfr8M04Id9BnAELaUUK3kwsOj7Aj4ROs8t2WeI4CtPEIPLZK1Zxhm70tEZnTz7-LsuVSitb5Z4kcV_NRRRm1BDq1ud8wPERUSTC3NTcHKaUd-kUjI5wBtdC1j3mGpzaQC2wIyJXEfC_13urCAQaRLDzvs6lVcWkymc6wNpXGa4SRsG4%2C&do-waremd5=NCtysy0XNI8117aMvjZdnQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium III 500 MHz 1 x 500 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1687058/img_id3111085555770185494.jpeg/200x200",
      "price": "2 158 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-iii-500-mhz-1-x-500-mgts/1818967645?nid=26912730&show-uid=16989587296732004365216107&context=search&uniqueId=50170705&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101949015791&cpc=Kl0WAiXTnAl1ixmB4vNwxyJDZiVlj5x8bm0w1i0zriPuAKi8GZw7bJ1iT5QT7EWoU3z8w5g2qnU2SiOKpOPpT4CkSuqptsOKctmEWfw_5J4tMp7SnQs7ddIqm0ZLqpuLIEbpiACQKlo8kJQReABETyOfTtbBTU5X8PkHpBT-W7DFP8Sf5quqVowC1JLHAGaoSP95AGG_qcSZ9KSramyE1a32ADTc3lDgrABVqsi0us5ebz7njcBDwtRHA9pU-aJlYNtuodUrnoD8XSMz0Ao9LQ%2C%2C&do-waremd5=rHQqAqFj1-F3lTmzklY8lQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "180 нм",
        "Частота процессора": "500 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 X2 3600+ Windsor AM2, 2 x 2000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/7722094/img_id6197553814836096248.jpeg/200x200",
      "price": "356 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-x2-3600-windsor-am2-2-x-2000-mgts/955397?nid=26912730&show-uid=16989587296732004365216108&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101844296795&cpc=Kl0WAiXTnAn8M9F2sEqAj802oldyLuEMLSLINFJGcX_RP5vajWlmv2AcH286PPJ7t4h1E0HcLC2-S_55ojx1k4KtTym_E21FFzdXjNXF809_Q4fXm_Ehl-DeotO77tyK9ingQ8hDUnusRMD8VFzYsJOt1oew4uX3sRZbWpqpKD6Sa-j-BqWhA2mZ-vBQWFtYsf_sOZb_PyE%2C&do-waremd5=AcsQL_uIoWOMDLhsNjAyWw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2000 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 X2 4000+ AM2, 2 x 2100 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4377400/img_id1667722467761490124.jpeg/200x200",
      "price": "495 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-x2-4000-am2-2-x-2100-mgts/1015913?nid=26912730&show-uid=16989587296732004365216109&context=search&uniqueId=45086034&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101882883123&cpc=Kl0WAiXTnAl5lBtSx5zMyn-af25n4HLxUrXBwITu3To494cadzuquVi4dH3eTQarDyYqPZg5Q65UCApCAvqF8wFOfhjuwL2aUfg3a6Mjk9XtJvRVuJDmPAOGic9IivOnFnFRGbcWiVhoF1OVpJ5J9A2UhAOaGl5VeyuTSBVX_FwztblS-svrwtujQlZQ1dQUHeBC7g6pqw8%2C&do-waremd5=6OmmMsIubvBii1Q3XfbKhQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2100 МГц"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2643 Sandy Bridge-EP LGA2011, 4 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1865271/img_id3636619390731019855.jpeg/200x200",
      "price": "495 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2643-sandy-bridge-ep-lga2011-4-x-3300-mgts/7896463?nid=26912730&show-uid=16989587296732004365216110&context=search&uniqueId=48222200&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101759813216&cpc=Kl0WAiXTnAmHFpjgNjsIFNmWIyYVxTfOBsTUF1sJdpfISCiyfA-9hqvZgvfBAGC5E-NSoE8VHbUfKl5I6HHzjWEyjO5RPTgkKGNe-M8OU-x_IUuxw9v8QoGYr0WeM1ihh01M8y4rFJe_kQB0IkHj7tQDRDimJL2_fy63cfDc00k5f6K9ym3zEkXck5y3g8iR2X-Q3mqDOTGDN_8yTA0QUX4qdlnkultW5yHtVxUmxLjsT4srYEI2oHGvJmaM0cEy2CwhQdLNcQY%2C&do-waremd5=zn4RR3l-Ri-nK60zGKrhHg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2667 Sandy Bridge-EP LGA2011-3, 6 x 2900 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4428744/img_id472468160651601284.jpeg/200x200",
      "price": "1 485 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2667-sandy-bridge-ep-lga2011-3-6-x-2900-mgts/7896466?nid=26912730&show-uid=16989587296732004365216111&context=search&uniqueId=48222200&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101507556112&cpc=Kl0WAiXTnAncTnpm01ANspZX4nElLRat-tTOy069jTVfuyAIynJZM9bTM2yptgjdOVoDHO6tEDYcLG-830KgPVBNEYAVulrn3g-wEMgIL0DEcrMDkePJ4_-Vy-xsK96qlWqLVd7eGlTkh0aKjQSySkjD4KW83IKeDmGt64NHmeHYPirmkifeIgX4QIr2dG6s9Vdufyzz4l7Bf-0YEBKfR_aoaImV235oiyvXQjYeqI8IEJSPh6ANKtYM7RLuJLjvD8o5AA5TdJ8%2C&do-waremd5=c4aVmcoWNLxWRQ6drNscIA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR3",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Core i5-2450M FCBGA, 2 x 2500 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4615030/img_id2377198540997008969.png/200x200",
      "price": "1 289 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-2450m-fcbga-2-x-2500-mgts/1862620815?nid=26912730&show-uid=16989587296732004365216112&context=search&uniqueId=681499&sku=102020880932&cpc=Kl0WAiXTnAlCdAXpgjedMQBS5Duowm0pyrvotUtGxZLVNEDM7GS4kcb2YgG7IsiMKUaFhYXm9OwqMbo-TXFa4acd9oXUeG1FByrKiWbYpxzyzz44WkZzhizACMo_bfzedLd_lV5uZE9rHRawDiujpu-eU3EJ0zH4hCZmTXxNYdTRRV1MS_3Qg4Lam3TtArC8UnqVrwWNW5w%2C&do-waremd5=VUcbrS2AVc9DzOGxb9Byfw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FCBGA",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2667 v4 LGA2011-3, 8 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4114383/img_id6892533431960062158.jpeg/200x200",
      "price": "6 732 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2667-v4-lga2011-3-8-x-3200-mgts/13908517?nid=26912730&show-uid=16989587296732004365216113&context=search&uniqueId=87489967&sku=101151889728&cpc=Kl0WAiXTnAlIAEf-X_s6ge8xWjUOpwgTSGREicbFXZFDVK5saN88-NgfmYZh3BqiqlfbK6BZ0jH5T06CWbYeht-vn0oR85fvoTRnqJ7b6LK2FJma3m7nQxxItzJQdzePooVl9Cis8QNsjTLGVwDXHBas8Mk3sd8vAHqtBCChCeeZFExVDcEU6JTk0qYRZ4TOo7X0BqjERn8%2C&do-waremd5=DlPbVOmhUHV5i8c3dVAjdw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011-3",
        "Тип памяти": "DDR4",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Celeron G1840 LGA1150, 2 x 2800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4346078/img_id609310981889890071.jpeg/200x200",
      "price": "485 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-celeron-g1840-lga1150-2-x-2800-mgts/10816296?nid=26912730&show-uid=16989587296732004365216114&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=100404162981&cpc=Kl0WAiXTnAnkzgU-LscbxY_ssSDnz7HDBFFE26qoFs3_j34nbf26yFOzILBYHUVgs2dwwDCSVDSN-DpnJKTCP4XuPBOr98v-BmVSYWzFz2Xgd0d42nIQXhVk0DpUvc6GmpsEo2Ux-BScxBV4xm1TBSKiMZBh0dQSKneZSWSGbq591QA0X0K-0fQxVK6oU2UfUqlQ4OeEyhs%2C&do-waremd5=CvxDeLuBTpxeUajumZtzLA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Тип памяти": "DDR3, DDR3L",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2690V2 Ivy Bridge-EP LGA2011, 10 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4407580/img_id5161010576976159461.jpeg/200x200",
      "price": "3 069 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2690v2-ivy-bridge-ep-lga2011-10-x-3000-mgts/10572763?nid=26912730&show-uid=16989587296732004365216115&context=search&uniqueId=48222200&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101759898813&cpc=Kl0WAiXTnAngvVVYnL4e3pKTIvpVNYCg17bcketI5IOMazTRx8uE4GQUAeaUHDBLnEOSw-j2Y-h-lNUlk2L6R5x15Z4edYYoBGRSg_yTxls_Wl26-P7X96_sJfuYahtcrscyfL2TcEWLsKw9MjQxPwqUYCQGaMQ8QofojB0GrdRjZnS2ax4kDUvtEGwOfi-48h1BcpfhbbJXedFQVijG8rJhoEmgphjBtZ7itB0ATfX-92Q0dIBbG1EKV3OBT0_gQ29jaZaU_rA%2C&do-waremd5=YsfIEPCKayUprVwI7NT0Xw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Тип памяти": "DDR3",
        "Количество ядер": "10 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Core i5-3550 Ivy Bridge LGA1155, 4 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1574389/img_id2916378952963027219/200x200",
      "price": "2 970 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-3550-ivy-bridge-lga1155-4-x-3300-mgts/7959566?nid=26912730&show-uid=16989587296732004365216116&context=search&uniqueId=59837019&sku=100405226166&cpc=Kl0WAiXTnAlvnRgXmhQHl58dwqLBV6h-8AfFlO4jmGTC5EWOZ3ErSh3_9tubSd8EE1WChJCPdtNY7btwjw7vBOooLpWikvpYt-q7GvHD1AovLL3srwjnikDwd7_1n5oXnaOz5KnaAZotL_Otu_JTAOtC60R14ebE78e14GjDyUZSlnGOBMjeWWwV6ECD1wAEo_ZdFV_A9Qc%2C&do-waremd5=zlzoGP_zjxeh4KB0G2XELA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium 4 524 Prescott LGA775, 1 x 3067 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/7754338/img_id7472470736384228001.png/200x200",
      "price": "416 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-4-524-prescott-lga775-1-x-3067-mgts/951602?nid=26912730&show-uid=16989587296732004365216117&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101821151930&cpc=Kl0WAiXTnAlqRHCd24pw6ckz017Jfq-YdU7WM1RR87fEo2PQm4-31beLSeWIrOscXXqCsb1JUo61Q_DQrIjk4GpLm5aXnRWwYPZ2GYJzr0PNZQGjFxrxkVh54M75G7FmrLNLuGqOKKbbi-QEoutArSdgOWbF1OCc0RtnG6ao3DsaKr600GFLew-2Z5SEJJW-8xbyJKJDnig%2C&do-waremd5=Y3ceul_qm2rKvynrmFTuVA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "3067 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E8400 LGA775, 2 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1620389/img_id6610354935049356001/200x200",
      "price": "1 274 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e8400-lga775-2-x-3000-mgts/1584125?nid=26912730&show-uid=16989587296732004365216118&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=100405225848&cpc=Kl0WAiXTnAmPbHzFGmm0EMqd490ex9DWHuTaW3Jql2v63yePfiQylBhnSj3QI_PTWGDyF1Rfh0rl7Hl4o_VbfQUNtYozI6HXrRLLL1x-_80kccuKMaem2NCKsFwVcQAaoMBty0_73TvjOYRaYH11RXaIiPLeqaJPYzMvTx59D45ioQ7cMOdxl515DdpCS3_TBZG404b0kE0%2C&do-waremd5=Qemc4mPJ3ZJk0LtiRVLNLA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 X2 6000+ Windsor AM2, 2 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5221946/img_id990623889835591158.jpeg/200x200",
      "price": "1 918 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-x2-6000-windsor-am2-2-x-3000-mgts/1015912?nid=26912730&show-uid=16989587296732004365216119&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101876566451&cpc=Kl0WAiXTnAlEyuh8wAeaY2g1Y27arZEOBlEWsE7mqPnUYPBlOEYjZXfHRyPaeJL943ztPOXWgpTywxBMp_P1SCTHXsLIkb4alG91pTtHXaPYJFM_NBEHA6FxKo_kx650d1NKmRt28yfme5MabkKU3mEAq5Fr1dkIaEEVb-N3YcWH33sIR49WPm2A1NsWIgVzM1CXlU-OfbM%2C&do-waremd5=KT6AW5TXI9_XFitq6U3v8Q&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Тип памяти": "DDR2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм"
      }
    },
    {
      "name": "Процессор AMD Phenom II X4 Propus 850 AM3, 4 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1525215/img_id3417186249812263374.jpeg/200x200",
      "price": "1 426 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x4-propus-850-am3-4-x-3300-mgts/7343013?nid=26912730&show-uid=16989587296732004365216120&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101884456837&cpc=Kl0WAiXTnAms6IhsTT2tEchl8aa2IlnV_Q6uUgX3K670AKHWaayKexiuWOTaLEtdZWgwiolKg3I57IycIZ59xWc6WBNYfJ4dWI5H_nmdkKJjmiJsm2oa-42A0U9ZgcQwLl9PAq430HteBhdtxcP0Av513G_SuM3VtEVH3T-jkonF2F_PMgoxk5AB4XTBnrldmC9Gmg429Kg%2C&do-waremd5=P9yW5SwMOKX-vz135xzuyA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3300 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i5-9600KF LGA1151 v2, 6 x 3700 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5207288/img_id8744799766151113098.jpeg/200x200",
      "price": "14 444 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-9600kf-lga1151-v2-6-x-3700-mgts/623103036?nid=26912730&show-uid=16989587296732004365216121&context=search&uniqueId=49563636&sku=100820146790&cpc=Kl0WAiXTnAnZwSPphBkIM9CcaidiUQg-ePnnDmkBg4qyCcAHQtili20rj5EP5XcMW9MKLEcdbXK8LqtlSiCvs9BQWkqH-K-wjnDETXFPu0Gk9xdKOdNceiYanl6s0m3Y1bV6U6Xk2F3i45hVb7Ar56Vo1JZDbrkTEcYleIVKbE_iC8Dtkkgv7VotRvwJTQ9q2BpA6ZcOHlA%2C&do-waremd5=jflCTMtppjU0b335bt0Uuw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1151 v2",
        "Тип памяти": "DDR4",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Core i7-4790 LGA1150, 4 x 3600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4353087/img_id9110488387717324029.jpeg/200x200",
      "price": "6 881 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i7-4790-lga1150-4-x-3600-mgts/10820113?nid=26912730&show-uid=16989587296732004365216122&context=search&uniqueId=50170705&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405234210&cpc=Kl0WAiXTnAkTNyzAcsjgGUm5DdnjjyhAr69dBXQrTMPtL8WLccNw0qdFDFSHbx2DmiPtR8DwO__1x0t9lCPO7GXMFujau6YO5v6iyLgTrj1Yc8k7o8jwgr_aN8gno3CaujE9CgLCAoKLSzE27b4Tk64PeaaJQDVVSEgaO9yYqPiNrLXFiWUaAwd6FzXTH9ElTlPkiUqzsN31SR3VJRyCkRLygi8AkPJqmEwSN-4sL_QGsI7Br_12mjsOFF0V1A-Im3LUCXwaQ4ZEq5jCdobhcg%2C%2C&do-waremd5=ECBfvvMyCgDcKkN-9alELQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Тип памяти": "DDR3, DDR3L",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon Gold 6258R LGA3647, 28 x 2700 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4033296/img_id6475515481536858172.jpeg/200x200",
      "price": "154 789 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-gold-6258r-lga3647-28-x-2700-mgts/734061034?nid=26912730&show-uid=16989587327691109976316145&context=search&uniqueId=924574&sku=101087197750&cpc=Nl9T7xtLPJ0DnMbcIsSCScNXjb3P0G7MQirO6jlTueVn1IyugvxPVXNKxoohpebyTm0veV5KpxgAN1SktUt4q2cqnNDj4HkEu91DA1ddksMO22wLbMCtXM6UJySHkTH0shUuS-EA2E3m6ewPcKkewhM0Qoc5x9r3IHEntH2cDmj4KLc0Avj6Gfs9hCbuZdxM6ewJxAn-iC9-AD-BlyJ17Bg6_ieBtlS7x71xOOz4pPtRMkegZzqY1AInE-4wCTO5cyKxoPuOY-8zzIl66QJ_WA%2C%2C&do-waremd5=D0L3gvTOIJPs5Au3JDGKEA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA3647",
        "Тип памяти": "DDR4",
        "Количество ядер": "28 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium G2130 LGA1155, 2 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5319329/img_id4049688183679325330.jpeg/200x200",
      "price": "446 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-g2130-lga1155-2-x-3200-mgts/8525969?nid=26912730&show-uid=16989587327691109976316146&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=101510479356&cpc=Nl9T7xtLPJ3FfHIckSelJm1ojp9EKr2RYLeYCkZ0eG7VQgnPiJMGnoKogrHyQ3QlIemgXg6_Q2HDPCK1lhD-CDEzLIFirE2ldNbobJsERgHEy_MR4bBC04kOE23eIyrvrdLNrZ2DWDqjpHykWK9UXihu4EVxR4ApH1obt_iQ9rxvwQu8lx2U-Bz7NcyAlgDN3BeNU4BnAbY%2C&do-waremd5=bLnZe_sTtDOCSrqaZiKflw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium G620 LGA1155, 2 x 2600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/200316/img_id7120109323691950991/200x200",
      "price": "376 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-g620-lga1155-2-x-2600-mgts/7310135?nid=26912730&show-uid=16989587327691109976316147&context=search&uniqueId=59333164&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101360228188&cpc=Nl9T7xtLPJ0jlRidALzlGnRFcnL7383WW_8Gio37Kl3rur0SJMyGs5BDjLAL29z9U_EFN-S7s2AWVQezx0hQGgwqhDEPXMC8MUSqmaEPXsFEGm60-rTYsE8wucPObO1UuSresQqaMZ_24m9GAth-ElDhPdPGQMTbD8tvuJ6BfLimd0HYjT4V-PhnGRumDU51DP_XtHifNZGGcrTFg4ncGfBUfLG5asahnnnONzjQJvEEc5ToJizpqQcurjGrmPr8Lus2ZkavkI8%2C&do-waremd5=U9v8dCCUWem5c-uYLQc6Mg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2620 v3",
      "img": "https://avatars.mds.yandex.net/get-mpic/1924580/img_id1147186779072653139.jpeg/200x200",
      "price": "644 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2620-v3/1854826206?nid=26912730&show-uid=16989587327691109976316148&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=102010985078&cpc=Nl9T7xtLPJ1tZhy21ZJNMG9AHdKNC1AmiEJIQgwwaG0e-WgWwGTCltw_utmyzYkPW0EBchZ4e2vbpZQ4l67cNjGTgAIgKsJ-Hm3L5KHa-cdVWrdxLyiS74-PxAXCAGNaV-VHkCYVhd28gGt5ceEgfnBwiS4XBh_hlrUEbtNeW8cwQcSZgXbVg05pz5LZgGO1xInXaNIkUgE%2C&do-waremd5=aFFfTESefPQkq5FlW5SJTQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Тип памяти": "DDR4",
        "Назначение процессора": "рабочая станция, игровой, настольный ПК, сервер"
      }
    },
    {
      "name": "Процессор AMD Phenom II X4 Propus 840 AM3, 4 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1522540/img_id5085914686219192191/200x200",
      "price": "2 474 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x4-propus-840-am3-4-x-3200-mgts/7082109?nid=26912730&show-uid=16989587327691109976316149&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101831806750&cpc=Nl9T7xtLPJ0Ud990ZoeRM6aq23xY5zDVVwsark7b_HKDzr0kXds_MykjF9zBHJ7xkwGT_21ZTHBGEkSfJ7Rsuba4Vox_IpdPGMG7I8RHH6Rzj14CZkpWSvrAI1b_sXWVhiLI66V-GqrC5m4QyhNDXVdNSkIsiISPM386hOl1fr8D-nN2Zc7Yl5eXYurKoxi-E5QkXajchcLYdXuq1XeNGBUeV1NZl3NZUsucee_avI9eeYzoZ-S3zqT-e-TnxcXlBfLmmBdExvw%2C&do-waremd5=8YHLhQr1mbHUreanF8Xf9Q&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD Phenom II X4 Deneb 965 AM3, 4 x 3400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5231953/img_id60617046060306892.jpeg/200x200",
      "price": "2 771 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x4-deneb-965-am3-4-x-3400-mgts/4897068?nid=26912730&show-uid=16989587327691109976316150&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101761093665&cpc=Nl9T7xtLPJ2v0uaD0UtTS8rLTFCRowyreIs1Om7UTIkxU1KiVA5IlQBlZvOSOTMbyX6YYrwrjUW9MvA_xinTpjZ_zfVpY9SLlkKep-m2CrgVR1SSbe4Mpjf92rcrr7Lb_Q1NFgSm7trpRbdlQvd5lDnmWRGPodRDVKOIYhkOAV6QIuLBNZU3FJeEZzSyawGcVZTBgDp9JZ6BDFEkoqvvE--uh0DCbncRiqqTl16skNyERujCvf6qoEaogvFD8dHZB6Ta24dsrYQ%2C&do-waremd5=h3tDZXEZFGY9e6S95FL8-w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3L",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Б/У Процессор Intel Core 2 Quad Q9650 (3 ГГц, LGA 775, 12 Мб, 4 ядра)",
      "img": "https://avatars.mds.yandex.net/get-mpic/3927667/img_id7559682467816823608.jpeg/200x200",
      "price": "4 138 ₽",
      "link": "https://market.yandex.ru/product--intel/1875345009?nid=26912730&show-uid=16989587327691109976316151&context=search&uniqueId=20541181&sku=102050725898&cpc=Nl9T7xtLPJ0UwFS8OeNCoDowrdlv6qlR_ONLxQfSONnadJh8NOLaTKK95PnROsQIQH8VzskXNN73MSevUX7erEzbdmTVZvn9cuZcbsqWv78sM6WpaNt9I45z38UpKIDqd5RsoefVLLHnUKC3olGr2tEo4lGkHIe-ifUmfDFqsIiZXrh4hFxWUvC1fK0BSgZzx4_FHge27Nf5pVx1Cwzfijz11Q4hSxxAbWHtwMcsUM6VBISMP7MdznXj9eCjgtLLP7Qu5I2ZrPlPwIipDVCaHg%2C%2C&do-waremd5=VdliNL3jLFJ7EoIIMjHiBw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Тип памяти": "DDR2.DDR3",
        "Количество ядер": "4 шт.",
        "Частота процессора": "3000 МГц"
      }
    },
    {
      "name": "Процессор Intel Pentium 4 2400MHz Prescott S478, 1 x 2400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1220464/img_id1760079839429723062.jpeg/200x200",
      "price": "1 274 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-4-2400mhz-prescott-s478-1-x-2400-mgts/658341?nid=26912730&show-uid=16989587327691109976316152&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884461927&cpc=Nl9T7xtLPJ1PWPozNuSjT7JYmXtkiJNpgAe1g6nOYAZYfkzfYvSwJ0kKOa5M9cm7sqcb5nyeXfBRY6e4lHrJPEGuB4zS8QsyR4C61rVwoQxQ7xev0At7RUKC82X-YMoAVdvIvH8mS8FrGcYi10Un66dSV8C5m5U3WkUqy3OrmS7MzauA8kLrW2l-AuoN4-FgyCR7GePU5t8%2C&do-waremd5=4gvlfISep8B94ACUW_4aQw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S478",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2400 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon II X2 255 AM3, 2 x 3100 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/195452/img_id3019273575519051019/200x200",
      "price": "594 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x2-255-am3-2-x-3100-mgts/4953669?nid=26912730&show-uid=16989587327691109976316153&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405238257&cpc=Nl9T7xtLPJ1HX5QQ8_tJ4jr8SAdIyf0hPmEVzcuBqYaIEP_WDWilR-WoJpoWZCz9-cJwEy0fHCbUaNoktKcvsfn0TvYFfxMIRG6whSqyoEFGE4IzwQEpwa5eJ2GNvosnkhSLowbJ5J8dYcZWAIl3aDgAYNLVhz9eWIM4BHkRVwJBpS5cBTZcX-7ABuMJwCcJsziRXs_xv4M%2C&do-waremd5=K327e-lHZKxm063Td19RxQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD A6-6400K Richland FM2, 2 x 3900 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/195452/img_id5269127285743304157/200x200",
      "price": "1 583 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-a6-6400k-richland-fm2-2-x-3900-mgts/10387651?nid=26912730&show-uid=16989587327691109976316154&context=search&uniqueId=3844430&sku=101351852007&cpc=Nl9T7xtLPJ0tBdosNAw9rbUkCD6OgpONcfQGkApzQPW9nEKCEm_M19FZfGtAEHaSzeToWCMKFbZqvOx4OOOjpWa_MxWC71p7RGWxRfCjnW5uu_8R_t2p6W8pIvEW8hYADbNDIy-w9Yf3e2l-G73E_5HusnvwAlz3JlB9GiGq_geixEASW0Ch_VihXOUHlOod_exbAhqSQbc%2C&do-waremd5=hBX87XvmvnLr1517uWxFZw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "3900 МГц"
      }
    },
    {
      "name": "Процессор AMD FX-8120 Zambezi AM3+, 8 x 3100 МГц, BOX",
      "img": "https://avatars.mds.yandex.net/get-mpic/4409630/img_id4627888310134365928.jpeg/200x200",
      "price": "3 861 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-8120-zambezi-am3-8-x-3100-mgts/1777928479?nid=26912730&show-uid=16989587327691109976316155&context=search&uniqueId=49563636&sku=7752391&cpc=Nl9T7xtLPJ3nTaiZL6MDQvZtBmCcc354bJtIe1q3TaNfVPUm_pC8Avosy_ci9B2ym3cFnmC0Gf4FOGjA9PhwR0TQTEcLHzyff0SZVkh7mJd80G_SRxoVv0zxxcXktG-kKGeF2mI-3YD16Sodu1hahvnefXGL_5YYZEGtfF33dHXDg9ka7L-reO2m6QRLPv9-wsm7PPdnsAE%2C&do-waremd5=a6HtJpUhpxJ-teuKO_Fr1A&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "BOX",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X4 650 Propus AM3, 4 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5332815/img_id1337830720427336476.jpeg/200x200",
      "price": "2 561 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x4-650-propus-am3-4-x-3200-mgts/7342983?nid=26912730&show-uid=16989587327691109976316156&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884456889&cpc=Nl9T7xtLPJ0UMX9RMveCWllNPe2Sydie-00M0y5dDC24y3r_N-Q9wD8F4PVi-NG0jjZlVoxD4ppz6BZmNLkppKaxPXDz1Cp2390xx1Hn717qwzER_Pv4Gs-KHe0hHnHHPuGi1f2vuycvdAWir-VoQMqn3jR-mcVWeOYgB-LGIufQs7SeKZR7DKXFtf6gONF3VYO5TjSiMv4%2C&do-waremd5=7ZDKNSXmrnL-g1KzoNdAOw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium 3 600 MHz S370, 1 x 600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1101307/img_id9103683895176050626.jpeg/200x200",
      "price": "772 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-3-600-mhz-s370-1-x-600-mgts/1794060104?nid=26912730&show-uid=16989587327691109976316157&context=search&uniqueId=50170705&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101884461915&cpc=Nl9T7xtLPJ3Aoza5L-ZuQUMpAkSAoPcTpVOqwxJhh-bhr6bZMpibHSd9j5gHAugHHNFU3VbSesRmWPSMQJ87jB-uxEtRUV4_xAKo7F_2_ojJZWZCPrBp2-hi2O8A2HG6yUIx9cwgW0NEpenwZXWC3PxeqR9PS_xY2U1lKpkfB-3sQOAR4F5feRmcvC9YzqhIX18z8LCSadFbB6K7Z6J5zoycnh66QFTqQYQ9eb3leafB9lEj-dh9gyQ_1tktxBEs_TfPBmrb3kky9fFfQYAQ0w%2C%2C&do-waremd5=BIE0bnbqdojpmoUMXfcibw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S370",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "180 нм",
        "Частота процессора": "600 МГц"
      }
    },
    {
      "name": "Intel Core 2 Quad Q8300 Yorkfield 4 x 2500MHz, LGA775, L2 4096Kb, 1333MHz OEM процессор без кулера в комплекте",
      "img": "https://avatars.mds.yandex.net/get-mpic/2002045/img_id2839859541436236666.jpeg/200x200",
      "price": "1 240 ₽",
      "link": "https://market.yandex.ru/product--intel-core-2-quad-q8300-yorkfield-4-x-2500mhz-lga775-l2-4096kb-1333mhz-oem-protsessor-bez-kulera-v-komplekte/1875435964?nid=26912730&show-uid=16989587327691109976316158&context=search&uniqueId=39843574&sku=102051010049&cpc=Nl9T7xtLPJ3P5Eq2_ulEwLoemPHZYPxQAyqVHdqZk0EAynbERbY-TgcEbYTRNB_TcxDHwp4CkSiA--QsqPEtQ6HwO6h89Jr0kQuSjOTFB6XWPr7djCskLSit8nHD-k-mnxpV_YngX8mqkHUnBsi7manvP_ioJx8zOHFHJyAKGeIQL3R6t295gfFCC7_Da-tcTvYYhw3tCpA%2C&do-waremd5=zG8GQGZsi-hUVlQYXyNAiQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Тип памяти": "DDR3",
        "Назначение процессора": "Процессор"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2630 v3 OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5238263/img_id8876338379123432254.jpeg/200x200",
      "price": "881 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2630-v3-oem/1431927281?nid=26912730&show-uid=16989587327691109976316159&context=search&uniqueId=2285460&sku=101439767715&cpc=Nl9T7xtLPJ0L9I5rk8HU0RrwaJwYLQTUC9pgNaHfMDFVOuPG3PNI7wuWjaUNTZlyHiEIw0Pzj1h9iB86Emq2owerhqJhUDPFxEwsE7BQX-jDGccmqaHN_zgK9rI9tdvJM3BZSxkDklAdnL6G92AnLYW6fHFE3HH2vv3MxXpmoK6FwNAFyeouSSOSJHI_Y993NtEXWUUcDfw%2C&do-waremd5=V0Nz2r6oeY2kW_BhzhNAfQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Тип памяти": "DDR4",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Core i3-4340 Haswell LGA1150, 2 x 3600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id4216713968875000896/200x200",
      "price": "1 663 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-4340-haswell-lga1150-2-x-3600-mgts/10482931?nid=26912730&show-uid=16989587327691109976316160&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101867438731&cpc=Nl9T7xtLPJ3XRuEHVBvqjVboTBSf-8lTq78fEgrdREp7PwTFSHm6QlUGMmCLvc0yktnxq7Ril-8UTszR5jVPTrFUfJLgXcpOWl2G1tsX5RmbYImmaj15tVXECauJXRnhGP-pWT3HLKpjBal9vOy7S0U6ev4piQ3RqsPTJNv26yiy3OuYhRygDOqUne5PhXkP_9amEtkg0NU%2C&do-waremd5=wOlrvo6pke3HEEJx74sbkg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм",
        "Частота процессора": "3600 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E7300 Wolfdale LGA775, 2 x 2667 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/931379/img_id2058859121815197077.jpeg/200x200",
      "price": "401 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e7300-wolfdale-lga775-2-x-2667-mgts/2486118?nid=26912730&show-uid=16989587327691109976316161&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101507555841&cpc=Nl9T7xtLPJ0b3pHc99FyUC4i9InTqgCTA6DgL4d2jkh66Wk0LMNHR1tp3JUI5R6COQW4FnXI8ZvRweyoVBk4Ql3xHorKEHLBwxI5YVCP43SAPrOhO1AccJp5ZE_0bqVbVTUWdaQWoBLqFmU7vakM00s5K_G0RsyeUko_G7uMxU2Za_nwxCiBkdc38IOufrWQ6pSgrLZUOWs%2C&do-waremd5=Y7HCDJv0Rn8LYmQiFRkjEA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2667 МГц"
      }
    },
    {
      "name": "Процессор Intel Xeon Gold 6258R LGA3647, 28 x 2700 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4033296/img_id6475515481536858172.jpeg/200x200",
      "price": "154 789 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-gold-6258r-lga3647-28-x-2700-mgts/734061034?nid=26912730&show-uid=16989587327691109976316145&context=search&uniqueId=924574&sku=101087197750&cpc=Nl9T7xtLPJ0DnMbcIsSCScNXjb3P0G7MQirO6jlTueVn1IyugvxPVXNKxoohpebyTm0veV5KpxgAN1SktUt4q2cqnNDj4HkEu91DA1ddksMO22wLbMCtXM6UJySHkTH0shUuS-EA2E3m6ewPcKkewhM0Qoc5x9r3IHEntH2cDmj4KLc0Avj6Gfs9hCbuZdxM6ewJxAn-iC9-AD-BlyJ17Bg6_ieBtlS7x71xOOz4pPtRMkegZzqY1AInE-4wCTO5cyKxoPuOY-8zzIl66QJ_WA%2C%2C&do-waremd5=D0L3gvTOIJPs5Au3JDGKEA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA3647",
        "Тип памяти": "DDR4",
        "Количество ядер": "28 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium G2130 LGA1155, 2 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5319329/img_id4049688183679325330.jpeg/200x200",
      "price": "446 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-g2130-lga1155-2-x-3200-mgts/8525969?nid=26912730&show-uid=16989587327691109976316146&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=101510479356&cpc=Nl9T7xtLPJ3FfHIckSelJm1ojp9EKr2RYLeYCkZ0eG7VQgnPiJMGnoKogrHyQ3QlIemgXg6_Q2HDPCK1lhD-CDEzLIFirE2ldNbobJsERgHEy_MR4bBC04kOE23eIyrvrdLNrZ2DWDqjpHykWK9UXihu4EVxR4ApH1obt_iQ9rxvwQu8lx2U-Bz7NcyAlgDN3BeNU4BnAbY%2C&do-waremd5=bLnZe_sTtDOCSrqaZiKflw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium G620 LGA1155, 2 x 2600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/200316/img_id7120109323691950991/200x200",
      "price": "376 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-g620-lga1155-2-x-2600-mgts/7310135?nid=26912730&show-uid=16989587327691109976316147&context=search&uniqueId=59333164&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101360228188&cpc=Nl9T7xtLPJ0jlRidALzlGnRFcnL7383WW_8Gio37Kl3rur0SJMyGs5BDjLAL29z9U_EFN-S7s2AWVQezx0hQGgwqhDEPXMC8MUSqmaEPXsFEGm60-rTYsE8wucPObO1UuSresQqaMZ_24m9GAth-ElDhPdPGQMTbD8tvuJ6BfLimd0HYjT4V-PhnGRumDU51DP_XtHifNZGGcrTFg4ncGfBUfLG5asahnnnONzjQJvEEc5ToJizpqQcurjGrmPr8Lus2ZkavkI8%2C&do-waremd5=U9v8dCCUWem5c-uYLQc6Mg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2620 v3",
      "img": "https://avatars.mds.yandex.net/get-mpic/1924580/img_id1147186779072653139.jpeg/200x200",
      "price": "644 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2620-v3/1854826206?nid=26912730&show-uid=16989587327691109976316148&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=102010985078&cpc=Nl9T7xtLPJ1tZhy21ZJNMG9AHdKNC1AmiEJIQgwwaG0e-WgWwGTCltw_utmyzYkPW0EBchZ4e2vbpZQ4l67cNjGTgAIgKsJ-Hm3L5KHa-cdVWrdxLyiS74-PxAXCAGNaV-VHkCYVhd28gGt5ceEgfnBwiS4XBh_hlrUEbtNeW8cwQcSZgXbVg05pz5LZgGO1xInXaNIkUgE%2C&do-waremd5=aFFfTESefPQkq5FlW5SJTQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Тип памяти": "DDR4",
        "Назначение процессора": "рабочая станция, игровой, настольный ПК, сервер"
      }
    },
    {
      "name": "Процессор AMD Phenom II X4 Propus 840 AM3, 4 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1522540/img_id5085914686219192191/200x200",
      "price": "2 474 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x4-propus-840-am3-4-x-3200-mgts/7082109?nid=26912730&show-uid=16989587327691109976316149&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101831806750&cpc=Nl9T7xtLPJ0Ud990ZoeRM6aq23xY5zDVVwsark7b_HKDzr0kXds_MykjF9zBHJ7xkwGT_21ZTHBGEkSfJ7Rsuba4Vox_IpdPGMG7I8RHH6Rzj14CZkpWSvrAI1b_sXWVhiLI66V-GqrC5m4QyhNDXVdNSkIsiISPM386hOl1fr8D-nN2Zc7Yl5eXYurKoxi-E5QkXajchcLYdXuq1XeNGBUeV1NZl3NZUsucee_avI9eeYzoZ-S3zqT-e-TnxcXlBfLmmBdExvw%2C&do-waremd5=8YHLhQr1mbHUreanF8Xf9Q&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD Phenom II X4 Deneb 965 AM3, 4 x 3400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5231953/img_id60617046060306892.jpeg/200x200",
      "price": "2 771 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x4-deneb-965-am3-4-x-3400-mgts/4897068?nid=26912730&show-uid=16989587327691109976316150&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101761093665&cpc=Nl9T7xtLPJ2v0uaD0UtTS8rLTFCRowyreIs1Om7UTIkxU1KiVA5IlQBlZvOSOTMbyX6YYrwrjUW9MvA_xinTpjZ_zfVpY9SLlkKep-m2CrgVR1SSbe4Mpjf92rcrr7Lb_Q1NFgSm7trpRbdlQvd5lDnmWRGPodRDVKOIYhkOAV6QIuLBNZU3FJeEZzSyawGcVZTBgDp9JZ6BDFEkoqvvE--uh0DCbncRiqqTl16skNyERujCvf6qoEaogvFD8dHZB6Ta24dsrYQ%2C&do-waremd5=h3tDZXEZFGY9e6S95FL8-w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3L",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Б/У Процессор Intel Core 2 Quad Q9650 (3 ГГц, LGA 775, 12 Мб, 4 ядра)",
      "img": "https://avatars.mds.yandex.net/get-mpic/3927667/img_id7559682467816823608.jpeg/200x200",
      "price": "4 138 ₽",
      "link": "https://market.yandex.ru/product--intel/1875345009?nid=26912730&show-uid=16989587327691109976316151&context=search&uniqueId=20541181&sku=102050725898&cpc=Nl9T7xtLPJ0UwFS8OeNCoDowrdlv6qlR_ONLxQfSONnadJh8NOLaTKK95PnROsQIQH8VzskXNN73MSevUX7erEzbdmTVZvn9cuZcbsqWv78sM6WpaNt9I45z38UpKIDqd5RsoefVLLHnUKC3olGr2tEo4lGkHIe-ifUmfDFqsIiZXrh4hFxWUvC1fK0BSgZzx4_FHge27Nf5pVx1Cwzfijz11Q4hSxxAbWHtwMcsUM6VBISMP7MdznXj9eCjgtLLP7Qu5I2ZrPlPwIipDVCaHg%2C%2C&do-waremd5=VdliNL3jLFJ7EoIIMjHiBw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Тип памяти": "DDR2.DDR3",
        "Количество ядер": "4 шт.",
        "Частота процессора": "3000 МГц"
      }
    },
    {
      "name": "Процессор Intel Pentium 4 2400MHz Prescott S478, 1 x 2400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1220464/img_id1760079839429723062.jpeg/200x200",
      "price": "1 274 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-4-2400mhz-prescott-s478-1-x-2400-mgts/658341?nid=26912730&show-uid=16989587327691109976316152&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884461927&cpc=Nl9T7xtLPJ1PWPozNuSjT7JYmXtkiJNpgAe1g6nOYAZYfkzfYvSwJ0kKOa5M9cm7sqcb5nyeXfBRY6e4lHrJPEGuB4zS8QsyR4C61rVwoQxQ7xev0At7RUKC82X-YMoAVdvIvH8mS8FrGcYi10Un66dSV8C5m5U3WkUqy3OrmS7MzauA8kLrW2l-AuoN4-FgyCR7GePU5t8%2C&do-waremd5=4gvlfISep8B94ACUW_4aQw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S478",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2400 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon II X2 255 AM3, 2 x 3100 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/195452/img_id3019273575519051019/200x200",
      "price": "594 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x2-255-am3-2-x-3100-mgts/4953669?nid=26912730&show-uid=16989587327691109976316153&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405238257&cpc=Nl9T7xtLPJ1HX5QQ8_tJ4jr8SAdIyf0hPmEVzcuBqYaIEP_WDWilR-WoJpoWZCz9-cJwEy0fHCbUaNoktKcvsfn0TvYFfxMIRG6whSqyoEFGE4IzwQEpwa5eJ2GNvosnkhSLowbJ5J8dYcZWAIl3aDgAYNLVhz9eWIM4BHkRVwJBpS5cBTZcX-7ABuMJwCcJsziRXs_xv4M%2C&do-waremd5=K327e-lHZKxm063Td19RxQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD A6-6400K Richland FM2, 2 x 3900 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/195452/img_id5269127285743304157/200x200",
      "price": "1 583 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-a6-6400k-richland-fm2-2-x-3900-mgts/10387651?nid=26912730&show-uid=16989587327691109976316154&context=search&uniqueId=3844430&sku=101351852007&cpc=Nl9T7xtLPJ0tBdosNAw9rbUkCD6OgpONcfQGkApzQPW9nEKCEm_M19FZfGtAEHaSzeToWCMKFbZqvOx4OOOjpWa_MxWC71p7RGWxRfCjnW5uu_8R_t2p6W8pIvEW8hYADbNDIy-w9Yf3e2l-G73E_5HusnvwAlz3JlB9GiGq_geixEASW0Ch_VihXOUHlOod_exbAhqSQbc%2C&do-waremd5=hBX87XvmvnLr1517uWxFZw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "3900 МГц"
      }
    },
    {
      "name": "Процессор AMD FX-8120 Zambezi AM3+, 8 x 3100 МГц, BOX",
      "img": "https://avatars.mds.yandex.net/get-mpic/4409630/img_id4627888310134365928.jpeg/200x200",
      "price": "3 861 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-8120-zambezi-am3-8-x-3100-mgts/1777928479?nid=26912730&show-uid=16989587327691109976316155&context=search&uniqueId=49563636&sku=7752391&cpc=Nl9T7xtLPJ3nTaiZL6MDQvZtBmCcc354bJtIe1q3TaNfVPUm_pC8Avosy_ci9B2ym3cFnmC0Gf4FOGjA9PhwR0TQTEcLHzyff0SZVkh7mJd80G_SRxoVv0zxxcXktG-kKGeF2mI-3YD16Sodu1hahvnefXGL_5YYZEGtfF33dHXDg9ka7L-reO2m6QRLPv9-wsm7PPdnsAE%2C&do-waremd5=a6HtJpUhpxJ-teuKO_Fr1A&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "BOX",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X4 650 Propus AM3, 4 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5332815/img_id1337830720427336476.jpeg/200x200",
      "price": "2 561 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x4-650-propus-am3-4-x-3200-mgts/7342983?nid=26912730&show-uid=16989587327691109976316156&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884456889&cpc=Nl9T7xtLPJ0UMX9RMveCWllNPe2Sydie-00M0y5dDC24y3r_N-Q9wD8F4PVi-NG0jjZlVoxD4ppz6BZmNLkppKaxPXDz1Cp2390xx1Hn717qwzER_Pv4Gs-KHe0hHnHHPuGi1f2vuycvdAWir-VoQMqn3jR-mcVWeOYgB-LGIufQs7SeKZR7DKXFtf6gONF3VYO5TjSiMv4%2C&do-waremd5=7ZDKNSXmrnL-g1KzoNdAOw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium 3 600 MHz S370, 1 x 600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1101307/img_id9103683895176050626.jpeg/200x200",
      "price": "772 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-3-600-mhz-s370-1-x-600-mgts/1794060104?nid=26912730&show-uid=16989587327691109976316157&context=search&uniqueId=50170705&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101884461915&cpc=Nl9T7xtLPJ3Aoza5L-ZuQUMpAkSAoPcTpVOqwxJhh-bhr6bZMpibHSd9j5gHAugHHNFU3VbSesRmWPSMQJ87jB-uxEtRUV4_xAKo7F_2_ojJZWZCPrBp2-hi2O8A2HG6yUIx9cwgW0NEpenwZXWC3PxeqR9PS_xY2U1lKpkfB-3sQOAR4F5feRmcvC9YzqhIX18z8LCSadFbB6K7Z6J5zoycnh66QFTqQYQ9eb3leafB9lEj-dh9gyQ_1tktxBEs_TfPBmrb3kky9fFfQYAQ0w%2C%2C&do-waremd5=BIE0bnbqdojpmoUMXfcibw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S370",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "180 нм",
        "Частота процессора": "600 МГц"
      }
    },
    {
      "name": "Intel Core 2 Quad Q8300 Yorkfield 4 x 2500MHz, LGA775, L2 4096Kb, 1333MHz OEM процессор без кулера в комплекте",
      "img": "https://avatars.mds.yandex.net/get-mpic/2002045/img_id2839859541436236666.jpeg/200x200",
      "price": "1 240 ₽",
      "link": "https://market.yandex.ru/product--intel-core-2-quad-q8300-yorkfield-4-x-2500mhz-lga775-l2-4096kb-1333mhz-oem-protsessor-bez-kulera-v-komplekte/1875435964?nid=26912730&show-uid=16989587327691109976316158&context=search&uniqueId=39843574&sku=102051010049&cpc=Nl9T7xtLPJ3P5Eq2_ulEwLoemPHZYPxQAyqVHdqZk0EAynbERbY-TgcEbYTRNB_TcxDHwp4CkSiA--QsqPEtQ6HwO6h89Jr0kQuSjOTFB6XWPr7djCskLSit8nHD-k-mnxpV_YngX8mqkHUnBsi7manvP_ioJx8zOHFHJyAKGeIQL3R6t295gfFCC7_Da-tcTvYYhw3tCpA%2C&do-waremd5=zG8GQGZsi-hUVlQYXyNAiQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Тип памяти": "DDR3",
        "Назначение процессора": "Процессор"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2630 v3 OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5238263/img_id8876338379123432254.jpeg/200x200",
      "price": "881 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2630-v3-oem/1431927281?nid=26912730&show-uid=16989587327691109976316159&context=search&uniqueId=2285460&sku=101439767715&cpc=Nl9T7xtLPJ0L9I5rk8HU0RrwaJwYLQTUC9pgNaHfMDFVOuPG3PNI7wuWjaUNTZlyHiEIw0Pzj1h9iB86Emq2owerhqJhUDPFxEwsE7BQX-jDGccmqaHN_zgK9rI9tdvJM3BZSxkDklAdnL6G92AnLYW6fHFE3HH2vv3MxXpmoK6FwNAFyeouSSOSJHI_Y993NtEXWUUcDfw%2C&do-waremd5=V0Nz2r6oeY2kW_BhzhNAfQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Тип памяти": "DDR4",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Core i3-4340 Haswell LGA1150, 2 x 3600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id4216713968875000896/200x200",
      "price": "1 663 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-4340-haswell-lga1150-2-x-3600-mgts/10482931?nid=26912730&show-uid=16989587327691109976316160&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101867438731&cpc=Nl9T7xtLPJ3XRuEHVBvqjVboTBSf-8lTq78fEgrdREp7PwTFSHm6QlUGMmCLvc0yktnxq7Ril-8UTszR5jVPTrFUfJLgXcpOWl2G1tsX5RmbYImmaj15tVXECauJXRnhGP-pWT3HLKpjBal9vOy7S0U6ev4piQ3RqsPTJNv26yiy3OuYhRygDOqUne5PhXkP_9amEtkg0NU%2C&do-waremd5=wOlrvo6pke3HEEJx74sbkg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм",
        "Частота процессора": "3600 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E7300 Wolfdale LGA775, 2 x 2667 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/931379/img_id2058859121815197077.jpeg/200x200",
      "price": "401 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e7300-wolfdale-lga775-2-x-2667-mgts/2486118?nid=26912730&show-uid=16989587327691109976316161&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101507555841&cpc=Nl9T7xtLPJ0b3pHc99FyUC4i9InTqgCTA6DgL4d2jkh66Wk0LMNHR1tp3JUI5R6COQW4FnXI8ZvRweyoVBk4Ql3xHorKEHLBwxI5YVCP43SAPrOhO1AccJp5ZE_0bqVbVTUWdaQWoBLqFmU7vakM00s5K_G0RsyeUko_G7uMxU2Za_nwxCiBkdc38IOufrWQ6pSgrLZUOWs%2C&do-waremd5=Y7HCDJv0Rn8LYmQiFRkjEA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2667 МГц"
      }
    },
    {
      "name": "Процессор AMD Phenom II X4 Deneb 925 AM3, 4 x 2800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/933699/img_id119798577129171669.jpeg/200x200",
      "price": "2 561 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x4-deneb-925-am3-4-x-2800-mgts/4547936?nid=26912730&show-uid=16989587327691109976316162&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101833793888&cpc=Nl9T7xtLPJ2lHWHw2MpsmsBXzAYIvdA2c-hVuEuQDYN_YDa9yn0c3sHbZ0y_rziXu9hNT_cPisf4D6AQGiIWR8VP6BoNZ3mPLaKNBQ9mAQ7e_4brqwlLRTeCrOi7sJACifqo-kAX0vuoSr99m5lvZTGNhAdW3n06lkBCKpsQx7IDC33hTD1dl4UHkp9NLz-4Lxw3S_HnzLw%2C&do-waremd5=itv5h_l-IflLNXAKAKQVFA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-1620 Sandy Bridge-E LGA2011, 4 x 3600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4249638/img_id2419502763001339624.jpeg/200x200",
      "price": "1 089 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-1620-sandy-bridge-e-lga2011-4-x-3600-mgts/8333477?nid=26912730&show-uid=16989587327691109976316163&context=search&uniqueId=48222200&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101770916236&cpc=Nl9T7xtLPJ27zI3W-QFjpT3qU_okxwfBoKYip9VkB_lSnV2zLvJ7quEmO1_p8UsVLRc8skjOPQMrN5qjxKAKAMpi8yyXMvZp3hDIgTF7Od98L4pxvL0YXNtsWtc2m3bDCcpGntqc9novhxWk_0yV_Uo2Y5Sa5YtXsvq0u6t5_VUlPDKabobIfckvL2mVJDfu5ubdXBnsv1iQiXiCD5pe99wjNfsjZqv8UxGtPKj1IwJL8Sr48ly6SKnyr9IDws8XFrIpznJmibxXR8zt9PmcGA%2C%2C&do-waremd5=1pHVOLzvzNnKY2Fv9_BIFw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD FX-6200 Zambezi AM3+, 6 x 3800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/6434027/img_id7333592942345950664.jpeg/200x200",
      "price": "2 648 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-6200-zambezi-am3-6-x-3800-mgts/7823679?nid=26912730&show-uid=16989587327691109976316164&context=search&uniqueId=44682789&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101616993561&cpc=ZMUICA5XWNA1JJEcq1RchMSK-WQOBZDsxwAcKNs-WOa0Cd6YxWtXbZv8f_ixfatbYUNK5gSEEJYUg8gDhuD3FJ8wx614i85aHL30bOVlltliyKqB88PAim4VOPqHklMo4rVl-ciASKtGnUG9MtB2OpXAyLjxsGGep90Ed2W_fvdpfNvZCfb-CN8rJFwjxjk3WH-BgmluHQaXT_TKanCB9IDn68Z96pJmMOflbmGKPrLVqqRIuV0lY6E5LWT9V6UcbokSGpzixzb5SwlTJGC14A%2C%2C&do-waremd5=_OYEEfH0SUAAg8lJ6PWfkw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "3800 МГц"
      }
    },
    {
      "name": "Процессор Sun Microsystems UltraSparc III 1 x 750 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1673800/img_id1989481413212382637.jpeg/200x200",
      "price": "989 ₽",
      "link": "https://market.yandex.ru/product--protsessor-sun-microsystems-ultrasparc-iii-1-x-750-mgts/1805902806?nid=26912730&show-uid=16989587327691109976316165&context=search&uniqueId=34571313&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101898699476&cpc=ZMUICA5XWNA4YOhAQ6okV3zo_hDqSJptASsCwRhajMtNXdoHszP31gIqRUNeKakCdxG7RZMjvuTf82L1KdRT4ooUPKLowIvmqh-cw0QzxlUNRuAv1_d5yTkpzowcDy5jbhRVJTpP5lOd2dO5osBAfkI57qo_NsjHsTjs6oJrkKOz3tXkUhl5x7pBtzgoQnET92ZLOYuPnwM%2C&do-waremd5=NCn25SsraQB7ha0IizmduQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Количество ядер": "1 шт.",
        "Частота процессора": "750 МГц",
        "Назначение процессора": "сервер"
      }
    },
    {
      "name": "Процессор Intel Pentium 4 2400MHz Northwood S478, 1 x 2400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id4179064071747765998/200x200",
      "price": "441 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-4-2400mhz-northwood-s478-1-x-2400-mgts/658344?nid=26912730&show-uid=16989587327691109976316166&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101864352427&cpc=ZMUICA5XWND_2-uQMH_7FTgpPS_5mxli-BEeRQxk1DliePd_wVmyzjBQnPMcQ3czVl-QhFYvZcUSCxSNWoYQtjwus7aD30bdgAj9BrVvJLuAXNzzP9CBWgUii5qt1L-NJ6c4HlfNWJJggk7sNpYAfE7utI-tIHGjQ9su_aJDWtIPbL7iG2DXH5d6agLEuvzftEMciCCBIBI%2C&do-waremd5=hIajO2wW1Lgx4u2qz8hIxg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S478",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "130 нм",
        "Частота процессора": "2400 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon II X4 638 Llano FM1, 4 x 2700 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5218055/img_id5858591912124113990.jpeg/200x200",
      "price": "1 088 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x4-638-llano-fm1-4-x-2700-mgts/7867565?nid=26912730&show-uid=16989587327691109976316167&context=search&uniqueId=3844430&sku=101833802880&cpc=ZMUICA5XWNDGYOYgTRrNTz3TCBRord0p5t__w8QOHHQT8xCdgBiHqGCcf8_YoEeekhd83epLG3VDoaVPdcz-QNWVI7eWxGcBvI-ZMCYgouRbmLck-b7flKUntX4MYahlU_bc2cK78GOlpRJRh4b6kdlmumrfviShGMoJPXdCWdYzxhGB-AKExgjnXimF4vfb0QNNfKmOsu4%2C&do-waremd5=KdGvAuFAXQgCL71ZKdjMvA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM1",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "2700 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo Mobile T7500 Merom 2 x 2200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1911047/img_id2276058507794796023.png/200x200",
      "price": "960 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-mobile-t7500-merom-2-x-2200-mgts/1562826?nid=26912730&show-uid=16989587327691109976316168&context=search&uniqueId=49563636&sku=101882878414&cpc=ZMUICA5XWNCOv0_ZGdnKixSl9foJWmUnPZIuzH3SnN4eGY3UNd3JH082rALy15HBIhSZJePyjqlKfMtK8b5fjbUpM5-QreyoIzIJPcGdsWNTIkThlqnr8QKedzEE3db7Jn438W55lw7AXhs7RuLNXUawGXb4g_5SN1kop4Zg0DRpNzHouNAlY_H6V-4yvJRa_ezLJaoUpCM%2C&do-waremd5=EK2Fx4qDfw5S1dPEZ4mGPg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2200 МГц",
        "Ядро": "Merom"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E8200 Wolfdale LGA775, 2 x 2667 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4606255/img_id8646360361306285611.jpeg/200x200",
      "price": "792 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e8200-wolfdale-lga775-2-x-2667-mgts/1584126?nid=26912730&show-uid=16989587327691109976316169&context=search&uniqueId=45086034&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101735570020&cpc=ZMUICA5XWNCyBGjFefDwzw5-lWQwTjEzaZjphKiJEmGIhGCmMboDwAvxAW0posPX3aSyKzLZen1CWqugiP089wMYIRggZq7DcYqlk56SLM6tb8dVkZSyf_bwMtNwhCi9iZ8Ifirbo6cfSMctOfbOiAIZsMrBdbw_ufyXMJSSGbmbl9frFimyJQf6u12dSnuU5ZsVHA8V8KQ%2C&do-waremd5=c9UeCBy2oePIwRGmp181Ww&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Тип памяти": "DDR2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD FX-9370 Vishera AM3+, 8 x 4400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/3927509/img_id2999360428853051506.jpeg/200x200",
      "price": "9 880 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-9370-vishera-am3-8-x-4400-mgts/10453179?nid=26912730&show-uid=16989587327691109976316170&context=search&uniqueId=60900760&sku=101229481479&cpc=ZMUICA5XWNB5EVBfXA7X08piekkhXSgWe0n9ATyyr8Y6jL1wquCa2OlZF2Qkzox-2FehdvkBMBdF45Cx0vDCx1LUYBMAGwkwWNX4_3cchExXtV9zydUOAdfuiWs4gDX-8R2Y0Z_9bSVme-b5MY8PQ4l8druT5yCHdavCghoZeS7h4GX1TLN-GygxVNe_OP8_CDjLhTObJnjCms11JrQ7tDS29_VX6l8mam_8CfJwtEjVj3zNHVvOSNs0hvgOmGltIvtY8rsKswFh2bBpQEJ-zw%2C%2C&do-waremd5=BzRt9-Ct0WW733vJyYIGDg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "4400 МГц"
      }
    },
    {
      "name": "Процессор AMD Ryzen 7 2700X AM4, 8 x 3700 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1101307/img_id7693080335696978328.jpeg/200x200",
      "price": "11 732 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-ryzen-7-2700x-am4-8-x-3700-mgts/36382001?nid=26912730&show-uid=16989587327691109976316171&context=search&uniqueId=49563636&sku=100405030926&cpc=ZMUICA5XWNCL2mIeIIPwXwT63U1NFU9R9YgbP9LRPDJVBPrVWZAopB18wnhvufq-j1p2LzP7bfz0lX_ESA3uANN658O6YkTr38GvDf_OiaLNS-SNrTOae3zDrWkuVg3kI1Ih-U490s9Tkjblh_j-wUOzK9QbB6QEokLU3-yGdqVsgJD248ZbOgqECP4W-CeYRsmgb5GzEU8%2C&do-waremd5=4MFEJ_Rpro7v1D-6Rr4cMA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM4",
        "Тип памяти": "DDR4",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "12 нм"
      }
    },
    {
      "name": "Процессор Intel Core i5-13400F LGA1700, 10 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5191310/img_id1012110037756563825.jpeg/200x200",
      "price": "23 750 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-13400f-lga1700-10-x-3200-mgts/1805902812?nid=26912730&show-uid=16989587327691109976316172&context=search&uniqueId=1355680&sku=101898710464&cpc=ZMUICA5XWNDKKLx-DxIGI9XmboOJ500bYcelRJLXcpNZ69xUafkVKMYprND6D41vJafdsZgCu5Do5Fzk4jjDjw8gKDX3yZimK69mBxREWXhOx1Xq78fS_k50P327-k-VXh3cBP3gkHypZEwgHjdkHDNEHBLp4VHIcwwgiEBJMtXYCxdWrC6DcC6tkXuYhQu0QqgDN6wsvwE%2C&do-waremd5=esPC4CeQCPQm8Yhtt1pFXw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1700",
        "Тип памяти": "DDR4, DDR5",
        "Количество ядер": "10 шт.",
        "Техпроцесс": "10 нм"
      }
    },
    {
      "name": "Процессор AMD Opteron 6200 Series 6272 G34, 16 x 2100 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1582909/img_id5127275882959477597/200x200",
      "price": "3 529 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-opteron-6200-series-6272-g34-16-x-2100-mgts/7823728?nid=26912730&show-uid=16989587327691109976316173&context=search&uniqueId=71086024&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=102200297963&cpc=ZMUICA5XWNCLXwC2RKCDveFjCo6OFeVaoFouf29dvcpKXczOEfkIMqb21zZitfLWYjCQr6WAlCA8eRqTmdYVVvdHQFtKydrCgZQzVjc_PqDjCNb_xKLD4ptp-YrJ_Bifqg_qs4vwM-Vodca2zuMMv-UaZB-2x5buY-4gvQ18PKUKvMtbdYJ5a3WX53CotMrQTZBPRDXOAGk%2C&do-waremd5=H5UPlTkdN9Dpm-kC4iEo-Q&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "G34",
        "Количество ядер": "16 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "2100 МГц"
      }
    },
    {
      "name": "Процессор AMD FX-4330 AM3+, 4 x 4000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1901647/img_id5825105347163823084.jpeg/200x200",
      "price": "1 663 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-4330-am3-4-x-4000-mgts/12920610?nid=26912730&show-uid=16989587327691109976316174&context=search&uniqueId=723818&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100676655787&cpc=ZMUICA5XWNCGvhe4LOH0QJO6OP6YEY1_J_9YwZm8sBkGtDGc_NecfZ3Ed1wVLpgD8hMtDBfAB-Q85LPhu-FKzn0ln6uUwjTbnKNw0H6Gm-DcjBYW5KKpLP__os-DzwLONyNX7HvUS8qgLCQK5Dy1tWqfu2AlG9GejldU3uTyxpqxc314tKfFaeqeUha3dxcjmw9Idt8hIvg%2C&do-waremd5=e2OWXRtVIvm1NnBx2XVvrw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 X2 3800+ Windsor AM2, 2 x 2000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5233785/img_id3089735349721532796.jpeg/200x200",
      "price": "689 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-x2-3800-windsor-am2-2-x-2000-mgts/963457?nid=26912730&show-uid=16989587327691109976316175&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101852952746&cpc=ZMUICA5XWNA8F163Ta0W6zJHFpmmGHxqtQSrBYsu8jQCgaMJhqPu0ZPmfx2PwD2PPYxli8KmAbflZFrd3xS0wkZAbh7Tc96dguvdpKidbpyM4cVsdVUK4MsTviwfowSVPPoJfgktIoHll5xKnNW8bjlrRn2LqAIq7lZkS8mqyS32Yt0D-UZrK050-ZsqxrW7MHiRj9U2-R4%2C&do-waremd5=2cZEs9SjOdqJ_KGjlvfeeA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2000 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i3-12100F LGA1700, 4 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/6479667/img_id6672604104110084245.jpeg/200x200",
      "price": "13 563 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-12100f-lga1700-4-x-3300-mgts/1497301526?nid=26912730&show-uid=16989587327691109976316176&context=search&uniqueId=16977866&sku=101556128769&cpc=ZMUICA5XWNCe3wXs4GVWP9X0xJFcewGxBDr_Mnc7TmgquA5L0ydJyg0nxTdfEAqpiVNujLevZ3mfP6omz9__0pa2syTaCVGY5cT6ZgcJ8QlLUob_nc9U1QxSvGXupgd32dSzRfVvMOe20wMq85MidtyjfZ9DyJBOMWvt2e6UAGTWxzVDJPHPOQDi6vaSueO9yqza21a927KyILVAnyeA6XB8EV1_uZh2GIDjjc7graV6kDZoDC45JGPmVcC0V5Fzf49T8q6bKtQ%2C&do-waremd5=swn76n_lBMJ9thKWdHpLTQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1700",
        "Тип памяти": "DDR4, DDR5",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "10 нм"
      }
    },
    {
      "name": "Процессор AMD Phenom II X4 Black Deneb 970 AM3, 4 x 3500 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4377400/img_id2108764531226050452.jpeg/200x200",
      "price": "3 848 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x4-black-deneb-970-am3-4-x-3500-mgts/6504321?nid=26912730&show-uid=16989587327691109976316177&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101761088152&cpc=ZMUICA5XWNAgjbB2ZEqs2LZd6J2LXHM_r843RKlqA4hQsC1PZdEUxoyGB6MFCvetAzp-2RZMXswQgJRpYBQiR_U6FkytUU0SRs0VlsTip1teEj3D4oqtPu0uEnPlDdYtNtdy5pvc1T2ojwQkyOmqxiyK_pi1KDbYX7TZLjznvX4POQMNLSw1cNZoq2SyAbtPPVazEh7D87c%2C&do-waremd5=nC3IDxuVIFTHi4KgD-VapA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3500 МГц"
      }
    },
    {
      "name": "Athlon II Dual-Core Mobile P320 - AMP320SGR22GM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5235182/img_id8166481014303135414.jpeg/200x200",
      "price": "535 ₽",
      "link": "https://market.yandex.ru/product--athlon-ii-dual-core-mobile-p320-amp320sgr22gm/1422615138?nid=26912730&show-uid=16989587327691109976316178&context=search&uniqueId=59333164&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101427068793&cpc=ZMUICA5XWNBEgazcS37lpzw7OgRCh1Brown_dPKTls0Ah09s8T3Wj475dSailZeWRbwnlZShqDXFltM2w-DYxpPLXXg4fDSWj_3w2QAuZmwVHAE5rrNMTk8KWtpyaGc3KoVZgRRWb__lC7DKGcStJ5miQ3Jaw7kWUVgpgM5DNT9AQlOvmN5aEA1viavdXsSoD8ZnmPFnd9Sf1HV-Q5_ZVRtAjuUlQnaZWTWVSJb8OVevNqT0ji7ZVAO6Q18qpajZ5NYgGUfgy0WmYXfPeyWV9Q%2C%2C&do-waremd5=N8XvfJn8406eJ1hvndPGag&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Количество ядер": "2 шт.",
        "Назначение процессора": "Микросхема для телефонов, Микросхемы для телефонов"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-1660 Sandy Bridge-E LGA2011, 6 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1767151/img_id1157698185510673404/200x200",
      "price": "2 574 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-1660-sandy-bridge-e-lga2011-6-x-3300-mgts/8333482?nid=26912730&show-uid=16989587327691109976316179&context=search&uniqueId=48222200&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101770914010&cpc=ZMUICA5XWNDSJAd4KR0nRIEg5mBKHn8ShpzRE3yB19LUySFXHvL4YqUz7TWzqhpX6hnwA4QDqdCcAPUV6DHgDmdi2xSzUIQTGzFGjadM0b8NPrunepLdS2yv1uyU9L8MsgP5mt7Ba3L4nuhfWe4V5yGS3qjjZCcajIrBSNFcD8_M18ZOnW1ASlPWO3Y8yzMtxuQVeamPmGeqAJe1z5LvCqmPBvhnUhlqxlft3ZPAXLv_REgCYDRI7qhJ2ULg7bg2hgKKdaldkZA%2C&do-waremd5=CJvnDZHq8RXZy7d2jNgvvQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "3300 МГц"
      }
    },
    {
      "name": "Процессор Intel Pentium E5800 Wolfdale LGA775, 2 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1592349/img_id5205771423932775234.jpeg/200x200",
      "price": "941 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-e5800-wolfdale-lga775-2-x-3200-mgts/6928970?nid=26912730&show-uid=16989587327691109976316180&context=search&uniqueId=2628457&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101863703758&cpc=ZMUICA5XWNCTpBbvJqRVfTdK3UWYxJxNLwFtPys-o9E04MrE87qWOT700-crICxYYYlcxNGfdtD9D82y3nrnLfNecTwPUjdAO0LIUZKyM-UVGFqsryDvEnl2SIB9qwGzKv_JQr9hSOAZcn15Bs_iedM0ctvksHlpfWBn33QYxjHGQMW-7wvj86g9bTYx_dJW27PWM57tKf0%2C&do-waremd5=dWir0Vwc-HkkxmaZDDUm2A&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3200 МГц"
      }
    },
    {
      "name": "Процессор Intel Pentium G4600 LGA1151, 2 x 3600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5216721/img_id2706528407784856974.jpeg/200x200",
      "price": "2 497 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-g4600-lga1151-2-x-3600-mgts/1716370099?nid=26912730&show-uid=16989587327691109976316181&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405237742&cpc=ZMUICA5XWND4hQPR8UNuW5acQwSz4Yin9ih4pVCk19nPxl5fbmNfwr5-t88x-FMAvVSo_wyeSp5carYYC0eabMvLXUuNIjftq4GUXppfuV58HbKDb48tYJvkjL5j1KaKoOvkuzFQ0Nci87JfSWWi9x7_r8d5exCBwLn86yswsKN42j6xzLZzDYvOTY2b6TrZcN0MLLMcXBs%2C&do-waremd5=p_qwotboaZ6PnH1XnJusjQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1151",
        "Тип памяти": "DDR3L, DDR4",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор Intel Core i3-4370 Haswell LGA1150, 2 x 3800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1862611/img_id517677388139090446.png/200x200",
      "price": "1 733 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-4370-haswell-lga1150-2-x-3800-mgts/11000559?nid=26912730&show-uid=16989587327691109976316182&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101229926030&cpc=ZMUICA5XWND_JvAN73NAao-v19us9D-uXI3s547Jeq8Gh3sEorVuwV6wl7xRiqfYITmfxI3fpI-g4rxrALPdGNAM2yd_8ubcqVMlUcRD6LvIaPCEEDo9TQfVIKelmdm8jN6qSX6t4piQMQz8bgkLF0A7NIcGvzXrokfAMB8w_QHa0rE3bWcTUVCQFynazXZ6haJpnkxnpbs%2C&do-waremd5=wbVQTY7fIfc3Ow6IvNnmOA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм",
        "Частота процессора": "3800 МГц"
      }
    },
    {
      "name": "Процессор Intel Celeron D 310 Prescott S478, 1 x 2130 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/6439030/img_id5191448433462316051.jpeg/200x200",
      "price": "396 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-celeron-d-310-prescott-s478-1-x-2130-mgts/858010?nid=26912730&show-uid=16989587327691109976316183&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101864351244&cpc=ZMUICA5XWNCEyGgnmgeCElVjgFh1YXbVxck58MwzD6nJoodODZTz9OrhJyRoviySQYpNCgsYgxvjgAH2k8OTrqP1a08boMi1gDGyW1lyIsqiN4B633HRXyUApDKwYFt9OLofoVBtZm6jEgvrNstodjdeJE9zqEftWj4janilUL3bHixRcplATgfEfWFCSFOfdU9CQv_9Xgo%2C&do-waremd5=89A9zQKyT_BxSmtbnd_DlQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S478",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2130 МГц"
      }
    },
    {
      "name": "Процессор AMD Ryzen 5 5600G AM4, 6 x 3900 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4957996/img_id6531240278150675093.png/200x200",
      "price": "15 563 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-ryzen-5-5600g-am4-6-x-3900-mgts/1430967156?nid=26912730&show-uid=16989587327691109976316184&context=search&uniqueId=922049&sku=101439399691&cpc=ZMUICA5XWNAV63L6nNB3dCzWJ99el8XOx_SsSPgHZgokldAuo8mBQQtF-j2ZJfDPLiCvJb9zt8MszXqL2AM9DiCUa4HPNUZcLWToO2ZKa-5Otwi1MRLV0dwo4JBfkuqWda9l31YRga6TRjAbWiS6pwcIs8mlRYQgcni6ETSYxlBIfo1nyNbOXRYCLgOIOUSgKEg-IIJzS38%2C&do-waremd5=_mRZBpEtSbZr59u3sn6HQw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM4",
        "Тип памяти": "DDR4",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "7 нм"
      }
    },
    {
      "name": "Процессор Intel Xeon E3-1270 LGA1155, 4 x 3400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5146425/img_id743356421265835184.jpeg/200x200",
      "price": "3 707 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e3-1270-lga1155-4-x-3400-mgts/7188800?nid=26912730&show-uid=16989587327691109976316185&context=search&uniqueId=49563636&sku=101759965532&cpc=ZMUICA5XWNDcnCbRkq_yBKF_uNRv63H8Z7qrUnuAHi3WABO484HkdbBAdWBPa8W8MJdb0lqtUNZr0sKgQ6iZa7dc6R8mTCAbbkouC4vpWqg-dRJcFDY6Y2gK91yG4pSUhkVSYUedvVUa97oNtjYKoIR2i6gSaotxJoQl83mvFRCeNQcTuOxOUG6oLb_V7w0_vmv5aB6gjnA%2C&do-waremd5=eM_pDidJGwvRg3v7fBvzzw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E6400 Allendale LGA775, 2 x 2133 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/175985/img_id8172147204384393999/200x200",
      "price": "1 017 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e6400-allendale-lga775-2-x-2133-mgts/963428?nid=26912730&show-uid=16989587327691109976316186&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884454972&cpc=ZMUICA5XWNCHo7Os4cau5vKRmCVuCGJCRg92D50tVvzdjV-bhEAejV4ZsjFQ4bs73k7xePX4RuoN-jh8RhYQ-9KpXSEBSqGtnUyPHarmcIXn37gvn7oEteb7WRVF4wZGhVA44hartxgznmzc2r-vTNZ9U2c9hLU_9JhE0XBVsg_6YC-TEwJIxjvf_l4613nczSqBn5SnWoY%2C&do-waremd5=6_lYzwjV8L9tO2MTTvNz9w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2133 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E7600 Wolfdale LGA775, 2 x 3066 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5362248/img_id3036390355313696590.jpeg/200x200",
      "price": "1 274 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e7600-wolfdale-lga775-2-x-3066-mgts/4689628?nid=26912730&show-uid=16989587327691109976316187&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884454916&cpc=ZMUICA5XWNDxTkyOynznfDO_BEN88gGx-uLkl2Ioy9JKPV9HDtm8AUhFvqr05_zP-t98bfz_ScwPWfJRjitCtvEUaaB0pNZDghFB7eMazI5Mi11Hd3-elUfc9we_cMphj7SdSULqpZiFh-3CLeUcN1uJIjkLFQ2xhelvT46x_FhgCMKT2voWrmZObb6Z6-l6AI2d14EPDjE%2C&do-waremd5=gTGG9oln-HsV3tmHw4jK9g&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3066 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i5-2550K Sandy Bridge LGA1155, 4 x 3400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/200316/img_id6093168148610507900/200x200",
      "price": "2 829 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-2550k-sandy-bridge-lga1155-4-x-3400-mgts/7867920?nid=26912730&show-uid=16989587327691109976316188&context=search&uniqueId=6992502&sku=101844294792&cpc=ZMUICA5XWNAYnVZOxCy1-JDWRxK9K6Ke_IuntKLLyuhY15zMBP1x9NdFD1wXszH3c6raouAYZL2wouWsdRaeYJGDzjc5OGbafI78TgdIVsgC1cCCWvsqqUQjnB8V-0xgNioNshKfH80oszgQDcnSSgBd8ByKFPbM7KUwNKp-DeKfVXiQxxi14YK_UyxvYqM0YzZzWWdeqtZXCsGP9658p6gkzNl2-4y4nYQA0nPw9jhvwN6hIuXW4INIpC-TukkzYRIy8nijLGA%2C&do-waremd5=QcpmIS8AsYuV9gUHPi8F2w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Core 2 Quad Q9450 Yorkfield LGA775, 4 x 2667 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4383514/img_id3965037641053285788.jpeg/200x200",
      "price": "2 819 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-quad-q9450-yorkfield-lga775-4-x-2667-mgts/1618522?nid=26912730&show-uid=16989587327691109976316189&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101876578419&cpc=ZMUICA5XWNCy3aqNZneN0cgfqTrIBe9ThyIF2PpAA1rOtCrip6w26rsQmGFCIFZmzJ9A08KmVp_dXXPuWgfUZzrnS5_zdHypCV5sUSDqhpRg9wHYJcCw-gwY2bonNllQ1vJ-4ZZYjo79dgOiUdCYwNrfue0YEjIi8BEbR19J64JMfo6x8W8UTrnpYYNFI9-UM5ZdPqhC8Ok%2C&do-waremd5=z-n_rgkulKRMay4ihs-Vyg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2667 МГц"
      }
    },
    {
      "name": "Процессор Intel Pentium II 450 MHz 1 x 450 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1543318/img_id8403785766912762718.jpeg/200x200",
      "price": "2 742 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-ii-450-mhz-1-x-450-mgts/1820726020?nid=26912730&show-uid=16989587327691109976316190&context=search&uniqueId=50170705&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101951768976&cpc=ZMUICA5XWNC_hRNPhu646YWVo65K33cDzIzeiRbPFwwvCA76E419ff37jHJsy02Ry3WGOP4w0PrmVDJrMEe_73MtL75Sk2_gBlr7DohjX1LuBmyLzjvNJSrPInRQQ4bNTvqcbOMmz2Max3L4zj4zevQrocWdZDQzDZjFh5Mrmo8KbFzL_HHhFBwxLSHettmUDDeKU04nsKgrm1iuvrka67sUzjPRkX89yz7D670zj2h6BW06VosWtH3lVnBQmi8S7vxJzNsZ2LqvhnZ1C2O1aQ%2C%2C&do-waremd5=J-vHbl0KOW2eWjTsDYGJNw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "250 нм",
        "Частота процессора": "450 МГц",
        "Тепловыделение": "27.1 Вт"
      }
    },
    {
      "name": "Процессор AMD Phenom II X2 Callisto 555 AM3, 2 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4397006/img_id3588539113951044072.png/200x200",
      "price": "1 145 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x2-callisto-555-am3-2-x-3200-mgts/6086378?nid=26912730&show-uid=16989587327691109976316191&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101229488420&cpc=ZMUICA5XWNDM_Fcvwk67EntfgDuAEwIt6oyTh6YaXj2CMvNHEOadS_psyQOtAzWO9MTjoCbMFD6xXx39EOF-Hqxmt1RRpIZA6dgI5eAf6mHeRmuuU5HMEM5LN_drUEWMFs2tTeJAz8xBN-RzoN_PL9xpGmm-OgcFUik5yPayLPcKkjMehdd5Mc2aG7TIAVzRcKQQTpqKo0A%2C&do-waremd5=cmUCTH06DQX9bSjUsHf3vQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3200 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i5-3470 Ivy Bridge LGA1155, 4 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1574389/img_id2916378952963027219/200x200",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-3470-ivy-bridge-lga1155-4-x-3200-mgts/7959569?nid=26912730&show-uid=16989587327691109976316192&context=search&uniqueId=45084687&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=100405234070&cpc=ZMUICA5XWNBZEygE4g4jY-T3YxHav448bGh3GV84QeP5P7V-pgAcRI6IO4_j6_LXWeLhGwDej8U5gacMu6EZ4I4MuUs3VTDTveRaunqBvpAQ6pcjdJPhLF_lS-PFts-V_UfVamqlKtjiMkyhQXFKSB6le_SNLhdEij-jJLW2xeyP2ks_T8o5WDeOWGgYjN3vpJdiKeI3NkM%2C&do-waremd5=A3Cmc4VyTagk1tGxJCp83A&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Core i3-530 LGA1156, 2 x 2933 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4410238/img_id2363141162943193637.png/200x200",
      "price": "268 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-530-lga1156-2-x-2933-mgts/6031357?nid=26912730&show-uid=16989587392254416905516193&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101229926125&cpc=wybWbt27XbTy5chwWvlf-q-rtbR3qROq2PzsINiwCpNq5ku6iuRaPSrU3BUZM3sVOyGVR5yJkr_ZbZGINb8-nRx-SH_-qIHcSj0WQPzRG4BC4ukBAqKUMvLENPqlSM16R-PiX_wR87HZ_sPJBuFnuuoROxRsPRu2XMs9q1gR3KjJs6rrG7mmF-OpF5_NpLRFQlIU3Q-eWoQ%2C&do-waremd5=M7jwgcKWOsAf2OcovlXrPQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1156",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 3200+ Venice S939, 1 x 2000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/7722094/img_id1348043164677525945.jpeg/200x200",
      "price": "1 145 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-3200-venice-s939-1-x-2000-mgts/761987?nid=26912730&show-uid=16989587392254416905516194&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101844453955&cpc=wybWbt27XbRiVMtS9xJokk7AyQBCCtPeXwH6qvJbhk8TtLybOBDlYUgxe6e9zrMiVj_AZy9FTuJ8IxwFKO_q9xxDuSgPJ_aYrIcH3hIST0rN8KvXlZNuRq9ww4ZlPRf7DP4HMs3T3bKuLnd-rz2YpplL9Uv0JcOzT18Z7pUwZOkqGCUlxdtneGFzGGztUl3oTpWS2Ve7KS4%2C&do-waremd5=iSiDOWNIDUU0FDQS-tAXrg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S939",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "2000 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i5-4570 LGA1150, 4 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5236045/img_id630446213762177716.jpeg/200x200",
      "price": "2 940 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-4570-lga1150-4-x-3200-mgts/10384328?nid=26912730&show-uid=16989587392254416905516195&context=search&uniqueId=57897477&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405238131&cpc=wybWbt27XbQ6tlNxaTcb9k_V4PG1o6y4P13bRXm_L8wHJfBTIgPHEBmQPPRStYLzg_y6988D3tlX57M68x1XCMJjoRkMdqVfEeJ48GceA0jE0Gi4kDiu_K6bxPWLvFzQWo08ENoroXb6vOQPBpllBsKadOgHFQk36fgDeoJt7jYm2-xoXjNmZDMjRsWJKxBM3zBkvR7SbvzACfml7m8YYrapuPNTEqxHwcNPTNquTOGWhIElPxzEfpb1P6jfaD0xqw3hVNOGdhmttaSNBMKxCQ%2C%2C&do-waremd5=0ZnDlpdmmnyBiLzAKcM3iQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор Intel Core i7-870 Lynnfield LGA1156, 4 x 2933 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5236458/img_id1756392375151275134.jpeg/200x200",
      "price": "3 653 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i7-870-lynnfield-lga1156-4-x-2933-mgts/4951142?nid=26912730&show-uid=16989587392254416905516196&context=search&uniqueId=49563636&sku=101783439270&cpc=wybWbt27XbS8X0lFXcaSTiTAHYAOvPAfkxxrEDy81BI_JkhoTOAIsAOukDYWufkFRN4QQY7FxuHMA7zkECnFtuKX9sDrBP_9w5JaSzw5NHaOSS-gNyxy4lLQKuYO7lHjPyD6e4lOB6hORKLt2tKhXQ5QTkcwXo62PHMiNzaxe3SDrzJBcPihkgYW761NMsnRjTPFBRG4P4w%2C&do-waremd5=PKDf4hR0Bbm9s68jp0WFxA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1156",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2933 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Quad Q8400 LGA775, 4 x 2667 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id5210718286443252348/200x200",
      "price": "1 911 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-quad-q8400-lga775-4-x-2667-mgts/4689624?nid=26912730&show-uid=16989587392254416905516197&context=search&uniqueId=6992502&sku=101076659771&cpc=wybWbt27XbSCGc0HPv3edlUlqNVWkZkhf-dh85KczMZDUn9T17HPPr9JItLjPCCaSswRTnv3JyuapAl_C2p5j5gG2tDirNT0ypCxy_dsov6AODsb6g1bEVJBHeFJUn9R656MFdxqzdzBjgZuorqgVrXj9OhX8hMcCa13hiLe8IUctdMenbRALdITi9gqRJ7Y0APKWIJ5OqQXH51TvFJ8jThHpX0wLqasDP19qn-bIw3vi5YJfN9mrLh9KLQDwFZN2ymA9AkJwfhBX5DLKqOEyQ%2C%2C&do-waremd5=934MxnqN8XoI7hjZDoPhHw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD Phenom X4 9750 Agena AM2+, 4 x 2400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4081122/img_id6234843367571436616.jpeg/200x200",
      "price": "2 561 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-x4-9750-agena-am2-4-x-2400-mgts/1619072?nid=26912730&show-uid=16989587392254416905516198&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101756769386&cpc=wybWbt27XbQAtZM3loO7BHaaJFXrsFntriBzAKU5Q6hdHVcyGqnlWQuIpXBLePaXX4HLsbN6M4WaNUTUJlsIGIyF-0Q6AWfH5rFH557Ee1erwFLrqhzYHcvUC0eIWz2HjJmz0VPAqxksSG5Ddcs41oqvAncGzNRuEgv2Xfcd5mTslSlxTT0sKIbKAcOBpBG6NXYCM8Q6Eoc%2C&do-waremd5=9759T9g7cHOUsJVk9HzuRg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2+",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2400 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i3-2120 Sandy Bridge LGA1155, 2 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/2002045/img_id2063868385978498195.jpeg/200x200",
      "price": "799 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-2120-sandy-bridge-lga1155-2-x-3300-mgts/1777928475?nid=26912730&show-uid=16989587392254416905516199&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101864427914&cpc=wybWbt27XbTISNRdumiqPg195VgOX_C80ic3I3oC9757KhjPYHijLsk1An7hUpRMhyuYIYPCAPzqPymnvFjRzfGW4mfmY21izOXBWUag0SOu3HQkSAVebHj1eT23L_3rqOh36_QH-siHyoHiOUTHzhpRl1bGvTbAopeZf8eNH8HKhDFAqRPE9t6gcO7qpBdPJrtQ0srm_aY%2C&do-waremd5=zsKt2RFgcn6Yjld_SC38SQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1155",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор Intel Pentium 4 530J Prescott LGA775, 1 x 3000 МГц, HP",
      "img": "https://avatars.mds.yandex.net/get-mpic/1859594/img_id5968698693878105320.jpeg/200x200",
      "price": "327 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-pentium-4-530j-prescott-lga775-1-x-3000-mgts/930332?nid=26912730&show-uid=16989587392254416905516200&context=search&uniqueId=45084687&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101908706084&cpc=wybWbt27XbTmVSg6iERP2F5UKufj4iak55iKjAvmYPoLKMrflvFK3edxF37uWvKlW18qh_L0dCp7jCn-MlHqkTj1T2KwJbGvlAdzf41rVYU_GXWDmwxrY00YnLbkDQQU4OQDh3eJ7e2W3QGnSj0h4gHEfr5W3f0a0t1em44qS5BiQknPo9dtEKZ-OLtMNcVbVqK9bgzNAF4%2C&do-waremd5=YokA16zIDkk4YvGIxaNQpQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "HP",
        "Сокет": "LGA775",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "3000 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon 64 3000+ Orleans AM2, 1 x 1800 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4493501/img_id5073672274061899876.jpeg/200x200",
      "price": "256 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-64-3000-orleans-am2-1-x-1800-mgts/952557?nid=26912730&show-uid=16989587392254416905516201&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101863695756&cpc=wybWbt27XbRHra-lU0lx0mVQXAvJRKS4S2_NPnCwreYd4CRH2jEvPdBp5QyuoiwRilIO46MCr7cLUa3cE3qfpUQ-XzzxTk2bIzBM8cPJ_zZqVPTkgkTol3SttIxz0R5Ge-hEg9HbJzOZKOaHq9Hr6mFbGGeKpfb4Bkz_iYusvjQd6W7CH8kN5UW8RbVj2jxxDBvVDPfjQ0s%2C&do-waremd5=V3oESClaWcGFFuvPDVFjyg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2",
        "Количество ядер": "1 шт.",
        "Техпроцесс": "90 нм",
        "Частота процессора": "1800 МГц"
      }
    },
    {
      "name": "Процессор AMD Ryzen 3 1200 AM4, 4 x 3100 МГц, BOX",
      "img": "https://avatars.mds.yandex.net/get-mpic/4409630/img_id8641749765460359393.jpeg/200x200",
      "price": "5 841 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-ryzen-3-1200-am4-4-x-3100-mgts/1730917824?nid=26912730&show-uid=16989587392254416905516202&context=search&uniqueId=61629543&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=100334383866&cpc=wybWbt27XbSjPQCIngfGE6tegxEV2q30TDUHL9fjWYfOQuuPBmtYI352E1547a-v41GJCJblEVlNUX63n_FpzClAS_EjN9geH7A7euX76BjCIfI7ibXtspZfl_SbOndKbnTn6ebgzznire3QhyuTywVHj_p0tcH5snK0esV55fWsLV-HsowDQNPA2NGMKVh4SINDP0wf5ig7JcdAkYSBK4i1jJ7HWSQSuexA0iQl88crSwHP1mYmSqFYc3ahckOos2Fjb-hzkUdHUU-IQD5R6g%2C%2C&do-waremd5=gbOgSHwOaH2x5V7-_I_Q3g&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "BOX",
        "Сокет": "AM4",
        "Тип памяти": "DDR4",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "14 нм"
      }
    },
    {
      "name": "Процессор intel core i5 2300 OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4034173/img_id7792955013464935305.jpeg/200x200",
      "price": "2 267 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i5-2300-oem/1869384199?nid=26912730&show-uid=16989587392254416905516203&context=search&uniqueId=60900760&sku=102008677716&cpc=wybWbt27XbSJOETglUsERHqy7aoNSsUext4mKJaO56M__wRm29WXQ3I2VEaZMtboCfm55sLZ9WR4gWadthzDPFf0hwZtzOSP-9OEgsxaJCVNr5zysySf_b2E3m6W9knNnQKfJFTCbFe4PUesz9RzV4qaiHF4MACSMm3r9Eh-VoO2m_6MlZ3zOCHUTQguriT9BU2KzdRGo_L6jffxCnz_xHnGm5ANymQaEbQNRmvMVynkSThpMFRggTIwLtJn2X2RulWnOvLz_YxbivSUtpYBag%2C%2C&do-waremd5=tnIChq--TjzfYMNRxNRBrg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Тип памяти": "DDR3L",
        "Назначение процессора": "Процессор"
      }
    },
    {
      "name": "Процессор AMD FX-8300 Vishera AM3+, 8 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4076910/img_id4779756098683123615.jpeg/200x200",
      "price": "5 226 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-fx-8300-vishera-am3-8-x-3300-mgts/8493628?nid=26912730&show-uid=16989587392254416905516204&context=search&uniqueId=87858914&sku=100405226327&cpc=wybWbt27XbRbRZvuweXIJIgYjfdCbj7KF3MBqg-E75MmnYo4pYdzQOb5B-raTxxMmptdbaKbz6huZJtU8T7_vBrmfudAvSlv9xRJL9hz-qPtu8FgTzVCRZA7UuZ0lXFoZHHvappghft_ofi82sWKCQbmSt5XGFXCnd6Cd9VnyrO-cDBIrBCgJvrDgh3QgjnEP0X6_7_yzVl6VxOqsvyaEGuM_DJf0w0hBBMM3SPfQIc39L3odTpDi2pmzpLCKrzfs9RkixwzkFk%2C&do-waremd5=INLSiQyGYxwCAS5QzQQ1MQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3+",
        "Тип памяти": "DDR3",
        "Количество ядер": "8 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Phenom II X6 Black Thuban 1090T AM3, 6 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/200316/img_id6651612918078450832/200x200",
      "price": "6 435 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-ii-x6-black-thuban-1090t-am3-6-x-3200-mgts/6175785?nid=26912730&show-uid=16989587392254416905516205&context=search&uniqueId=55161622&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101945118171&cpc=wybWbt27XbScI9ZJXYjWwfgXklkVqakHKKHl11pfSuGDxfFn2Q009OKi65Petw9km1_6u2xpSe-g3SLpHuyjZTnANuJSGrTE6lEPfTNIpd5txTSx_9mfZCRV6itKJZwkpVSqnbn7KY_MX_dNby4ozzZZ3MSajASeSpgnzskhqSfu3UWsxcN_5I2jrLvepBzq16iLGh9orFs%2C&do-waremd5=JyuuY58I2nF_unv7hl9sqw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "6 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3200 МГц"
      }
    },
    {
      "name": "Процессор Intel Xeon E5430 LGA771, 4 x 2666 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5219318/img_id7231245637870613229.jpeg/200x200",
      "price": "2 304 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5430-lga771-4-x-2666-mgts/1579940?nid=26912730&show-uid=16989587392254416905516206&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101598212541&cpc=wybWbt27XbQZgnU5BzqYvHTtreapjPDqMUjWDVP0v8D7F2d1t6qwfOHj-Koi62M7Arp2WuyxHlpNxziZm1X_EjMX0H7rwsMNMwPXcPkNP20UvVfl84-HCTgiHx9kEJArSFsk4l-GWvbR8-bphk_BbQtskif9mKm0oa1TkRYbOxx9nixDZ5VTW7QsZqO58sxngPF9GUi0KDA%2C&do-waremd5=ESykTafz5IqVQU4iaIKVaA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA771",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2666 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon II X2 215 AM3, 2 x 2700 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/96484/img_id6638766592112313500/200x200",
      "price": "475 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x2-215-am3-2-x-2700-mgts/4929210?nid=26912730&show-uid=16989587392254416905516207&context=search&uniqueId=72878538&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405226228&cpc=wybWbt27XbRqbu4ZJbvntdsSJ5SQjZogklB3aOkJxq1naMNKlGXji-BV83aHLrkTQE4gphAkJIo2V8Ynr-jxUpGqOiEpjFkOfWvmL23tRkY8imw7-jqyTOvA2Qy6PDvvJwAH6C6l_LIGMAHZbM1lIbu2bKOmE64tFJLi_HbHqK22dwTq0YLJ3-mN92QYAjWCVKjNS6EFeQQ%2C&do-waremd5=2-2AlMQCuBKwwNvogJTmBw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Тип памяти": "DDR2",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon X4 750 Richland FM2, 4 x 3400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5250150/img_id189256140116878336.jpeg/200x200",
      "price": "1 484 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-x4-750-richland-fm2-4-x-3400-mgts/10623132?nid=26912730&show-uid=16989587392254416905516208&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101833799868&cpc=wybWbt27XbSN7DDCpp-suPFO8So6D_GWfTdv9eR3EyMCUQcyXqxTW3rOSwNz66zs5grD2W26ekBLRWWAyh4QbwGvKdJA9gficpg30WYLtAPi83w45fbzboS25eXD7Xv42g1KExLcAlzKH_MRgWtE2X-VVJR-nC-xkvqOkeAZlT2HFFWsBU-TsYzVpGNOFU-KOWakUak4StwsrRRjf1hDVIodhVwtTGzCdgGG9xrUYb0Txpj--vq1RTpBZIt32DShGnSRPuv7jM4cJPWo0mxxOg%2C%2C&do-waremd5=OFRo4_CAMRVjX5XlzjJAjg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "FM2",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "32 нм",
        "Частота процессора": "3400 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo E6750 Conroe LGA775, 2 x 2660 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id471272218670679428/200x200",
      "price": "1 145 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-e6750-conroe-lga775-2-x-2660-mgts/1043618?nid=26912730&show-uid=16989587392254416905516209&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101737871538&cpc=wybWbt27XbRcP1LO3dVyaWMAuoCFReEIVh8OkZRLCaky8KQTO8S4MaNJcTxN4J7UWNNAHqLBNcw52B4j_omwHbI4JwaqsMK8kO5qufx5POerm4YqTe0P-TZgaX5nUFm6WaiLK5hpi3H3zhgXyRSf5EAzZGrhVeLKfhYBa8nSFKzP-SNyCQePDmfjH2LpeL2WWXEI-mchK0A%2C&do-waremd5=8ZaxwbfaCy1aUTOwBbGm0g&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA775",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2660 МГц"
      }
    },
    {
      "name": "Процессор Intel Core 2 Duo Mobile T8300 Penryn S478, 2 x 2400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/5231781/img_id1851315116248796350.jpeg/200x200",
      "price": "1 274 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-2-duo-mobile-t8300-penryn-s478-2-x-2400-mgts/1611309?nid=26912730&show-uid=16989587392254416905516210&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884449829&cpc=wybWbt27XbRAINzWaLCJGOxH9GIFjV1Er7EA1Qpe1hVywFpwKDWNY_A8W8x53G-XCoC1o0aKHbM3oNtsexmfcKD9IHsOsEQOIoKHejkm39LLlIAB58WrEQR-LXE8P_TYmY6TLXvl3MGoBYyCnOergAJeqC63K2w6acjZ4uk7Jrq_FFhRESUVLZ77TeQ1FvHVUAszoMnCzQs%2C&do-waremd5=kF058mZ2Ge2kPhOfrM0DNA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "S478",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "2400 МГц"
      }
    },
    {
      "name": "Процессор AMD Athlon II X2 270 AM3, 2 x 3400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/96484/img_id6638766592112313500/200x200",
      "price": "1 089 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x2-270-am3-2-x-3400-mgts/7690236?nid=26912730&show-uid=16989587392254416905516211&context=search&uniqueId=42936334&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=100405238253&cpc=wybWbt27XbSZxLXbcOqZEgEbXnEmysIrpzKCVs3r_lrCWU_xxFVP23pUaeSRHlA9admigBuVJNaohQk50Od4AgFHWYqsW8ih4wv2vwTvEQRHCDlpGWRaE4gNjk7vC6vMEo26F32tAQdccO_KtuY5YJQCReUIRnjSSkD8wfJLX8YTxIjmIMuZJOMu5u7kfBcFv1mMaTClISM%2C&do-waremd5=N7AIZiAOVGnt-ujKlIGKlg&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3400 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i3-550 Clarkdale LGA1156, 2 x 3200 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/199079/img_id4313002887195238089/200x200",
      "price": "495 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-550-clarkdale-lga1156-2-x-3200-mgts/6224860?nid=26912730&show-uid=16989587392254416905516212&context=search&uniqueId=51326972&resale_goods=resale_resale&resale_goods_condition=resale_perfect&sku=101030416735&cpc=wybWbt27XbQnYQUAoIIpUppxobV8IF4Ge7PqfOdmw7cTruiyjQZ_Xvrt15MJ45uqpzkASNLQG_AVZuUGY-MsurcqF_bA0eNffvxGN60aMqj6jG6UrAIi9rbQXngB-8JUjaxW42oUN17AwA1-VJEpmToDy6Dh9iDmGTbupQlgq6NOL_2RhieSsp2gX0NbJRrl1KwrYWZlxAI%2C&do-waremd5=0mJmvH-CG6S4rzA2wPMbWw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1156",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "32 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X3 440 AM3, 3 x 3000 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4887676/img_id756373151517171473.jpeg/200x200",
      "price": "1 145 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x3-440-am3-3-x-3000-mgts/6057783?nid=26912730&show-uid=16989587392254416905516213&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101755288250&cpc=wybWbt27XbSbiE3pSn8YSNIKT83ezFRcYhTZUUJ6N8nYnqsc7LHPL62kI0ajx6vw12DoBb_USKruCFpBSfVquzsn6cjx0--u7_ap1QTL9EwI_0JFSU73vG0Vvp9TY10X0O8H-sXa7_Z_cynhKfMFyenmBQNAfLXsXeteb2mLUIFAOP17Fg90wJqrc62kopVOMT_c3ZwbTGM%2C&do-waremd5=tc7cbWDOmGkjovaXkZzy2w&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "3 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3000 МГц"
      }
    },
    {
      "name": "Процессор Intel 2020M 2 x 2400 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1361544/img_id2816542682499198528.jpeg/200x200",
      "price": "1 088 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-2020m-2-x-2400-mgts/1823601393?nid=26912730&show-uid=16989587392254416905516214&context=search&uniqueId=87858914&sku=101967575870&cpc=wybWbt27XbTP7S5s2hmDoDjzIJ3IBKdHnUUHTqI23iPWmByni8wHHbWGwsjDtQYjvo4kKSzn1ceo_wDwjL_kiiahRrJb3mbQiEwMomYaW1OLXCYEh_P5y59Apm-XjvRFtlWqinhrkCjL1BUMfTdoAzRvLDY_lJ8MyxSXsRTpEEgqjK8W_jKlNzJL9F2OZ9QItjyyvzM0U72P7k_sNaTUfnaVbjGHk678XK5SFKkcy3-B8rxLOM0ymlZh_MlS1Ytjoza3Wr7cbgZ9AgPLQ1qqxA%2C%2C&do-waremd5=xGBagnh1CL6P6JoDvdHVtA&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "PGA988",
        "Тип памяти": "DDR3",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор AMD Phenom X4 9650 Agena AM2+, 4 x 2300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4250892/img_id7141331384038951757.jpeg/200x200",
      "price": "1 930 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-phenom-x4-9650-agena-am2-4-x-2300-mgts/1619073?nid=26912730&show-uid=16989587392254416905516215&context=search&uniqueId=87858914&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101275882740&cpc=wybWbt27XbTMou070FrQLIDpfXoKYCP0bY9qee1NIFL3Wmgjhi8j3NyYBRkLhDvkUC4OlE6JjZC05Va5iC3LSJrvsaFOM9RkXYV7KhxhMKvP2naLJtbG-xEBvC3z8GXc-P3I3tdV4sg6DKPytiUxxpfS_EgWmFpdZrhFONChqFobGsigtGM9MA0uEFrAoatdR5c4BP1ure1KMqyqw_gYFEfeRYUU1Wfdsn28TGnGnR_3LwT-RplKbWN6fEPT4NOTPOSE4-cMvNgC79VYmW8FZg%2C%2C&do-waremd5=5SGrBdgm6G8TMf_qqPdpJQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM2+",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "65 нм",
        "Частота процессора": "2300 МГц"
      }
    },
    {
      "name": "Процессор Intel Core i3-4160 Haswell LGA1150, 2 x 3600 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/4409630/img_id6409335753744565898.jpeg/200x200",
      "price": "1 423 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-core-i3-4160-haswell-lga1150-2-x-3600-mgts/11000550?nid=26912730&show-uid=16989587392254416905516216&context=search&uniqueId=1356382&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101151993834&cpc=wybWbt27XbRtE7kG_iqr3Tk9QFHCErzlFMPffd2mRgsm6OeB9BkO2Hl29xnKcJK6-2kqv3_5MdbWp7GbC14o4UEPqPacYqzwSs4IxJLiR18X_nbtcl1HsAUXosX9Pc-D7ZcB2_ImeC2REbtVYHfpCS-bliR8YIebtY6nBYueMwYpO2Vn_39DJrDGk36k5Cgm4aMUuj2YksE%2C&do-waremd5=0aAgzK-EpzohAiRZTDxGzw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA1150",
        "Тип памяти": "DDR3, DDR3L",
        "Количество ядер": "2 шт.",
        "Техпроцесс": "22 нм"
      }
    },
    {
      "name": "Процессор AMD Athlon II X3 455 AM3, 3 x 3300 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/7979270/img_id1763538099974337431.jpeg/200x200",
      "price": "1 274 ₽",
      "link": "https://market.yandex.ru/product--protsessor-amd-athlon-ii-x3-455-am3-3-x-3300-mgts/6419047?nid=26912730&show-uid=16989587392254416905516217&context=search&uniqueId=895993&resale_goods=resale_resale&resale_goods_condition=resale_excellent&sku=101884459827&cpc=wybWbt27XbSU_vZtDZdKpIUxNKeqeMacHiVdMwt-hcKrQv6sZc3cYjfMZeYH0rvGipMrJUvXPPKR0z_BLGLrE6NilBb5KboN3-aNBrwwk2grpjDMRtVbMwMvtqZqcwIqCiadd7gr5T9QpOho1hG9jYSKDhiQm-4rNEexSin7MUOWXhujuyJNKOLDI0D6vL6JSUkte3Kzt00%2C&do-waremd5=Yc1yWxh5bAZrXHETgyZtLQ&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "AM3",
        "Количество ядер": "3 шт.",
        "Техпроцесс": "45 нм",
        "Частота процессора": "3300 МГц"
      }
    },
    {
      "name": "Процессор Intel Xeon E5-2637V2 Ivy Bridge-EP LGA2011, 4 x 3500 МГц, OEM",
      "img": "https://avatars.mds.yandex.net/get-mpic/1545401/img_id6515167565480135707.jpeg/200x200",
      "price": "1 584 ₽",
      "link": "https://market.yandex.ru/product--protsessor-intel-xeon-e5-2637v2-ivy-bridge-ep-lga2011-4-x-3500-mgts/10572643?nid=26912730&show-uid=16989587392254416905516218&context=search&uniqueId=48222200&resale_goods=resale_resale&resale_goods_condition=resale_well&sku=101872318941&cpc=wybWbt27XbQpb3xkQ67Vr-wr_glpt_u8WeAn54V4nhcUCA5hqkysY1BY2f4qrEgKblKc5T3SKEEho-yc83sWtdddDRWjT-V-p9Pv-fIofWPcbpQcLJegWxU4_fNs-yurc7NpC5a0SR1tBtnFpisJQmLUqGYomWTp9UbBvYtRNupTRSUjYgVi5ETgIdMYg_hKKkJ7CrRRN_LuJVYf4RG2eRkbl6JWHWAu5lZSnTqa-0w-xtVNqKsweSkAfZ_5IzWhMghZ1LL0RVs%2C&do-waremd5=K4v1fPWi8XO6v84u7FPvzw&rs=eJwlUKsKAlEUXFksarLZFtwoCDZfuGBVELSI5SbD_oIgi-AHiIa1XWwWwSK-Fm9RMIhgEi0bhMXgJwjujGU4zMyZuffkBnojcoxovl0OURsXge8SMLYHbgohGmMwThRoyV2IqgundSIzomrCr2yo4gVGrujcUs1QnYAx7pidNlC00KvS8Aiq_oWzx-T-Gk4NHrEAox7oVb0D1OYG_gr9HeKSLTX-5cOEBHeHQFmFKnU2ZtHluExzuPtl_o0vP0PVpuRdXEDOeZMn0ceWCDAbJj2mB0_-fyXkG3GqM6YlmRzwnuzy63znFS0yVfwBTVuHzQ%2C%2C",
      "features": {
        "Вид поставки": "OEM",
        "Сокет": "LGA2011",
        "Тип памяти": "DDR3",
        "Количество ядер": "4 шт.",
        "Техпроцесс": "22 нм"
      }
    },
  ]

  


  fetch('/express_backend')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Ошибка:', error));

  

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
        <LinkTag path='/selection' className='partBtn'><><span>+</span>Выбор</></LinkTag>
      </div>
  
    </div>
    </>
  );
}

export default App;
