let menu = {
  drinks: [
    'Water',
    'Tea',
    'Sweet Tea',
    'Coke',
    'Dr. Pepper',
    'Sprite',
  ],
  entrees: [
    'Hamburger w/ Fries',
    'Grilled Cheese w/ Tater Tots',
    'Grilled Chicken w/ Veggies',
    'Chicken Fried Steak w/ Mashed Potatoes',
    'Fried Shrimp w/ Coleslaw',
    'Veggie Plate',
  ],
  desserts: [
    'Cheesecake',
    'Chocolate Cake',
    'Snickerdoodle Cookie',
  ],
};

const categorySelectorEl = document.getElementById('categorySelector');
categorySelectorEl.onchange = onCategorySelectorElChanged; 

function onCategorySelectorElChanged() {
    const categorySelectorEl = document.getElementById('categorySelector');
    const selectedValue = categorySelectorEl.value 
    const selectedMember = menu[selectedValue];
    const memberDisplayEl = document.getElementById('memberDisplay')

    for (let i = 0; i < selectedMember.lengeth; i++) {
        let optionEl = document.createElement('option');
        optionEl.textContent = selectedMember[i];
        memberDisplayEl.appendChild(optionEl);
        // {
        //     if (selectedValue != selectedMember[i]) {
        //         memberDisplayEl.remove(optionEl);
        // }
        // }
    }

    

}

