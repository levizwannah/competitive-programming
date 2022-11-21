<?php
class Solution {

    /**
     * @param Integer[] $people
     * @param Integer $limit
     * @return Integer
     */
    function numRescueBoats($people, $limit) {
        sort($people);
        $start = 0;
        $end = count($people) - 1;
        $counter = 0;
        
        while($end >= $start){
            if($people[$end] + $people[$start] <= $limit) $start++;
            $end--;
            $counter++;
        }
        
        return $counter;
    }
}

?>
