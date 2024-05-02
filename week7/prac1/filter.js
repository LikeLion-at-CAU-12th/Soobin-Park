// const url = "./data/data.json";
// const container = document.getElementById('container');

//container에 자식 요소가 있으면, 해당 (첫번째) 자식 요소를 지움(버튼 여러 번 눌러도 한 번만 뜨게)
const filterData = () => {
    while(container.firstChild){ 
        container.removeChild(container.firstChild);
    }

    fetch(url)
    .then((response)=> {
        return response.json()
    })
    .then((response)=> {
        console.log(response.frontend)
        const datas = response.frontend

        datas
        .filter((data)=>data.role == "아기사자") //여기서는 중괄호 안함. 하면 앞에 return까지 붙여줘야함
        .map((data)=>{
            const list = document.createElement('div');
            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}입니다.`

            container.appendChild(list);
            console.log(data);
        })
    })
}
