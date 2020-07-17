/**
 * 功能：计算年收益
 * @author ysw
 * @date  2020-7-16
 * @params {salary 工资 number}
 * {level 评级 string}
 * @return 年收益 number
 */
function calculateBonus(salary, level = 'C') {
    // console.log(arguments);
    console.log(typeof (salary - 0));
    if (arguments.length < 2) {
      throw new Error('传参不正确，请检查传递工资及等级');
    }
    if (typeof +salary != 'number' || salary < 0) {
      throw new TypeError('工资必须是整数');
    }
    if (['A', 'B', 'C', 'D'].indexOf(level) == -1) {
        throw new Error
    }
    
    salary = parseInt(salary);
  
    if (level == 'D') {
      return salary * 12;
    } else if (level == 'B') {
      return salary * 18
    } else if (level == 'A') {
      return salary * 20
    } else if (level == 'S') {
        return salary * 100
      }
  
    return salary *  16
  }
  
  console.log(calculateBonus(20000, 'S'));
  