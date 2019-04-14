/**
 * Created by shl on 2019/4/14.
 */
import {insertSort, insertSortOpt} from './sort/insert-sort';
import {selectSort} from './sort/select-sort';
import {testSort, generateRandomArray, copy} from './lib/tool'

let arrs = generateRandomArray(50000, 1, 50000);
let arrs2 = copy(arrs);
let arrs3 = copy(arrs);
testSort('selectSort', selectSort, arrs);
testSort('insertSort', insertSort, arrs2);
testSort('insertSortOpt', insertSortOpt, arrs3);