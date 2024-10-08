
const acc=document.getElementsByClassName('content');

for(let i=0;i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        for(let j=0;j<acc.length;j++){
            if(acc[j]!==this){
                acc[j].classList.remove('active')
            }
        }
        this.classList.toggle('active');
    })
}
