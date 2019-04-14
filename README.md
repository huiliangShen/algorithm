# study algorithm
## 选择排序
### 最基本的算法O(n^2)
> 必须理解 编码简单，易于实现，是一些简单情景的首选。在一些特殊情况下，简单的排序算法更有效。简单的排序算法思想衍生出复杂的排序算法作为子过程，改进更复杂的排序算法。

### O(nlogn) 是最优排序算法
插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率。
但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。
## 插入排序
### 算法复杂度O(n^2)
> 相比其他排序，插入排序可能并不需要完全遍历并交换数组子级，可提前break出循环。

>1.插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率。

>2.但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位。

## 希尔排序（插入排序的另一种）
