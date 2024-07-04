/*
 * @Author: allanma allanma@xiaoe-tech.com
 * @Date: 2024-07-04 11:27:28
 * @LastEditors: allanma allanma@xiaoe-tech.com
 * @LastEditTime: 2024-07-04 11:30:30
 * @FilePath: /allan-js-tools/src/utils.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function getRandomNumber(
  min: number = 0,
  max: number = 100,
  roundingType: "round" | "ceil" | "floor" = "round"
) {
  return Math[roundingType](Math.random() * (max - min) + min);
}

export function getRandomBoolean() {
  const index = getRandomNumber(0, 1);
  return [true, false][index];
}
