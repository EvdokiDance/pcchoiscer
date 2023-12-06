import React, {useState, useEffect} from 'react'
import Input from '../components/Input/Input'
import './PageSelection.css'


import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';
import PartList from '../components/PartList/PartList';



export default function PageSelection() {



    const [parts, setParts] = useState([{
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
    }])


    useEffect(() => {
      filterParts();
    }, [])



    const filterParts = () => {
    let filtredParts = parts.filter(part => {
        if (!!part.img && !!part.link && !!part.price && !!part.name) {
          return part;
        } 
      })
      setParts(filtredParts);
    }


    

   
    
      
      

  return (
    <div className='pageSelection'>
      <Link className='arrowBack'  to='/'>
      <FaLongArrowAltLeft size={98} />
      </Link>
        <Input className="input"/>
        <PartList parts={parts}/>
    </div>
  )
}
