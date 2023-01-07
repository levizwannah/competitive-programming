<?php 
class Solution {

    /**
     * @param Integer[] $nums
     * @return NULL
     */
    function sortColors(&$nums) {
        $red = 0;
        $white = 1;
        $blue = 2;
        $counts = [ 0, 0, 0];

        foreach($nums as $color){
            $counts[$color]++;
        }
        

        $current = $red;

        for($i = 0; $i < count($nums); $i++){
            if($counts[$current] <= 0){
                foreach($counts as $c => $n){
                     $current = $c;
                    if($n > 0) break;
                }
            } 

            if($counts[$current] > 0) {
                $nums[$i] = $current;
                $counts[$current]--;
            }
        }
    }
}
?>