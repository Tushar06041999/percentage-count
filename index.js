let Discount=document.getElementById("Discount");
let orginal=document.getElementById("orginal");
let btn=document.getElementById("btn");
let btn2=document.getElementById("btn2")
let TotalPrice=document.getElementById("Totalprice");
let DiscountAmmount1=document.getElementById("DiscountAmmount");

btn.addEventListener("click",function(){
    

    if(TotalPrice.value===NaN || DiscountAmmount1===NaN){
        TotalPrice.value=""
        DiscountAmmount1.value="";
    }else{
        let calculation=orginal.value;
        let result=parseInt(calculation);
        let Discounttk=Discount.value;
        let Discountammounts=parseInt(Discounttk);
    
        let Ammount=(result/100)*Discountammounts;
        DiscountAmmount1.value=Ammount;
        let price=result- DiscountAmmount1.value;
        TotalPrice.value=price;
    }
})
btn2.addEventListener("click",function(){
    Discount.value="";
    orginal.value="";
    TotalPrice.value="";
    DiscountAmmount1.value="";
})