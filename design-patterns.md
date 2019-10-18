<!--
 * @Author: wginit
 * @Date: 2019-10-18 11:41:27
 * @LastEditTime: 2019-10-18 17:23:26
 * @LastEditors: Please set LastEditors
 -->
# Javascript 设计模式

## 1. 创建型设计模式

 包括简单工厂模式、工厂方法模式、抽象工厂模式、建造者模式、原型模式和单例模式。

 #### 简单工厂模式 Simple Factory
 它的核心就是创建对象，对不同的类进行实例化。

  > 局限性
  使用场合单一，通常用于创建逻辑不复杂的单一对象，或是创建对象数量比较少的情况。

  > 举个栗子
  ```javascript
  // 动物工厂
function createAnimals (name,sound,color) {
  var o = new Object();
  o.name = name;
  o.sound = sound;
  o.color = color;
  o.say = function () {
    console.log(this.sound);
  };
  return o;
}

var animals1 = createAnimals("cat","喵喵喵","yellow");
var animals2 = createAnimals("dog","汪汪汪","white");

animals1.say();  // 喵喵喵
animals2.say();  // 汪汪汪
```

#### 工厂方法模式 Factory Method

工厂方法将对象类和使用者之间的关系进行解耦，使用者无需关心创建对象的具体类，直接调用工厂方法就行。

> 举个栗子
```javascript
// 在原型中设置创建对象的基类
Factory.prototype = {
    Html : function (content) {
        //...
    },
    Css : function (content) {
        //...
    },
    JavaScript : function (content) {
        //...
    }
}
// 假如数据是这样的
var data = [
    {type:'Html', content:'我会Html'},
    {type:'Css', content:'我会Css'},
    {type:'JavaScript', content:'我会JavaScript'}
]
// 使用
for (var i = 2; i >= 0; i--) {
    Factory(s[i].type, s[i].content);
}
// 当需求变化，想要添加其他类时，只需在Factory的原型中添加就行了。
```

#### 抽象工厂模式 Abstract Factory
JavaScript中abstract是一个保留字，不能像传统面向对象语言那样轻松的创建抽象类。
而抽象类是一种声明但不能使用的类，当你使用时就会报错，但是因为JavaScript的灵活性，我们可以在类的方法中手动的抛出错误来模拟抽象类。
我们也不能用它来创建一个真实的对象，而是用它作为父类来创建一些子类，从而实现子类继承父类的方法。
> 举个栗子
```javascript
var CarFactory = function (subType, superType) {
  // 判断抽象工厂中是否有该抽象类
  if (typeof CarFactory[superType] === 'function') {
    // 缓存类
    function F () {}
    // 继承父类属性和方法
    F.prototype = new CarFactory[superType]();
    // 将子类constructor指向子类
    subType.constructor = subType;
    // 子类原型继承“父类”
    subType.prototype = new F();
  } else {
    // 不存在该抽象类抛出错误
    throw new Error('未创建该抽象类');
  }
}
// 汽车抽象类
CarFactory.Car = function () {
  this.type = 'car';
}
CarFactory.Car.prototype = {
  getPrice : function () {
    return new Error('抽象方法不能调用');
  },
  getSpeed : function () {
    return new Error('抽象方法不能调用');
  }
}
// 布加迪威龙汽车子类
var BuggatiVeyron = function (price, speed) {
  this.price = price;
  this.speed = speed;
}
// 抽象工厂实现对Car抽象类的继承
CarFactory(BuggatiVeyron, 'Car');
BuggatiVeyron.prototype.getPrice = function () {
  return this.price;
}
BuggatiVeyron.prototype.getSpeed = function () {
  return this.speed;
}

var testCar = new BuggatiVeyron(999999999, 1000);
console.log(testCar.getPrice());   // 999999999
console.log(testCar.type);         // car
```
通过抽象，我们可以知道子类属于哪一种类别，同时他们也拥有了该类的属性和方法。

这就是抽象工厂模式，它创建出的结果不是真实的对象实例，而是一个类簇，里面制定了类的结构。

>局限性
由于JavaScript中不支持抽象化创建与虚拟方法，所以导致这种模式不能像其他面向对象语言中应用的那么广泛。

##### 小结
工厂模式的核心作用：

1.主要用于隐藏实例的复杂度，只需对外提供一个接口

2.实现构造函数和创建者的分离，满足开放封闭的原则

#### 建造者模式 Builder
工厂模式主要的在乎的是最终的输出，但建造者模式的关注点则是过程。

建造者模式也就是将一个复杂对象的构建层与它的表示层相互分离解耦

> 局限性
这种模式对于整体对象类的拆分也产生了一定的副作用，增加了结构的复杂性，在实际应用中要结合模块间的复用率来进行合理的应用。


#### 原型模式 Prototype
毋庸置疑，原型模式是JavaScript的灵魂。
在实际应用中，对于每次创建的一些简单而又差异化的属性我们可以放在构造函数中，将一些消耗资源比较大的方法放在原型中。
你也可以在任何时候对原型上的方法进行扩展，无论是基类还是子类，且所有被实例化的对象都能获取这些方法，可以给我们不设限的自由。
> 举个栗子
```javascript
var Person = function (name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype = {
    basketball : function () {
        console.log('我会打篮球');
    },
    rap : function () {
        console.log('我会rap');
    }
}

var Man = function (name, age) {
    Person.call(this, name, age);
}
Man.prototype = new Person();
// 个性化修改
Man.prototype.rap = function () {
    console.log('yoyoyo');
}
// 拓展
Man.prototype.sing = function () {
    console.log('ooooo');
}

var man = new Man('kunkun', 18);
man.rap();               // yoyoyo
man.sing();              // ooooo
console.log(man.name)    // kunkun

```

#### 单例模式 Singleton
单例模式是只允许实例化一次的对象类，保证了一个类仅有一个实例，并提供了全局访问。

> 举个栗子
```javascript
Var T = {
    Ajax : {
      get : function () {},
      post : function () {}
    },
    Utils : {
      utils_method1 : function () {},
      utils_method2 : function () {}
    }
    Others : {
        // ...
    }
    // ...
}

T.Ajax.get();
T.Utils.utils_method1();

```
除此之外，单例模式还可以管理静态变量。

JavaScript中没有静态变量，但是我们可以通过将变量放到一个函数内部，规定它只能通过特权方法来访问，不提供赋值变量的方法，只提供获取变量的方法，就可以做到限制变量的修改并且可以供外界访问。

单例模式的应用场景是比较广泛的，比如jQuery库、登陆的弹窗、Vuex和Redux中的store、websocket连接、数据库连接池等等。


## 2.结构型设计模式
包括外观模式、适配器模式、代理模式、装饰者模式、桥接模式、组合模式以及享元模式。
#### 外观模式 Facade
可以对复杂的子系统接口提供一个更高级的统一接口，对底层结构兼容性做统一封装来简化用户使用。

比如： 那些年我们对ie浏览器做过的兼容。。

#### 适配器模式 Adapter
将一个类(对象)的接口(方法或者属性)转化成另外一个接口，以满足用户需求，使类(对象)之间接口的不兼容问题通过适配器得以解决。

  适配器在我们的日常生活中很常见，比如出国旅行时，有的国家只有三项的插座，这时候我们需要三项转两项插头电源适配器。再比如iPhone7以后耳机接口变成了lightning接口，为了适配圆孔耳机苹果为我们提供了适配器。

> 举个栗子
```javascript
// 为两个代码库所写的代码兼容运行而书写的额外代码是适配器的一种。
window.A = A = jQuery;

```

#### 代理模式 Proxy
由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介的作用

 现实生活中比如我们租房子时回去自如，自如是房屋中介机构，也就是我们的代理。
 在javaScript中使用最多的就是虚拟代理和缓存代理。

 > 虚拟代理
 > 缓存代理
 > ES6中的Proxy
 > Vue3.0中的Proxy

#### 装饰者模式 Decorator
在不改变原对象的基础上，通过对其进行包装拓展(添加属性或者方法)使原有对象可以满足用户的更复杂需求。

 > TypeScript的装饰器@

#### 桥接模式 Bridge

在系统沿着多个维度变化的同时，又不增加其复杂度并已达到解耦。

#### 组合模式 Composite
又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构，组合模式使得用户对单个对象和组合对象的使用具有一致性。


#### 享元模式 Flyweight

概念：运用共享技术有效地支持大量的细粒度的对象，避免对象间拥有相同内容造成多余的开销。

核心思想：共享细粒度对象

最终目标：尽量减少共享对象的数量

## 3. 行为型设计模式
包括模板方法模式、观察者模式、状态模式、策略模式、职责链模式、命令模式、访问者模式、中介者模式、备忘录模式、迭代器模式、解释器模式

#### 模板方法模式 Template Method
概念：父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时可重新定义算法中某些实现步骤。
核心在于对方法的重用，将核心方法封装在基类中，让子类继承基类的方法，实现基类方法的共享，达到方法公用。
```javascript
class canteen {
  eat () {
    eat1();
    eat2();
    eat3();
  }
  eat1 () {
    console.log('海底捞');
  }
  eat2 () {
    console.log('日本料理');
  }
  eat3 () {
    console.log('烧烤');
  }
}

```

#### 观察者模式 Observer
概念：又被称作发布-订阅模式或消息机制，定义了一种依赖关系，解决了主体对象与观察者之间功能的耦合。

进一步说，观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。

应用实例：

1.拍卖的时候，拍卖师是观察者观察最高竞价，然后通知给其他竞价者竞价。

2.在Nodejs中通过EventEmitter实现了原生的对于这一模式的支持。

3.jquery中的trigger/on。

4.MVVM。

5.微信公众号推送文章。

#### 状态模式 State
概念：当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。

状态模式的目的是简化分支判断流程。

应用实例：

1.LOL中英雄技能造成的各种状态如沉默、减速、禁锢、击飞等。

2.文件上传有扫描、正在上传、暂停、上传成功、上传失败等状态。

#### 策略模式 Strategy

概念：将定义的一组算法封装起来，使其相互之间可以替换。封装的算法具有一定独立性，不会随客户端变化而变化。

应用实例：

1.诸葛亮的锦囊妙计，每一个锦囊就是一个策略。

2.旅行的出游方式，选择骑自行车、坐汽车，每一种旅行方式都是一个策略。

#### 职责链模式 Chain of Responsibility
概念：解决请求的发送者与请求的接受者之间的耦合，通过指责链上的多个对象对分解请求流程，实现请求在多个对象之间的传递，直到最后一个对象完成请求的处理。

应用实例：

1.JavaScript中的事件冒泡。

2.长安十二时辰中的望楼传信。

#### 命令模式 Command

概念：将请求与实现解耦并封装成独立对象，从而使不同的请求对客户端的实现参数化。

也就是执行命令时，将发布者和执行者分开,在中间加入命令对象，作为中转站。

应用实例：

命令模式的实例在生活中很常见，这里我们只举一个例子，留给大家想象的空间。

我们去饭店点菜(发布者)，无须知道厨师的名字(执行者)，只需告诉服务员即可(中转站)。

#### 访问者模式 Visitor
概念：针对于对象结构中的元素，定义在不改变该对象的前提下访问结构中元素的新方法。

访问者模式就是将数据操作和数据结构进行分离。

应用实例：

您在朋友家做客，您是访问者，朋友接受您的访问，您通过朋友的描述，然后对朋友的描述做出一个判断，这就是访问者模式。

使用访问者模式，我们可以使对象拥有像数组一样的push、pop和splice方法。

#### 中介者模式 Mediator

概念：通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合。

应用实例：

1.中国加入 WTO 之前是各个国家相互贸易，结构复杂，现在是各个国家通过 WTO 来互相贸易。

2.机场调度系统。

3.MVC 框架，其中C（控制器）就是 M（模型）和 V（视图）的中介者。

#### 备忘录模式 Memento

概念：在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后对象使用或者对象恢复到以前的某个状态。

应用实例：

分页组件的时候，点击下一页获取新的数据，但是当点击上一页时，又重新获取数据，造成无谓的流量浪费，这时可以对数据进行缓存。
局限性：备忘录模式对资源的消耗过大。

#### 迭代器模式 Iterator
概念：在不暴露对象内部结构的同时，可以顺序地访问聚合对象内部的元素。

这种模式用于顺序访问集合对象的元素，不需要知道集合对象的底层表示。

应用实例：

绝大部分语言内置了迭代器。

1.JavaScript的Array.prototype.forEach

2.jQuery中$.each

#### 解释器模式 Interpreter
概念：对于一种语言，给出其文法表示形式，并定义一种解释器，通过使用这些解释器来解释语言中定义的句子。

这种模式实现了一个表达式接口，该接口解释一个特定的上下文。

应用实例：

1.编译器

2.正则表达式

