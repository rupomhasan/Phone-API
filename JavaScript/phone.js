const handelPhone = async (searchPhone = 13,isShowAll) => {
   const res = await fetch(
      `https://openapi.programming-hero.com/api/phones?search=${searchPhone}`
   );
   const data = await res.json();
   const phones = data.data;
   loadPhone(phones,isShowAll);
   handleShowCard(phones,isShowAll)

};

const loadPhone = (phones,isShowAll) => {
   //card container
   const cardContiner = document.getElementById("card-container");

   const showAllBtn = document.getElementById('show-All-Btn')
   // clear all data bafore addin new data in cardContainer
   cardContiner.innerText = "";

   if(phones.length > 12 && !isShowAll)
   {
      showAllBtn.classList.remove('hidden')
   }
   else{
      showAllBtn.classList.add('hidden')
   }

   massage(phones)
 

   if(!isShowAll)
   {
      phones = phones.splice(0,12)
   }




   phones.forEach((phone) => {
      const phoneCard = document.createElement("div");
      console.log(phone);
      phoneCard.classList = `class="card p-6 rounded-2xl bg-base-200 shadow-xl`;




      //   set card html
      phoneCard.innerHTML = `
    <figure class="flex justify-center px-10 py-7 rounded-t-2xl bg-[#0D6EFD0D]">
       <img
          src="${phone.image}"
          alt="Shoes"
          class="rounded-xl"
       />
    </figure>
    <div class="card-body items-center text-center">
       <h2 class="card-title">${phone.phone_name}</h2>
       <p>There are many variations of passages of available,but the majority have suffered</p>
        <p class="text-xl font-extrabold">$999</p>
       <div class="card-actions">
          <button class="btn btn-sm btn-info px-7">shop now</button>
       </div>
    </div>`;
      //append child
      cardContiner.appendChild(phoneCard)
    
      
   });
   handleLoadingSpinner(false);
};

const handleSearch = (isShowAll) => {
   handleLoadingSpinner(true);
   const getInputId = document.getElementById("search-fild");
   const inputValue = getInputId.value;
   // getInputId.value = "";
   handelPhone(inputValue,isShowAll);
};
   


const handleLoadingSpinner = async (isloading) => {
   const getSpinnerID = document.getElementById("loading-spinner");
   if (isloading) {
      getSpinnerID.classList.remove("hidden");
   } else {
      getSpinnerID.classList.add("hidden");
   }
};
const massage = (phones) => {
   const noData = document.getElementById("massage")
   if(phones.length > 0){
      // console.log(phone);
      noData.classList.add("hidden")
      
   }
   else{
      // console.log('khubaib');
      noData.classList.remove("hidden")
   }
};
const handleShowCard = () => {

}
const handleShowAll = () => {
   handleSearch(true);
}
handelPhone();
