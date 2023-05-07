function formValidate(){
    let input = document.querySelectorAll('input');
    let submitBtn = document.getElementById('submitBtn');
    console.log(submitBtn);

    submitBtn.addEventListener('click',(e)=>{
        e.preventDefault();
        for(let i = 0;i < input.length;i++){
            if(input[i].value === " "){
                alert("field should not be blank");
            }
        }
    });


}

formValidate();