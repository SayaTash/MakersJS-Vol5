// localStorage.getItem('');
// localStorage.setItem('','');
// localStorage.clear();
//functio() - ()=> - Стрелочная функция перешагивает this

const btn = document.getElementsByTagName('button')[0];
const fields = document.getElementsByTagName('input');

const getDataFromFields = () => {
  const values = [];
  for (let i = 0; i < fields.length; i++) {
    values.push(fields[i].value);
  }
  return values
}

let renderData = () => {
    let userData = localStorage.getItem('user-data');
    if(!userData) return;
    userData = JSON.parse(userData);

    userData.innerHTML = "";

    userData.forEach(item=>{
        const elem = document.createElement('li');
        const firstName = document.createElement('div');
        const lastName = document.createElement('div');
        const email = document.createElement('div');
        
        firstName.innerText  = item.firstName
        lastName.innerText  = item.lastName
        email.innerText  = item.email

        elem.append(firstName)
        elem.append(lastName)
        elem.append(email)

        const userList = document.querySelector('.user-list');
        userList.append(elem);
    })
}

const arrValidation = (arr) => {
  return arr.reduce((total, item) => {
    if (item.length === 0) return total = false;
    else return total;
  }, true);
}

const clearFormValues = () => {
    for (let i = 0; i<fields.length; i++){
        fields.value = "";
    }
}

const setItemToStore = (userData) => {
    if(!localStorage.getItem('user-data')){
        localStorage.setItem('user-data', JSON.stringify([]));
    }
    const storageUserData = JSON.parse(localStorage.getItem('user-data'));
    storageUserData.push(userData);
    localStorage.setItem('user-data', JSON.stringify(storageUserData))
}

const dataHandler = () => {
  const values = getDataFromFields();
  if (!arrValidation(values)) {
    alert('Заполните все поля!')
    return
  }
  let userData = {
      firstName: values[0],
      lastName: values[1],
      email: values[2],
      password: values[3],
  }
  setItemToStore(userData)
  renderData()
}
renderData();
btn.addEventListener('click', dataHandler);











