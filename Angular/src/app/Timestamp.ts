export default class Timestamp {

  static format = format;

  static convertToObject = convertToObject;

}

function format(timestamp:any, format: string = 'y-m-d h:i:s'){
  let object = convertToObject(timestamp.seconds);

  return format
    .replace("Y", object.year+"")
    .replace("y", object.year2+"")
    .replace("M", object.month+"")
    .replace("m", object.month2+"")
    .replace("D", object.day+"")
    .replace("d", object.day2+"")
    .replace("H", object.hour+"")
    .replace("h", object.hour2+"")
    .replace("I", object.minute+"")
    .replace("i", object.minute2+"")
    .replace("S", object.seconds+"")
    .replace("s", object.seconds2+"");
}

function convertToObject(timestamp: any){
  let date = new Date(timestamp * 1000);

  return {
    year: date.getFullYear(),
    year2: date.getFullYear().toString().substring(2, 4),
    month: date.getMonth()+1,
    month2: (date.getMonth()+1 < 10 ? '0' : '' ) + (date.getMonth()+1+""),
    day: date.getDay(),
    day2: (date.getDay() < 10 ? '0' : '' ) + (date.getDay()+""),
    hour: date.getHours(),
    hour2: (date.getHours() < 10 ? '0' : '' ) + (date.getHours()+""),
    minute: date.getMinutes(),
    minute2: (date.getMinutes() < 10 ? '0' : '' ) + (date.getMinutes()+""),
    seconds: date.getSeconds(),
    seconds2: (date.getSeconds() < 10 ? '0' : '' ) + (date.getSeconds()+""),
  }
}
