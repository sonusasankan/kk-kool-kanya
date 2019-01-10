const screenHeight = window.innerHeight - window.innerHeight/5;


//need querySelector of section in which we want to add interactions on enter
const onAppear = (qs) =>{
    if(qs.classList.contains('out-of-section')){
        if(screenHeight > qs.getBoundingClientRect().y){
            qs.classList.remove('out-of-section');
        }
    }
}

export default onAppear;
