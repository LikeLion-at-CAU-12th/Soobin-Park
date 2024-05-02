const baseURL = "https://apis.data.go.kr/B551011/PhotoGalleryService1";

const option = {
    serviceKey:
      "kGCRQqWYpx3aJwULo87pejlZK8xfahgJrh5QX0hHjg6mxBu7gYlnDt1nsXqLHjteiyq7xTtRnRVs7IzTX6AhFQ%3D%3D",
    numofRows: 5,
    MobileApp: "test",
    MobileOS: "ETC",
    arrange: "A",
    _type: "json",
    pageNo: 1,
  };

async function getMore(){
    console.log("getMore테스트입니다");
    const test = document.createElement("test");
    test.innerText = "getMore테스트입니다";
    document.body.appendChild(test);



    const url = `${baseURL}/galleryList1?numOfRows=${option.numofRows}&MobileApp=${option.MobileApp}&MobileOS=${option.MobileOS}&arrange=${option.arrange}&_type=${option._type}&pageNo=${"1"}&serviceKey=${option.serviceKey}`;
    const fetchData = await fetch(url);
    console.log(fetchData);
}
