function hoge (){

  let date =new Date();
  let formatday = `${date.getFullYear()}年${(date.getMonth() + 1)}月${date.getDate()}日`;
  return formatday;
}

console.log( hoge() ); 
