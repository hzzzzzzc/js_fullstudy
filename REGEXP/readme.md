- new RegExp("hello")
  /world/
  正则表达式的方式


  test() 检测

  exec() 检索字符串中指定的值，返回被找到的值(找不到时返回null)

  search() 字符串查找

  \d+  数字

  match()  字符串匹配

  replace()  字符串替换

  [0-9] 查找任何 0 至 9 之间的数字
  [a-z] 查找任何 a 至 z 之间的小写字母
  [A-Z] 查找任何 A 至 Z 之间的大写字母
  [adgk] 查找给定集合(adgk)内的任何字符
  [^adgk] 查找给定集合(adgk)外的任何字符
  red|blue|green 查找任何指定的选项
  . 查找单个字符，除了换行和行结束符
  \w 查找打个字符(字母，数字，下划线)
  \W 查找非单词字符
  \d 查找数字
  \D 查找非数字字符
  \s 查找空白字符
  \S 查找非空白字符
  \b 匹配单词边界                
  \B 匹配非单词边界                  let pat = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/
  \n 查找换行符
  n+ 匹配包含至少一个n的字符串
  n* 匹配任何包含0个或多个n的字符串
  n? 匹配任何包含0个或1个n的字符串
  n{x} 匹配包含x个n的序列的字符串
  n{x,y} 匹配包含x个或y个

