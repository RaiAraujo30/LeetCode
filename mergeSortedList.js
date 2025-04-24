function ListNode(val, next = null) {
    this.val  = val;
    this.next = next;
  }
  
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let copia = new ListNode(0);
    let atual = copia

    while(list1 !== null && list2 !== null){
        if(list1.val > list2.val){
            atual.next = list2
            list2 = list2.next
        } else {
            atual.next = list1
            list1 = list1.next 
        }
        atual = atual.next
    }

    atual.next = list1 !== null ? list1: list2
     return copia.next

};

console.log(mergeTwoLists([1,2,4], [2,3,4]))