import axios from "axios";
import { useEffect, useState } from "react";
import { Item } from "../Component/Item";


function Page2() {
  const [datas, setDatas] = useState<Item[]>([]);

  const key = ''
  const url = 'https://apis.data.go.kr/5050000/hwangridangilFoodHotPlaceService/getHwangridangilFoodHotPlace?serviceKey=' + key + '&pageNo=1&numOfRows=25'

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url);
        const items = response.data?.response?.body?.items?.item || [];
        console.log(response.data.response.body.items.item);
        setDatas(items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [url]);

  return (
    <div className="Page2">
      <h1>맛집 List</h1>
      <ul>
        {datas.map((data, index) => (
          <li key={index}>
            <div>{data.BSSH_NM} - {data.AREA_NM}</div>
            <div>{data.ADRES} ( {data.MBTLNUM} )</div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page2;