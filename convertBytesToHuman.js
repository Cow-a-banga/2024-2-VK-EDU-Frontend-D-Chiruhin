/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа)
 */

function formatNumber(num) {
  return num % 1 === 0 ? num.toString() : num.toFixed(2).replace(/\.?0+$/, '');
}

export default function convertBytesToHuman(bytes) {
  if(
    typeof bytes != "number" ||
    bytes == Number.POSITIVE_INFINITY ||
    bytes == Number.NEGATIVE_INFINITY ||
    isNaN(bytes) ||
    bytes < 0
    )
    return false;

  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  let i = 0;

  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }

  return `${formatNumber(bytes)} ${units[i]}`;
  
}
