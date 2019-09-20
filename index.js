window.onload = () => {
	const app = document.querySelector("#app");
	// const testDiv = document.createElement("div");
	// const practiceOne = document.createElement("p");
	// const practiceTwo = document.createElement("p");

	// practiceOne.innerText = `지정한 숫자만큼 아날로그 초침이 시계 방향으로 설정된 다음 
    //     시작 버튼을 누르면 1초마다 시계 반대 방향으로 움직여서 
    //     결국 12시 방향을 가르키며 종료되는 아날로그 타이머`;
	// practiceTwo.innerText = `지정한 숫자만큼 타이머가 표시되고 
    //     시작 버튼을 누르면 1초씩 줄어들고 
    //     0초에서 정지하는 디지털 타이머`;

	// testDiv.append(practiceOne, practiceTwo);
	// app.prepend(testDiv);
	init()
};
function init(){
	let time = 0
	const timer = document.querySelector(".timer")
	const start = document.createElement("button")
	const plus = document.createElement("button")
	const minus = document.createElement("button")
	start.classList.add("start")
	plus.classList.add("plus")
	minus.classList.add("minus")
	plus.innerText = "+"
	minus.innerText = "-"
	start.innerText = "시작"
	timer.innerHTML = ""
	timer.append(plus, start, minus)
	
	const dgt_clock = document.querySelector(".dgt-clock")
	dgt_clock.innerHTML = `${
		time < 10 ? `0${time}` : time
	}`
	function plusClick(event){
		if (time < 60){
			time++
			dgt_clock.innerHTML = `${
				time < 10 ? `0${time}` : time
			}`
		} else {
			// 그냥 else문 안에 아무것도 안 넣으면 버튼이 눌러지기는 하는데 동작이 없음
			// 60일때 플러스 1 하면 61이 아니라 1로 감
			time -= 60
			time++
			dgt_clock.innerHTML = `${
				time < 10 ? `0${time}` : time
			}`
		}
	}
	function minusClick(event){
		if(time > 0){
			time--
			dgt_clock.innerHTML = `${
				time < 10 ? `0${time}` : time
			}`
		} else{
			// 0일때 - 누르면 60으로 가도 되지 않을까
			time += 60
			console.log(time)
			time--
			dgt_clock.innerHTML = `${
				time < 10 ? `0${time}` : time
			}`
		}
	}
	function startClick(event){
		plus.disabled = true
		minus.disabled = true
		let repeat = setInterval(function(){
			if(time>0){
				time--
				dgt_clock.innerHTML = `${
					time < 10 ? `0${time}` : time
				}`
				console.log("interval on")
			} else{
				clearInterval(repeat)
				console.log("off")
				plus.disabled = false
				minus.disabled = false
			}
		}, 1000)
	}
	plus.addEventListener("click", plusClick)
	minus.addEventListener("click", minusClick)
	start.addEventListener("click",startClick)
}
